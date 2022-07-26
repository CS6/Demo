/*
Auto-generated by: https://github.com/pmndrs/gltfjsx
*/

import React, { useRef, useEffect } from 'react'
import { useGLTF, useAnimations } from '@react-three/drei'

export default function Model(props) {
  const group = useRef()
  const { nodes, materials, animations } = useGLTF('/bikeHold_Draco.gltf')
  const { actions } = useAnimations(animations, group)

  useEffect(() => {
    // console.log("actions",actions)
    actions['Line14_Steel_0Action.003'].play()
    actions['空體Action.001'].play()
  })
  return (
    <group ref={group} {...props} dispose={null}>
      <group position={[-0.25, -23.5, -8.66]} rotation={[Math.PI / 2, 0, 0]} scale={[0.15, 0.15, 0.15]}>
        <group rotation={[-Math.PI, 0, 0]}>
          <group position={[-0.04, 1.51, 66.53]} rotation={[-0.94, 0, -1.57]} scale={[0.29, 0.29, 0.29]}>
            <mesh geometry={nodes.ChamferCyl17_Body_0.geometry} material={nodes.ChamferCyl17_Body_0.material} />
          </group>
          <group position={[-0.03, 1.96, 66.86]} rotation={[-0.94, 0, -1.57]} scale={[0.29, 0.29, 0.29]}>
            <mesh geometry={nodes.ChamferCyl18_Body_0.geometry} material={nodes.ChamferCyl18_Body_0.material} />
          </group>
          <group position={[-0.04, -2.65, 73.25]} rotation={[-0.94, 0, -1.57]} scale={[0.29, 0.29, 0.29]}>
            <mesh geometry={nodes.ChamferCyl19_Body_0.geometry} material={nodes.ChamferCyl19_Body_0.material} />
          </group>
          <group position={[-0.04, -3.11, 72.92]} rotation={[-0.94, 0, -1.57]} scale={[0.29, 0.29, 0.29]}>
            <mesh geometry={nodes.ChamferCyl20_Body_0.geometry} material={nodes.ChamferCyl20_Body_0.material} />
          </group>
          <group position={[-0.03, 10.35, 50.32]} rotation={[0.65, 0, 0]} scale={[0.18, 0.26, 0.26]}>
            <mesh geometry={nodes.Cylinder74_Body_0.geometry} material={nodes.Cylinder74_Body_0.material} />
          </group>
          <group position={[-0.06, -51.58, 118.47]} rotation={[-0.36, 0, 0]} scale={[0.26, 0.26, 0.26]}>
            <mesh geometry={nodes.Cylinder77_Body_0.geometry} material={nodes.Cylinder77_Body_0.material} />
          </group>
          <group position={[0.31, 11.57, 98.61]} rotation={[Math.PI / 2, -1.57, 0]} scale={[0.26, 0.26, 0.26]}>
            <mesh geometry={nodes.Line175_Shiny_Black_0.geometry} material={nodes.Line175_Shiny_Black_0.material} />
          </group>
          <group position={[-0.03, -32.85, 126.34]} rotation={[1.16, 0, 0]} scale={[0.47, 0.41, 0.47]}>
            <group position={[-0.79, -0.58, -1.27]}>
              <mesh geometry={nodes.Rectangle05_Body_0.geometry} material={nodes.Rectangle05_Body_0.material} />
            </group>
          </group>
        </group>
      </group>
      <group position={[-0.28, -1.83, -1.61]} rotation={[-0.71, 0, Math.PI]} scale={[0.39, 0.39, 0.39]}>
        <group rotation={[Math.PI / 2, 0, 0]}>
          <group position={[0, 0.65, 0.74]}>
            <mesh
              geometry={nodes.Vehicle_Mobile_Phone_Holder_Shiny_Metal_Dark_Grey_0.geometry}
              material={nodes.Vehicle_Mobile_Phone_Holder_Shiny_Metal_Dark_Grey_0.material}
            />
          </group>
        </group>
      </group>
      <group name="空體" position={[-0.26, -4.87, -1.41]} rotation={[-0.36, -0.01, 0.01]}>
        <group name="Line14" position={[-0.04, -10.82, 2.78]} rotation={[-2.78, -1.57, 3.14]} scale={[0.04, 0.04, 0.04]}>
          <group name="Line14_Steel_0" position={[-33.09, -47.4, -0.01]} rotation={[0, 0, -3.14]}>
            <mesh geometry={nodes.Line14_Steel_0_1.geometry} material={nodes.Line14_Steel_0_1.material} />
            <mesh geometry={nodes.Line14_Steel_0_2.geometry} material={nodes.Line14_Steel_0_2.material} />
            <mesh geometry={nodes.Line14_Steel_0_3.geometry} material={nodes.Line14_Steel_0_3.material} />
          </group>
        </group>
        <group position={[-0.12, -12.1, 0.92]} rotation={[-1.21, 0, -1.57]} scale={[0.04, 0.04, 0.04]}>
          <group position={[36.05, 0, 192.17]} rotation={[0, 0.19, Math.PI]}>
            <mesh geometry={nodes.Cylinder144_Rubber_0.geometry} material={nodes.Cylinder144_Rubber_0.material} />
          </group>
        </group>
        <group position={[0.03, -12.1, 0.92]} rotation={[0.38, 0, 1.57]} scale={[0.04, 0.04, 0.04]}>
          <group position={[193.78, 0, 24.15]} rotation={[0, 1.47, Math.PI]}>
            <mesh geometry={nodes.Cylinder193_Rubber_0.geometry} material={nodes.Cylinder193_Rubber_0.material} />
          </group>
        </group>
        <mesh
          geometry={nodes.Box02_Shiny_Black_0.geometry}
          material={nodes.Box02_Shiny_Black_0.material}
          position={[-3.69, 2.8, 1.67]}
          rotation={[-0.75, -0.1, -1.77]}
          scale={[0.01, 0.02, 0.01]}
        />
        <mesh
          geometry={nodes.Box03_Shiny_Black_0.geometry}
          material={nodes.Box03_Shiny_Black_0.material}
          position={[3.67, 2.79, 1.68]}
          rotation={[2.39, -0.1, -1.77]}
          scale={[-0.01, -0.02, -0.01]}
        />
        <mesh
          geometry={nodes.ChamferBox01_Shiny_Black_0.geometry}
          material={nodes.ChamferBox01_Shiny_Black_0.material}
          position={[0, 1.94, 1.7]}
          rotation={[-1.21, 0, -1.57]}
          scale={[0.04, 0.04, 0.04]}
        />
        <mesh
          geometry={nodes.ChamferCyl02_Shiny_Black_0.geometry}
          material={nodes.ChamferCyl02_Shiny_Black_0.material}
          position={[0.39, 2.36, 1.79]}
          rotation={[-2.78, -1.57, -3.14]}
          scale={[0.04, 0.04, 0.04]}
        />
        <mesh
          geometry={nodes.ChamferCyl25_Shiny_Black_0.geometry}
          material={nodes.ChamferCyl25_Shiny_Black_0.material}
          position={[2.01, -11.53, -0.66]}
          rotation={[-1.18, -Math.PI / 2, 0]}
          scale={[0.04, 0.04, 0.04]}
        />
        <mesh
          geometry={nodes.ChamferCyl35_Steel_0.geometry}
          material={nodes.ChamferCyl35_Steel_0.material}
          position={[1.83, -10.79, -0.81]}
          rotation={[-1.9, 0, 3.14]}
          scale={[0.04, 0.04, 0.04]}
        />
        <mesh
          geometry={nodes.ChamferCyl36_Steel_0.geometry}
          material={nodes.ChamferCyl36_Steel_0.material}
          position={[1.83, -10.82, -0.8]}
          rotation={[-1.9, 0, 3.14]}
          scale={[0.04, 0.04, 0.04]}
        />
        <mesh
          geometry={nodes.Cylinder126_Shiny_Black_0.geometry}
          material={nodes.Cylinder126_Shiny_Black_0.material}
          position={[0, 0.57, 0.02]}
          rotation={[-1.57, 0, -1.57]}
          scale={[0.04, 0.04, 0.04]}
        />
        <mesh
          geometry={nodes.Cylinder127_Shiny_Black_0.geometry}
          material={nodes.Cylinder127_Shiny_Black_0.material}
          position={[-1.66, -5.57, 0.47]}
          rotation={[-1.57, 0, 0]}
          scale={[0.04, 0.04, 0.04]}
        />
        <mesh
          geometry={nodes.Cylinder129_Shiny_Black_0.geometry}
          material={nodes.Cylinder129_Shiny_Black_0.material}
          position={[1.68, -5.57, 0.47]}
          rotation={[1.58, 0, 0]}
          scale={[-0.04, -0.04, -0.04]}
        />
        <mesh
          geometry={nodes.Cylinder134_Rubber_0.geometry}
          material={nodes.Cylinder134_Rubber_0.material}
          position={[-0.13, -12.33, 8.55]}
          rotation={[0.04, 0, 1.57]}
          scale={[0.04, 0.04, 0.04]}
        />
        <mesh
          geometry={nodes.Cylinder135_Rubber_0.geometry}
          material={nodes.Cylinder135_Rubber_0.material}
          position={[-0.13, -11.55, 8.53]}
          rotation={[-0.06, 0, 1.57]}
          scale={[0.04, 0.04, 0.04]}
        />
        <mesh
          geometry={nodes.Cylinder136_Rubber_0.geometry}
          material={nodes.Cylinder136_Rubber_0.material}
          position={[-0.13, -10.72, 8.43]}
          rotation={[-0.17, 0, 1.57]}
          scale={0.04}
        />
        <mesh
          geometry={nodes.Cylinder137_Rubber_0.geometry}
          material={nodes.Cylinder137_Rubber_0.material}
          position={[-0.13, -9.91, 8.24]}
          rotation={[-0.28, 0, 1.57]}
          scale={[0.04, 0.04, 0.04]}
        />
        <mesh
          geometry={nodes.Cylinder138_Rubber_0.geometry}
          material={nodes.Cylinder138_Rubber_0.material}
          position={[-0.12, -9.16, 7.96]}
          rotation={[-0.38, 0, 1.57]}
          scale={[0.04, 0.04, 0.04]}
        />
        <mesh
          geometry={nodes.Cylinder139_Rubber_0.geometry}
          material={nodes.Cylinder139_Rubber_0.material}
          position={[-0.12, -8.43, 7.62]}
          rotation={[-0.49, 0, 1.57]}
          scale={[0.04, 0.04, 0.04]}
        />
        <mesh
          geometry={nodes.Cylinder13_Steel_0.geometry}
          material={nodes.Cylinder13_Steel_0.material}
          position={[-0.04, -5.95, 0.1]}
          rotation={[-1.6, 0.21, 1.58]}
          scale={[-0.02, -0.02, -0.02]}
        />
        <mesh
          geometry={nodes.Cylinder140_Rubber_0.geometry}
          material={nodes.Cylinder140_Rubber_0.material}
          position={[-0.12, -7.74, 7.19]}
          rotation={[-0.6, 0, 1.57]}
          scale={[0.04, 0.04, 0.04]}
        />
        <mesh
          geometry={nodes.Cylinder141_Rubber_0.geometry}
          material={nodes.Cylinder141_Rubber_0.material}
          position={[-0.12, -7.11, 6.71]}
          rotation={[-0.7, 0, 1.57]}
          scale={[0.04, 0.04, 0.04]}
        />
        <mesh
          geometry={nodes.Cylinder142_Rubber_0.geometry}
          material={nodes.Cylinder142_Rubber_0.material}
          position={[-0.12, -6.53, 6.15]}
          rotation={[-0.81, 0, 1.57]}
          scale={[0.04, 0.04, 0.04]}
        />
        <mesh
          geometry={nodes.Cylinder143_Rubber_0.geometry}
          material={nodes.Cylinder143_Rubber_0.material}
          position={[-0.12, -6.03, 5.57]}
          rotation={[-0.91, 0, 1.57]}
          scale={[0.04, 0.04, 0.04]}
        />
        <mesh
          geometry={nodes.Cylinder145_Rubber_0.geometry}
          material={nodes.Cylinder145_Rubber_0.material}
          position={[-0.12, -5.19, 4.19]}
          rotation={[-1.13, 0, 1.57]}
          scale={[0.04, 0.04, 0.04]}
        />
        <mesh
          geometry={nodes.Cylinder146_Rubber_0.geometry}
          material={nodes.Cylinder146_Rubber_0.material}
          position={[-0.12, -4.88, 3.43]}
          rotation={[-1.23, 0, 1.57]}
          scale={[0.04, 0.04, 0.04]}
        />
        <mesh
          geometry={nodes.Cylinder147_Rubber_0.geometry}
          material={nodes.Cylinder147_Rubber_0.material}
          position={[-0.12, -4.65, 2.65]}
          rotation={[-1.34, 0, 1.57]}
          scale={[0.04, 0.04, 0.04]}
        />
        <mesh
          geometry={nodes.Cylinder148_Rubber_0.geometry}
          material={nodes.Cylinder148_Rubber_0.material}
          position={[-0.12, -4.51, 1.85]}
          rotation={[-1.45, 0, 1.57]}
          scale={[0.04, 0.04, 0.04]}
        />
        <mesh
          geometry={nodes.Cylinder149_Rubber_0.geometry}
          material={nodes.Cylinder149_Rubber_0.material}
          position={[-0.12, -4.45, 1.04]}
          rotation={[-1.55, 0, 1.57]}
          scale={[0.04, 0.04, 0.04]}
        />
        <mesh
          geometry={nodes.Cylinder150_Rubber_0.geometry}
          material={nodes.Cylinder150_Rubber_0.material}
          position={[-0.12, -4.48, 0.23]}
          rotation={[-1.66, 0, 1.57]}
          scale={[0.04, 0.04, 0.04]}
        />
        <mesh
          geometry={nodes.Cylinder151_Rubber_0.geometry}
          material={nodes.Cylinder151_Rubber_0.material}
          position={[-0.12, -4.6, -0.58]}
          rotation={[-1.77, 0, 1.57]}
          scale={0.04}
        />
        <mesh
          geometry={nodes.Cylinder172_Rubber_0.geometry}
          material={nodes.Cylinder172_Rubber_0.material}
          position={[-0.12, -17.65, -4.42]}
          rotation={[-0.86, 0, -1.57]}
          scale={[0.04, 0.04, 0.04]}
        />
        <mesh
          geometry={nodes.Cylinder194_Rubber_0.geometry}
          material={nodes.Cylinder194_Rubber_0.material}
          position={[0.03, -5.8, 5.24]}
          rotation={[-0.98, 0, -1.57]}
          scale={[0.04, 0.04, 0.04]}
        />
        <mesh
          geometry={nodes.Cylinder195_Rubber_0.geometry}
          material={nodes.Cylinder195_Rubber_0.material}
          position={[0.03, -6.3, 5.89]}
          rotation={[-0.87, 0, -1.57]}
          scale={[0.04, 0.04, 0.04]}
        />
        <mesh
          geometry={nodes.Cylinder196_Rubber_0.geometry}
          material={nodes.Cylinder196_Rubber_0.material}
          position={[0.03, -6.84, 6.45]}
          rotation={[-0.77, 0, -1.57]}
          scale={[0.04, 0.04, 0.04]}
        />
        <mesh
          geometry={nodes.Cylinder197_Rubber_0.geometry}
          material={nodes.Cylinder197_Rubber_0.material}
          position={[0.03, -7.48, 7]}
          rotation={[-0.66, 0, -1.57]}
          scale={[0.04, 0.04, 0.04]}
        />
        <mesh
          geometry={nodes.Cylinder198_Rubber_0.geometry}
          material={nodes.Cylinder198_Rubber_0.material}
          position={[0.03, -8.16, 7.46]}
          rotation={[-0.55, 0, -1.57]}
          scale={[0.04, 0.04, 0.04]}
        />
        <mesh
          geometry={nodes.Cylinder199_Rubber_0.geometry}
          material={nodes.Cylinder199_Rubber_0.material}
          position={[0.03, -8.87, 7.83]}
          rotation={[-0.45, 0, -1.57]}
          scale={[0.04, 0.04, 0.04]}
        />
        <mesh
          geometry={nodes.Cylinder200_Rubber_0.geometry}
          material={nodes.Cylinder200_Rubber_0.material}
          position={[0.03, -9.62, 8.14]}
          rotation={[-0.34, 0, -1.57]}
          scale={[0.04, 0.04, 0.04]}
        />
        <mesh
          geometry={nodes.Cylinder201_Rubber_0.geometry}
          material={nodes.Cylinder201_Rubber_0.material}
          position={[0.03, -10.4, 8.37]}
          rotation={[-0.24, 0, -1.57]}
          scale={[0.04, 0.04, 0.04]}
        />
        <mesh
          geometry={nodes.Cylinder202_Rubber_0.geometry}
          material={nodes.Cylinder202_Rubber_0.material}
          position={[0.03, -11.18, 8.51]}
          rotation={[-0.13, 0, -1.57]}
          scale={[0.04, 0.04, 0.04]}
        />
        <mesh
          geometry={nodes.Cylinder203_Rubber_0.geometry}
          material={nodes.Cylinder203_Rubber_0.material}
          position={[0.03, -11.99, 8.56]}
          rotation={[-0.02, 0, -1.57]}
          scale={[0.04, 0.04, 0.04]}
        />
        <mesh
          geometry={nodes.Cylinder204_Rubber_0.geometry}
          material={nodes.Cylinder204_Rubber_0.material}
          position={[0.03, -12.74, 8.54]}
          rotation={[0.08, 0, -1.57]}
          scale={[0.04, 0.04, 0.04]}
        />
        <mesh
          geometry={nodes.Cylinder245_Rubber_0.geometry}
          material={nodes.Cylinder245_Rubber_0.material}
          position={[0.03, -4.56, -0.71]}
          rotation={[1.41, 0, 1.57]}
          scale={[0.04, 0.04, 0.04]}
        />
        <mesh
          geometry={nodes.Cylinder246_Rubber_0.geometry}
          material={nodes.Cylinder246_Rubber_0.material}
          position={[0.03, -4.44, 0.08]}
          rotation={[1.52, 0, 1.57]}
          scale={[0.04, 0.04, 0.04]}
        />
        <mesh
          geometry={nodes.Cylinder247_Rubber_0.geometry}
          material={nodes.Cylinder247_Rubber_0.material}
          position={[0.03, -4.43, 1.49]}
          rotation={[1.63, 0, 1.57]}
          scale={[0.04, 0.04, 0.04]}
        />
        <mesh
          geometry={nodes.Cylinder248_Rubber_0.geometry}
          material={nodes.Cylinder248_Rubber_0.material}
          position={[0.03, -4.52, 2.33]}
          rotation={[1.73, 0, 1.57]}
          scale={[0.04, 0.04, 0.04]}
        />
        <mesh
          geometry={nodes.Cylinder249_Rubber_0.geometry}
          material={nodes.Cylinder249_Rubber_0.material}
          position={[0.03, -4.73, 3.12]}
          rotation={[1.84, 0, 1.57]}
          scale={[0.04, 0.04, 0.04]}
        />
        <mesh
          geometry={nodes.Cylinder250_Rubber_0.geometry}
          material={nodes.Cylinder250_Rubber_0.material}
          position={[0.03, -4.99, 3.89]}
          rotation={[1.94, 0, 1.57]}
          scale={[0.04, 0.04, 0.04]}
        />
        <mesh
          geometry={nodes.Cylinder251_Rubber_0.geometry}
          material={nodes.Cylinder251_Rubber_0.material}
          position={[0.03, -4.4, 0.87]}
          rotation={[1.63, 0, 1.57]}
          scale={[0.04, 0.04, 0.04]}
        />
        <mesh
          geometry={nodes.Cylinder290_Rubber_0.geometry}
          material={nodes.Cylinder290_Rubber_0.material}
          position={[-0.57, -4.66, -0.15]}
          rotation={[1.46, 0.81, 1.57]}
          scale={[0.04, 0.04, 0.04]}
        />
        <mesh
          geometry={nodes.Cylinder291_Rubber_0.geometry}
          material={nodes.Cylinder291_Rubber_0.material}
          position={[-0.53, -4.54, 0.66]}
          rotation={[1.57, 0.81, 1.57]}
          scale={[0.04, 0.04, 0.04]}
        />
        <mesh
          geometry={nodes.Cylinder292_Rubber_0.geometry}
          material={nodes.Cylinder292_Rubber_0.material}
          position={[-0.52, -4.56, 1.43]}
          rotation={[1.68, 0.81, 1.57]}
          scale={[0.04, 0.04, 0.04]}
        />
        <mesh
          geometry={nodes.Cylinder293_Rubber_0.geometry}
          material={nodes.Cylinder293_Rubber_0.material}
          position={[-0.57, -4.69, 2.2]}
          rotation={[1.79, 0.81, 1.57]}
          scale={[0.04, 0.04, 0.04]}
        />
        <mesh
          geometry={nodes.Cylinder294_Rubber_0.geometry}
          material={nodes.Cylinder294_Rubber_0.material}
          position={[-0.58, -4.87, 3]}
          rotation={[1.89, 0.81, 1.57]}
          scale={[0.04, 0.04, 0.04]}
        />
        <mesh
          geometry={nodes.Cylinder295_Rubber_0.geometry}
          material={nodes.Cylinder295_Rubber_0.material}
          position={[-0.56, -5.13, 3.75]}
          rotation={[2, 0.81, 1.57]}
          scale={[0.04, 0.04, 0.04]}
        />
        <mesh
          geometry={nodes.Cylinder296_Rubber_0.geometry}
          material={nodes.Cylinder296_Rubber_0.material}
          position={[-0.57, -5.47, 4.47]}
          rotation={[2.1, 0.81, 1.57]}
          scale={[0.04, 0.04, 0.04]}
        />
        <mesh
          geometry={nodes.Cylinder297_Rubber_0.geometry}
          material={nodes.Cylinder297_Rubber_0.material}
          position={[-0.54, -5.87, 5.18]}
          rotation={[2.21, 0.81, 1.57]}
          scale={[0.04, 0.04, 0.04]}
        />
        <mesh
          geometry={nodes.Cylinder298_Rubber_0.geometry}
          material={nodes.Cylinder298_Rubber_0.material}
          position={[-0.58, -6.35, 5.77]}
          rotation={[2.32, 0.81, 1.57]}
          scale={[0.04, 0.04, 0.04]}
        />
        <mesh
          geometry={nodes.Cylinder299_Rubber_0.geometry}
          material={nodes.Cylinder299_Rubber_0.material}
          position={[-0.56, -6.88, 6.36]}
          rotation={[2.42, 0.81, 1.57]}
          scale={[0.04, 0.04, 0.04]}
        />
        <mesh
          geometry={nodes.Cylinder300_Rubber_0.geometry}
          material={nodes.Cylinder300_Rubber_0.material}
          position={[-0.54, -7.42, 6.85]}
          rotation={[2.53, 0.81, 1.57]}
          scale={[0.04, 0.04, 0.04]}
        />
        <mesh
          geometry={nodes.Cylinder301_Rubber_0.geometry}
          material={nodes.Cylinder301_Rubber_0.material}
          position={[-0.55, -8.08, 7.3]}
          rotation={[2.64, 0.81, 1.57]}
          scale={[0.04, 0.04, 0.04]}
        />
        <mesh
          geometry={nodes.Cylinder302_Rubber_0.geometry}
          material={nodes.Cylinder302_Rubber_0.material}
          position={[-0.56, -8.8, 7.7]}
          rotation={[2.74, 0.81, 1.57]}
          scale={[0.04, 0.04, 0.04]}
        />
        <mesh
          geometry={nodes.Cylinder303_Rubber_0.geometry}
          material={nodes.Cylinder303_Rubber_0.material}
          position={[-0.56, -9.52, 8]}
          rotation={[2.85, 0.81, 1.57]}
          scale={[0.04, 0.04, 0.04]}
        />
        <mesh
          geometry={nodes.Cylinder304_Rubber_0.geometry}
          material={nodes.Cylinder304_Rubber_0.material}
          position={[-0.56, -10.27, 8.23]}
          rotation={[2.96, 0.81, 1.57]}
          scale={[0.04, 0.04, 0.04]}
        />
        <mesh
          geometry={nodes.Cylinder305_Rubber_0.geometry}
          material={nodes.Cylinder305_Rubber_0.material}
          position={[-0.56, -11.05, 8.38]}
          rotation={[3.06, 0.81, 1.57]}
          scale={[0.04, 0.04, 0.04]}
        />
        <mesh
          geometry={nodes.Cylinder306_Rubber_0.geometry}
          material={nodes.Cylinder306_Rubber_0.material}
          position={[-0.56, -11.84, 8.44]}
          rotation={[-3.11, 0.81, 1.57]}
          scale={[0.04, 0.04, 0.04]}
        />
        <mesh
          geometry={nodes.Cylinder311_Rubber_0.geometry}
          material={nodes.Cylinder311_Rubber_0.material}
          position={[-0.57, -12.61, 8.42]}
          rotation={[-3.01, 0.81, 1.57]}
          scale={[0.04, 0.04, 0.04]}
        />
        <mesh
          geometry={nodes.Cylinder34_Steel_0.geometry}
          material={nodes.Cylinder34_Steel_0.material}
          position={[-0.05, -5.92, 1.46]}
          rotation={[-1.57, -0.19, -1.59]}
          scale={[-0.02, -0.02, -0.02]}
        />
        <mesh
          geometry={nodes.Cylinder350_Rubber_0.geometry}
          material={nodes.Cylinder350_Rubber_0.material}
          position={[0.48, -4.66, -0.15]}
          rotation={[-1.68, 0.81, 1.57]}
          scale={[-0.04, -0.04, -0.04]}
        />
        <mesh
          geometry={nodes.Cylinder351_Rubber_0.geometry}
          material={nodes.Cylinder351_Rubber_0.material}
          position={[0.44, -4.54, 0.66]}
          rotation={[-1.57, 0.81, 1.57]}
          scale={[-0.04, -0.04, -0.04]}
        />
        <mesh
          geometry={nodes.Cylinder352_Rubber_0.geometry}
          material={nodes.Cylinder352_Rubber_0.material}
          position={[0.43, -4.56, 1.43]}
          rotation={[-1.46, 0.81, 1.57]}
          scale={[-0.04, -0.04, -0.04]}
        />
        <mesh
          geometry={nodes.Cylinder353_Rubber_0.geometry}
          material={nodes.Cylinder353_Rubber_0.material}
          position={[0.47, -4.69, 2.2]}
          rotation={[-1.35, 0.81, 1.57]}
          scale={[-0.04, -0.04, -0.04]}
        />
        <mesh
          geometry={nodes.Cylinder354_Rubber_0.geometry}
          material={nodes.Cylinder354_Rubber_0.material}
          position={[0.48, -4.87, 3]}
          rotation={[-1.25, 0.81, 1.57]}
          scale={[-0.04, -0.04, -0.04]}
        />
        <mesh
          geometry={nodes.Cylinder355_Rubber_0.geometry}
          material={nodes.Cylinder355_Rubber_0.material}
          position={[0.47, -5.13, 3.75]}
          rotation={[-1.14, 0.81, 1.57]}
          scale={[-0.04, -0.04, -0.04]}
        />
        <mesh
          geometry={nodes.Cylinder356_Rubber_0.geometry}
          material={nodes.Cylinder356_Rubber_0.material}
          position={[0.47, -5.47, 4.47]}
          rotation={[-1.04, 0.81, 1.57]}
          scale={[-0.04, -0.04, -0.04]}
        />
        <mesh
          geometry={nodes.Cylinder357_Rubber_0.geometry}
          material={nodes.Cylinder357_Rubber_0.material}
          position={[0.44, -5.87, 5.18]}
          rotation={[-0.93, 0.81, 1.57]}
          scale={[-0.04, -0.04, -0.04]}
        />
        <mesh
          geometry={nodes.Cylinder358_Rubber_0.geometry}
          material={nodes.Cylinder358_Rubber_0.material}
          position={[0.48, -6.35, 5.77]}
          rotation={[-0.82, 0.81, 1.57]}
          scale={[-0.04, -0.04, -0.04]}
        />
        <mesh
          geometry={nodes.Cylinder359_Rubber_0.geometry}
          material={nodes.Cylinder359_Rubber_0.material}
          position={[0.46, -6.88, 6.36]}
          rotation={[-0.72, 0.81, 1.57]}
          scale={[-0.04, -0.04, -0.04]}
        />
        <mesh
          geometry={nodes.Cylinder360_Rubber_0.geometry}
          material={nodes.Cylinder360_Rubber_0.material}
          position={[0.44, -7.42, 6.85]}
          rotation={[-0.61, 0.81, 1.57]}
          scale={[-0.04, -0.04, -0.04]}
        />
        <mesh
          geometry={nodes.Cylinder361_Rubber_0.geometry}
          material={nodes.Cylinder361_Rubber_0.material}
          position={[0.44, -8.08, 7.3]}
          rotation={[-0.5, 0.81, 1.57]}
          scale={[-0.04, -0.04, -0.04]}
        />
        <mesh
          geometry={nodes.Cylinder362_Rubber_0.geometry}
          material={nodes.Cylinder362_Rubber_0.material}
          position={[0.46, -8.8, 7.7]}
          rotation={[-0.4, 0.81, 1.57]}
          scale={[-0.04, -0.04, -0.04]}
        />
        <mesh
          geometry={nodes.Cylinder363_Rubber_0.geometry}
          material={nodes.Cylinder363_Rubber_0.material}
          position={[0.46, -9.52, 8]}
          rotation={[-0.29, 0.81, 1.57]}
          scale={[-0.04, -0.04, -0.04]}
        />
        <mesh
          geometry={nodes.Cylinder364_Rubber_0.geometry}
          material={nodes.Cylinder364_Rubber_0.material}
          position={[0.46, -10.27, 8.23]}
          rotation={[-0.19, 0.81, 1.57]}
          scale={[-0.04, -0.04, -0.04]}
        />
        <mesh
          geometry={nodes.Cylinder365_Rubber_0.geometry}
          material={nodes.Cylinder365_Rubber_0.material}
          position={[0.46, -11.05, 8.38]}
          rotation={[-0.08, 0.81, 1.57]}
          scale={[-0.04, -0.04, -0.04]}
        />
        <mesh
          geometry={nodes.Cylinder366_Rubber_0.geometry}
          material={nodes.Cylinder366_Rubber_0.material}
          position={[0.46, -11.84, 8.44]}
          rotation={[0.03, 0.81, 1.57]}
          scale={[-0.04, -0.04, -0.04]}
        />
        <mesh
          geometry={nodes.Cylinder371_Rubber_0.geometry}
          material={nodes.Cylinder371_Rubber_0.material}
          position={[0.46, -12.61, 8.42]}
          rotation={[0.14, 0.81, 1.57]}
          scale={[-0.04, -0.04, -0.04]}
        />
        <mesh
          geometry={nodes.Cylinder37_Shiny_Black_0.geometry}
          material={nodes.Cylinder37_Shiny_Black_0.material}
          position={[-0.04, -1.88, 0.01]}
          rotation={[-1.57, 0, -1.57]}
          scale={[0.04, 0.04, 0.04]}
        />
        <mesh
          geometry={nodes.Cylinder38_Shiny_Black_0.geometry}
          material={nodes.Cylinder38_Shiny_Black_0.material}
          position={[-1.32, -12.1, 0.91]}
          rotation={[-2.78, -1.57, -3.14]}
          scale={[0.04, 0.04, 0.04]}
        />
        <mesh
          geometry={nodes.Cylinder39_Rubber_0.geometry}
          material={nodes.Cylinder39_Rubber_0.material}
          position={[-3.49, 3.28, 1.27]}
          rotation={[-2.78, -1.57, -3.14]}
          scale={[0.04, 0.04, 0.04]}
        />
        <mesh
          geometry={nodes.Cylinder43_Shiny_Black_0.geometry}
          material={nodes.Cylinder43_Shiny_Black_0.material}
          position={[3.65, 2.56, 1.95]}
          rotation={[0.36, 1.57, 3.14]}
          scale={[0.04, 0.04, 0.04]}
        />
        <mesh
          geometry={nodes.Cylinder44_Shiny_Black_0.geometry}
          material={nodes.Cylinder44_Shiny_Black_0.material}
          position={[3.03, 2.56, 1.94]}
          rotation={[-2.78, -1.57, -3.14]}
          scale={[0.04, 0.04, 0.04]}
        />
        <mesh
          geometry={nodes.Cylinder46_Shiny_Black_0.geometry}
          material={nodes.Cylinder46_Shiny_Black_0.material}
          position={[-3.5, 2.77, 1.68]}
          rotation={[-0.74, 0, -1.57]}
          scale={[0.04, 0.04, 0.04]}
        />
        <mesh
          geometry={nodes.Cylinder650_Shiny_Black_0.geometry}
          material={nodes.Cylinder650_Shiny_Black_0.material}
          position={[0, 2.02, 0.24]}
          rotation={[-0.21, 0, 0]}
          scale={[0.04, 0.04, 0.04]}
        />
        <mesh
          geometry={nodes.Cylinder652_Steel_0.geometry}
          material={nodes.Cylinder652_Steel_0.material}
          position={[-0.19, 2.2, -0.51]}
          rotation={[0.36, 1.57, 3.14]}
          scale={[0.01, 0.01, 0.01]}
        />
        <mesh
          geometry={nodes.Cylinder653_Steel_0.geometry}
          material={nodes.Cylinder653_Steel_0.material}
          position={[-0.18, 2.2, -0.51]}
          rotation={[0.36, 1.57, -2.49]}
          scale={[0.01, 0.01, 0.01]}
        />
        <mesh
          geometry={nodes.Cylinder654_Steel_0.geometry}
          material={nodes.Cylinder654_Steel_0.material}
          position={[0.12, 2.2, -0.51]}
          rotation={[0.36, 1.57, 3.14]}
          scale={[0.01, 0.01, 0.01]}
        />
        <mesh
          geometry={nodes.Cylinder658_Rubber_0.geometry}
          material={nodes.Cylinder658_Rubber_0.material}
          position={[3.48, 3.28, 1.27]}
          rotation={[-2.78, -1.57, 0]}
          scale={[-0.04, -0.04, -0.04]}
        />
        <mesh
          geometry={nodes.Cylinder715_Shiny_Black_0.geometry}
          material={nodes.Cylinder715_Shiny_Black_0.material}
          position={[-3.03, 2.56, 1.94]}
          rotation={[-2.78, -1.57, 0]}
          scale={[-0.04, -0.04, -0.04]}
        />
        <mesh
          geometry={nodes.Cylinder716_Shiny_Black_0.geometry}
          material={nodes.Cylinder716_Shiny_Black_0.material}
          position={[-3.77, 2.56, 1.94]}
          rotation={[0.36, 1.57, 3.14]}
          scale={[0.04, 0.04, 0.04]}
        />
        <mesh
          geometry={nodes.Cylinder730_Shiny_Black_0.geometry}
          material={nodes.Cylinder730_Shiny_Black_0.material}
          position={[3.48, 2.77, 1.69]}
          rotation={[2.4, 0, -1.57]}
          scale={[-0.04, -0.04, -0.04]}
        />
        <mesh
          geometry={nodes.Cylinder866_Shiny_Black_0.geometry}
          material={nodes.Cylinder866_Shiny_Black_0.material}
          position={[-2.8, 2.8, 1.72]}
          rotation={[-2.78, -1.57, 0]}
          scale={[-0.04, -0.04, -0.04]}
        />
        <mesh
          geometry={nodes.Cylinder870_Steel_0.geometry}
          material={nodes.Cylinder870_Steel_0.material}
          position={[1.9, -10.93, -0.77]}
          rotation={[0.36, 1.57, 2.79]}
          scale={[0, 0, 0]}
        />
        <mesh
          geometry={nodes.Line165_Shiny_Black_0.geometry}
          material={nodes.Line165_Shiny_Black_0.material}
          position={[-4.81, 2.3, 2]}
          rotation={[-0.76, 0, 0]}
          scale={[0.06, 0.06, 0.05]}
        />
        <mesh
          geometry={nodes.Line168_Shiny_Black_0.geometry}
          material={nodes.Line168_Shiny_Black_0.material}
          position={[2.79, 3.06, 1.29]}
          rotation={[-2.78, -1.57, -0.46]}
          scale={[-0.03, -0.03, -0.03]}
        />
        <mesh
          geometry={nodes.Line38_Shiny_Black_0.geometry}
          material={nodes.Line38_Shiny_Black_0.material}
          position={[4.68, 2.64, 1.63]}
          rotation={[-0.52, 0, -1.57]}
          scale={[0.04, 0.04, 0.04]}
        />
        <mesh
          geometry={nodes.Line39_Shiny_Black_0.geometry}
          material={nodes.Line39_Shiny_Black_0.material}
          position={[-2.79, 3.06, 1.28]}
          rotation={[0.82, -1.57, 0]}
          scale={[0.03, 0.03, 0.03]}
        />
        <mesh
          geometry={nodes.Line40_Shiny_Black_0.geometry}
          material={nodes.Line40_Shiny_Black_0.material}
          position={[4.79, 2.3, 2.01]}
          rotation={[2.38, 0, 0]}
          scale={[-0.06, -0.06, -0.05]}
        />
        <mesh
          geometry={nodes.Line48_Shiny_Black_0.geometry}
          material={nodes.Line48_Shiny_Black_0.material}
          position={[1.79, -3.57, 0.87]}
          rotation={[-2.78, -1.57, -3.14]}
          scale={[0.04, 0.04, 0.04]}
        />
        <mesh
          geometry={nodes.Star01_Steel_0.geometry}
          material={nodes.Star01_Steel_0.material}
          position={[1.22, -12.1, 0.91]}
          rotation={[-2.78, -1.57, -2.92]}
          scale={[0.04, 0.04, 0.04]}
        />
        <mesh
          geometry={nodes.Star03_Shiny_Black_0.geometry}
          material={nodes.Star03_Shiny_Black_0.material}
          position={[3.16, 2.56, 1.94]}
          rotation={[-2.78, -1.57, 3.14]}
          scale={[0, 0, 0]}
        />
        <mesh
          geometry={nodes.Star15_Shiny_Black_0.geometry}
          material={nodes.Star15_Shiny_Black_0.material}
          position={[3.13, 2.56, 1.94]}
          rotation={[0.36, -1.57, 0]}
          scale={[0, 0, 0]}
        />
        <mesh
          geometry={nodes.Star16_Shiny_Black_0.geometry}
          material={nodes.Star16_Shiny_Black_0.material}
          position={[-3.16, 2.56, 1.94]}
          rotation={[-2.78, -1.57, 0]}
          scale={[0, 0, 0]}
        />
        <mesh
          geometry={nodes.Star17_Shiny_Black_0.geometry}
          material={nodes.Star17_Shiny_Black_0.material}
          position={[-3.13, 2.56, 1.94]}
          rotation={[-2.78, -1.57, 0]}
          scale={[0, 0, 0]}
        />
        <mesh
          geometry={nodes.Torus24_Steel_0.geometry}
          material={nodes.Torus24_Steel_0.material}
          position={[-0.04, -5.96, 0.1]}
          rotation={[-1.71, 0, 1.57]}
          scale={[-0.02, -0.02, -0.02]}
        />
        <mesh
          geometry={nodes.Torus29_Steel_0.geometry}
          material={nodes.Torus29_Steel_0.material}
          position={[-0.04, -9.5, 6.53]}
          rotation={[2.71, 0, -1.57]}
          scale={[0.02, 0.02, 0.02]}
        />
        <mesh
          geometry={nodes.Torus42_Steel_0.geometry}
          material={nodes.Torus42_Steel_0.material}
          position={[-0.06, -7.87, 5.44]}
          rotation={[-0.74, 0, -1.57]}
          scale={[-0.02, -0.02, -0.02]}
        />
        <mesh
          geometry={nodes.Torus43_Steel_0.geometry}
          material={nodes.Torus43_Steel_0.material}
          position={[-0.06, -8.56, 5.99]}
          rotation={[-0.59, 0, -1.57]}
          scale={[-0.02, -0.02, -0.02]}
        />
        <mesh
          geometry={nodes.Torus44_Steel_0.geometry}
          material={nodes.Torus44_Steel_0.material}
          position={[-0.05, -6.12, 2.51]}
          rotation={[-1.32, 0, -1.57]}
          scale={[-0.02, -0.02, -0.02]}
        />
        <mesh
          geometry={nodes.Torus45_Steel_0.geometry}
          material={nodes.Torus45_Steel_0.material}
          position={[-0.05, -5.93, 1.46]}
          rotation={[-1.5, 0, -1.57]}
          scale={[-0.02, -0.02, -0.02]}
        />
        <mesh
          geometry={nodes.Tube14_Steel_0.geometry}
          material={nodes.Tube14_Steel_0.material}
          position={[-0.05, -6.01, 0.1]}
          rotation={[-1.6, 0.21, 2.37]}
          scale={[-0.02, -0.02, -0.01]}
        />
        <mesh
          geometry={nodes.Tube156_Steel_0.geometry}
          material={nodes.Tube156_Steel_0.material}
          position={[-3.29, 3.27, 1.27]}
          rotation={[0.36, 1.57, 2.02]}
          scale={[-0.01, -0.01, -0.01]}
        />
        <mesh
          geometry={nodes.Tube157_Shiny_Black_0.geometry}
          material={nodes.Tube157_Shiny_Black_0.material}
          position={[-3.73, 2.56, 1.95]}
          rotation={[2.38, -1.57, 0]}
          scale={[-0.01, -0.01, -0.01]}
        />
        <mesh
          geometry={nodes.Tube158_Steel_0.geometry}
          material={nodes.Tube158_Steel_0.material}
          position={[1.86, -10.93, -0.77]}
          rotation={[-2.78, -1.57, -1.13]}
          scale={[0.04, 0.04, 0.04]}
        />
        <mesh
          geometry={nodes.Tube39_Shiny_Black_0.geometry}
          material={nodes.Tube39_Shiny_Black_0.material}
          position={[0, 1.6, 0.01]}
          rotation={[-1.57, 0, -1.57]}
          scale={[0.04, 0.04, 0.04]}
        />
        <mesh
          geometry={nodes.Tube40_Shiny_Black_0.geometry}
          material={nodes.Tube40_Shiny_Black_0.material}
          position={[3.72, 2.55, 1.95]}
          rotation={[-2.78, -1.57, -2.02]}
          scale={[0.01, 0.01, 0.01]}
        />
        <mesh
          geometry={nodes.Tube41_Steel_0.geometry}
          material={nodes.Tube41_Steel_0.material}
          position={[3.28, 3.27, 1.27]}
          rotation={[-0.76, 1.57, 0]}
          scale={[0.01, 0.01, 0.01]}
        />
      </group>
    </group>
  )
}

useGLTF.preload('/bikeHold_Draco.gltf')
