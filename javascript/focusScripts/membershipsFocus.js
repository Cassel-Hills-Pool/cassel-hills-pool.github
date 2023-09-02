function set_focus_daily_admission() {
	document.getElementById("focus-daily-admission").className = "w3-bar-item w3-button w3-hover-theme-dark w3-theme";
	document.getElementById("focus-membership-perks").className = "w3-bar-item w3-button w3-hover-theme ";
	document.getElementById("focus-membership-categories").className = "w3-bar-item w3-button w3-hover-theme ";
	return true;
}
function set_focus_membership_perks() {
	document.getElementById("focus-daily-admission").className = "w3-bar-item w3-button w3-hover-theme ";
	document.getElementById("focus-membership-perks").className = "w3-bar-item w3-button w3-hover-theme-dark w3-theme";
	document.getElementById("focus-membership-categories").className = "w3-bar-item w3-button w3-hover-theme";
	return true;
}
function set_focus_membership_categories() {
	document.getElementById("focus-daily-admission").className = "w3-bar-item w3-button w3-hover-theme ";
	document.getElementById("focus-membership-perks").className = "w3-bar-item w3-button w3-hover-theme ";
	document.getElementById("focus-membership-categories").className = "w3-bar-item w3-button w3-hover-theme-dark w3-theme";
	return true;
}
function get_focused() {
	document.getElementById("daily-admission").onmouseover = function() {set_focus_daily_admission()}
	document.getElementById("membership-perks").onmouseover = function() {set_focus_membership_perks()}
	document.getElementById("membership-categories").onmouseover = function() {set_focus_membership_categories()}
	return true;
}
