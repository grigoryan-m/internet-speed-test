"use strict";

document.addEventListener("DOMContentLoaded", () => {
	const speedField = document.getElementById("speedField");

	try {
		speedField.innerText = "Your average internet speed is " + navigator.connection.downlink + " mb/s";
	} catch (error) {
		speedField.innerText = "Your browser doesn't support this feature :(";
	}
});
