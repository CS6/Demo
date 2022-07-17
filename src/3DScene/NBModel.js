import * as THREE from 'three'
import React, { Suspense, useEffect, useRef, useState } from 'react'
import { Canvas, useFrame } from '@react-three/fiber'
import { Environment, useGLTF, ContactShadows } from '@react-three/drei'
// import { useSpring } from '@react-spring/core'
import { a as three } from '@react-spring/three'
// import { a as web } from '@react-spring/web'

const vec = new THREE.Vector3()

 
export default function NBModel({ ...props }) {
  
  // export default function Scene({ ...props }) {
    const { nodes, materials } = useSpline('https://prod.spline.design/S-q0BjN4yd6fzZqk/scene.splinecode')
    return (
      <>
        <color attach="background" args={['#7a6c89']} />
        <group {...props} dispose={null}>
          <mesh
            name="Rectangle"
            geometry={nodes.Rectangle.geometry}
            material={materials['Rectangle Material']}
            castShadow
            receiveShadow
            position={[0, -359.01, 20.52]}
            rotation={[-1.49, 0, 0]}
          />
          <group
            name="Macbook Pro M1 Max 14 Inch"
            position={[3.3, 76.9, -153.2]}
            rotation={[-2.76, -0.31, -3.04]}
            scale={0.39}
          >
            <pointLight
              name="Point Light 3"
              intensity={1.9}
              distance={2000}
              shadow-mapSize-width={1024}
              shadow-mapSize-height={1024}
              shadow-camera-near={100}
              shadow-camera-far={2500}
              color="#d590fe"
              position={[125.75, 384.41, -1000.13]}
            />
            <pointLight
              name="Point Light 4"
              intensity={1.9}
              distance={2000}
              shadow-mapSize-width={1024}
              shadow-mapSize-height={1024}
              shadow-camera-near={100}
              shadow-camera-far={2500}
              color="#feb9f7"
              position={[137.93, 0, -195.12]}
            />
            <pointLight
              name="Point Light"
              intensity={1.9}
              distance={2000}
              shadow-mapSize-width={1024}
              shadow-mapSize-height={1024}
              shadow-camera-near={100}
              shadow-camera-far={2500}
              color="#b76afe"
              position={[0, 0, -195.12]}
            />
            <group name="screen" position={[74.21, -498.46, -571.72]} rotation={[0.62, 0, 0]}>
              <group name="logo_apple" position={[67.25, -20.36, -555.36]} scale={[1.96, 1.96, 1089621.13]}>
                <mesh
                  name="logo_apple1"
                  geometry={nodes.logo_apple1.geometry}
                  material={materials.logo_apple}
                  castShadow
                  receiveShadow
                  position={[2332.21, 14913.84, -646604.77]}
                />
                <mesh
                  name="logo_apple2"
                  geometry={nodes.logo_apple2.geometry}
                  material={materials.logo_apple}
                  castShadow
                  receiveShadow
                  position={[2574.21, 15150.84, -646604.76]}
                />
              </group>
              <mesh
                name="connector"
                geometry={nodes.connector.geometry}
                material={materials.metalic}
                castShadow
                receiveShadow
                position={[0, -192.8, -187.41]}
              />
              <mesh
                name="screen1"
                geometry={nodes.screen1.geometry}
                material={materials.screen}
                castShadow
                receiveShadow
                position={[-618.9, 230.3, 102.56]}
              />
              <mesh
                name="green_light"
                geometry={nodes.green_light.geometry}
                material={materials['green_light Material']}
                castShadow
                receiveShadow
                position={[648.36, 1589.57, 1187.28]}
              />
              <mesh
                name="black_border_notch_screen"
                geometry={nodes.black_border_notch_screen.geometry}
                material={materials['black_border_notch_screen Material']}
                castShadow
                receiveShadow
                position={[-434.51, 1158.95, 564.73]}
              />
              <mesh
                name="grey_border_creen"
                geometry={nodes.grey_border_creen.geometry}
                material={materials['grey_border_creen Material']}
                castShadow
                receiveShadow
                position={[331.25, 640.81, 556.57]}
              />
              <mesh
                name="Rectangle1"
                geometry={nodes.Rectangle1.geometry}
                material={materials.metalic}
                castShadow
                receiveShadow
                position={[331.75, 640.81, 550.69]}
              />
              <mesh
                name="metalic_screen"
                geometry={nodes.metalic_screen.geometry}
                material={materials.metalic}
                castShadow
                receiveShadow
                position={[331.75, 640.81, 555.57]}
              />
              <mesh
                name="camera"
                geometry={nodes.camera.geometry}
                material={materials['camera Material']}
                castShadow
                receiveShadow
                position={[628.09, 1589.57, 1188.44]}
              />
              <mesh
                name="border_black_camera"
                geometry={nodes.border_black_camera.geometry}
                material={materials['connector&screen']}
                castShadow
                receiveShadow
                position={[628.09, 1589.57, 1188.19]}
              />
            </group>
            <group name="base" position={[-6.66, -535.07, 531]} rotation={[-Math.PI, 0, -Math.PI]}>
              <mesh
                name="Cube"
                geometry={nodes.Cube.geometry}
                material={materials.Sound}
                castShadow
                receiveShadow
                position={[0, -184.41, -184.41]}
              />
              <group name="base1" position={[-24.56, -402.38, 18.1]}>
                <mesh
                  name="base2"
                  geometry={nodes.base2.geometry}
                  material={materials.metalic}
                  castShadow
                  receiveShadow
                  position={[-375.45, 49.78, 315.53]}
                />
              </group>
              <group name="sound" position={[-7.93, -499, 350.97]}>
                <mesh
                  name="Rectangle 2"
                  geometry={nodes['Rectangle 2'].geometry}
                  material={materials.Sound}
                  castShadow
                  receiveShadow
                  position={[-564.85, -487, -903.5]}
                  rotation={[-Math.PI / 2, 0, 0]}
                />
                <mesh
                  name="Rectangle2"
                  geometry={nodes.Rectangle2.geometry}
                  material={materials.Sound}
                  castShadow
                  receiveShadow
                  position={[718, -487, -903.5]}
                  rotation={[-Math.PI / 2, 0, 0]}
                />
              </group>
              <group name="feet" position={[-58.57, -549.3, 542.95]}>
                <mesh
                  name="Subdiv 3"
                  geometry={nodes['Subdiv 3'].geometry}
                  material={materials.metalic}
                  castShadow
                  receiveShadow
                  position={[434.28, -575.27, 143.4]}
                  rotation={[0, 0, -Math.PI]}
                  scale={[-1.09, 1.09, 1.09]}
                />
                <mesh
                  name="Subdiv 31"
                  geometry={nodes['Subdiv 31'].geometry}
                  material={materials['metalic _2']}
                  castShadow
                  receiveShadow
                  position={[434.28, -581.05, 143.4]}
                  rotation={[0, 0, -Math.PI]}
                  scale={[-1, 1, 1]}
                />
                <mesh
                  name="Subdiv 32"
                  geometry={nodes['Subdiv 32'].geometry}
                  material={materials.metalic}
                  castShadow
                  receiveShadow
                  position={[-499.28, -575.27, 143.4]}
                  rotation={[0, 0, -Math.PI]}
                  scale={[-1.09, 1.09, 1.09]}
                />
                <mesh
                  name="Subdiv 33"
                  geometry={nodes['Subdiv 33'].geometry}
                  material={materials['metalic _2']}
                  castShadow
                  receiveShadow
                  position={[-496.5, -582.12, 143.47]}
                  rotation={[0, 0, -Math.PI]}
                  scale={[-1, 1, 1]}
                />
                <mesh
                  name="Subdiv 2"
                  geometry={nodes['Subdiv 2'].geometry}
                  material={materials.metalic}
                  castShadow
                  receiveShadow
                  position={[434.28, -575.27, 859.34]}
                  rotation={[0, 0, -Math.PI]}
                  scale={[-1.09, 1.09, 1.09]}
                />
                <mesh
                  name="Subdiv 21"
                  geometry={nodes['Subdiv 21'].geometry}
                  material={materials['metalic _2']}
                  castShadow
                  receiveShadow
                  position={[434.28, -581.05, 859.34]}
                  rotation={[0, 0, -Math.PI]}
                  scale={[-1, 1, 1]}
                />
                <mesh
                  name="Subdiv"
                  geometry={nodes.Subdiv.geometry}
                  material={materials.metalic}
                  castShadow
                  receiveShadow
                  position={[-499.28, -575.27, 859.34]}
                  rotation={[0, 0, -Math.PI]}
                  scale={[-1.09, 1.09, 1.09]}
                />
                <mesh
                  name="Cylinder"
                  geometry={nodes.Cylinder.geometry}
                  material={materials['metalic _2']}
                  castShadow
                  receiveShadow
                  position={[-499.28, -581.05, 859.34]}
                  rotation={[0, 0, -Math.PI]}
                  scale={[-1, 1, 1]}
                />
              </group>
              <group name="keyboard" position={[-52.96, -493.4, 332.06]}>
                <mesh
                  name="Torus"
                  geometry={nodes.Torus.geometry}
                  material={materials.keyboard_2}
                  castShadow
                  receiveShadow
                  position={[537.5, -496.48, 145.08]}
                  rotation={[-Math.PI / 2, 0, 0]}
                  scale={1.17}
                />
                <mesh
                  name="keybord_lign"
                  geometry={nodes.keybord_lign.geometry}
                  material={materials.keyboard_2}
                  castShadow
                  receiveShadow
                  position={[313.17, -500.04, 541.69]}
                  rotation={[-Math.PI / 2, 0, 0]}
                />
                <mesh
                  name="keybord_lign1"
                  geometry={nodes.keybord_lign1.geometry}
                  material={materials.keyboard_2}
                  castShadow
                  receiveShadow
                  position={[-544.16, -500.04, 541.69]}
                  rotation={[-Math.PI / 2, 0, 0]}
                />
                <mesh
                  name="keybord_lign2"
                  geometry={nodes.keybord_lign2.geometry}
                  material={materials.keyboard_2}
                  castShadow
                  receiveShadow
                  position={[-357.9, -500.04, 463.03]}
                  rotation={[-Math.PI / 2, 0, 0]}
                />
                <mesh
                  name="keybord_lign3"
                  geometry={nodes.keybord_lign3.geometry}
                  material={materials.keyboard_2}
                  castShadow
                  receiveShadow
                  position={[-399.3, -500.04, 383.69]}
                  rotation={[-Math.PI / 2, 0, 0]}
                />
                <mesh
                  name="keybord_lign4"
                  geometry={nodes.keybord_lign4.geometry}
                  material={materials.keyboard_2}
                  castShadow
                  receiveShadow
                  position={[-422.83, -500.04, 302.36]}
                  rotation={[-Math.PI / 2, 0, 0]}
                />
                <mesh
                  name="Rectangle 6"
                  geometry={nodes['Rectangle 6'].geometry}
                  material={materials.keyboard_2}
                  castShadow
                  receiveShadow
                  position={[-32.75, -500.04, 541.26]}
                  rotation={[-Math.PI / 2, 0, 0]}
                />
                <mesh
                  name="Rectangle 7"
                  geometry={nodes['Rectangle 7'].geometry}
                  material={materials.keyboard_2}
                  castShadow
                  receiveShadow
                  position={[221.26, -500.04, 541.26]}
                  rotation={[-Math.PI / 2, 0, 0]}
                />
                <mesh
                  name="Rectangle 5"
                  geometry={nodes['Rectangle 5'].geometry}
                  material={materials.keyboard_2}
                  castShadow
                  receiveShadow
                  position={[-287.43, -500.04, 541.26]}
                  rotation={[-Math.PI / 2, 0, 0]}
                />
                <mesh
                  name="Rectangle 14"
                  geometry={nodes['Rectangle 14'].geometry}
                  material={materials.keyboard_2}
                  castShadow
                  receiveShadow
                  position={[472.66, -443.95, 523.77]}
                  rotation={[-Math.PI / 2, 0, 0]}
                />
                <mesh
                  name="Rectangle 13"
                  geometry={nodes['Rectangle 13'].geometry}
                  material={materials.keyboard_2}
                  castShadow
                  receiveShadow
                  position={[472.66, -443.95, 558.5]}
                  rotation={[-Math.PI / 2, 0, 0]}
                />
                <mesh
                  name="Rectangle 12"
                  geometry={nodes['Rectangle 12'].geometry}
                  material={materials.keyboard_2}
                  castShadow
                  receiveShadow
                  position={[555.27, -443.95, 558.5]}
                  rotation={[-Math.PI / 2, 0, 0]}
                />
                <mesh
                  name="Rectangle 11"
                  geometry={nodes['Rectangle 11'].geometry}
                  material={materials.keyboard_2}
                  castShadow
                  receiveShadow
                  position={[393.07, -443.95, 558.5]}
                  rotation={[-Math.PI / 2, 0, 0]}
                />
                <mesh
                  name="Rectangle 8"
                  geometry={nodes['Rectangle 8'].geometry}
                  material={materials.keyboard_2}
                  castShadow
                  receiveShadow
                  position={[501.18, -500.04, 463.42]}
                  rotation={[-Math.PI / 2, 0, 0]}
                />
                <mesh
                  name="Rectangle 4"
                  geometry={nodes['Rectangle 4'].geometry}
                  material={materials.keyboard_2}
                  castShadow
                  receiveShadow
                  position={[-493.3, -500.04, 463.42]}
                  rotation={[-Math.PI / 2, 0, 0]}
                />
                <mesh
                  name="Rectangle 9"
                  geometry={nodes['Rectangle 9'].geometry}
                  material={materials.keyboard_2}
                  castShadow
                  receiveShadow
                  position={[520.42, -500.04, 383.9]}
                  rotation={[-Math.PI / 2, 0, 0]}
                />
                <mesh
                  name="Rectangle 3"
                  geometry={nodes['Rectangle 3'].geometry}
                  material={materials.keyboard_2}
                  castShadow
                  receiveShadow
                  position={[-512.8, -500.04, 383.9]}
                  rotation={[-Math.PI / 2, 0, 0]}
                />
                <mesh
                  name="Rectangle 10"
                  geometry={nodes['Rectangle 10'].geometry}
                  material={materials.keyboard_2}
                  castShadow
                  receiveShadow
                  position={[529.76, -500.04, 223.57]}
                  rotation={[-Math.PI / 2, 0, 0]}
                />
                <mesh
                  name="Rectangle 21"
                  geometry={nodes['Rectangle 21'].geometry}
                  material={materials.keyboard_2}
                  castShadow
                  receiveShadow
                  position={[-524.3, -500.04, 302.2]}
                  rotation={[-Math.PI / 2, 0, 0]}
                />
                <mesh
                  name="Rectangle3"
                  geometry={nodes.Rectangle3.geometry}
                  material={materials.keyboard_2}
                  castShadow
                  receiveShadow
                  position={[-522.8, -500.04, 146.36]}
                  rotation={[-Math.PI / 2, 0, 0]}
                />
                <mesh
                  name="keybord_lign5"
                  geometry={nodes.keybord_lign5.geometry}
                  material={materials.keyboard_2}
                  castShadow
                  receiveShadow
                  position={[-422.83, -500.04, 146.36]}
                  rotation={[-Math.PI / 2, 0, 0]}
                />
                <mesh
                  name="keybord_lign6"
                  geometry={nodes.keybord_lign6.geometry}
                  material={materials.keyboard_2}
                  castShadow
                  receiveShadow
                  position={[-542.83, -500.04, 224.01]}
                  rotation={[-Math.PI / 2, 0, 0]}
                />
                <mesh
                  name="keyboard1"
                  geometry={nodes.keyboard1.geometry}
                  material={materials.keyboard}
                  castShadow
                  receiveShadow
                  position={[6.5, -498.7, 343]}
                  rotation={[-Math.PI / 2, 0, 0]}
                  scale={[1, 1, 2.16]}
                />
              </group>
              <group name="trackpad" position={[8.96, -496.56, 816]}>
                <mesh
                  name="trackpad_top"
                  geometry={nodes.trackpad_top.geometry}
                  material={materials.trackpad}
                  castShadow
                  receiveShadow
                  position={[6.5, -497.29, 809.08]}
                  rotation={[-Math.PI / 2, 0, 0]}
                />
                <mesh
                  name="trackpad_border"
                  geometry={nodes.trackpad_border.geometry}
                  material={materials.keyboard}
                  castShadow
                  receiveShadow
                  position={[6.5, -497.45, 809.08]}
                  rotation={[-Math.PI / 2, 0, 0]}
                />
              </group>
              <group name="button_right" position={[637.87, -518.5, 260.07]}>
                <mesh
                  name="Rectangle 91"
                  geometry={nodes['Rectangle 91'].geometry}
                  material={materials['metalic _2']}
                  castShadow
                  receiveShadow
                  position={[780.67, -538.77, 685.5]}
                  rotation={[Math.PI / 2, 1.28, -Math.PI / 2]}
                />
                <mesh
                  name="Rectangle 101"
                  geometry={nodes['Rectangle 101'].geometry}
                  material={materials['metalic _2']}
                  castShadow
                  receiveShadow
                  position={[782.72, -518.5, 155]}
                  rotation={[0, Math.PI / 2, 0]}
                />
                <mesh
                  name="Rectangle 92"
                  geometry={nodes['Rectangle 92'].geometry}
                  material={materials['metalic _2']}
                  castShadow
                  receiveShadow
                  position={[782.72, -516, 234]}
                  rotation={[0, Math.PI / 2, 0]}
                />
                <mesh
                  name="Rectangle 81"
                  geometry={nodes['Rectangle 81'].geometry}
                  material={materials['metalic _2']}
                  castShadow
                  receiveShadow
                  position={[782.72, -515.56, 339.63]}
                  rotation={[0, Math.PI / 2, 0]}
                />
              </group>
              <group name="button_left" position={[750.56, -517.03, 824.62]}>
                <mesh
                  name="Rectangle 82"
                  geometry={nodes['Rectangle 82'].geometry}
                  material={materials['metalic _2']}
                  castShadow
                  receiveShadow
                  position={[-756.36, -535.94, 685.5]}
                  rotation={[Math.PI / 2, -1.23, Math.PI / 2]}
                />
                <mesh
                  name="Rectangle 31"
                  geometry={nodes['Rectangle 31'].geometry}
                  material={materials['metalic _2']}
                  castShadow
                  receiveShadow
                  position={[768.16, -508.04, 908.61]}
                  rotation={[0, Math.PI / 2, 0]}
                />
                <mesh
                  name="Ellipse"
                  geometry={nodes.Ellipse.geometry}
                  material={materials['metalic _2']}
                  castShadow
                  receiveShadow
                  position={[789.48, -509.2, 711.12]}
                  rotation={[0, Math.PI / 2, 0]}
                />
                <mesh
                  name="Rectangle 61"
                  geometry={nodes['Rectangle 61'].geometry}
                  material={materials['metalic _2']}
                  castShadow
                  receiveShadow
                  position={[789.48, -508.54, 765.68]}
                  rotation={[0, Math.PI / 2, 0]}
                />
                <mesh
                  name="Rectangle 51"
                  geometry={nodes['Rectangle 51'].geometry}
                  material={materials['metalic _2']}
                  castShadow
                  receiveShadow
                  position={[789.48, -508.54, 829.78]}
                  rotation={[0, Math.PI / 2, 0]}
                />
                <mesh
                  name="Rectangle 41"
                  geometry={nodes['Rectangle 41'].geometry}
                  material={materials['metalic _2']}
                  castShadow
                  receiveShadow
                  position={[789.48, -508.04, 908.61]}
                  rotation={[0, Math.PI / 2, 0]}
                />
              </group>
            </group>
          </group>
          <OrthographicCamera
            name="Default Camera"
            makeDefault={true}
            far={50000}
            near={-50000}
            position={[40.96, 1.22, 1000]}
          >
            <directionalLight
              name="Default Directional Light"
              intensity={0.6}
              shadow-mapSize-width={1024}
              shadow-mapSize-height={1024}
              shadow-camera-near={-10000}
              shadow-camera-far={100000}
              position={[850000, 1300000, 1000000]}
            />
          </OrthographicCamera>
        </group>
      </>
    )
  }
  