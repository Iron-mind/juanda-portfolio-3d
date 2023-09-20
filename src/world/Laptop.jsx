import { useGLTF } from "@react-three/drei";

export default function Laptop(props) {
	const laptopModel = useGLTF("/assets/models/laptop/scene.gltf");
	return (
		<mesh {...props}>
			<primitive object={laptopModel.scene} />
		</mesh>
	);
}
useGLTF.preload("/assets/models/laptop/scene.gltf");
