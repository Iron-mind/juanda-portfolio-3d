import React, { useRef, useState } from "react";
import { useSpring, animated } from "@react-spring/three";
import { Html, Text } from "@react-three/drei";

function AboutMe3D(props) {
	const textRef = useRef();

	const { position } = useSpring({
		position: props.active ? [0, 2, 4] : [0, -30, 0],
		from: { position: props.active ? [0, -30, 0] : [0, 2, 1] },
		config: { mass: 10, tension: 1000, friction: 300, precision: 0.0001 },
	});

	return (
		<animated.group scale={0.025} position={position}>
			<Text
				ref={textRef}
				fontSize={5}
				position={[0, 0, 0]}
				color={"green"}
				strokeColor={"black"}
				strokeWidth={0.01}
				position-z={0.1}
			>
				{aboutMeText}
			</Text>
			<mesh>
				<planeBufferGeometry attach="geometry" args={[110, 45]} />
				<meshBasicMaterial
					attach="material"
					color="black"
					transparent
					opacity={0.7}
				/>
			</mesh>
		</animated.group>
	);
}

export default AboutMe3D;

var aboutMeText = `Juan David Tovar es un joven colombiano con  
experiencia en el campo de desarrollo web y  
programación. tiene habilidades en tecnologías  
como JavaScript, React.js y Angular. Además, se    
le atribuye haber trabajado como desarrollador  
web Full Stack.`;
