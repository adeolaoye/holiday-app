const optionsAttraction = {
  method: "GET",
  headers: {
    "X-RapidAPI-Key": "05d81c5989msh45cb458ac7037cap13e23djsn621d2bb57bd9",
    "X-RapidAPI-Host": "opentripmap-places-v1.p.rapidapi.com",
  },
};
//get lattitude and longitude of city
function attractionsApi() {
  clearApi();
  fetch(
    "https://opentripmap-places-v1.p.rapidapi.com/en/places/geoname?name=" +
      cityInput.value,
    optionsAttraction
  )
    .then(function (response) {
      if (!response.ok) {
        throw new Error("Network response was not ok...");
      }
      return response.json();
    })
    .then(function (data) {
      console.log(data.lat, data.lon);
      attractionsList(data.lat, data.lon);
    });
}

//get attraction list
function attractionsList(lat, lon) {
  fetch(
    `https://opentripmap-places-v1.p.rapidapi.com/en/places/radius?radius=500&lon=${lon}&lat=${lat}`,
    optionsAttraction
  )
    .then(function (response) {
      if (!response.ok) {
        throw new Error("something is wrong about attraction API");
      }
      return response.json();
    })
    .then(function (data) {
      console.log(data);
      produceAttractionsCard(data.features);
    })
    .catch((error) => {
      console.error("Fetch error:", error);
    });
}

//create cards

function produceAttractionsCard(data) {
  console.log(data);
  console.log("produceCard works");
  //card container
  let cardContainer = document.querySelector(".cardContainer");
  cardContainer.innerHTML = "";
  //proforate items
  for (let index = 0; index < 9; index++) {
    // let card = document.querySelector(".card-body");
    let attractionsName = document.createElement("h5");
    // attractionsName.classList.add("card-title");
    attractionsName.textContent = `Name: ${data[index].properties.name}`;

    let attractionType = document.createElement("div");
    attractionType.textContent = `Type: ${data[index].properties.kinds} `;

    let attractionRating = document.createElement("div");
    attractionRating.textContent = `Rating: ${data[index].properties.rate} `;

    //create card element
    let card = document.createElement("div");
    card.classList.add("card", "col-md-4");

    let wiki = document.createElement("a");
    wiki.setAttribute("href", 'https://www.wikidata.org/wiki/'+ data[index].properties.wikidata);
    wiki.setAttribute('target', "_blank")
    wiki.classList.add("btn", "btn-primary");
    wiki.textContent = "WIKI PAGE";

    //create card-body element
    let cardBody = document.createElement("div");
    cardBody.classList.add("card-body");
    cardContainer.appendChild(card);
    card.appendChild(cardBody);

    cardBody.appendChild(attractionsName);
    cardBody.appendChild(attractionType);
    cardBody.appendChild(attractionRating);
    cardBody.appendChild(wiki);
  }
}
