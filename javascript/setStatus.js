function open_to() {
	var date = new Date();
	var day = date.getDay();
	var hour = date.getHours();
	var minute = date.getMinutes();
	if (((hour == 11 && minute >= 30) || (hour > 11)) && ((hour == 19 && minute <= 30) || (hour < 19))) {
		if (day == 0 || day == 1 || day == 3) {
			// Open to Members & Residents only
			document.getElementById("opento-members").innerHTML = "Open to Cassel Hills Pool Members"
			document.getElementById("opento-residents").innerHTML = "Open to Vandalia Residents"
			document.getElementById("opento-public").innerHTML = "Closed for General Admission"
		}
		else {
			if (hour == 11 || (hour == 12 && minute < 30)) {
				// Open to Members & Residents only
				document.getElementById("opento-members").innerHTML = "Open to Cassel Hills Pool Members"
				document.getElementById("opento-residents").innerHTML = "Open to Vandalia Residents"
				document.getElementById("opento-public").innerHTML = "Closed for General Admission"
			}
			else {
				// Open to anyone
				document.getElementById("opento-members").innerHTML = "Open to Cassel Hills Pool Members"
				document.getElementById("opento-residents").innerHTML = "Open to Vandalia Residents"
				document.getElementById("opento-public").innerHTML = "Open for General Admission"
			}
		}
	}
	else {
		// Open to anyone
		document.getElementById("opento-members").innerHTML = "Closed to Cassel Hills Pool Members"
		document.getElementById("opento-residents").innerHTML = "Closed to Vandalia Residents"
		document.getElementById("opento-public").innerHTML = "Closed for General Admission"
	}
}
