// Unordered array of cities
const cities = [
    "New York",
    "Tokyo",
    "London",
    "Paris",
    "Sydney",
    "Berlin",
    "Mumbai",
    "Dubai",
    "Rome",
    "Toronto"
];

document.getElementById('loadCitiesBtn').addEventListener('click', populateDropdown);

function populateDropdown() {
    const dropdown = document.getElementById("cityDropdown");
    
    // Clear any existing options
    dropdown.innerHTML = "";
    
    // Sort the cities alphabetically (case-insensitive)
    const sortedCities = [...cities].sort((a, b) => 
        a.localeCompare(b, undefined, { sensitivity: 'base' })
    );
    
    // Add each city as an option to the dropdown
    sortedCities.forEach(city => {
        const option = document.createElement("option");
        option.value = city.toLowerCase().replace(/\s+/g, '-');
        option.textContent = city;
        dropdown.appendChild(option);
    });
}