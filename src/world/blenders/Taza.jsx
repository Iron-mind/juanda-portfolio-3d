import React, { useRef } from "react";
import { useGLTF } from "@react-three/drei";

export function MiTaza(props) {
	const { nodes, materials } = useGLTF("assets/models/gadgets/mitaza.glb");
	return (
		<group {...props} dispose={null}>
			<mesh
				castShadow
				receiveShadow
				geometry={nodes.Taza2.geometry}
				material={materials["Taza-juanda"]}
				position={[-0.366, 0.166, -0.442]}
				scale={0.776}
			/>
		</group>
	);
}

useGLTF.preload("assets/models/gadgets/mitaza.glb");
