import React, { useRef } from "react";
import { useGLTF } from "@react-three/drei";

export function Gamepad(props) {
	const { nodes, materials } = useGLTF("assets/models/gadgets/gamepad.glb");
	return (
		<group {...props} dispose={null}>
			<mesh
				castShadow
				receiveShadow
				geometry={nodes.Object_4.geometry}
				material={materials.lowpoly}
			/>
			<mesh
				castShadow
				receiveShadow
				geometry={nodes.Object_6.geometry}
				material={materials.lowpoly}
				position={[0.453, 0.182, 0.055]}
				rotation={[-Math.PI / 2, 0, 0]}
			/>
			<mesh
				castShadow
				receiveShadow
				geometry={nodes.Object_8.geometry}
				material={materials.lowpoly}
				position={[-0.381, -0.257, 0.101]}
				rotation={[-Math.PI / 2, 0, 0]}
			/>
			<mesh
				castShadow
				receiveShadow
				geometry={nodes.Object_10.geometry}
				material={materials.lowpoly}
				position={[0.374, -0.313, 0.001]}
			/>
			<mesh
				castShadow
				receiveShadow
				geometry={nodes.Object_12.geometry}
				material={materials.lowpoly}
				position={[-0.632, 0.292, 0.001]}
			/>
			<mesh
				castShadow
				receiveShadow
				geometry={nodes.Object_14.geometry}
				material={materials.lowpoly}
				position={[-0.007, 0.246, -0.043]}
			/>
			<mesh
				castShadow
				receiveShadow
				geometry={nodes.Object_16.geometry}
				material={materials.lowpoly}
				position={[0.221, 0.254, 0.055]}
			/>
			<mesh
				castShadow
				receiveShadow
				geometry={nodes.Object_18.geometry}
				material={materials.lowpoly}
				position={[-0.704, 0.663, -0.128]}
			/>
			<mesh
				castShadow
				receiveShadow
				geometry={nodes.Object_20.geometry}
				material={materials.lowpoly}
				position={[-1.712, 0.631, -0.414]}
			/>
			<mesh
				castShadow
				receiveShadow
				geometry={nodes.Object_22.geometry}
				material={materials.lowpoly}
				position={[0, -0.44, -0.285]}
			/>
		</group>
	);
}

useGLTF.preload("assets/models/gadgets/gamepad.glb");
