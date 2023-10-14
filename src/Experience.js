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
import { Suspense, useRef, useState } from "react";
import { MeshDepthMaterial } from "three";
import Laptop from "./world/Laptop";
import { Table } from "./world/Table";
import { Goku } from "./world/goku";
import { Saitama } from "./world/Saitama";
import WoodenFence from "./world/woondenFence";
import Luffy from "./world/Luffy";
import Lights from "./world/Lights";
import Environments from "./world/Enviroment";
import { Perf } from "r3f-perf";
import { Sign } from "./world/sign";
import Welcome from "./world/Welcome";
import { Text } from "@react-three/drei";

export function Experience() {
	const boxRef = useRef();
	const sphereRef = useRef();
	const coneRef = useRef();
	const torusRef = useRef();
	const [counter, setCounter] = useState(0);
	useFrame((state, delta) => {
		boxRef.current && (boxRef.current.rotation.x += 1 * delta);
		//que el cono suba y baje un poco en el eje y
		setCounter(counter + 1 * delta);
		sphereRef.current && (sphereRef.current.position.y = Math.sin(counter) + 8);
		// coneRef.current.position.y = Math.cos(counter);
		// torusRef.current.position.y = Math.sin(counter);
	});

	return (
		<>
			{/* <Perf /> */}
			<Environments />
			<OrbitControls enableRotate={true} target={[0, 7, 0]} />
			{/* <ambientLight intensity={0.5} />
			<pointLight position={[10, 0, 10]} /> */}
			<Lights />
			<Suspense fallback={null}>
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
				<Saitama position={[2, 6.8, 2]} scale={0.001} castShadow />
				<Luffy
					position={[-4.3, 6.8, 2]}
					scale={0.45}
					rotation-y={-Math.PI / 2}
				/>
				<Laptop position={[0, 7, 2]} scale={0.5} />
				<Table position={[0, 0, 0]} scale={0.1} rotation-y={Math.PI} />
				<mesh position={[4, 8, 0]} ref={boxRef} castShadow>
					<boxGeometry args={[1, 1, 1]} />
					<meshStandardMaterial color="#3a9997" />
				</mesh>
				<WoodenFence
					position={[-5, 6.8, 2]}
					scale={1}
					rotation-y={Math.PI / 2}
				/>
				{/* piso */}
				<mesh position={[0, 0, 13]} rotation-x={-Math.PI / 2} receiveShadow>
					<planeGeometry attach={"geometry"} args={[35, 35]} />
					<meshStandardMaterial attach={"material"} color="#F3F6F4" />
				</mesh>
				<Sign position={[4, 6.8, 2]}>
					<Welcome position={[0, 3, 0]} fontSize={0.2} height={0.1} />
				</Sign>
				<Text
					color="white"
					fontSize={0.4}
					position={[0, 7, 4]}
					font="assets/fonts/myfont.ttf"
				>
					Per aspera ad astra
				</Text>
				{/* <mesh position={[0, 0, -4.5]} rotation-x={2 * Math.PI}>
				<planeGeometry attach={"geometry"} args={[35, 35]} />
				<meshStandardMaterial attach={"material"} color="#CFE2F3" />
			</mesh> */}
			</Suspense>
		</>
	);
}
