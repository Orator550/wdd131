
// Get the current year
const year = new Date().getFullYear();

// Display the current year
document.querySelector("#currentyear").textContent = year;

// Display the last modified date
document.querySelector("#lastModified").textContent =
    `Last Modified: ${document.lastModified}`;
