
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

const temples = [
    {
        templeName: "Aba Nigeria",
        location: "Aba, Nigeria",
        dedicated: "2005, August, 7",
        area: 11500,
        imageUrl:
            "https://content.churchofjesuschrist.org/templesldsorg/bc/Temples/photo-galleries/aba-nigeria/400x250/aba-nigeria-temple-lds-273999-wallpaper.jpg"
    },
    {
        templeName: "Manti Utah",
        location: "Manti, Utah, United States",
        dedicated: "1888, May, 21",
        area: 74792,
        imageUrl:
            "https://content.churchofjesuschrist.org/templesldsorg/bc/Temples/photo-galleries/manti-utah/400x250/manti-temple-768192-wallpaper.jpg"
    },
    {
        templeName: "Payson Utah",
        location: "Payson, Utah, United States",
        dedicated: "2015, June, 7",
        area: 96630,
        imageUrl:
            "https://content.churchofjesuschrist.org/templesldsorg/bc/Temples/photo-galleries/payson-utah/400x225/payson-utah-temple-exterior-1416671-wallpaper.jpg"
    },
    {
        templeName: "Yigo Guam",
        location: "Yigo, Guam",
        dedicated: "2020, May, 2",
        area: 6861,
        imageUrl:
            "https://content.churchofjesuschrist.org/templesldsorg/bc/Temples/photo-galleries/yigo-guam/400x250/yigo_guam_temple_2.jpg"
    },
    {
        templeName: "Washington D.C.",
        location: "Kensington, Maryland, United States",
        dedicated: "1974, November, 19",
        area: 156558,
        imageUrl:
            "https://content.churchofjesuschrist.org/templesldsorg/bc/Temples/photo-galleries/washington-dc/400x250/washington_dc_temple-exterior-2.jpeg"
    },
    {
        templeName: "Lima Perú",
        location: "Lima, Perú",
        dedicated: "1986, January, 10",
        area: 9600,
        imageUrl:
            "https://content.churchofjesuschrist.org/templesldsorg/bc/Temples/photo-galleries/lima-peru/400x250/lima-peru-temple-evening-1075606-wallpaper.jpg"
    },
    {
        templeName: "Mexico City Mexico",
        location: "Mexico City, Mexico",
        dedicated: "1983, December, 2",
        area: 116642,
        imageUrl:
            "https://content.churchofjesuschrist.org/templesldsorg/bc/Temples/photo-galleries/mexico-city-mexico/400x250/mexico-city-temple-exterior-1518361-wallpaper.jpg"
    },

    {
        templeName: "Accra Ghana",
        location: "Accra, Ghana",
        dedicated: "2004, January, 11",
        area: 17500,
        imageUrl:
            "https://churchofjesuschristtemples.org/assets/img/temples/accra-ghana-temple/accra-ghana-temple-13760-main.jpg"
    },
    {
        templeName: "Johannesburg South Africa",
        location: "Johannesburg, South Africa",
        dedicated: "1985, August, 24",
        area: 19184,
        imageUrl:
            "https://churchofjesuschristtemples.org/assets/img/temples/johannesburg-south-africa-temple/johannesburg-south-africa-temple-22475-main.jpg"
    },
    {
        templeName: "Salt Lake",
        location: "Salt Lake City, Utah, United States",
        dedicated: "1893, April, 6",
        area: 382207,
        imageUrl:
            "https://churchofjesuschristtemples.org/assets/img/temples/salt-lake-temple/salt-lake-temple-75244-main.jpg"
    }
];

// Select the temple grid
const templeGrid = document.querySelector(".temple-grid");

// Display temple cards
function displayTemples(templeList) {
    templeGrid.innerHTML = "";

    templeList.forEach((temple) => {
        const card = document.createElement("figure");

        card.innerHTML = `
            <img 
                src="${temple.imageUrl}" 
                alt="${temple.templeName}"
                loading="lazy"
            >
            <figcaption>
                <h2>${temple.templeName}</h2>
                <p>${temple.location}</p>
                <p>Dedicated: ${temple.dedicated}</p>
                <p>Area: ${temple.area.toLocaleString()} sq ft</p>
            </figcaption>
        `;

        templeGrid.appendChild(card);
    });
}


// HOME
// Display all temples
document.querySelector("#home").addEventListener("click", (event) => {
    event.preventDefault();
    displayTemples(temples);
});


// OLD
// Display temples dedicated before 1900
document.querySelector("#old").addEventListener("click", (event) => {
    event.preventDefault();

    const oldTemples = temples.filter((temple) => {
        const year = Number(temple.dedicated.split(",")[0]);
        return year < 1900;
    });

    displayTemples(oldTemples);
});


// NEW
// Display temples dedicated after 2000
document.querySelector("#new").addEventListener("click", (event) => {
    event.preventDefault();

    const newTemples = temples.filter((temple) => {
        const year = Number(temple.dedicated.split(",")[0]);
        return year > 2000;
    });

    displayTemples(newTemples);
});


// LARGE
// Display temples larger than 90,000 square feet
document.querySelector("#large").addEventListener("click", (event) => {
    event.preventDefault();

    const largeTemples = temples.filter((temple) => {
        return temple.area > 90000;
    });

    displayTemples(largeTemples);
});


// SMALL
// Display temples smaller than 10,000 square feet
document.querySelector("#small").addEventListener("click", (event) => {
    event.preventDefault();

    const smallTemples = temples.filter((temple) => {
        return temple.area < 10000;
    });

    displayTemples(smallTemples);
});


// Display all temples when the page first loads
displayTemples(temples);