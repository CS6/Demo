import * as THREE from 'three'
import React, { useState, useEffec, Suspense, useLayoutEffect, useMemo, useRef } from 'react'
import { Canvas, useThree, useFrame } from '@react-three/fiber'
import { useTransition, useSpring } from '@react-spring/core'
import { a } from '@react-spring/three'

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
  Text
} from '@react-three/drei'
// import Se3_ALL_COLOR_Draco, { Iphone_Y, Iphone_GREEN, Iphone_PP, Iphone_BLUE, Iphone_RED, Iphone_DEEPBLUE, Iphone_W } from '../Se3_ALL_COLOR_Draco'
import BikeHold_Draco from '../Models/BikeHold_Draco.js'

import IPhone13 from '../IPhone13'


function Loading() {
  return (
    <mesh uniqueName="Box">
      <boxBufferGeometry />
      <meshStandardMaterial color="orange" />
    </mesh>
  )
}
const vec = new THREE.Vector3()
const pexel = (id) => `https://images.pexels.com/photos/${id}/pexels-photo-${id}.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260`

export default function BikeDEMO({ ready, geometry, material, args, textures, opacity, color, shadowScale = [9, 1.5, 1], ...props }) {
  const ref = useRef()
  const { mouse, clock } = useThree()
  const [rEuler, rQuaternion] = useMemo(() => [new THREE.Euler(), new THREE.Quaternion()], [])
  // useThree(({ camera }) => {
  //   camera.position.lerp(vec.set(0, 0, 20), 0.5)
  //   camera.lookAt(0, 0, 0)
  //   camera.updateProjectionMatrix()
  // })
  useFrame((state) => {
    state.camera.position.lerp(vec.set(-10, 1, -25), 0.1)
    state.camera.lookAt(0, 0, 0)
    if (ref.current) {
      rEuler.set((-mouse.y * Math.PI) / 10, (mouse.x * Math.PI) / 6, 0)
      ref.current.quaternion.slerp(rQuaternion.setFromEuler(rEuler), 0.1)
      ref.current.material.time = clock.getElapsedTime() * 3
    }
  })

  return (
    <group {...props}>

      <spotLight position={[10, 10, 10]} angle={0.15} penumbra={1} uniqueName="Spotlight" />
      <pointLight uniqueName="PointLight" />


      <group position={[0, -0.5, 0]} rotation={[ (-Math.PI / 10), (Math.PI / 3) * 3,0 ]}>


        {/* <Frame position={[-1.75, 0, -0.25]} rotation={[0, Math.PI / 2.5, 0]} url={pexel(327482)} /> */}
        <Suspense fallback={Loading}>
          <group uniqueName="Bike">
            <group uniqueName="Iphone_Y" rotation={[-1, 0.14, 0.22]} position={[0.5, -8, -6]}>
            {/* <IPhone13 position={[-5, 0, 5]} /> */}

              <IPhone13 app={"bike"} ready={true} scale={0.021} rotation={[0,0, 0]} position={[-9, 5, 5]} />
              {/* <Iphone_Y ready={true} scale={2.5} rotation={[0, -Math.PI, 0]} position={[-5, 0, 5]} /> */}
            </group>

            <BikeHold_Draco scale={2} rotation={[0, -Math.PI + 0.24, 0]} position={[-5, 0, -5]} />


          </group>

          {/* <Environment preset="city" /> */}
        </Suspense>


      </group>

      {/* <OrbitControls
          makeDefault
          // autoRotate
          // autoRotateSpeed={0.3}
          maxPolarAngle={Math.PI / 2.3}
          minPolarAngle={Math.PI / 2.3}
          enableZoom={false}
          enablePan={false}
        /> */}

    </group>
  )
}

