let toggleMenu = document.querySelector(".toggle_menu");
let mainMenu = document.querySelector(".navigation");

toggleMenu.addEventListener("click", function() {
	toggleMenu.classList.toggle("active_toggle_menu");
	if (toggleMenu.classList.contains("active_toggle_menu")) {
		mainMenu.classList.add("active_toggle_menu");
	} else {
		mainMenu.classList.remove("active_toggle_menu")
	}
})