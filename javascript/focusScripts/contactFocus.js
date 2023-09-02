function set_focus_contact_cassel_hills_pool() {
	document.getElementById("focus-contact-cassel-hills-pool").className = "w3-bar-item w3-button w3-hover-theme-dark w3-theme";
	document.getElementById("focus-contact-management").className = "w3-bar-item w3-button w3-hover-theme ";
	return true;
}
function set_focus_contact_management() {
	document.getElementById("focus-contact-cassel-hills-pool").className = "w3-bar-item w3-button w3-hover-theme";
	document.getElementById("focus-contact-management").className = "w3-bar-item w3-button w3-hover-theme-dark w3-theme";
	return true;
}
function get_focused() {
	document.getElementById("contact-cassel-hills-pool").onmouseover = function() {set_focus_contact_cassel_hills_pool()}
	document.getElementById("contact-management").onmouseover = function() {set_focus_contact_management()}
	return true;
}
