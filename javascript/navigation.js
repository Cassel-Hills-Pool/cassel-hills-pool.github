// Set up the global variables for the sidebar and overlay. This function is called upon document load.
function get_sidebar_and_overlay() {
	mySidebar = document.getElementById("mySidebar");
	overlayBg = document.getElementById("myOverlay");
}

// Toggle between showing and hiding the sidebar, and add overlay effect.
function w3_open() {
	if (mySidebar.style.display === 'block') {
		mySidebar.style.display = 'none';
		overlayBg.style.display = "none";
	}
	else {
		console.log(mySidebar);
		mySidebar.style.display = 'block';
		console.log(overlayBg);
		overlayBg.style.display = "block";
	}
}

// Close the sidebar with the close button.
function w3_close() {
	mySidebar.style.display = "none";
	overlayBg.style.display = "none";
}
