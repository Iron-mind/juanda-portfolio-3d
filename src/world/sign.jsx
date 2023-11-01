import React, { useRef, useState } from "react";
import { Text, useGLTF } from "@react-three/drei";
import { useFrame } from "@react-three/fiber";
import { MathUtils } from "three";

export function Sign(props) {
	const [active, setActive] = useState(false);
	let pos_z;
	useFrame((state) => {
		// console.log(props.cameraSettings.position);
		pos_z = Math.round(state.camera.position.z);
		if (pos_z >= 5 && pos_z <= 9) {
			state.camera.position.z = MathUtils.lerp(
				state.camera.position.z,
				active ? 9 : 5,
				0.02
			);
		}
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
				<Text
					position={[0.03, 1.82, 0.099]}
					scale={0.6}
					color="black"
					fontSize={0.3}
					maxWidth={1}
					lineHeight={1}
					letterSpacing={0}
				>
					All
				</Text>

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
			</group>
		</group>
	);
}

useGLTF.preload("assets/models/sign/sign.glb");
