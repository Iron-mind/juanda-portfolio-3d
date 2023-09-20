import "./styles.css";
import ReactDom from "react-dom/client";
import { Experience } from "./Experience";
import { Canvas } from "@react-three/fiber";
import Info from "./components/info";

const root = ReactDom.createRoot(document.querySelector("#root"));
const Biography = `3D Web Developer - React-tree-fiber
GitHub: iron-mind`;

// ...
root.render(
	<div id="app-container">
		<div id="canvas-container">
			<Canvas>
				<Experience />
			</Canvas>
		</div>
		<Info name={"Juan David Tovar"} biography={Biography} />
	</div>
);
