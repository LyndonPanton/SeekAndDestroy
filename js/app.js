"use strict";

window.onload = function(event) {
	document.getElementById("copyright-year").textContent = (new Date()).getFullYear();

	function display(seek, destroy, result) {
		document.getElementById("seek-values").textContent = seek;
		document.getElementById("destroy-values").textContent = destroy;
		document.getElementById("result-values").textContent = result;
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
		let seeker = seek.split(" ").join("").split("");
		let destroyer = destroy.split(" ").join("").split("");

		// accounts for white space
		if (!seeker.length || !destroyer.length) {
			display("Enter values", "???", "???");
		} else {
			
			let result = [];

			for (let i = 0; i < seeker.length; i++) {
				if (destroyer.indexOf(seeker[i]) === -1) {
					result.push(seeker[i]);
				}
			}

			display(seeker, destroyer, result);
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