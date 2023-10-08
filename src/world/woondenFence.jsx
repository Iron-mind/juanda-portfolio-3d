import React, { useRef } from "react";
import { useGLTF } from "@react-three/drei";
import { useTexture } from "@react-three/drei";
export default function WoodenFence(props) {
	const { nodes, materials } = useGLTF(
		"/assets/models/woodenFence/woodenFence.glb"
	);
	const PATH = "/assets/textures/wood-metal";
	const propTextures = useTexture({
		map: `${PATH}/woodColor.jpg`,
		normalMap: `${PATH}/woodNormal.jpg`,
		aoMap: `${PATH}/woodAO.jpg`,
		roughnessMap: `${PATH}/woodRoughness.jpg`,
		metalnessMap: `${PATH}/woodHeight.png`,
	});

	return (
		<group {...props} dispose={null}>
			<mesh
				castShadow
				// receiveShadow
				geometry={nodes.WoodenFence.geometry}
				// material={nodes.WoodenFence.material}
			>
				<meshStandardMaterial {...propTextures} />
			</mesh>
		</group>
	);
}

useGLTF.preload("/assets/models/woodenFence/woodenFence.glb");
