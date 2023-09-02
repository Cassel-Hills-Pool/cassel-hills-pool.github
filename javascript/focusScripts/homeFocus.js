function set_focus_current_status() {
	  document.getElementById("focus-status").className = "w3-bar-item w3-button w3-hover-theme-dark w3-theme";
	  document.getElementById("focus-welcome").className = "w3-bar-item w3-button w3-hover-theme";
	  document.getElementById("focus-focus-vandalia").className = "w3-bar-item w3-button w3-hover-theme";
}
function set_focus_focus_vandalia() {
	document.getElementById("focus-status").className = "w3-bar-item w3-button w3-hover-theme ";
	document.getElementById("focus-welcome").className = "w3-bar-item w3-button w3-hover-theme";
	document.getElementById("focus-focus-vandalia").className = "w3-bar-item w3-button w3-hover-theme-dark w3-theme";
	return true;
}
function set_focus_welcome() {
	document.getElementById("focus-status").className = "w3-bar-item w3-button w3-hover-theme ";
	document.getElementById("focus-welcome").className = "w3-bar-item w3-button w3-hover-theme-dark w3-theme";
	document.getElementById("focus-focus-vandalia").className = "w3-bar-item w3-button w3-hover-theme";
	return true;
}
function get_focused() {
	document.getElementById("current-status").onmouseover = function() {set_focus_current_status()}
	document.getElementById("current-status-sidebar").onmouseover = function() {set_focus_current_status()}
	document.getElementById("welcome").onmouseover = function() {set_focus_welcome()}
	document.getElementById("focus-vandalia").onmouseover = function() {set_focus_focus_vandalia()}
	return true;
}
