import "./styles.css";
import ReactDom from "react-dom/client";
import { Experience } from "./Experience";
import { Canvas } from "@react-three/fiber";
import Info from "./components/info";

const root = ReactDom.createRoot(document.querySelector("#root"));
const Biography = `Descripción hecha por un tercero:  Si alguna vez te encuentras en apuros con un problema de programación, Juan David es tu "Sherlock Holmes de la programación". No importa cuán enredado sea el código, él lo desentrañará con una sonrisa y te dirá que es "pan comido". En cuanto a su vida social, bueno, digamos que Juan David prefiere el mundo digital al mundo real. Sus amigos son principalmente líneas de código y sus conversaciones giran en torno a los últimos avances en inteligencia artificial. Aunque a veces parece que está hablando en otro idioma, siempre lo hace con una pasión y entusiasmo contagiosos.`;

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
