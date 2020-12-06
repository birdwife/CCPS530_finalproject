// This JavaScript file is connected to index.html

// This makes it so that the 12th card does not display but still takes up space so as to keep the columns and rows even
window.addEventListener('DOMContentLoaded', (event) => {
    document.getElementById("lastCard").style.display="none";
});

// This section fetches the data from the API for each city and prints it to each card
// This section fetches data for Toronto and prints it to the card
fetch("https://community-open-weather-map.p.rapidapi.com/weather?q=Toronto", {
	"method": "GET",
	"headers": {
		"x-rapidapi-key": "976703a96cmsh55ccea5587e92ccp117b98jsn5e77e613b50d",
		"x-rapidapi-host": "community-open-weather-map.p.rapidapi.com"
	}
})
.then(response => {
    console.log(response);
    response.json().then(data => {
        console.log(data);
        // The next line of code turns the temperature of the city into a string
        temp1 = (((data.main.temp)-273.15).toFixed(1)).toString();
        // The next line of code prints the temperature with "degrees celcius" to the Toronto card
        document.getElementById("torontoTemp").innerHTML = temp1 + " \u00B0C";
        // The next line of code prints a description of the temperature provided by the API to the Toronto card
        document.getElementById("torontoD").innerHTML = data.weather[0].description;
        // The next section changes the image source of the Toronto card depending on the description provided by the API
        if (data.weather[0].description == "clear sky") {
            document.getElementById("torontoPic").src = "sun.png";
        }
        if (data.weather[0].description == "few clouds") {
            document.getElementById("torontoPic").src = "cloudy.png";
        }
        if (data.weather[0].description == "mist") {
            document.getElementById("torontoPic").src = "foog.png";
        }
        if (data.weather[0].description == "overcast clouds") {
            document.getElementById("torontoPic").src = "overcast.png";
        }
        if (data.weather[0].description == "broken clouds") {
            document.getElementById("torontoPic").src = "cloudy.png";
        }
        if (data.weather[0].description == "light rain") {
            document.getElementById("torontoPic").src = "cloudy2.png";
        }
        if (data.weather[0].description == "scattered clouds") {
            document.getElementById("torontoPic").src = "cloudy.png";
        }
        if (data.weather[0].description == "thunderstorm") {
            document.getElementById("torontoPic").src = "storm.png";
        }
        if (data.weather[0].description == "smoke") {
            document.getElementById("torontoPic").src = "foog.png";
        }
        if (data.weather[0].description == "light intensity shower rain") {
            document.getElementById("torontoPic").src = "cloudy2.png";
        }
        if (data.weather[0].description == "moderate rain") {
            document.getElementById("torontoPic").src = "rainy2.png";
        }
        if (data.weather[0].description == "heavy intensity rain") {
            document.getElementById("torontoPic").src = "rainy.png";
        }
        
    });
})
.catch(err => {
	console.error(err);
});

// Manhattan
fetch("https://community-open-weather-map.p.rapidapi.com/weather?q=Manhattan", {
	"method": "GET",
	"headers": {
		"x-rapidapi-key": "976703a96cmsh55ccea5587e92ccp117b98jsn5e77e613b50d",
		"x-rapidapi-host": "community-open-weather-map.p.rapidapi.com"
	}
})
.then(response => {
    console.log(response);
    response.json().then(data => {
        console.log(data);
        temp1 = (((data.main.temp)-273.15).toFixed(1)).toString();
        document.getElementById("manhattanTemp").innerHTML = temp1 + " \u00B0C";
        document.getElementById("manD").innerHTML = data.weather[0].description;
        if (data.weather[0].description == "clear sky") {
            document.getElementById("manPic").src = "sun.png";
        }
        if (data.weather[0].description == "few clouds") {
            document.getElementById("manPic").src = "cloudy.png";
        }
        if (data.weather[0].description == "mist") {
            document.getElementById("manPic").src = "foog.png";
        }
        if (data.weather[0].description == "overcast clouds") {
            document.getElementById("manPic").src = "overcast.png";
        }
        if (data.weather[0].description == "broken clouds") {
            document.getElementById("manPic").src = "cloudy.png";
        }
        if (data.weather[0].description == "light rain") {
            document.getElementById("manPic").src = "cloudy2.png";
        }
        if (data.weather[0].description == "scattered clouds") {
            document.getElementById("manPic").src = "cloudy.png";
        }
        if (data.weather[0].description == "thunderstorm") {
            document.getElementById("manPic").src = "storm.png";
        }
        if (data.weather[0].description == "smoke") {
            document.getElementById("manPic").src = "foog.png";
        }
        if (data.weather[0].description == "light intensity shower rain") {
            document.getElementById("manPic").src = "cloudy2.png";
        }
        if (data.weather[0].description == "moderate rain") {
            document.getElementById("manPic").src = "rainy2.png";
        }
        if (data.weather[0].description == "heavy intensity rain") {
            document.getElementById("manPic").src = "rainy.png";
        }
    });
})
.catch(err => {
	console.error(err);
});

// Rio de Janeiro
fetch("https://community-open-weather-map.p.rapidapi.com/weather?q=Rio de Janeiro", {
	"method": "GET",
	"headers": {
		"x-rapidapi-key": "976703a96cmsh55ccea5587e92ccp117b98jsn5e77e613b50d",
		"x-rapidapi-host": "community-open-weather-map.p.rapidapi.com"
	}
})
.then(response => {
    console.log(response);
    response.json().then(data => {
        console.log(data);
        temp1 = (((data.main.temp)-273.15).toFixed(1)).toString();
        document.getElementById("rioTemp").innerHTML = temp1 + " \u00B0C";
        document.getElementById("rioD").innerHTML = data.weather[0].description;
        if (data.weather[0].description == "clear sky") {
            document.getElementById("rioPic").src = "sun.png";
        }
        if (data.weather[0].description == "few clouds") {
            document.getElementById("rioPic").src = "cloudy.png";
        }
        if (data.weather[0].description == "mist") {
            document.getElementById("rioPic").src = "foog.png";
        }
        if (data.weather[0].description == "overcast clouds") {
            document.getElementById("rioPic").src = "overcast.png";
        }
        if (data.weather[0].description == "broken clouds") {
            document.getElementById("rioPic").src = "cloudy.png";
        }
        if (data.weather[0].description == "light rain") {
            document.getElementById("rioPic").src = "cloudy2.png";
        }
        if (data.weather[0].description == "scattered clouds") {
            document.getElementById("rioPic").src = "cloudy.png";
        }
        if (data.weather[0].description == "thunderstorm") {
            document.getElementById("rioPic").src = "storm.png";
        }
        if (data.weather[0].description == "smoke") {
            document.getElementById("rioPic").src = "foog.png";
        }
        if (data.weather[0].description == "light intensity shower rain") {
            document.getElementById("rioPic").src = "cloudy2.png";
        }
        if (data.weather[0].description == "moderate rain") {
            document.getElementById("rioPic").src = "rainy2.png";
        }
        if (data.weather[0].description == "heavy intensity rain") {
            document.getElementById("rioPic").src = "rainy.png";
        }
    });
})
.catch(err => {
	console.error(err);
});

// Montevideo
fetch("https://community-open-weather-map.p.rapidapi.com/weather?q=Montevideo", {
	"method": "GET",
	"headers": {
		"x-rapidapi-key": "976703a96cmsh55ccea5587e92ccp117b98jsn5e77e613b50d",
		"x-rapidapi-host": "community-open-weather-map.p.rapidapi.com"
	}
})
.then(response => {
    console.log(response);
    response.json().then(data => {
        console.log(data);
        temp1 = (((data.main.temp)-273.15).toFixed(1)).toString();
        document.getElementById("monteTemp").innerHTML = temp1 + " \u00B0C";
        document.getElementById("montD").innerHTML = data.weather[0].description;
        if (data.weather[0].description == "clear sky") {
            document.getElementById("montPic").src = "sun.png";
        }
        if (data.weather[0].description == "few clouds") {
            document.getElementById("montPic").src = "cloudy.png";
        }
        if (data.weather[0].description == "mist") {
            document.getElementById("montPic").src = "foog.png";
        }
        if (data.weather[0].description == "overcast clouds") {
            document.getElementById("montPic").src = "overcast.png";
        }
        if (data.weather[0].description == "broken clouds") {
            document.getElementById("montPic").src = "cloudy.png";
        }
        if (data.weather[0].description == "light rain") {
            document.getElementById("montPic").src = "cloudy2.png";
        }
        if (data.weather[0].description == "scattered clouds") {
            document.getElementById("montPic").src = "cloudy.png";
        }
        if (data.weather[0].description == "thunderstorm") {
            document.getElementById("montPic").src = "storm.png";
        }
        if (data.weather[0].description == "smoke") {
            document.getElementById("montPic").src = "foog.png";
        }
        if (data.weather[0].description == "light intensity shower rain") {
            document.getElementById("montPic").src = "cloudy2.png";
        }
        if (data.weather[0].description == "moderate rain") {
            document.getElementById("montPic").src = "rainy2.png";
        }
        if (data.weather[0].description == "heavy intensity rain") {
            document.getElementById("montPic").src = "rainy.png";
        }
    });
})
.catch(err => {
	console.error(err);
});

// Paris
fetch("https://community-open-weather-map.p.rapidapi.com/weather?q=Paris", {
	"method": "GET",
	"headers": {
		"x-rapidapi-key": "976703a96cmsh55ccea5587e92ccp117b98jsn5e77e613b50d",
		"x-rapidapi-host": "community-open-weather-map.p.rapidapi.com"
	}
})
.then(response => {
    console.log(response);
    response.json().then(data => {
        console.log(data);
        temp1 = (((data.main.temp)-273.15).toFixed(1)).toString();
        document.getElementById("parisTemp").innerHTML = temp1 + " \u00B0C";
        document.getElementById("parisD").innerHTML = data.weather[0].description;
        if (data.weather[0].description == "clear sky") {
            document.getElementById("parisPic").src = "sun.png";
        }
        if (data.weather[0].description == "few clouds") {
            document.getElementById("parisPic").src = "cloudy.png";
        }
        if (data.weather[0].description == "mist") {
            document.getElementById("parisPic").src = "foog.png";
        }
        if (data.weather[0].description == "overcast clouds") {
            document.getElementById("parisPic").src = "overcast.png";
        }
        if (data.weather[0].description == "broken clouds") {
            document.getElementById("parisPic").src = "cloudy.png";
        }
        if (data.weather[0].description == "light rain") {
            document.getElementById("parisPic").src = "cloudy2.png";
        }
        if (data.weather[0].description == "scattered clouds") {
            document.getElementById("parisPic").src = "cloudy.png";
        }
        if (data.weather[0].description == "thunderstorm") {
            document.getElementById("parisPic").src = "storm.png";
        }
        if (data.weather[0].description == "smoke") {
            document.getElementById("parisPic").src = "foog.png";
        }
        if (data.weather[0].description == "light intensity shower rain") {
            document.getElementById("parisPic").src = "cloudy2.png";
        }
        if (data.weather[0].description == "moderate rain") {
            document.getElementById("parisPic").src = "rainy2.png";
        }
        if (data.weather[0].description == "heavy intensity rain") {
            document.getElementById("parisPic").src = "rainy.png";
        }
    });
})
.catch(err => {
	console.error(err);
});

// Berlin
fetch("https://community-open-weather-map.p.rapidapi.com/weather?q=Berlin", {
	"method": "GET",
	"headers": {
		"x-rapidapi-key": "976703a96cmsh55ccea5587e92ccp117b98jsn5e77e613b50d",
		"x-rapidapi-host": "community-open-weather-map.p.rapidapi.com"
	}
})
.then(response => {
    console.log(response);
    response.json().then(data => {
        console.log(data);
        temp1 = (((data.main.temp)-273.15).toFixed(1)).toString();
        document.getElementById("berlinTemp").innerHTML = temp1 + " \u00B0C";
        document.getElementById("berlinD").innerHTML = data.weather[0].description;
        if (data.weather[0].description == "clear sky") {
            document.getElementById("berlinPic").src = "sun.png";
        }
        if (data.weather[0].description == "few clouds") {
            document.getElementById("berlinPic").src = "cloudy.png";
        }
        if (data.weather[0].description == "mist") {
            document.getElementById("berlinPic").src = "foog.png";
        }
        if (data.weather[0].description == "overcast clouds") {
            document.getElementById("berlinPic").src = "overcast.png";
        }
        if (data.weather[0].description == "broken clouds") {
            document.getElementById("berlinPic").src = "cloudy.png";
        }
        if (data.weather[0].description == "light rain") {
            document.getElementById("berlinPic").src = "cloudy2.png";
        }
        if (data.weather[0].description == "scattered clouds") {
            document.getElementById("berlinPic").src = "cloudy.png";
        }
        if (data.weather[0].description == "thunderstorm") {
            document.getElementById("berlinPic").src = "storm.png";
        }
        if (data.weather[0].description == "smoke") {
            document.getElementById("berlinPic").src = "foog.png";
        }
        if (data.weather[0].description == "light intensity shower rain") {
            document.getElementById("berlinPic").src = "cloudy2.png";
        }
        if (data.weather[0].description == "moderate rain") {
            document.getElementById("berlinPic").src = "rainy2.png";
        }
        if (data.weather[0].description == "heavy intensity rain") {
            document.getElementById("berlinPic").src = "rainy.png";
        }
    });
})
.catch(err => {
	console.error(err);
});

// Rome
fetch("https://community-open-weather-map.p.rapidapi.com/weather?q=Rome", {
	"method": "GET",
	"headers": {
		"x-rapidapi-key": "976703a96cmsh55ccea5587e92ccp117b98jsn5e77e613b50d",
		"x-rapidapi-host": "community-open-weather-map.p.rapidapi.com"
	}
})
.then(response => {
    console.log(response);
    response.json().then(data => {
        console.log(data);
        temp1 = (((data.main.temp)-273.15).toFixed(1)).toString();
        document.getElementById("romeTemp").innerHTML = temp1 + " \u00B0C";
        document.getElementById("romeD").innerHTML = data.weather[0].description;
        if (data.weather[0].description == "clear sky") {
            document.getElementById("romePic").src = "sun.png";
        }
        if (data.weather[0].description == "few clouds") {
            document.getElementById("romePic").src = "cloudy.png";
        }
        if (data.weather[0].description == "mist") {
            document.getElementById("romePic").src = "foog.png";
        }
        if (data.weather[0].description == "overcast clouds") {
            document.getElementById("romePic").src = "overcast.png";
        }
        if (data.weather[0].description == "broken clouds") {
            document.getElementById("romePic").src = "cloudy.png";
        }
        if (data.weather[0].description == "light rain") {
            document.getElementById("romePic").src = "cloudy2.png";
        }
        if (data.weather[0].description == "scattered clouds") {
            document.getElementById("romePic").src = "cloudy.png";
        }
        if (data.weather[0].description == "thunderstorm") {
            document.getElementById("romePic").src = "storm.png";
        }
        if (data.weather[0].description == "smoke") {
            document.getElementById("romePic").src = "foog.png";
        }
        if (data.weather[0].description == "light intensity shower rain") {
            document.getElementById("romePic").src = "cloudy2.png";
        }
        if (data.weather[0].description == "moderate rain") {
            document.getElementById("romePic").src = "rainy2.png";
        }
        if (data.weather[0].description == "heavy intensity rain") {
            document.getElementById("romePic").src = "rainy.png";
        }
    });
})
.catch(err => {
	console.error(err);
});

// Cairo
fetch("https://community-open-weather-map.p.rapidapi.com/weather?q=Cairo", {
	"method": "GET",
	"headers": {
		"x-rapidapi-key": "976703a96cmsh55ccea5587e92ccp117b98jsn5e77e613b50d",
		"x-rapidapi-host": "community-open-weather-map.p.rapidapi.com"
	}
})
.then(response => {
    console.log(response);
    response.json().then(data => {
        console.log(data);
        temp1 = (((data.main.temp)-273.15).toFixed(1)).toString();
        document.getElementById("cairoTemp").innerHTML = temp1 + " \u00B0C";
        document.getElementById("cairoD").innerHTML = data.weather[0].description;
        if (data.weather[0].description == "clear sky") {
            document.getElementById("cairoPic").src = "sun.png";
        }
        if (data.weather[0].description == "few clouds") {
            document.getElementById("cairoPic").src = "cloudy.png";
        }
        if (data.weather[0].description == "mist") {
            document.getElementById("cairoPic").src = "foog.png";
        }
        if (data.weather[0].description == "overcast clouds") {
            document.getElementById("cairoPic").src = "overcast.png";
        }
        if (data.weather[0].description == "broken clouds") {
            document.getElementById("cairoPic").src = "cloudy.png";
        }
        if (data.weather[0].description == "light rain") {
            document.getElementById("cairoPic").src = "cloudy2.png";
        }
        if (data.weather[0].description == "scattered clouds") {
            document.getElementById("cairoPic").src = "cloudy.png";
        }
        if (data.weather[0].description == "thunderstorm") {
            document.getElementById("cairoPic").src = "storm.png";
        }
        if (data.weather[0].description == "smoke") {
            document.getElementById("cairoPic").src = "foog.png";
        }
        if (data.weather[0].description == "light intensity shower rain") {
            document.getElementById("cairoPic").src = "cloudy2.png";
        }
        if (data.weather[0].description == "moderate rain") {
            document.getElementById("cairoPic").src = "rainy2.png";
        }
        if (data.weather[0].description == "heavy intensity rain") {
            document.getElementById("cairoPic").src = "rainy.png";
        }
    });
})
.catch(err => {
	console.error(err);
});

// Seoul
fetch("https://community-open-weather-map.p.rapidapi.com/weather?q=Seoul", {
	"method": "GET",
	"headers": {
		"x-rapidapi-key": "976703a96cmsh55ccea5587e92ccp117b98jsn5e77e613b50d",
		"x-rapidapi-host": "community-open-weather-map.p.rapidapi.com"
	}
})
.then(response => {
    console.log(response);
    response.json().then(data => {
        console.log(data);
        temp1 = (((data.main.temp)-273.15).toFixed(1)).toString();
        document.getElementById("seoulTemp").innerHTML = temp1 + " \u00B0C";
        document.getElementById("seoulD").innerHTML = data.weather[0].description;
        if (data.weather[0].description == "clear sky") {
            document.getElementById("seoulPic").src = "sun.png";
        }
        if (data.weather[0].description == "few clouds") {
            document.getElementById("seoulPic").src = "cloudy.png";
        }
        if (data.weather[0].description == "mist") {
            document.getElementById("seoulPic").src = "foog.png";
        }
        if (data.weather[0].description == "overcast clouds") {
            document.getElementById("seoulPic").src = "overcast.png";
        }
        if (data.weather[0].description == "broken clouds") {
            document.getElementById("seoulPic").src = "cloudy.png";
        }
        if (data.weather[0].description == "light rain") {
            document.getElementById("seoulPic").src = "cloudy2.png";
        }
        if (data.weather[0].description == "scattered clouds") {
            document.getElementById("seoulPic").src = "cloudy.png";
        }
        if (data.weather[0].description == "thunderstorm") {
            document.getElementById("seoulPic").src = "storm.png";
        }
        if (data.weather[0].description == "smoke") {
            document.getElementById("seoulPic").src = "foog.png";
        }
        if (data.weather[0].description == "light intensity shower rain") {
            document.getElementById("seoulPic").src = "cloudy2.png";
        }
        if (data.weather[0].description == "moderate rain") {
            document.getElementById("seoulPic").src = "rainy2.png";
        }
        if (data.weather[0].description == "heavy intensity rain") {
            document.getElementById("seoulPic").src = "rainy.png";
        }
    });
})
.catch(err => {
	console.error(err);
});

// Shanghai
fetch("https://community-open-weather-map.p.rapidapi.com/weather?q=Shanghai", {
	"method": "GET",
	"headers": {
		"x-rapidapi-key": "976703a96cmsh55ccea5587e92ccp117b98jsn5e77e613b50d",
		"x-rapidapi-host": "community-open-weather-map.p.rapidapi.com"
	}
})
.then(response => {
    console.log(response);
    response.json().then(data => {
        console.log(data);
        temp1 = (((data.main.temp)-273.15).toFixed(1)).toString();
        document.getElementById("shangTemp").innerHTML = temp1 + " \u00B0C";
        document.getElementById("shangD").innerHTML = data.weather[0].description;
        if (data.weather[0].description == "clear sky") {
            document.getElementById("shangPic").src = "sun.png";
        }
        if (data.weather[0].description == "few clouds") {
            document.getElementById("shangPic").src = "cloudy.png";
        }
        if (data.weather[0].description == "mist") {
            document.getElementById("shangPic").src = "foog.png";
        }
        if (data.weather[0].description == "overcast clouds") {
            document.getElementById("shangPic").src = "overcast.png";
        }
        if (data.weather[0].description == "broken clouds") {
            document.getElementById("shangPic").src = "cloudy.png";
        }
        if (data.weather[0].description == "light rain") {
            document.getElementById("shangPic").src = "cloudy2.png";
        }
        if (data.weather[0].description == "scattered clouds") {
            document.getElementById("shangPic").src = "cloudy.png";
        }
        if (data.weather[0].description == "thunderstorm") {
            document.getElementById("shangPic").src = "storm.png";
        }
        if (data.weather[0].description == "smoke") {
            document.getElementById("shangPic").src = "foog.png";
        }
        if (data.weather[0].description == "light intensity shower rain") {
            document.getElementById("shangPic").src = "cloudy2.png";
        }
        if (data.weather[0].description == "moderate rain") {
            document.getElementById("shangPic").src = "rainy2.png";
        }
        if (data.weather[0].description == "heavy intensity rain") {
            document.getElementById("shangPic").src = "rainy.png";
        }
    });
})
.catch(err => {
	console.error(err);
});

// Tokyo
fetch("https://community-open-weather-map.p.rapidapi.com/weather?q=Tokyo", {
	"method": "GET",
	"headers": {
		"x-rapidapi-key": "976703a96cmsh55ccea5587e92ccp117b98jsn5e77e613b50d",
		"x-rapidapi-host": "community-open-weather-map.p.rapidapi.com"
	}
})
.then(response => {
    console.log(response);
    response.json().then(data => {
        console.log(data);
        temp1 = (((data.main.temp)-273.15).toFixed(1)).toString();
        document.getElementById("tokyoTemp").innerHTML = temp1 + " \u00B0C";
        document.getElementById("tokyoD").innerHTML = data.weather[0].description;
        if (data.weather[0].description == "clear sky") {
            document.getElementById("tokyoPic").src = "sun.png";
        }
        if (data.weather[0].description == "few clouds") {
            document.getElementById("tokyoPic").src = "cloudy.png";
        }
        if (data.weather[0].description == "mist") {
            document.getElementById("tokyoPic").src = "foog.png";
        }
        if (data.weather[0].description == "overcast clouds") {
            document.getElementById("tokyoPic").src = "overcast.png";
        }
        if (data.weather[0].description == "broken clouds") {
            document.getElementById("tokyoPic").src = "cloudy.png";
        }
        if (data.weather[0].description == "light rain") {
            document.getElementById("tokyoPic").src = "cloudy2.png";
        }
        if (data.weather[0].description == "scattered clouds") {
            document.getElementById("tokyoPic").src = "cloudy.png";
        }
        if (data.weather[0].description == "thunderstorm") {
            document.getElementById("tokyoPic").src = "storm.png";
        }
        if (data.weather[0].description == "smoke") {
            document.getElementById("tokyoPic").src = "foog.png";
        }
        if (data.weather[0].description == "light intensity shower rain") {
            document.getElementById("tokyoPic").src = "cloudy2.png";
        }
        if (data.weather[0].description == "moderate rain") {
            document.getElementById("tokyoPic").src = "rainy2.png";
        }
        if (data.weather[0].description == "heavy intensity rain") {
            document.getElementById("tokyoPic").src = "rainy.png";
        }
    });
})
.catch(err => {
	console.error(err);
});


