"use strict";

document.addEventListener("DOMContentLoaded", () => {
	const speedField = document.getElementById("speedField");

	speedField.innerText = "Your average internet speed is " + navigator.connection.downlink + " mb/s";
});
