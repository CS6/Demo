import * as THREE from 'three'
import React, { useState, useEffec, Suspense, useLayoutEffect, useMemo, useRef } from 'react'
import { Canvas, useThree, useFrame } from '@react-three/fiber'
import { useTransition, useSpring } from '@react-spring/core'
import { a } from '@react-spring/three'
import { useLocation, useRoute, Switch, Route } from 'wouter'

import {
  Html,
  useGLTF,
  OrbitControls,
  PerspectiveCamera,
  Loader,
  useTexture,
  Shadow,
  Environment,
  TorusKnot,
  ContactShadows,
  useCursor,
  Image,
  Text,
  Billboard,
  useIntersect
} from '@react-three/drei'
import { MeshReflectorMaterial } from '../drei/MeshReflectorMaterial'
// import Se3Draco from './Se3Draco'
import Se3ALLDraco from '../Se3ALLDraco'
import Se3_ALL_COLOR_Draco, { Iphone_Y, Iphone_GREEN, Iphone_PP, Iphone_BLUE, Iphone_RED, Iphone_DEEPBLUE, Iphone_W } from '../Se3_ALL_COLOR_Draco'

import { editable as e, SheetProvider, extension } from '@theatre/r3f'
import { getProject } from '@theatre/core'
import studio from '@theatre/studio'
import state from '../state.json'

import '../styles.css'

const proj = getProject('proj', { state })
const sheet = proj.sheet('sheet')
// studio.extend(extension)
// studio.initialize()
function Loading() {
  return (
    <e.mesh uniqueName="Box">
      <boxBufferGeometry />
      <meshStandardMaterial color="orange" />
    </e.mesh>
  )
}

export default function CaptureDEMO({ ready, geometry, material, args, textures, opacity, color, shadowScale = [9, 1.5, 1], ...props }) {
  const { width: w, height: h } = useThree((state) => state.viewport)

  return (
    <group {...props}>
      <pointLight position={[10, 10, 10]} intensity={1.5} />
      <Suspense fallback={null}>
        <group rotation={[0, Math.PI, 0]} position={[0, -h / 2, 0]}>
          {/* <Iphone_PP ready={true} scale={0.6} /> */}
          <SE3Model scale={0.6} />
        </group>
        <Environment preset="city" />
      </Suspense>
      <ContactShadows rotation-x={Math.PI / 2} position={[0, -(h / 2 + 1.5), 0]} opacity={1} width={20} height={20} blur={2} far={4.5} />
      <OrbitControls enablePan={false} enableZoom={false} minPolarAngle={Math.PI / 2} maxPolarAngle={Math.PI / 2} />
    </group>
  )
}

function APP({ ready, geometry, material, args, textures, opacity, color, shadowScale = [9, 1.5, 1], ...props }) {
  const ref = useRef()
  const { mouse, clock } = useThree()
  const { width: w, height: h } = useThree((state) => state.viewport)
  const [shot, setShot] = useState('null')

  // console.log('params', params)

  const [ao, normal, height, roughness] = textures
  const [rEuler, rQuaternion] = useMemo(() => [new THREE.Euler(), new THREE.Quaternion()], [])
  // useFrame(() => {
  //   if (ref.current) {
  //     rEuler.set((-mouse.y * Math.PI) / 10, (mouse.x * Math.PI) / 6, 0)
  //     ref.current.quaternion.slerp(rQuaternion.setFromEuler(rEuler), 0.1)
  //     ref.current.material.time = clock.getElapsedTime() * 3
  //   }
  // })
  const [location] = useLocation()
  console.log('location', location)
  useFrame(() => {
    // console.log(' ref.current', ref.current)

    switch (shot) {
      case 'CloseUP':
        return ref.current.position.lerp(new THREE.Vector3().set(0, -h / 2, -4), 0.5)
      case 'Left':
        return ref.current.position.lerp(new THREE.Vector3().set(w * 0.25, -h / 2, -4), 0.5)
      case 'Right':
        return ref.current.position.lerp(new THREE.Vector3().set(-w * 0.75, -h / 2, -4), 0.5)
      default:
        return null
    }
    // if (location.split('/')[2] == 0) {
    //   // ref.current.quaternion.slerp(rQuaternion.setFromEuler(rEuler), 0.1)
    //   ref.current.position.lerp(new THREE.Vector3().set(w * 0.25, -h / 2, -4), 0.5)
    // }
    // if (location.split('/')[2] == 1) {
    //   // ref.current.quaternion.slerp(rQuaternion.setFromEuler(rEuler), 0.1)
    //   ref.current.position.lerp(new THREE.Vector3().set(-w * 0.75, -h / 2, -4), 0.5)
    // }
    // if (location.split('/')[2] == 2) {
    //   // ref.current.quaternion.slerp(rQuaternion.setFromEuler(rEuler), 0.1)
    //   ref.current.position.lerp(new THREE.Vector3().set(0, -h / 2, -4), 0.5)
    // }
  })
  useThree(({ camera }) => {
    camera.position.lerp(new THREE.Vector3().set(0, 0, 35), 0.35)
    camera.lookAt(0, 0, 0)
    camera.updateProjectionMatrix()
  })
  return (
    <group {...props}>
      {/* <a.mesh
        ref={ref}
        args={args}
        geometry={geometry}
        material={material}
        material-color={color}
        material-aoMap={ao}
        material-normalMap={normal}
        material-displacementMap={height}
        material-roughnessMap={roughness}
        material-opacity={opacity}>
        <Shadow opacity={0.2} scale={shadowScale} position={[0, -8.5, 0]} />
      </a.mesh> */}
      <SheetProvider getSheet={() => getProject('Playground - R3F').sheet('R3F-Canvas')}>
        <group position={[0, -0.5, 0]}>
          <Suspense fallback={Loading}>
            <e.group uniqueName="DeepBIPhone">
              {/* <Billboard
                follow={true}
                lockX={false}
                lockY={false}
                lockZ={false} // Lock the rotation on the z axis (default=false)
              > */}

              <group ref={ref} uniqueName="html" rotation={[0, -Math.PI, 0]} position={[w / 4, -h / 2, -10]}>
                <SE3Model ready={true} scale={2} />
              </group>
              <Environment preset="city" />

              {/* </Billboard> */}
            </e.group>

            <e.group uniqueName="GreenIPhone">
              {/* <Iphone_GREEN ready={true} scale={0.7} rotation={[0, -Math.PI + 0.24, 0]} position={[-2, 0, 0]} /> */}

              {/* 
            <Html className="content" position={[0, 0.05, -0.09]}>
              <div className="wrapper">
                <img style={{ width: '100px' }} src="/Capture.svg" />
                <h2>CAPTURE</h2>
                <img style={{ width: '200px' }} src="/Numbers.svg" />
              </div>
            </Html> */}
            </e.group>
            {/* <group rotation={[0, Math.PI, 0]} onClick={(e) => (e.stopPropagation(), setOpen(!open))}>
              <MBPRModel open={open} hinge={props.open.to([0, 1], [1.575, -0.425])} />
            </group> */}

            {/* <Environment preset="city" /> */}
          </Suspense>

          <Html className="btn" position={[0, 0.05, -0.09]}>
            <div className="wrapper">
              <h2 onClick={(e) => setShot('CloseUP')}>CAPTURE Step 01</h2>
              <h2 onClick={(e) => setShot('Left')}>CAPTURE Step 02</h2>
              <h2 onClick={(e) => setShot('Right')}>CAPTURE Step 03</h2>
            </div>
          </Html>
        </group>
      </SheetProvider>
    </group>
  )
}

function SE3Model(props) {
  const group = useRef()
  // Load model
  const { nodes, materials } = useGLTF('/se3_ALL_COLOR_Draco.gltf')
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
      <group rotation={[-Math.PI / 2, 0, 0]}>
        <group rotation={[Math.PI / 2, 0, 0]} scale={0.05}>
          <group rotation={[-Math.PI / 2, 0, 0]} scale={100}>
            <mesh geometry={nodes['IP_SE_3_-_2022_Antennas_0'].geometry} material={materials.Antennas_PP} />
            <mesh geometry={nodes['IP_SE_3_-_2022_Apple_Logo_0'].geometry} material={materials.Apple_Logo} />
            <mesh geometry={nodes['IP_SE_3_-_2022_Bezel_BLACK_0'].geometry} material={materials.Bezel_BLACK} />
            <mesh geometry={nodes['IP_SE_3_-_2022_BLACK_0'].geometry} material={materials.BLACK_PP} />
            <mesh geometry={nodes['IP_SE_3_-_2022_Body_RED_0'].geometry} material={materials.Body_PP} />
            <mesh geometry={nodes['IP_SE_3_-_2022_Body_0'].geometry} material={materials.Body} />
            <mesh geometry={nodes['IP_SE_3_-_2022_Camera_BLACK_0'].geometry} material={materials.Camera_BLACK} />
            <mesh geometry={nodes['IP_SE_3_-_2022_Camera_GLASS_0'].geometry} material={materials.Camera_GLASS} />
            <mesh geometry={nodes['IP_SE_3_-_2022_Camera_GLOSS__0'].geometry} material={materials.Camera_GLOSS} />
            <mesh geometry={nodes['IP_SE_3_-_2022_Camera_GRAY_0'].geometry} material={materials.Camera_GRAY} />
            <mesh geometry={nodes['IP_SE_3_-_2022_Camera_LENS_0'].geometry} material={materials.Camera_LENS} />
            <mesh geometry={nodes['IP_SE_3_-_2022_Camera_RED_0'].geometry} material={materials.Camera_PP} />
            <mesh geometry={nodes['IP_SE_3_-_2022_Flash_0'].geometry} material={materials.Flash} />
            <mesh geometry={nodes['IP_SE_3_-_2022_Frame_RED_0'].geometry} material={materials.Frame_PP} />
            <mesh geometry={nodes['IP_SE_3_-_2022_GRAY_0'].geometry} material={materials.GRAY} />
            <mesh geometry={nodes['IP_SE_3_-_2022_MicSpeaker_0'].geometry} material={materials.MicSpeaker} />
            <mesh geometry={nodes['IP_SE_3_-_2022_Sensor_0'].geometry} material={materials.Sensor} />
            {/* <mesh geometry={nodes['IP_SE_3_-_2022_Wallpaper_0'].geometry} material={materials.Wallpaper} /> */}
            <mesh geometry={nodes['IP_SE_3_-_2022_Wallpaper_0'].geometry}>
              {/* Drei's HTML component can now "hide behind" canvas geometry */}
              <meshStandardMaterial color={'#000000'} />

              <Html scale={0.175} className="content_se3" rotation-x={Math.PI / 2} rotation-y={-Math.PI} position={[0.02, 0.117, 1.8]} transform occlude>
                {/* <div className="wrapper">
                <HeroPage />
              </div> */}
                <div className="webside_se3">
                  {/* <HeroPage /> */}

                  <div className="iframe_se3">
                    <iframe className="relative w-full h-full" src="https://dayuan.dev/" title="W3Schools Free Online Web Tutorials"></iframe>
                  </div>
                </div>
              </Html>
            </mesh>
          </group>
        </group>
      </group>
    </group>
  )
}
