import * as THREE from 'three'
import React, { useState, useEffec, Suspense, useLayoutEffect, useMemo, useRef } from 'react'
import { Canvas, useThree, useFrame } from '@react-three/fiber'
import { useTransition, useSpring } from '@react-spring/core'
import { a } from '@react-spring/three'

import { Html, useGLTF, OrbitControls, PerspectiveCamera, Loader, useTexture, Shadow, Environment, TorusKnot, ContactShadows } from '@react-three/drei'
import { MeshReflectorMaterial } from '../drei/MeshReflectorMaterial'
// import Se3Draco from './Se3Draco'
import Se3ALLDraco from '../Se3ALLDraco'
import Se3_ALL_COLOR_Draco, { Iphone_Y, Iphone_GREEN, Iphone_PP, Iphone_BLUE, Iphone_RED, Iphone_DEEPBLUE, Iphone_W } from '../Se3_ALL_COLOR_Draco'

import { editable as e, SheetProvider, extension } from '@theatre/r3f'
import { getProject } from '@theatre/core'
import studio from '@theatre/studio'
import state from '../state.json'
import MBPRModel from '../MBPRModel'

import COVID19_Draco from '../Models/COVID19_Draco'
import Medical_Draco from '../Models/Medical_Draco'

const proj = getProject('proj', { state })
const sheet = proj.sheet('sheet')
// studio.extend(extension)
studio.initialize()
function Loading() {
  return (
    <e.mesh uniqueName="Box">
      <boxBufferGeometry />
      <meshStandardMaterial color="orange" />
    </e.mesh>
  )
}

export default function MyLogDEMO({ ready }) {
  const ref = useRef()
  const { mouse, clock } = useThree()

  const [open, setOpen] = useState(false)
  const [open360, setOpen360] = useState(true)

  const props = useSpring({ open: Number(open) })

  const [rEuler, rQuaternion] = useMemo(() => [new THREE.Euler(), new THREE.Quaternion()], [])
  useFrame(() => {
    if (ref.current) {
      rEuler.set((-mouse.y * Math.PI) / 10, (mouse.x * Math.PI) / 6, 0)
      ref.current.quaternion.slerp(rQuaternion.setFromEuler(rEuler), 0.1)
      ref.current.material.time = clock.getElapsedTime() * 3
    }
  })
  return (
    <group {...props}>
      <SheetProvider getSheet={() => getProject('Playground - R3F').sheet('R3F-Canvas')}>
        {/* <SheetProvider getSheet={() => sheet}> */}
        {/* Mark objects as editable. */}
        {/* Properties in the code are used as initial values and reset points in the editor. */}

        <group position={[0, -0.5, 0]}>
          {/* <e.group uniqueName="poto">
              <Iphone_Y ready={ready} scale={0.7} rotation={[0, 0, 0]} position={[0, 0, 0]} />
            </e.group> */}
          {!open ? (
            <Suspense fallback={null}>
              <Generate360Image imageLocation={'/LPCity.jpg'} className="image-canvas" />
            </Suspense>
          ) : null}

          <Suspense fallback={Loading}>
            <COVID19_Draco scale={0.01} position={[0, -20 + Math.floor(Math.random() * 10), -10]} />
            <COVID19_Draco scale={0.01} position={[-10, -20 + Math.floor(Math.random() * 10), -10]} />
            <Medical_Draco scale={3} position={[0, -2, 0]} />
            <e.group uniqueName="GreenIPhone">
              <Iphone_RED ready={true} scale={0.7} rotation={[0, -Math.PI + 0.24, 0]} position={[-2, 0, 0]} />
              {/* <MBPRModel open={open} hinge={props.open.to([0, 1], [1.575, -0.425])} /> */}
            </e.group>

            <group position={[0, 0, -4]} rotation={[0, -2 * Math.PI, 0]} onClick={(e) => (e.stopPropagation(), setOpen(!open))}>
              <MBPRModel open={open} hinge={props.open.to([0, 1], [1.575, -0.425])} />
            </group>
          </Suspense>

          {/* <Iphone_GREEN ready={ready} scale={0.7} rotation={[0, 0, 0]} position={[4.15, 0, 0]} />
            <Iphone_PP ready={ready} scale={0.7} rotation={[0, 0, 0]} position={[-3.49, 0, 0]} />
            <Iphone_BLUE ready={ready} scale={0.7} rotation={[0, 0, 0]} position={[-6.7, 0, 0]} />
            <Iphone_DEEPBLUE ready={ready} scale={0.7} rotation={[0, 0, 0]} position={[6.95, 0, 0]} />
            <Iphone_RED ready={ready} scale={0.7} rotation={[0, 0, 0]} position={[10.41, 0, 0]} />
            <Iphone_W ready={ready} scale={0.7} rotation={[0, 0, 0]} position={[-9.16, 0, 0]} /> */}
        </group>

        <OrbitControls
          makeDefault
          // autoRotate
          // autoRotateSpeed={0.3}
          maxPolarAngle={Math.PI / 2.3}
          minPolarAngle={Math.PI / 2.3}
          enableZoom={false}
          enablePan={false}
        />
      </SheetProvider>
    </group>
  )
}

const Generate360Image = (props) => {
  var myTexture = useTexture(props.imageLocation)

  return (
    <>
      <mesh position={[0, 0, 0]}>
        <sphereGeometry attach="geometry" args={[500, 60, 60]} />
        <meshBasicMaterial attach="material" map={myTexture} side={THREE.DoubleSide} />
      </mesh>
    </>
  )
}
