import React, { useRef } from "react";
import { useGLTF } from "@react-three/drei";

export function Table(props) {
	const { nodes, materials } = useGLTF(
		"/assets/models/table/office_table_-_mesa_de_escritorio.glb"
	);
	return (
		<group {...props} dispose={null}>
			<group rotation={[-Math.PI / 2, 0, 0]}>
				<mesh
					castShadow
					receiveShadow
					geometry={nodes.Object_3.geometry}
					material={materials.material_0}
					position={[-71.505, -37.717, -0.001]}
				/>
			</group>
		</group>
	);
}

useGLTF.preload("/assets/models/table/office_table_-_mesa_de_escritorio.glb");
