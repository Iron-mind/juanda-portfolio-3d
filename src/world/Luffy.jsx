import React, { useRef } from "react";
import { useAnimations, useGLTF } from "@react-three/drei";

import { useEffect } from "react";

export default function Luffy(props) {
	const { nodes, materials, animations, scene } = useGLTF(
		"/assets/models/luffy/scene.gltf"
	);
	const luffyRef = useRef();
	const { actions } = useAnimations(animations, luffyRef);

	useEffect(() => {
		const action = actions["punch"];
		action.play();
	}, []);
	useEffect(() => {
		console.log("luffyRef.current", luffyRef.current);
	}, []);
	return (
		<mesh {...props} dispose={null} ref={luffyRef}>
			<primitive object={scene} />
		</mesh>
	);
}

useGLTF.preload("/assets/models/luffy/scene.gltf");
