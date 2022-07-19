import { useRef, useState, useEffect, Suspense } from 'react'
import { Canvas, useFrame } from '@react-three/fiber'
import { Html, Mask, useMask, OrthographicCamera, Clone, Float as FloatImpl } from '@react-three/drei'
import { OrbitControls, Environment, useGLTF, ContactShadows, PerspectiveCamera } from '@react-three/drei'
import MBPRModel from './MBPRModel'
import NBModel from './Model'
import { useSpring } from '@react-spring/core'
import { a as three } from '@react-spring/three'
import useSpline from '@splinetool/r3f-spline'
import * as THREE from 'three'
// import { Track, MApp, Zoom } from './Music/TrackMusic'


import HeroPage from './inPage/HeroPage'

// import { Selection, Select, EffectComposer, Outline } from '@react-three/postprocessing'

const vec = new THREE.Vector3()

function SBox(props) {
  return (
    <mesh {...props}>
      <boxGeometry />
      <meshStandardMaterial color="orange" />
    </mesh>
  )
}

function Box(props) {
  const ref = useRef()
  const [hovered, hover] = useState(null)
  console.log(hovered)
  useFrame((state, delta) => (ref.current.rotation.x = ref.current.rotation.y += delta))
  return (
    <mesh ref={ref} {...props} onPointerOver={() => hover(true)} onPointerOut={() => hover(false)}>
      <boxGeometry />
      <meshStandardMaterial color="orange" />
    </mesh>
  )
}

export default function Scene() {
  const container = useRef()
  const domContent = useRef()
  const [open, setOpen] = useState(false)
  const [size, set] = useState(0.5)
  const [hidden, setVisible] = useState(false)
  // We turn this into a spring animation that interpolates between 0 and 1
  const props = useSpring({ open: Number(open) })
  return (<div ref={container} className="model-container">
    <Canvas dpr={[1, 2]} camera={{ position: [-10, 0, -25], fov: 35 }}>
      <pointLight position={[10, 10, 10]} intensity={1.5} />
      <Suspense fallback={null}>
        {/* <group rotation={[0, Math.PI, 0]}>
          <NBModel />
        </group> */}
        <group rotation={[0, -Math.PI, 0]} position={[0, 0, 0]} onClick={(e) => (e.stopPropagation(), setOpen(!open))}>
          <MBPRModel castShadow open={open} hinge={props.open.to([0, 1], [1.575, -0.425])} />
        </group>
        <Environment preset="city" />
      </Suspense>
      <ContactShadows rotation-x={Math.PI / 2} position={[0, -4.5, 0]} opacity={1} width={20} height={20} blur={1} far={4.5} />
      {/* <OrbitControls enablePan={false} enableZoom={false} minPolarAngle={Math.PI / 2} maxPolarAngle={Math.PI / 2} /> */}
      <OrbitControls />

    </Canvas>
  </div>)
  return (
    <div ref={container} className="model-container" >
      {/* Container for the HTML view */}
      {/* <div style={{ position: 'absolute', top: 0, left: 0, width: '100%', height: '100%', overflow: 'hidden' }} ref={domContent} /> */}
      {/* Container for THREEJS */}
      {/* <Canvas dpr={[1, 2]} shadows flat linear> */}
      {/* <Canvas  shadows flat linear dpr={[1, 2]}> */}
      {/* <Canvas dpr={[1, 2]} camera={{ position: [0, 0, 100], fov: 35 }}> */}
      <Canvas dpr={[1, 2]} shadows camera={{ position: [0, 0, 50], fov: 35 }}>

        <Html className="content-NB" rotation={[-Math.PI, 0, 0]} position={[0, -2, 50]} scale={10} transform occlude>
          <div className="wrapper-NB">
            <h1>34567890-</h1>
            <h1>34567890-</h1>
            <h1>34567890-</h1>
            <h1>34567890-</h1>
            <HeroPage />
          </div>
        </Html>
        {/* <Suspense fallback={null}>
          <Track position-z={-0.25} url="/synth.mp3" />
          <Track position-z={0} url="/snare.mp3" />
          <Track position-z={0.25} url="/drums.mp3" />
        </Suspense> */}
        <three.pointLight position={[10, 10, 10]} intensity={1.5} color={props.open.to([0, 1], ['#f0f0f0', '#d25578'])} />
        <ContactShadows rotation-x={Math.PI / 2} position={[0, -4.5, 0]} opacity={1} width={20} height={20} blur={0} far={0} />



        <Suspense fallback={null}>
          {/* <color attach="background" args={['#f0f0f0']} /> */}
          <Box position={[0, 0, 10]} />


          <spotLight
            penumbra={1}
            angle={1}
            castShadow
            position={[10, 60, -5]}
            intensity={8}
            shadow-mapSize={[512, 512]}
          />

          {/* {open &&
            <Suspense fallback={null}>
              <Track position-z={-0.25} url="/synth.mp3" />
              <Track position-z={0} url="/snare.mp3" />
              <Track position-z={0.25} url="/drums.mp3" />
              <Zoom url="/drums.mp3" />
            </Suspense>} */}

          {/* <group rotation={[0, Math.PI, 0]} position={[0, -5, 50]} onClick={(e) => (e.stopPropagation(), setOpen(!open))}>
            <group castShadow position={[0, 5, 50]}>
              <MBPRModel castShadow open={open} hinge={props.open.to([0, 1], [1.575, -0.425])} />
            </group>
            <mesh receiveShadow scale={[200, 200, 200]}
              rotation={[-Math.PI / 2, 0, 0]} position={[0, -0.025, 0]}>
              <planeGeometry />
              <shadowMaterial transparent opacity={0.15} />
            </mesh>
          </group> */}

          <group rotation={[0, -Math.PI, 0]} position={[0, -5, 0]} onClick={(e) => (e.stopPropagation(), setOpen(!open))}>
            {/* <MBPRModel castShadow open={open} hinge={props.open.to([0, 1], [1.575, -0.425])} /> */}

            <NBModel />
          </group>

          <hemisphereLight intensity={0.2} />
          <ambientLight intensity={0.5} />
          {/* 
          <group rotation={[0, Math.PI, 0]} onClick={(e) => (e.stopPropagation(), setOpen(!open))}>
            <MBPRModel castShadow open={open} hinge={props.open.to([0, 1], [1.575, -0.425])} />
          </group> */}
          {/* <Environment preset="city" /> */}
          <Environment preset="warehouse" />


        </Suspense>


        {/* <OrbitControls /> */}
        <OrbitControls />

        {/* <OrbitControls enablePan={false} enableZoom={false} minPolarAngle={Math.PI / 2} maxPolarAngle={Math.PI / 2} /> */}

        {/* <ambientLight intensity={0.5} /> */}
        {/* <spotLight position={[10, 10, 10]} angle={0.15} penumbra={1} />
        <pointLight position={[-10, -10, -10]} />
        <Box position={[-1, 0, 0]} />
        <Box position={[1, 0, 0]} /> */}
      </Canvas>
    </div>
  )
}

// function Model({ portal, ...props }) {
//   let timeout = null
//   // const v = new THREE.Vector3()
//   const wheel = useRef(0)
//   const hand = useRef()
//   const [clicked, click] = useState(false)
//   const { nodes } = useSpline('/scroll.splinecode')
//   // Take the stencil and drop it over everything but the right hand

//   return (
//     <group {...props} dispose={null}>

//     </group>
//   )
// }
