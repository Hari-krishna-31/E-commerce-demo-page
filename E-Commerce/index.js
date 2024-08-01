document.addEventListener("DOMContentLoaded", function() {
    var sidenav = document.querySelector(".side-navbar");
    var menuToggle = document.querySelector(".navbar-menu-toggle");

    function showN() {
        sidenav.style.left="0%";
    }

    // Attach click event listener to the menu toggle button
    menuToggle.addEventListener("click", showN);
});

// Define closenav function outside of the DOMContentLoaded event listener
function closenav() {
    var sidenav = document.querySelector(".side-navbar");
    sidenav.style.left= "-60%";
}
 


