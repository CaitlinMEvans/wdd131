document.addEventListener('DOMContentLoaded', () => {
const temples = [
    {
        templeName: "Aba Nigeria",
        location: "Aba, Nigeria",
        dedicated: "2005, August, 7",
        area: 11500,
        imageUrl: "https://content.churchofjesuschrist.org/templesldsorg/bc/Temples/photo-galleries/aba-nigeria/400x250/aba-nigeria-temple-lds-273999-wallpaper.jpg"
    },
    {
        templeName: "Manti Utah",
        location: "Manti, Utah, United States",
        dedicated: "1888, May, 21",
        area: 74792,
        imageUrl: "https://content.churchofjesuschrist.org/templesldsorg/bc/Temples/photo-galleries/manti-utah/400x250/manti-temple-768192-wallpaper.jpg"
    },
    {
        templeName: "Payson Utah",
        location: "Payson, Utah, United States",
        dedicated: "2015, June, 7",
        area: 96630,
        imageUrl: "https://content.churchofjesuschrist.org/templesldsorg/bc/Temples/photo-galleries/payson-utah/400x225/payson-utah-temple-exterior-1416671-wallpaper.jpg"
    },
    {
        templeName: "Yigo Guam",
        location: "Yigo, Guam",
        dedicated: "2020, May, 2",
        area: 6861,
        imageUrl: "https://content.churchofjesuschrist.org/templesldsorg/bc/Temples/photo-galleries/yigo-guam/400x250/yigo_guam_temple_2.jpg"
    },
    {
        templeName: "Washington D.C.",
        location: "Kensington, Maryland, United States",
        dedicated: "1974, November, 19",
        area: 156558,
        imageUrl: "https://content.churchofjesuschrist.org/templesldsorg/bc/Temples/photo-galleries/washington-dc/400x250/washington_dc_temple-exterior-2.jpeg"
    },
    {
        templeName: "Lima Perú",
        location: "Lima, Perú",
        dedicated: "1986, January, 10",
        area: 9600,
        imageUrl: "https://content.churchofjesuschrist.org/templesldsorg/bc/Temples/photo-galleries/lima-peru/400x250/lima-peru-temple-evening-1075606-wallpaper.jpg"
    },
    {
        templeName: "Mexico City Mexico",
        location: "Mexico City, Mexico",
        dedicated: "1983, December, 2",
        area: 116642,
        imageUrl: "https://content.churchofjesuschrist.org/templesldsorg/bc/Temples/photo-galleries/mexico-city-mexico/400x250/mexico-city-temple-exterior-1518361-wallpaper.jpg"
    },
    {
        templeName: "San Diego California",
        location: "San Diego, California, United States",
        dedicated: "1993, April, 25",
        area: 72000,
        imageUrl: "https://churchofjesuschristtemples.org/assets/img/temples/san-diego-california-temple/san-diego-california-temple-9060-main.jpg"
    },
    {
        templeName: "Portland Oregon",
        location: "Lake Oswego, Oregon, United States",
        dedicated: "1989, August, 19",
        area: 80000,
        imageUrl: "https://content.churchofjesuschrist.org/templesldsorg/bc/Temples/photo-galleries/portland-oregon/2018/400x400/Portland-Oregon-Temple06.jpg"
    },
    {
        templeName: "San Antonio Texas",
        location: "San Antonio, Texas, United States",
        dedicated: "2005, May, 22",
        area: 16500,
        imageUrl: "https://churchofjesuschristtemples.org/assets/img/temples/san-antonio-texas-temple/san-antonio-texas-temple-48057-main.jpg"
    },
    {
        templeName: "Salt Lake City",
        location: "Salt Lake City, Utah, United States",
        dedicated: "1893, April, 6",
        area: 253015,
        imageUrl: "https://churchofjesuschristtemples.org/assets/img/temples/salt-lake-temple/salt-lake-temple-15669-main.jpg"
    },
    {
        templeName: "Oquirrh Mountain Utah",
        location: "South Jordan, Utah, United States",
        dedicated: "2009, August, 21",
        area: 60800,
        imageUrl: "https://churchofjesuschristtemples.org/assets/img/temples/oquirrh-mountain-utah-temple/oquirrh-mountain-utah-temple-39513-main.jpg"
    }
];
    
    const templeGrid = document.getElementById("templeGrid");

    function displayTemples(filteredTemples) {
        templeGrid.innerHTML = ""; // Clear the current contents
        filteredTemples.forEach(temple => {
            const templeCard = `
                <figure>
                    <img src="${temple.imageUrl}" alt="Image of ${temple.templeName}" loading="lazy">
                    <figcaption>
                        <h3>${temple.templeName}</h3>
                        <p><strong>Location:</strong> ${temple.location}</p>
                        <p><strong>Dedicated:</strong> ${temple.dedicated}</p>
                        <p><strong>Size:</strong> ${temple.area} sq ft</p>
                    </figcaption>
                </figure>
            `;
            templeGrid.insertAdjacentHTML("beforeend", templeCard);
        });
    }

    function filterTemples(criteria) {
        let filteredTemples;
        switch (criteria) {
            case 'old':
                filteredTemples = temples.filter(temple => new Date(temple.dedicated).getFullYear() < 1900);
                break;
            case 'new':
                filteredTemples = temples.filter(temple => new Date(temple.dedicated).getFullYear() > 2000);
                break;
            case 'large':
                filteredTemples = temples.filter(temple => temple.area > 90000);
                break;
            case 'small':
                filteredTemples = temples.filter(temple => temple.area < 10000);
                break;
            default:
                filteredTemples = temples; // Show all if "Home" is selected
        }
        displayTemples(filteredTemples);
    }

    // Event Listener for Navigation Links
    document.querySelectorAll("nav a").forEach(link => {
        link.addEventListener("click", (event) => {
            event.preventDefault();
            const filter = event.target.dataset.filter;
            filterTemples(filter);
        });
    });

    // Initial Display of All Temples
    displayTemples(temples);
});