import { useRef, useState, useEffect, Suspense } from 'react'
import { Canvas, useFrame } from '@react-three/fiber'
import { Html, Mask, useMask, OrthographicCamera, Clone, Float as FloatImpl } from '@react-three/drei'
import { OrbitControls, Environment, useGLTF, ContactShadows, PerspectiveCamera } from '@react-three/drei'
import MBPRModel from './MBPRModel'
import { useSpring } from '@react-spring/core'
import { a as three } from '@react-spring/three'
import useSpline from '@splinetool/r3f-spline'
import * as THREE from 'three'

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
  // We turn this into a spring animation that interpolates between 0 and 1
  const props = useSpring({ open: Number(open) })
  return (
    <div ref={container} className="model-container" >
      {/* Container for the HTML view */}
      {/* <div style={{ position: 'absolute', top: 0, left: 0, width: '100%', height: '100%', overflow: 'hidden' }} ref={domContent} /> */}
      {/* Container for THREEJS */}
      {/* <Canvas dpr={[1, 2]} shadows flat linear> */}
      {/* <Canvas  shadows flat linear dpr={[1, 2]}> */}
      {/* <Canvas dpr={[1, 2]} camera={{ position: [0, 0, 100], fov: 35 }}> */}
      <Canvas dpr={[1, 2]} shadows camera={{ position: [0, 0, 50], fov: 35 }}>

        <three.pointLight position={[10, 10, 10]} intensity={1.5} color={props.open.to([0, 1], ['#f0f0f0', '#d25578'])} />
        <ContactShadows rotation-x={Math.PI / 2} position={[0, -4.5, 0]} opacity={1} width={20} height={20} blur={0} far={0} />

        <Suspense fallback={null}>
          {/* <color attach="background" args={['#f0f0f0']} /> */}
          <Box position={[0, 10, -20]} />
          <spotLight
            penumbra={1}
            angle={1}
            castShadow
            position={[10, 60, -5]}
            intensity={8}
            shadow-mapSize={[512, 512]}
          />

          <group rotation={[0, Math.PI, 0]} position={[0, -5, 50]} onClick={(e) => (e.stopPropagation(), setOpen(!open))}>
            {/* <Bottles /> */}
            {/* <SBox castShadow position={[0, 10, -20]} scale={10} /> */}

            <group castShadow position={[0, 5, 50]}>
              <MBPRModel castShadow open={open} hinge={props.open.to([0, 1], [1.575, -0.425])} />
            </group>
            {/* <mesh
              rotation-x={-Math.PI / 2}
              position={[0, 0.01, 0]}
              scale={[200, 200, 200]}
              receiveShadow
              renderOrder={100000}>
              <planeGeometry />
              <shadowMaterial transparent color="#251005" opacity={0.25} />
            </mesh> */}
            <mesh receiveShadow scale={[200, 200, 200]}
              rotation={[-Math.PI / 2, 0, 0]} position={[0, -0.025, 0]}>
              <planeGeometry />
              <shadowMaterial transparent opacity={0.15} />
            </mesh>
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


        <OrbitControls />

        {/* <ambientLight intensity={0.5} /> */}
        {/* <spotLight position={[10, 10, 10]} angle={0.15} penumbra={1} />
        <pointLight position={[-10, -10, -10]} />
        <Box position={[-1, 0, 0]} />
        <Box position={[1, 0, 0]} /> */}
      </Canvas>
    </div>
  )
}

function Model({ portal, ...props }) {
  let timeout = null
  // const v = new THREE.Vector3()
  const wheel = useRef(0)
  const hand = useRef()
  const [clicked, click] = useState(false)
  const { nodes } = useSpline('/scroll.splinecode')
  // Take the stencil and drop it over everything but the right hand

  return (
    <group {...props} dispose={null}>

    </group>
  )
}
