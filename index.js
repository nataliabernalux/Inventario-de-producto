// popup code
function togglePopup() {
    var overlay = document.getElementById("overlay");

    if (!overlay) {
        overlay = document.createElement("div");
        overlay.className = "popup-overlay";
        overlay.id = "overlay";
        document.body.appendChild(overlay);
    }

    var popup = document.getElementById("myPopup");

    if (popup.style.display === 'none' || popup.style.display === '') {
        overlay.style.display = 'block';
        popup.style.display = 'block';
    } else {
        overlay.style.display = 'none';
        popup.style.display = 'none';
    }
}

// Add this part for the back button functionality
document.getElementById("backButton").addEventListener("click", function() {
    // You can customize the action here, for example, redirecting to the main page
    window.location.href = "index.html";
});





// Add a click event listener to the button
document.getElementById("addButton").addEventListener("click", function() {
    // Specify the URL of the target HTML page
    window.location.href = "producto.html";
});