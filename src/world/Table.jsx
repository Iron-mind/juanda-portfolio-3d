import React, { useRef } from "react";
import { useGLTF } from "@react-three/drei";
import { RigidBody } from "@react-three/rapier";

export function Table(props) {
	const { nodes, materials } = useGLTF(
		"/assets/models/game_table/game_table.glb"
	);
	return (
		<group {...props} dispose={null}>
			<group scale={0.01}>
				<RigidBody type="fixed" colliders="trimesh">
					<mesh
						castShadow
						receiveShadow
						geometry={nodes.mesh_Material_0.geometry}
						material={materials.Material}
						rotation={[-Math.PI / 2, 0, 0]}
						scale={100}
					/>
				</RigidBody>
				<mesh
					castShadow
					geometry={nodes.Logo_Material_0.geometry}
					material={materials.Material}
					position={[-156.236, 141.614, 118.337]}
					rotation={[-Math.PI / 2, 0, 0]}
					scale={1.696}
				/>
			</group>
		</group>

	);
}

useGLTF.preload("/assets/models/game_table/game_table.glb");
