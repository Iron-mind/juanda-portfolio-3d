import { useRef } from "react";

export default function Lights({ target }) {
	const spotLightRef = useRef();

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
			<directionalLight position={[9, 20, 0]} intensity={0.2} />
		</>
	);
}
