// The starting data
const holidayDestinations = [
  { locationName: "Maldives", vacationType: "beach", budget: 1200 },
  { locationName: "Tokyo", vacationType: "city", budget: 800 },
  { locationName: "Swiss Alps", vacationType: "nature", budget: 1500 },
  { locationName: "Bali", vacationType: "beach", budget: 900 },
  { locationName: "New York", vacationType: "city", budget: 1100 }
];

// Step 1 & 2: Write your formatDestination function here
const formatDestination = (destination) => {
    if (destination.vacationType === "beach"){
        return `[Beach Getaway] ${destination.locationName} £${destination.budget}`
    }
    else if (destination.vacationType === "city"){
        return `[City Break] ${destination.locationName} £${destination.budget}`
    }
    else if (destination.vacationType === "nature"){
        return `[Nature Retreat] ${destination.locationName} £${destination.budget}`
    }
}


// Step 3: Use .map() to create your formattedBrochure array here
const formattedBrochure = holidayDestinations.map(destination => formatDestination(destination))

// Step 4: console.log your formattedBrochure array

console.log(formattedBrochure)