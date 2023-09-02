function set_focus_amenities() {
	document.getElementById("focus-amenities").className = "w3-bar-item w3-button w3-hover-theme-dark w3-theme";
	document.getElementById("focus-concessions").className = "w3-bar-item w3-button w3-hover-theme ";
	document.getElementById("focus-special-events").className = "w3-bar-item w3-button w3-hover-theme ";
	document.getElementById("focus-rentals").className = "w3-bar-item w3-button w3-hover-theme ";
	document.getElementById("focus-piranhas").className = "w3-bar-item w3-button w3-hover-theme";
	return true;
}
function set_focus_special_events() {
	document.getElementById("focus-amenities").className = "w3-bar-item w3-button w3-hover-theme ";
	document.getElementById("focus-concessions").className = "w3-bar-item w3-button w3-hover-theme ";
	document.getElementById("focus-special-events").className = "w3-bar-item w3-button w3-hover-theme-dark w3-theme";
	document.getElementById("focus-rentals").className = "w3-bar-item w3-button w3-hover-theme ";
	document.getElementById("focus-piranhas").className = "w3-bar-item w3-button w3-hover-theme";
	return true;
}
function set_focus_rentals() {
	document.getElementById("focus-amenities").className = "w3-bar-item w3-button w3-hover-theme ";
	document.getElementById("focus-concessions").className = "w3-bar-item w3-button w3-hover-theme ";
	document.getElementById("focus-special-events").className = "w3-bar-item w3-button w3-hover-theme ";
	document.getElementById("focus-rentals").className = "w3-bar-item w3-button w3-hover-theme-dark w3-theme";
	document.getElementById("focus-piranhas").className = "w3-bar-item w3-button w3-hover-theme";
	return true;
}
function set_focus_concessions() {
	document.getElementById("focus-amenities").className = "w3-bar-item w3-button w3-hover-theme ";
	document.getElementById("focus-concessions").className = "w3-bar-item w3-button w3-hover-theme-dark w3-theme ";
	document.getElementById("focus-special-events").className = "w3-bar-item w3-button w3-hover-theme ";
	document.getElementById("focus-rentals").className = "w3-bar-item w3-button w3-hover-theme ";
	document.getElementById("focus-piranhas").className = "w3-bar-item w3-button w3-hover-theme";
	return true;
}
function set_focus_piranhas() {
	document.getElementById("focus-amenities").className = "w3-bar-item w3-button w3-hover-theme ";
	document.getElementById("focus-concessions").className = "w3-bar-item w3-button w3-hover-theme ";
	document.getElementById("focus-special-events").className = "w3-bar-item w3-button w3-hover-theme ";
	document.getElementById("focus-rentals").className = "w3-bar-item w3-button w3-hover-theme ";
	document.getElementById("focus-piranhas").className = "w3-bar-item w3-button w3-hover-theme-dark w3-theme";
	return true;
}
function get_focused() {
	document.getElementById("amenities").onmouseover = function() {set_focus_amenities()}
	document.getElementById("concessions").onmouseover = function() {set_focus_concessions()}
	document.getElementById("special-events").onmouseover = function() {set_focus_special_events()}
	document.getElementById("rentals").onmouseover = function() {set_focus_rentals()}
	document.getElementById("piranhas").onmouseover = function() {set_focus_piranhas()}
	return true;
}
