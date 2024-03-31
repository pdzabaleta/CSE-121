/* Declare and initialize global variables */
const templesElement = document.getElementById('temples');
let templeList; // Declare templeList as a global variable

/* async getTemples Function using fetch()*/
const getTemples = async () => {
    try {
        const response = await fetch("https://byui-cse.github.io/cse121b-ww-course/resources/temples.json");
        if (!response.ok) {
            throw new Error('Failed to fetch temple data');
        }
        templeList = await response.json(); // Assign fetch response to templeList
        displayTemples(templeList); // Call displayTemples function with templeList
    } catch (error) {
        console.error('Error fetching temple data:', error.message);
    }
};

/* async displayTemples Function */
const displayTemples = (temples) => {
    temples.forEach((temple) => {
        // Create <article> element
        const articleElement = document.createElement('article');

        // Create <h3> element and add templeName property
        const h3Element = document.createElement('h3');
        h3Element.textContent = temple.templeName;

        // Create <img> element and add imageUrl and location properties
        const imgElement = document.createElement('img');
        imgElement.src = temple.imageUrl;
        imgElement.alt = temple.location;

        // Append <h3> and <img> elements to <article> element
        articleElement.appendChild(h3Element);
        articleElement.appendChild(imgElement);

        // Append <article> element to templesElement
        templesElement.appendChild(articleElement);
    });
};

/* reset Function */
const reset = () => {
    templesElement.innerHTML = ''; // Clears all child elements of templesElement
};

/* filterTemples Function */
const filterTemples = (temples) => {
    // Call reset function to clear the output
    reset();

    // Obtain the value of the HTML element with the ID of filtered
    const filter = document.querySelector("#filtered").value;

    // Switch statement based on the filter value
    switch (filter) {
        case "utah":
            displayTemples(temples.filter(temple => temple.location.includes("Utah")));
            break;
        case "notutah":
            displayTemples(temples.filter(temple => !temple.location.includes("Utah")));
            break;
        case "older":
            displayTemples(temples.filter(temple => new Date(temple.dedicated) < new Date(1950, 0, 1)));
            break;
        case "all":
            displayTemples(temples);
            break;
        default:
            console.error("Invalid filter value");
    }
};

/* Event Listener */
document.querySelector("#filtered").addEventListener("change", () => { filterTemples(templeList) });

// Call getTemples to fetch data from URL
getTemples();

