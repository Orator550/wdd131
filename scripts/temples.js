
// Select the hamburger button and navigation menu
const menuButton = document.querySelector("#menu-button");
const navMenu = document.querySelector("#nav-menu");

// Listen for clicks on the hamburger button
menuButton.addEventListener("click", () => {
    navMenu.classList.toggle("open");

    // Change the button symbol
    if (navMenu.classList.contains("open")) {
        menuButton.textContent = "✕";
        menuButton.setAttribute("aria-label", "Close navigation menu");
        menuButton.setAttribute("aria-expanded", "true");
    } else {
        menuButton.textContent = "☰";
        menuButton.setAttribute("aria-label", "Open navigation menu");
        menuButton.setAttribute("aria-expanded", "false");
    }
});

// Display the current year
document.querySelector("#currentyear").textContent =
    new Date().getFullYear();

// Display the last modified date
document.querySelector("#lastModified").textContent =
    document.lastModified;
