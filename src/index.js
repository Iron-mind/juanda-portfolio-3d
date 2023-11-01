import "./styles.css";
import ReactDom from "react-dom/client";
import { Experience } from "./Experience";
import { Canvas } from "@react-three/fiber";
import Info from "./components/info";
import { Loader } from "@react-three/drei";

const root = ReactDom.createRoot(document.querySelector("#root"));
const Biography = `3D Web Developer - React-tree-fiber
GitHub: iron-mind
Toca la taza o la bola sobre la mesa.
También puedes tocar el about me`;

export const cameraSettings = {
	position: [7, 10, 5],
	fov: 60,
};
// ...
root.render(
	<div id="app-container">
		<div id="canvas-container">
			<Canvas camera={cameraSettings} shadows>
				<Experience />
			</Canvas>
			<Loader />
		</div>
		<Info name={"Juan David Tovar"} biography={Biography} />
	</div>
);
