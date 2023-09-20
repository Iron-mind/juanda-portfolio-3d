import { useGLTF } from "@react-three/drei";

export default function Bee() {
	const beeModel = useGLTF("/assets/model/bee/scene.gltf");
	return (
		<mesh>
			<primitive
				object={beeModel.scene}
				position-x={2}
				rotation-y={-Math.PI * 0.15}
				scale={2}
			/>
		</mesh>
	);
}

useGLTF.preload("/assets/model/bee/scene.gltf");
