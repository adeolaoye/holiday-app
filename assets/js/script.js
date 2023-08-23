const searchIcon = document.querySelector("#search");
let selectionButtons = document.querySelector("#selectionButtons");

var cityInput = document.getElementById("cityName");
var countryInput = document.getElementById("country");
var submitForm = document.querySelector(".citySearch");

//display the 3 icons: attractions, restaurants and weather
searchIcon.addEventListener("click", function () {
  let selectionBtnText = `<section class='tabs-wrapper'><button class='btn attractions-tab apiButtons'>Attractions</button><button class='btn restaurants-tab apiButtons'>Restaurants</button><button class='weather-tab apiButtons'>Weather</button></section>`;
  selectionButtons.innerHTML = selectionBtnText; // Corrected 'innerHTML'

  //click on weather button
  let weatherTap = document.querySelector(".weather-tab");
  weatherTap.addEventListener("click", weatherApi);

  //click on restaurants button
  let restaurantsTab = document.querySelector(".restaurants-tab");
  restaurantsTab.addEventListener("click", restaurantApi);

  //click on attractions button
  let attractionsTab = document.querySelector(".attractions-tab");
  attractionsTab.addEventListener("click", attractionsApi);
});
