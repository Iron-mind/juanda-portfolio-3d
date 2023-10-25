import React, { useRef, useState } from "react";
import { useGLTF } from "@react-three/drei";
import { useFrame } from "@react-three/fiber";
import { MathUtils } from "three";


export function Sign(props) {
	const [active, setActive] = useState(false);

	useFrame((state) => {
		// console.log(props.cameraSettings.position);
		state.camera.position.z = MathUtils.lerp(
			state.camera.position.z,
			active ? 9 : 5,
			0.02
		);
	});

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
					onClick={() => {
						props.onClickAboutMe();
						setActive(!active);
					}}
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
					onClick={() => {
						props.onClickProjects();
						setActive(!active);
					}}
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
					onClick={() => {
						props.setCameraSettings({
							position: [0, 0, 10],
							rotation: [0, 0, 0],
						});
						setActive(!active);
						props.setTarget([0, 7, 2]);
					}}
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
