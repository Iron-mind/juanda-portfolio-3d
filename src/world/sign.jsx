import React, { useRef } from "react";
import { useGLTF } from "@react-three/drei";

export function Sign(props) {
	const { nodes, materials } = useGLTF("assets/models/sign/sign.glb");
	return (
		<group {...props} dispose={null}>
			{props.children}

			<group>
				<mesh
					castShadow
					receiveShadow
					geometry={nodes.Sign.geometry}
					material={materials.wood}
				/>
				<mesh
					castShadow
					receiveShadow
					geometry={nodes.AboutMe.geometry}
					material={materials.green}
				/>
				<mesh
					castShadow
					receiveShadow
					geometry={nodes.TextAboutMe.geometry}
					material={materials.text}
					position={[0.03, 2.23, 0.087]}
					rotation={[1.559, -0.139, -0.088]}
					scale={0.189}
				/>
				<mesh
					castShadow
					receiveShadow
					geometry={nodes.ContactMe.geometry}
					material={materials.red}
				/>
				<mesh
					castShadow
					receiveShadow
					geometry={nodes.TextContactMe.geometry}
					material={materials.text}
					position={[0.02, 0.95, 0.089]}
					rotation={[Math.PI / 2, 0, -0.087]}
					scale={0.189}
				/>
				<mesh
					castShadow
					receiveShadow
					geometry={nodes.Projects.geometry}
					material={materials.yellow}
				/>
				<mesh
					castShadow
					receiveShadow
					geometry={nodes.TextProjects.geometry}
					material={materials.text}
					position={[0.02, 1.86, 0.092]}
					rotation={[Math.PI / 2, 0, 0.087]}
					scale={0.189}
				/>
				<mesh
					castShadow
					receiveShadow
					geometry={nodes.Skills.geometry}
					material={materials.blue}
				/>
				<mesh
					castShadow
					receiveShadow
					geometry={nodes.TextSkills.geometry}
					material={materials.text}
					position={[0, 1.42, 0.09]}
					rotation={[1.56, 0.122, 0.088]}
					scale={0.189}
				/>
			</group>
		</group>
	);
}

useGLTF.preload("assets/models/sign/sign.glb");
