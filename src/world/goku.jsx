import React, { useRef } from "react";
import { useAnimations, useGLTF } from "@react-three/drei";
import { Mesh } from "three";
import { useEffect } from "react";

export function Goku(props) {
	const { nodes, materials, animations, scene } = useGLTF(
		"/assets/models/goku/scene.gltf"
	);
	const gokuRef = useRef();
	const { actions } = useAnimations(animations, gokuRef);

	useEffect(() => {
		const action = actions["Idle"];
		action.play();
	}, []);
	return (
		<mesh {...props} dispose={null} ref={gokuRef}>
			<primitive object={scene} />
		</mesh>
	);
}

useGLTF.preload("/assets/models/goku/scene.gltf");
