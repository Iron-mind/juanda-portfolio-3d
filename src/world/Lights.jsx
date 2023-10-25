import { useHelper } from "@react-three/drei";
import { useRef } from "react";
import { SpotLightHelper } from "three";

export default function Lights({ target }) {
	const spotLightRef = useRef();
	useHelper(spotLightRef, SpotLightHelper, "cyan");
	return (
		<>
			<ambientLight intensity={0.2} />
			<spotLight
				ref={spotLightRef}
				position={[-13, 13, -4]}
				angle={-Math.PI / 10}
				intensity={10}
				penumbra={0.5}
				castShadow
				distance={60}
			/>
			<directionalLight position={[0, 20, 0]} intensity={0.3} />
		</>
	);
}
