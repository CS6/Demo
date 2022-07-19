// https://codesandbox.io/s/simple-audio-analyser-wu51m?file=/src/App.js

// 背景音軌

// 筆電音軌

// 內文音軌


import * as THREE from 'three'
import { Suspense, useEffect, useRef } from 'react'
import { Canvas, useFrame } from '@react-three/fiber'
import { suspend } from 'suspend-react'

export  function MApp(props) {
  return (
    <div className="model-container">
    <Canvas shadows dpr={[1, 2]} camera={{ position: [-1, 1.5, 2], fov: 25 }}>
      <spotLight position={[-4, 4, -4]} angle={0.06} penumbra={1} castShadow shadow-mapSize={[2048, 2048]} />
      <Suspense fallback={null}>
        <Track position-z={-0.25} url="/synth.mp3" />
        <Track position-z={0} url="/snare.mp3" />
        <Track position-z={0.25} url="/drums.mp3" />
        <Zoom url="/drums.mp3" />
      </Suspense>
      <mesh receiveShadow rotation={[-Math.PI / 2, 0, 0]} position={[0, -0.025, 0]}>
        <planeGeometry />
        <shadowMaterial transparent opacity={0.15} />
      </mesh>
    </Canvas>
    </div>
  )
}

// export  function MApp(props) {
//   return (

//       <Suspense fallback={null}>
//         <Track position-z={-0.25} url="/synth.mp3" />
//         <Track position-z={0} url="/snare.mp3" />
//         <Track position-z={0.25} url="/drums.mp3" />
//         <Zoom url="/drums.mp3" />
//       </Suspense>
//   )
// }
export function Track({ url, y = 2500, space = 1.8, ...props }) {
  // suspend-react is the library that r3f uses internally for useLoader. It caches promises and
  // integrates them with React suspense. You can use it as-is with or without r3f.
  const { gain, context, update, data } = suspend(() => createAudio(url), [url])
  useEffect(() => {
    // Connect the gain node, which plays the audio
    gain.connect(context.destination)
    // Disconnect it on unmount
    return () => gain.disconnect()
  }, [gain, context])

}

export function Zoom({ url }) {
  // This will *not* re-create a new audio source, suspense is always cached,
  // so this will just access (or create and then cache) the source according to the url
  const { data } = suspend(() => createAudio(url), [url])
  // return useFrame((state) => {
  //   // Set the cameras field of view according to the frequency average
  //   // state.camera.fov = 35 - data.avg / 30
  //   console.log(data.avg )
  //   state.camera.updateProjectionMatrix()
  // })
}

async function createAudio(url) {
  // Fetch audio data and create a buffer source
  const res = await fetch(url)
  const buffer = await res.arrayBuffer()
  const context = new (window.AudioContext || window.webkitAudioContext)()
  const source = context.createBufferSource()
  source.buffer = await new Promise((res) => context.decodeAudioData(buffer, res))
  source.loop = true
  // This is why it doesn't run in Safari 🍏🐛. Start has to be called in an onClick event
  // which makes it too awkward for a little demo since you need to load the async data first
  source.start(0)
  // Create gain node and an analyser
  const gain = context.createGain()
  const analyser = context.createAnalyser()
  analyser.fftSize = 64
  source.connect(analyser)
  analyser.connect(gain)
  // The data array receive the audio frequencies
  const data = new Uint8Array(analyser.frequencyBinCount)
  return {
    context,
    source,
    gain,
    data,
    // This function gets called every frame per audio source
    update: () => {
      analyser.getByteFrequencyData(data)
      // Calculate a frequency average
      return (data.avg = data.reduce((prev, cur) => prev + cur / data.length, 0))
    },
  }
}
