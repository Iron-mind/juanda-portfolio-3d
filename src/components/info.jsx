import React from "react";
import "./Info.css"; // Importa un archivo CSS para estilos específicos de Info

export default function Info({ name, biography }) {
	return (
		<div id="biography">
			<h1 className="info-title">{name}</h1>
			<p className="info-biography">{biography}</p>
		</div>
	);
}
