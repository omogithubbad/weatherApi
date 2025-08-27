// My Api key from OpenWeather
const apiKey = "5e150ba7626be16ff4c2bcbe41f37b84"; 

// Get buttons by their IDs
const button = document.getElementById("get-weather-btn");
const clearBtn = document.getElementById("clear-btn");

// Event listener for "Check Weather"
button.addEventListener("click", function() {
    // Get city name from the input box
    const city = document.getElementById("city").value.trim();

    // If city is empty, show alert
    if (city === "") {
        alert("Please enter a city name");
        return;
    }

    // URL to get weather from the API
    const url = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}&units=metric`;

    // Fetch data from the API
    fetch(url)
        .then(function(response) {
            return response.json(); // Return response in JSON format
        })
        .then(function(data) {
            // If city is found show data
            if (data.cod === 200) {
                const weather = `
                    <h2>${data.name}</h2>    
                    <p>Temperature: ${data.main.temp}°C</p> 
                    <p>Weather: ${data.weather[0].description}</p>
                `;
                document.getElementById("result").innerHTML = weather;
            } else {
                // City not found
                document.getElementById("result").innerHTML = `<p>City not found</p>`;
            }
        })
        .catch(function(error) {
            console.error("Error:", error);
            document.getElementById("result").innerHTML = `<p>Error getting data</p>`;
        });
});

// Event listener for "Clear" button
clearBtn.addEventListener("click", function() {
    document.getElementById("city").value = "";   // clear input
    document.getElementById("result").innerHTML = ""; // clear result
});
