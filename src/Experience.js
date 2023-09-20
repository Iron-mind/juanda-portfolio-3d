import {
	Center,
	Cone,
	OrbitControls,
	PointerLockControls,
	PresentationControls,
	Sphere,
	Torus,
} from "@react-three/drei";
import { useFrame, useThree } from "@react-three/fiber";
import { useRef, useState } from "react";
import { MeshDepthMaterial } from "three";
import Bee from "./World/Bee";

export function Experience() {
	const [counter, setCounter] = useState(0);
	useFrame((state, delta) => {});

	return (
		<>
			<ambientLight intensity={0.5} />
			<pointLight position={[10, 10, 10]} />
			<Bee />
		</>
	);
}
