import React from "react";
import { useEffect } from "react";
import { useContext } from "react";
import MainContext from "../../Context/MainContext";
import "./DarkMode.css";

export default function DarkMode() {

	const { darkMode, 
		toggleDarkMode } = 
		useContext(MainContext);

	const rootVar = 
	document.documentElement.style;

	useEffect(() => { if (darkMode) dark() ; else light() ; });

	function handleOnClick(e) {
		document.querySelector('#switch').classList.toggle('active');
		toggleDarkMode(e, darkMode)
	}

	function light() {
		rootVar.setProperty("--FondoApp", "#FFFFFF");
		rootVar.setProperty("--Cards", "#000000");
		rootVar.setProperty("--Letras1", "#FFFFFF");
		rootVar.setProperty("--Letras2", "#3700B3");
		rootVar.setProperty("--Letras3", "#FFFFFF");
		rootVar.setProperty("--BackForm", "#FFFFFF8F");
		rootVar.setProperty("--BackLog", "#FFFFFF5e");
		rootVar.setProperty("--BackCard", "#0000005e");
		rootVar.setProperty("--HLog", "#03DAC6");
		rootVar.setProperty("--Trailer", "#000000");
		rootVar.setProperty("--TrailerD", "#FFFFFF");
		rootVar.setProperty("--Boton", "#018786");
		rootVar.setProperty("--BotonDark", "#343d5b");
	}

	function dark() {
		rootVar.setProperty("--FondoApp", "#000000");
		rootVar.setProperty("--Cards", "#FFFFFF");
		rootVar.setProperty("--Letras1", "#000000");
		rootVar.setProperty("--Letras2", "#03DAC6");
		rootVar.setProperty("--Letras3", "#03DAC6");
		rootVar.setProperty("--BackForm", "#FFFFFF");
		rootVar.setProperty("--BackLog", "#0000005e");
		rootVar.setProperty("--BackCard", "#FFFFFF5e");
		rootVar.setProperty("--HLog", "#FFFFFF");
		rootVar.setProperty("--Trailer", "#03DAC6");
		rootVar.setProperty("--TrailerD", "#03DAC6");
		rootVar.setProperty("--Boton", "#03DAC6");
		rootVar.setProperty("--BotonDark", "aqua");
	}

	return (
		<>
			<button className="switch" id="switch" onClick={(e) => handleOnClick(e)}>
			</button>
		</>
	)
}