import React, { useRef } from "react";
import { useAnimations, useGLTF } from "@react-three/drei";

import { useEffect } from "react";

export function Saitama(props) {
	const { nodes, materials, animations, scene } = useGLTF(
		"/assets/models/saitama/scene.gltf"
	);
	const saitamaRef = useRef();
	const { actions } = useAnimations(animations, saitamaRef);
	// console.log(animations);
	// useEffect(() => {
	// 	const action = actions["Take 001"];
	// 	action.play();
	// }, []);
	return (
		<mesh {...props} dispose={null} ref={saitamaRef}>
			<primitive object={scene} castShadow />
		</mesh>
	);
}

useGLTF.preload("/assets/models/saitama/scene.gltf");
