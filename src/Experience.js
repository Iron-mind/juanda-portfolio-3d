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
import Laptop from "./world/Laptop";
import { Table } from "./world/Table";
import { Goku } from "./world/goku";
import { Saitama } from "./world/Saitama";

export function Experience() {
	const boxRef = useRef();
	const sphereRef = useRef();
	const coneRef = useRef();
	const torusRef = useRef();
	const [counter, setCounter] = useState(0);
	useFrame((state, delta) => {
		boxRef.current.rotation.x += 1 * delta;
		//que el cono suba y baje un poco en el eje y
		setCounter(counter + 1 * delta);
		sphereRef.current.position.y = Math.sin(counter) + 8;
		// coneRef.current.position.y = Math.cos(counter);
		// torusRef.current.position.y = Math.sin(counter);
	});

	return (
		<>
			<OrbitControls enableRotate={true} target={[0, 7, 0]} />
			<ambientLight intensity={0.5} />
			<pointLight position={[10, 10, 10]} />

			<Sphere position={[-5, 7, 0]} args={[1, 32, 32]} ref={sphereRef}>
				<meshLambertMaterial color="#53ba83" />
			</Sphere>
			{/* <Cone position={[-2, 0, 0]} args={[1, 2, 32]} ref={coneRef}>
				<meshPhysicalMaterial color="#059b9a" />
			</Cone>
			<Torus position={[1, 0, 0]} args={[0.8, 0.4, 22, 90]} ref={torusRef}>
				<meshToonMaterial color="#095169" />
			</Torus> */}
			<Goku position={[-2, 6.8, 2]} scale={0.5} />
			<Saitama position={[2, 6.8, 2]} scale={0.001} />
			<Laptop position={[0, 7, 2]} scale={0.7} />
			<Table position={[0, 0, 0]} scale={0.1} rotation-y={Math.PI} />
			<mesh position={[4, 8, 0]} ref={boxRef}>
				<boxGeometry args={[1, 1, 1]} />
				<meshStandardMaterial color="#3a9997" />
			</mesh>
		</>
	);
}
