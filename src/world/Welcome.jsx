import React from "react";
import { Center, Float, Text, Text3D } from "@react-three/drei";

function Welcome(props) {
	return (
		<Float
			speed={2} // Animation speed
			rotationIntensity={1.5} // XYZ rotation intensity
			floatIntensity={2}
		>
			<Center position-y={3}>
				<Text3D
					color="white"
					font="assets/fonts/myFont.json"
					{...props}
					size={props.fontSize || 0.3}
				>
					Welcome to my portfolio!
				</Text3D>
			</Center>
		</Float>
	);
}

export default Welcome;
