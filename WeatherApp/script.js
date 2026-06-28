const apiKey = "2d6xxxxxxxxxxxxxxxxxxxx";

function getWeather(){

    const city=document.getElementById("city").value;

    const url=`https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}&units=metric`;

    fetch(url)

    .then(response=>response.json())

    .then(data=>{

        document.getElementById("cityName").innerHTML=data.name;

        document.getElementById("temp").innerHTML=
        "🌡 Temperature : "+data.main.temp+" °C";

        document.getElementById("humidity").innerHTML=
        "💧 Humidity : "+data.main.humidity+" %";

        document.getElementById("condition").innerHTML=
        "☁ Condition : "+data.weather[0].main;

    })

    .catch(()=>{
        alert("City not found");
    });

}