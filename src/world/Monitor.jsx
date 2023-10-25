import React, { useRef } from "react";
import { useGLTF } from "@react-three/drei";

export function Monitor(props) {
	const { nodes, materials } = useGLTF(
		"/assets/models/monitor/desktop_computer.glb"
	);
	return (
		<group {...props} dispose={null}>
			<group
				name="Sketchfab_model"
				rotation={[-Math.PI / 2, 0, 0]}
				scale={0.501}
			>
				<group name="Collada_visual_scene_group" rotation={[Math.PI / 2, 0, 0]}>
					<mesh
						name="defaultMaterial"
						castShadow
						receiveShadow
						geometry={nodes.defaultMaterial.geometry}
						material={materials["01___Default"]}
					/>
					<mesh
						name="defaultMaterial_1"
						castShadow
						receiveShadow
						geometry={nodes.defaultMaterial_1.geometry}
						material={materials["01___Default"]}
					/>
					<mesh
						name="defaultMaterial_2"
						castShadow
						receiveShadow
						geometry={nodes.defaultMaterial_2.geometry}
						material={materials["01___Default"]}
					/>
					<mesh
						name="defaultMaterial_3"
						castShadow
						receiveShadow
						geometry={nodes.defaultMaterial_3.geometry}
						material={materials["01___Default"]}
					/>
					<mesh
						name="defaultMaterial_4"
						castShadow
						receiveShadow
						geometry={nodes.defaultMaterial_4.geometry}
						material={materials["01___Default"]}
					/>
					<mesh
						name="defaultMaterial_5"
						castShadow
						receiveShadow
						geometry={nodes.defaultMaterial_5.geometry}
						material={materials["01___Default"]}
					/>
				</group>
			</group>
		</group>
	);
}

useGLTF.preload("assets/models/monitor/desktop_computer.glb");
