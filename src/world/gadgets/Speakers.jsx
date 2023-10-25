import React, { useRef } from "react";
import { useGLTF } from "@react-three/drei";

export function Speakers(props) {
	const { nodes, materials } = useGLTF("assets/models/gadgets/speakers.glb");
	return (
		<group {...props} dispose={null}>
			<group scale={0.01}>
				<group
					position={[-19.573, 35.741, 56.169]}
					rotation={[-Math.PI / 2, 0, 0]}
					scale={34.66}
				>
					<mesh
						castShadow
						receiveShadow
						geometry={nodes.Speaker_01_Speaker_0.geometry}
						material={materials.Speaker}
					/>
					<mesh
						castShadow
						receiveShadow
						geometry={nodes.Speaker_01_Led_0.geometry}
						material={materials.material}
					/>
					<mesh
						castShadow
						receiveShadow
						geometry={nodes.Speaker_01_Plastic_2_0.geometry}
						material={materials.Plastic_2}
					/>
					<mesh
						castShadow
						receiveShadow
						geometry={nodes.Speaker_01_Plastic_0.geometry}
						material={materials.Plastic}
					/>
				</group>
				<group
					position={[-239.046, 4.214, -60.912]}
					rotation={[-Math.PI / 2, 0, 0]}
					scale={6.426}
				>
					<mesh
						castShadow
						receiveShadow
						geometry={nodes.Cable_02_Plastic_Cable_0.geometry}
						material={materials.Plastic_Cable}
					/>
					<mesh
						castShadow
						receiveShadow
						geometry={nodes.Cable_02_Plastic_2_0.geometry}
						material={materials.Plastic_2}
					/>
					<mesh
						castShadow
						receiveShadow
						geometry={nodes["Cable_02_Metal}_0"].geometry}
						material={materials.Metal}
					/>
				</group>
				<group
					position={[-19.573, 35.741, -59.091]}
					rotation={[-Math.PI / 2, 0, 0]}
					scale={34.66}
				>
					<mesh
						castShadow
						receiveShadow
						geometry={nodes.Speaker_02_Speaker_0.geometry}
						material={materials.Speaker}
					/>
					<mesh
						castShadow
						receiveShadow
						geometry={nodes.Speaker_02_Led_0.geometry}
						material={materials.material}
					/>
					<mesh
						castShadow
						receiveShadow
						geometry={nodes.Speaker_02_Plastic_2_0.geometry}
						material={materials.Plastic_2}
					/>
					<mesh
						castShadow
						receiveShadow
						geometry={nodes.Speaker_02_Plastic_0.geometry}
						material={materials.Plastic}
					/>
				</group>
				<mesh
					castShadow
					receiveShadow
					geometry={nodes.Cable_01_Plastic_Cable_0.geometry}
					material={materials.Plastic_Cable}
					position={[-48.973, 39.476, -59.153]}
					rotation={[-Math.PI / 2, 0, 0]}
					scale={34.66}
				/>
				<mesh
					castShadow
					receiveShadow
					geometry={nodes.Control_box_Plastic_2_0.geometry}
					material={materials.Plastic_2}
					position={[-225.56, 4.95, -45.671]}
					rotation={[-Math.PI / 2, 0, 0.724]}
					scale={[38.492, 38.492, 37.487]}
				/>
			</group>
		</group>
	);
}

useGLTF.preload("assets/models/gadgets/speakers.glb");
