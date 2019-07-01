"use strict";

window.onload = function(event) {
	document.getElementById("copyright-year").textContent = (new Date()).getFullYear();

	function display(seek, destroy, result) {

	}

	function execute(seek, destroy) {
		// freecodecamp environment version
		// let args = Array.prototype.slice.call(arguments);
		// let seek = args[0];
		// let destroy = args.slice(1);
		// let newArray = [];
		  
		// for (let i = 0; i < seek.length; i++) {
		//   if (destroy.indexOf(seek[i]) === -1) {
		//     newArray.push(seek[i]);
		//   }
		// }

		// return newArray;

		// web version
		// accounts for white space
		if (!seek || !destroy) {
			return display("Enter values", "???", "???");
		} else {
			let seeker = seek.split(" ").join("").split("");
			let destroyer = destroy.split(" ").join("").split("");
			let result = [];

			for (let i = 0; i < seeker.length; i++) {
				if (destroyer.indexOf(seeker[i]) === -1) {
					result.push(seeker[i]);
				}
			}

			return display(result);
		}

		
	}

	function toggle(chevron) {
		let task = document.getElementById("task");

		if (Array.from(chevron.classList).indexOf("fa-chevron-up") === -1) {
			chevron.classList.remove("fa-chevron-down");
			chevron.classList.add("fa-chevron-up");

			task.classList.remove("hidden");
			task.classList.add("visible");
		} else {
			chevron.classList.remove("fa-chevron-up");
			chevron.classList.add("fa-chevron-down");

			task.classList.remove("visible");
			task.classList.add("hidden");
		}
	}

	let chevron = document.getElementById("chevron");
	chevron.addEventListener("click", function(event) {
		toggle(this);
	});

	chevron.addEventListener("keydown", function(event) {
		if (event.keyCode === 13 || event.keyCode === 32) {
			toggle(this);
		}
	});

	let form = document.getElementById("form");
	form.addEventListener("submit", function(event) {
		event.preventDefault();

		execute(this.children[0].value, this.children[1].value);
	});
};