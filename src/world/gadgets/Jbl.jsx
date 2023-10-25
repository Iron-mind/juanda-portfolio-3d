import React, { useRef } from "react";
import { useGLTF } from "@react-three/drei";

export function Jbl(props) {
	const { nodes, materials } = useGLTF("/assets/models/gadgets/jbl.glb");
	return (
		<group {...props} dispose={null}>
			<group position={[0, 0.054, 0]} scale={0.01}>
				<mesh
					castShadow
					receiveShadow
					geometry={nodes.Object_32.geometry}
					material={materials.C_Hinge}
				/>
				<mesh
					castShadow
					receiveShadow
					geometry={nodes.Object_33.geometry}
					material={materials.Empty_material}
				/>
			</group>
			<mesh
				castShadow
				receiveShadow
				geometry={nodes.Object_4.geometry}
				material={materials.Audio_Jack}
				position={[0.044, 0.009, 0]}
				scale={0.01}
			/>
			<mesh
				castShadow
				receiveShadow
				geometry={nodes.Object_6.geometry}
				material={materials.Rubber}
				position={[0, 0.091, 0]}
				scale={0.01}
			/>
			<mesh
				castShadow
				receiveShadow
				geometry={nodes.Object_8.geometry}
				material={materials.Headband_Cushion}
				position={[0, 0.173, 0]}
				scale={0.01}
			/>
			<mesh
				castShadow
				receiveShadow
				geometry={nodes.Object_10.geometry}
				material={materials.Headband}
				position={[0, 0.143, 0]}
				scale={0.01}
			/>
			<mesh
				castShadow
				receiveShadow
				geometry={nodes.Object_12.geometry}
				material={materials.Buttons}
				position={[0.046, 0.013, 0.006]}
				scale={0.01}
			/>
			<mesh
				castShadow
				receiveShadow
				geometry={nodes.Object_14.geometry}
				material={materials.Black}
				position={[0.046, 0.015, 0.006]}
				scale={0.01}
			/>
			<mesh
				castShadow
				receiveShadow
				geometry={nodes.Object_16.geometry}
				material={materials.Ear_Cup}
				position={[0, 0.041, 0]}
				scale={0.01}
			/>
			<mesh
				castShadow
				receiveShadow
				geometry={nodes.Object_18.geometry}
				material={materials.Ear_Cup_Glossy}
				position={[0, 0.031, 0]}
				scale={0.01}
			/>
			<mesh
				castShadow
				receiveShadow
				geometry={nodes.Object_20.geometry}
				material={materials.Speaker_Cover_Fabric}
				position={[0, 0.043, 0]}
				scale={0.01}
			/>
			<mesh
				castShadow
				receiveShadow
				geometry={nodes.Object_22.geometry}
				material={materials.Pin_Hinge}
				position={[0, 0.09, 0]}
				scale={0.01}
			/>
			<mesh
				castShadow
				receiveShadow
				geometry={nodes.Object_24.geometry}
				material={materials.Hinge_Aluminum}
				position={[0, 0.091, 0]}
				scale={0.01}
			/>
			<mesh
				castShadow
				receiveShadow
				geometry={nodes.Object_26.geometry}
				material={materials.Ear_Cushion}
				position={[0, 0.046, 0]}
				scale={0.01}
			/>
			<mesh
				castShadow
				receiveShadow
				geometry={nodes.Object_28.geometry}
				material={materials.Power_LED}
				position={[0.047, 0.015, -0.024]}
				scale={0.01}
			/>
			<mesh
				castShadow
				receiveShadow
				geometry={nodes.Object_30.geometry}
				material={materials.Buttons_Glossy}
				position={[0.046, 0.013, 0.006]}
				scale={0.01}
			/>
			<mesh
				castShadow
				receiveShadow
				geometry={nodes.Object_35.geometry}
				material={materials.C_Hinge_Glossy}
				position={[0, 0.086, 0]}
				scale={0.01}
			/>
			<mesh
				castShadow
				receiveShadow
				geometry={nodes.Object_37.geometry}
				material={materials.Speaker_Cover_Fabric_Letter}
				position={[0, 0.043, 0]}
				scale={0.01}
			/>
		</group>
	);
}

useGLTF.preload("/assets/models/gadgets/jbl.glb");
