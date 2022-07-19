import * as THREE from 'three'
import React, { Suspense, useEffect, useRef, useState } from 'react'
import { Canvas, useFrame } from '@react-three/fiber'
import { Html, Mask, Image, Environment, useGLTF, ContactShadows, OrbitControls } from '@react-three/drei'
import { a as three } from '@react-spring/three'
import HeroPage from './HeroPage'
import './styles.css'
import { useSpring } from '@react-spring/core'
import IPhone from '../Emoji_mobile_Draco'
import { IPhoneSE } from './useSplineApp'
import { Track, MApp, Zoom } from '../Music/TrackMusic'
import IPad from '../IPad'
import IPhone13 from '../IPhone13'
import IPhone13LF from '../IPhone13LF'


import BikeDEMO from '../DEMOs/BikeDEMO.js'



const vec = new THREE.Vector3()


export function Model(props) {
  const group = useRef()
  // Load model
  const { nodes, materials } = useGLTF('/Hmac-draco.glb')
  // Take care of cursor state on hover
  const [hovered, setHovered] = useState(false)
  useEffect(() => void (document.body.style.cursor = hovered ? 'pointer' : 'auto'), [hovered])

  // Make it float
  useFrame((state) => {
    const t = state.clock.getElapsedTime()
    // state.camera.position.lerp(vec.set(0, 0, open ? -24 : -32), 0.1)
    // state.camera.lookAt(0, 0, 0)
    group.current.rotation.x = THREE.MathUtils.lerp(group.current.rotation.x, Math.cos(t / 2) / 10 + 0.25, 0.1)
    group.current.rotation.y = THREE.MathUtils.lerp(group.current.rotation.y, Math.sin(t / 4) / 10, 0.1)
    group.current.rotation.z = THREE.MathUtils.lerp(group.current.rotation.z, Math.sin(t / 4) / 20, 0.1)
    group.current.position.y = THREE.MathUtils.lerp(group.current.position.y, (-5 + Math.sin(t)) / 5, 0.1)
  })
  // The jsx graph was auto-generated by: https://github.com/pmndrs/gltfjsx
  // return (
  //   <group ref={group} {...props} dispose={null}>
  return (<group ref={group} {...props}
    onPointerOver={(e) => (e.stopPropagation(), setHovered(true))}
    onPointerOut={(e) => setHovered(false)}
    dispose={null}>

    <three.group rotation-x={-0.425} position={[0, -0.04, 0.41]}>
      <group position={[0, 2.96, -0.13]} rotation={[Math.PI / 2, 0, 0]}>
        <mesh material={materials.aluminium} geometry={nodes['Cube008'].geometry} />
        <mesh material={materials['matte.001']} geometry={nodes['Cube008_1'].geometry} />
        <mesh geometry={nodes['Cube008_2'].geometry}>
          {/* Drei's HTML component can now "hide behind" canvas geometry */}
          <Html className="content" rotation={[-Math.PI / 2, 0, 0.09]} position={[0, 0.05, -0.09]} transform occlude>
            <div className="wrapper">
              <iframe src="https://nftsearch.site/" title="nftsearch"></iframe>

              <HeroPage />


            </div>
          </Html>
        </mesh>
      </group>
    </three.group>
    <mesh material={materials.keys} geometry={nodes.keyboard.geometry} position={[1.79, 0, 3.45]} />
    <group position={[0, -0.1, 3.39]}>
      <mesh material={materials.aluminium} geometry={nodes['Cube002'].geometry} />
      <mesh material={materials.trackpad} geometry={nodes['Cube002_1'].geometry} />
    </group>
    <mesh material={materials.touchbar} geometry={nodes.touchbar.geometry} position={[0, -0.03, 1.2]} />
  </group>
  )
}



function MacModel(props) {
  const group = useRef()
  // Load model
  const { nodes, materials } = useGLTF('/Hmac-draco.glb')
  // Take care of cursor state on hover
  const [hovered, setHovered] = useState(false)


  // Make it float
  useFrame((state) => {
    const t = state.clock.getElapsedTime()
    group.current.rotation.x = THREE.MathUtils.lerp(group.current.rotation.x, Math.cos(t / 2) / 10 + 0.25, 0.1)
    group.current.rotation.y = THREE.MathUtils.lerp(group.current.rotation.y, Math.sin(t / 4) / 10, 0.1)
    group.current.rotation.z = THREE.MathUtils.lerp(group.current.rotation.z, Math.sin(t / 4) / 20, 0.1)
    group.current.position.y = THREE.MathUtils.lerp(group.current.position.y, (-5 + Math.sin(t)) / 5, 0.1)
  })
  // The jsx graph was auto-generated by: https://github.com/pmndrs/gltfjsx
  return (
    <group ref={group} {...props} dispose={null}>
      <group rotation-x={-0.425} position={[0, -0.04, 0.41]}>
        <group position={[0, 2.96, -0.13]} rotation={[Math.PI / 2, 0, 0]}>
          <mesh material={materials.aluminium} geometry={nodes['Cube008'].geometry} />
          <mesh material={materials['matte.001']} geometry={nodes['Cube008_1'].geometry} />
          <mesh geometry={nodes['Cube008_2'].geometry}>
            {/* Drei's HTML component can now "hide behind" canvas geometry */}
            <Html className="content" rotation={[-Math.PI / 2, 0, 0.09]} position={[0, 0.05, -0.09]} transform occlude>
              <div className="wrapper">
                <HeroPage />
              </div>
            </Html>
          </mesh>
        </group>
      </group>
      <mesh material={materials.keys} geometry={nodes.keyboard.geometry} position={[1.79, 0, 3.45]} />
      <group position={[0, -0.1, 3.39]}>
        <mesh material={materials.aluminium} geometry={nodes['Cube002'].geometry} />
        <mesh material={materials.trackpad} geometry={nodes['Cube002_1'].geometry} />
      </group>
      <mesh material={materials.touchbar} geometry={nodes.touchbar.geometry} position={[0, -0.03, 1.2]} />
    </group>
  )
}

export default function WebBook({ type }) {
  const container = useRef()
  const [open, setOpen] = useState(false)
  const [openIpad, setOpenIpad] = useState(false)

  const [useCamera, setUseCamera] = useState(false)

  const props = useSpring({ open: Number(open) })

  return (
    <div
      // ref={container}
      className="model-container">
      <Canvas dpr={[1, 2]} camera={{ position: [-10, 1, -25], fov: 35 }}>
        <group position={[1.5, 0, 0]}>

          <pointLight position={[10, 10, 10]} intensity={1.5} />
          <Suspense fallback={null}>
            {type === 'Bike' && <BikeDEMO

              scale={[0.7, 0.7, 0.7]}
              rotation={[0, 0.5, 0]}
              shadowScale={[17, 2.5, 1]}
              color="black"

            />}

            {open &&
              <Suspense fallback={null}>
                <Track position-z={-0.25} url="/synth.mp3" />
                <Track position-z={0} url="/snare.mp3" />
                <Track position-z={0.25} url="/drums.mp3" />
                {/* <Zoom url="/drums.mp3" /> */}
              </Suspense>}

            {type === 'IPhone' &&
              <group rotation={[0, Math.PI, 0]} position={[0, 5, 0]} onClick={(e) => (e.stopPropagation(), setOpenIpad(!openIpad))}>
                <IPhone13LF app={0} castShadow open={false} scale={0.05} rotation={[0, Math.PI / 8, 0]} position={[-20, 5, -30]} />
                <IPhone13LF app={1} castShadow open={false} scale={0.05} rotation={[-Math.PI / 8, -Math.PI / 8, 0]} position={[0, 0, -40]} />

              </group>}
            {type === "IPad" &&
              <group rotation={[0, Math.PI, 0]} position={[0, 5, 0]} onClick={(e) => (e.stopPropagation(), setOpenIpad(!openIpad))}>
                <IPad castShadow open={true} scale={0.05} rotation={[0, Math.PI / 7, 0]} position={[-8, 0, 0]} />
                <IPhone13 app={"MyLog"} ready={true} castShadow open={true} scale={0.015} rotation={[0, -Math.PI / 20, 0]} position={[1, -3, 0]} />
                <ContactShadows rotation-x={Math.PI / 2} position={[-1.5, -4.5, 0]} opacity={1} width={20} height={20} blur={1} far={4.5} />
              </group>
            }
            {type === "Camera" &&
              <group rotation={[0, Math.PI, 0]}>
                {/* <IPhone  rotation={[0, -Math.PI/2, 0]} scale={0.01} /> */}

                <group onClick={(e) => (e.stopPropagation(), setUseCamera(!useCamera))}>
                  <IPhoneSE open={useCamera} scale={0.01} rotation={[0, Math.PI / 7, 0]} position={[0, 0, 0]} />
                  <ContactShadows rotation-x={Math.PI / 2} position={[-1.5, -4.55, 0]} opacity={1} width={20} height={20} blur={1} far={4.5} />
                </group>
                {/* <Model /> */}
                {/* <MacModel /> */}
                {/* <MBPRModel/> */}
              </group>}
            {type === "MacBook" && <group rotation={[0, Math.PI, 0]} onClick={(e) => (e.stopPropagation(), setOpen(!open))}>
              <MBPRModel castShadow open={open} hinge={props.open.to([0, 1], [1.575, -0.425])} />
              <ContactShadows rotation-x={Math.PI / 2} position={[-1.5, -4.5, 0]} opacity={1} width={20} height={20} blur={1} far={4.5} />
            </group>}

            {/* <group rotation={[0, Math.PI, 0]}  onClick={(e) => (e.stopPropagation(), setOpen(!open))}>
          <MacModel castShadow open={open} hinge={props.open.to([0, 1], [1.575, -0.425])} />
        </group> */}
            <Environment preset="city" />
          </Suspense>
          {/* <ContactShadows rotation-x={Math.PI / 2} position={[-1.5, -4.5, 0]} opacity={1} width={20} height={20} blur={1} far={4.5} /> */}
          {/* <OrbitControls enablePan={false} enableZoom={false} minPolarAngle={Math.PI / 4} maxPolarAngle={Math.PI / 4} /> */}
          {/* <OrbitControls /> */}
        </group>
      </Canvas>
    </div>
  )
}



export function MBPRModel({ open, hinge, ...props }) {
  const group = useRef()
  const image = useRef()

  // Load model
  const { nodes, materials } = useGLTF('/mac-draco.glb')

  // Take care of cursor state on hover
  const [hovered, setHovered] = useState(false)
  useEffect(() => void (document.body.style.cursor = hovered ? 'pointer' : 'auto'), [hovered])
  // Make it float in the air when it's opened
  useFrame((state) => {
    const t = state.clock.getElapsedTime()
    state.camera.position.lerp(vec.set(0, 0, open ? -20 : -32), 0.1)
    state.camera.lookAt(0, open ? 1.5 : 0, 0)
    group.current.rotation.x = THREE.MathUtils.lerp(group.current.rotation.x, open ? Math.cos(t / 2) / 8 + 0.25 : 0, 0.1)
    group.current.rotation.y = THREE.MathUtils.lerp(group.current.rotation.y, open ? Math.sin(t / 4) / 4 : 0, 0.1)
    group.current.rotation.z = THREE.MathUtils.lerp(group.current.rotation.z, open ? Math.sin(t / 4) / 4 : 0, 0.1)
    group.current.position.y = THREE.MathUtils.lerp(group.current.position.y, open ? (-2 + Math.sin(t)) / 3 : -4.3, 0.1)
  })
  // The view was auto-generated by: https://github.com/pmndrs/gltfjsx
  // Events and spring animations were added afterwards
  return (
    <group ref={group} {...props}
      onPointerOver={(e) => (e.stopPropagation(), setHovered(true))}
      onPointerOut={(e) => setHovered(false)}
      dispose={null}>
      <three.group rotation-x={hinge} position={[0, -0.04, 0.41]}>
        <group castShadow position={[0, 2.96, -0.13]} rotation={[Math.PI / 2, 0, 0]}>
          <mesh castShadow material={materials.aluminium} geometry={nodes['Cube008'].geometry} />
          <mesh castShadow material={materials['matte.001']} geometry={nodes['Cube008_1'].geometry} />
          <mesh geometry={nodes['Cube008_2'].geometry}>
            <Image ref={image} rotation={[-Math.PI / 2, 0, 0]} position={[0, 0.05, -0.09]} scale={[8.4, 5.4]} transparent={true} opacity={1} raycast={() => null} url={"/img/web/nftsearchsite.png"} />
            {/* <Html className="content" rotation={[-Math.PI / 2, 0, 0.09]} position={[0, 0.05, -0.09]} scale={0.99} transform occlude>
              <div className="wrapper">
                <HeroPage />
                <iframe src="https://nftsearch.site/" title="nftsearch"></iframe>
                <iframe
                  // style={{transform: 'rotate(90deg)'}}
                  style={{ width: '110%', height: '110%', margin: 0, padding: 0, border: 0, top: 0, left: 0 }}
                  className="relative w-full h-full"
                  // src="https://nftsearch.site/"
                  // src="https://dayuan.dev/"
                  src="https://aframe.io/examples/showcase/anime-UI/"
                  title="W3Schools Free Online Web Tutorials"></iframe>
              </div>
            </Html> */}
          </mesh>

        </group>
      </three.group>
      <mesh castShadow material={materials.keys} geometry={nodes.keyboard.geometry} position={[1.79, 0, 3.45]} />
      <group position={[0, -0.1, 3.39]}>
        <mesh castShadow material={materials.aluminium} geometry={nodes['Cube002'].geometry} />
        <mesh castShadow material={materials.trackpad} geometry={nodes['Cube002_1'].geometry} />
      </group>
      <mesh castShadow material={materials.touchbar} geometry={nodes.touchbar.geometry} position={[0, -0.03, 1.2]} />
    </group>
  )
}
