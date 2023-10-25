import React, { useRef } from "react";
import { useAnimations, useGLTF } from "@react-three/drei";

import { useEffect } from "react";

export default function Phone(props) {
	const { nodes, materials, animations, scene } = useGLTF(
		"/assets/models/gadgets/smartphone/scene.gltf"
	);

	return (
		<mesh {...props} dispose={null}>
			<primitive object={scene} />
		</mesh>
	);
}

useGLTF.preload("/assets/models/gadgets/smartphone/scene.gltf");
