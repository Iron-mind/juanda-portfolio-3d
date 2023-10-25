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
import { Suspense, useEffect, useRef, useState } from "react";
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
import AboutMe3D from "./world/AboutMe3D";
import { Physics, RigidBody } from "@react-three/rapier";
import { Monitor } from "./world/Monitor";
import { Speakers } from "./world/gadgets/Speakers";
import Phone from "./world/gadgets/Phone";
import { Books } from "./world/gadgets/Books";
import { Jbl } from "./world/gadgets/Jbl";
import { Gamepad } from "./world/gadgets/Gamepad";
import { useSound } from "use-sound";
export function Experience() {
	const boxRef = useRef();
	const sphereRef = useRef();
	const ballBodyRef = useRef();
	const torusRef = useRef();
	const [AboutMe3DActive, setAboutMe3DActive] = useState(false);
	const [cameraSettings, setCameraSettings] = useState({
		position: [4.5, 10, 5],
		fov: 60,
	});
	const [counter, setCounter] = useState(0);

	const [target, setTarget] = useState([4, 7, -2]);
	const [playSound] = useSound("/assets/sounds/videoplayback.m4a", {
		volume: 0.1,
		loop: true,
	});
	const [playing, setPlaying] = useState(false);
	useFrame((state, delta) => {
		boxRef.current && (boxRef.current.rotation.x += 1 * delta);
		//que el cono suba y baje un poco en el eje y
		setCounter(counter + 1 * delta);
		sphereRef.current && (sphereRef.current.position.y = Math.sin(counter) + 8);

		// torusRef.current.position.y = Math.sin(counter);
	});

	function onHandleBall() {
		ballBodyRef.current.applyImpulse(
			{
				x: 35,
				y: 0,
				z: -1,
			},
			true
		);
	}

	return (
		<>
			{/* <Perf /> */}
			<Environments />
			<OrbitControls enableRotate={true} target={target} />
			{/* <ambientLight intensity={0.5} />
			<pointLight position={[10, 0, 10]} /> */}
			<Lights />
			<Suspense fallback={"cargando"}>
				<Sphere
					position={[-9, 9, -3]}
					args={[0.3, 32, 32]}
					ref={sphereRef}
					castShadow
				>
					<meshLambertMaterial color="#53ba83" />
				</Sphere>

				{/* 
				<meshPhysicalMaterial color="#059b9a" />
			</Cone>
			<Torus position={[1, 0, 0]} args={[0.8, 0.4, 22, 90]} ref={torusRef}>
				<meshToonMaterial color="#095169" />
			</Torus> */}

				<Physics>
					<RigidBody colliders="ball" ref={ballBodyRef} restitution={1.5}>
						<Sphere
							position={[-4, 9, -5.6]}
							args={[0.9, 32, 32]}
							onClick={onHandleBall}
							castShadow
						>
							<meshLambertMaterial color="#53ba83" />
						</Sphere>
					</RigidBody>
					<RigidBody colliders="cuboid">
						<Saitama
							position={[8, 6.8, -6.5]}
							scale={0.001}
							castShadow
							// rotation-y={-Math.PI / 2}
						/>
					</RigidBody>
					<RigidBody colliders="cuboid">
						<Luffy
							position={[10, 6.8, -5]}
							scale={0.45}
							rotation-y={-Math.PI / 2}
						/>
					</RigidBody>
					<RigidBody colliders="cuboid">
						<WoodenFence
							position={[9.2, 6.8, -5]}
							scale={1}
							rotation-y={Math.PI / 2}
						/>
					</RigidBody>
					<Goku position={[10, 6.8, -3.5]} scale={0.5} />

					<Table
						position={[0, -3.12, -3]}
						scale={7}
						// rotation-y={-Math.PI * 2}
					/>
					{/* piso */}
					<RigidBody type="fixed">
						<mesh
							position={[0, -3.9, 13]}
							rotation-x={-Math.PI / 2}
							receiveShadow
						>
							<planeGeometry attach={"geometry"} args={[55, 55]} />
							<meshStandardMaterial attach={"material"} color="#F3F6F4" />
						</mesh>
					</RigidBody>
				</Physics>
				<mesh position={[-7, 8, -3]} ref={boxRef} castShadow>
					<boxGeometry args={[1, 1, 1]} />
					<meshStandardMaterial color="#3a9997" />
				</mesh>

				<Sign
					cameraSettings={cameraSettings}
					position={[6, 6.8, 2]}
					onClickAboutMe={() => {
						setAboutMe3DActive(true);
						if (!playing) {
							playSound();
						}
					}}
					onClickProjects={() => {
						setCameraSettings({
							position: [-8, 10, -9],
							fov: 60,
						});
						setTarget([-0.5, 6.8, -2]);
					}}
					setCameraSettings={setCameraSettings}
					setTarget={setTarget}
				>
					<Welcome position={[0, 3, 0]} fontSize={0.2} height={0.1} />
					<AboutMe3D active={AboutMe3DActive} position={[0, 0, 6]} />
				</Sign>
				{/* </Physics> */}
				<Text
					color="white"
					fontSize={0.4}
					position={[0, 7, 5]}
					font="assets/fonts/myfont.ttf"
				>
					Per aspera ad astra
				</Text>
				<Monitor position={[-2, 8, 2]} scale={4} />
				<Laptop position={[2, 7, 2]} scale={0.6} rotation-y={-Math.PI / 8} />
				<Speakers
					position={[-6, 6.8, 2.5]}
					scale={1}
					rotation-y={-Math.PI / 2}
				/>
				<Phone
					position={[-9, 6.8, 4.1]}
					scale={0.3}
					rotation-x={-Math.PI / 2}
				/>
				<Books position={[9, 6.8, 0]} scale={0.05} />
				<Jbl position={[-7, 7.1, 1]} scale={8} rotation-x={-Math.PI / 2} />
				<Gamepad
					position={[-9, 7.2, 0]}
					scale={0.5}
					rotation-x={-Math.PI / 2}
				/>
				{/* <mesh position={[0, 0, -4.5]} rotation-x={2 * Math.PI}>
				<planeGeometry attach={"geometry"} args={[35, 35]} />
				<meshStandardMaterial attach={"material"} color="#CFE2F3" />
			</mesh> */}
			</Suspense>
		</>
	);
}
