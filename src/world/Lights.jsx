import { useHelper } from "@react-three/drei";
import { useRef } from "react";
import { SpotLightHelper } from "three";

export default function Lights() {
	const spotLightRef = useRef();
	useHelper(spotLightRef, SpotLightHelper, "cyan");
	return (
		<>
			<ambientLight intensity={0.2} />
			<spotLight
				ref={spotLightRef}
				position={[8, 15, 0]}
				angle={Math.PI / 10}
				intensity={4}
				penumbra={0.5}
				castShadow
				distance={60}
			/>
			<directionalLight position={[0, 20, 0]} intensity={0.3} />
		</>
	);
}
