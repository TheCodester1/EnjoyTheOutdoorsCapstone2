"use strict"

console.log ("this is a load of barnacles")

window.onload = main;

function main() {
  populateStateDropdown();
  populateParkTypeDropdown();
  
  const selectLocationElement = document.querySelector("#locationChoice");
  selectLocationElement.onchange = parkStateLocation;
  const selectTypeElement = document.querySelector("#parkTypeChoice");
  selectTypeElement.onchange = parkLocalDesc;
}

function populateStateDropdown() {
  const selectLocationElement = document.querySelector("#locationChoice");
  for (const location of locationsArray) {
    const option = document.createElement("option");
    option.value = location;
    option.innerText = location;
    selectLocationElement.append(option);
  }
}

function populateParkTypeDropdown() {
  const selectTypeElement = document.querySelector("#parkTypeChoice");
  for (const parkType of parkTypesArray) {
    const option = document.createElement("option");
    option.value = parkType;
    option.innerText = parkType;
    selectTypeElement.append(option);
  }
}

function parkStateLocation(changeEvent) {
  const parkCardsContainer = document.querySelector("#parkCards");
  const currState = changeEvent.target.value;
  const matchedState = filterData(currState);
  console.log(currState);

  parkCardsContainer.innerHTML = "";

  matchedState.forEach((element) => {
    const parkCard = createParkCard(element);
    parkCardsContainer.appendChild(parkCard);
  });
}

function parkLocalDesc(changeEvent) {
  const parkCardsContainer = document.querySelector("#parkCards");
  const currLocal = changeEvent.target.value;
  const matchedState = filterData(currLocal);
  console.log(currLocal);

  parkCardsContainer.innerHTML = "";

  matchedState.forEach((element) => {
    const parkCard = createParkCard(element);
    parkCardsContainer.appendChild(parkCard);
  });
}

function filterData(state) {
  const parkLocalDesc = nationalParksArray.filter((parkItem) =>
    parkItem.LocationName.includes(state)
  );
  return parkLocalDesc;
}

function createParkCard(park) {
  const parkCard = document.createElement("div");
  parkCard.classList.add("col-lg-4", "col-md-6", "mb-4");

  const card = document.createElement("div");
  card.classList.add("card");

  const cardBody = document.createElement("div");
  cardBody.classList.add("card-body");

  const localName = document.createElement("h5");
  localName.classList.add("card-title");
  localName.innerText = park.LocationName;
  cardBody.appendChild(localName);

  const localAddress = document.createElement("p");
  localAddress.classList.add("card-text");
  localAddress.innerText = park.Address;
  cardBody.appendChild(localAddress);

  const localCity = document.createElement("p");
  localCity.classList.add("card-text");
  localCity.innerText = park.City;
  cardBody.appendChild(localCity);

  card.appendChild(cardBody);
  parkCard.appendChild(card);

  return parkCard;
}

// window.onload = main

// function main () {
//     // loadImages()
//     populateLocationDropdown()
//     populateParkTypeDropdown()
// }

// function populateLocationDropdown() {
//     // the target of a form's "submit" event is the form
//     // the target of a click event is the element's 

//     const selectElement = document.querySelector("#locationChoice")
//     // event listener 
//     selectElement.onchange = handleChange

//     for (const location of locationsArray) {
//         // Example: <option value="album.folder">album.name</option>

//         // 1. Create a new empty element by tag name:
//         const option = document.createElement("option")

//         // 2. Customize the new baby element:
//         option.value = location
//         option.innerText = location

//         // 3. Add it to a branch which is already on the page:
//         selectElement.append(option)
//     }
// }

// function handleChange (event) {
//     // the "event" object describes the event that occured
//     // "event.target" is the element that is a target of the event
//         // in the case of "onchange" event, event.target is the element that changed ("<select>"). In the case of "click" event, enent.target is the element that was clicked
//     console.log(event)
//     console.log(event.target.value) //reference to        selectElement
//     const selectedLocationFolder = event.target.value
//     const locationByUserChoice = location => location === selectedLocationFolder
//     const selectedLocation = locationsArray.find(locationByUserChoice)
//     // const albumFolderByUserChoice = selectElement.value
//     console.log(selectedLocationFolder)
    
//     const parentElement = document.querySelector("main")

//     for (const path of selectedLocation.paths) {
//         // VISUALIZE THE GOAL: <img class="card" src="insert-image-path-here">

//         // 1. Create the empty element by tag name:
//         const imageElement = document.createElement("img")

//         // 2. Customize it in some way:
//         imageElement.setAttribute("src", `images/${selectedLocationFolder}/${path}`)
//         imageElement.classList.add("img-thumbnail", "gallery-image")

//         // 3. Add it to an existing branch on the DOM tree:
//         parentElement.append(imageElement)
//     }

//     console.log(parentElement)
// }


// function populateParkTypeDropdown() {
//     // the target of a form's "submit" event is the form
//     // the target of a click event is the element's 

//     const selectElement = document.querySelector("#parkTypeChoice")
//     // event listener 
//     selectElement.onchange = handleChange

//     for (const parkType of parkTypesArray) {
//         // Example: <option value="album.folder">album.name</option>

//         // 1. Create a new empty element by tag name:
//         const option = document.createElement("option")

//         // 2. Customize the new baby element:
//         option.value = parkType
//         option.innerText = parkType

//         // 3. Add it to a branch which is already on the page:
//         selectElement.append(option)
//     }
// }

// function handleChange (event) {
//     // the "event" object describes the event that occured
//     // "event.target" is the element that is a target of the event
//         // in the case of "onchange" event, event.target is the element that changed ("<select>"). In the case of "click" event, enent.target is the element that was clicked
//     console.log(event)
//     console.log(event.target.value) //reference to        selectElement
//     const selectedParkTypeFolder = event.target.value
//     const parkTypeFolderByUserChoice = parkType => parkType === selectedParkTypeFolder
//     const selectedParkType = parkTypesArray.find(parkTypeFolderByUserChoice)
//     // const albumFolderByUserChoice = selectElement.value
//     console.log(selectedParkTypeFolder)
    
//     const parentElement = document.querySelector("main")

//     for (const path of selectedParkType.paths) {
//         // VISUALIZE THE GOAL: <img class="card" src="insert-image-path-here">

//         // 1. Create the empty element by tag name:
//         const imageElement = document.createElement("img")

//         // 2. Customize it in some way:
//         imageElement.setAttribute("src", `images/${selectedParkTypeFolder}/${path}`)
//         imageElement.classList.add("img-thumbnail", "gallery-image")

//         // 3. Add it to an existing branch on the DOM tree:
//         parentElement.append(imageElement)
//     }

//     console.log(parentElement)
// }





// // window.onload = main

// // function main () {
// //     populateParkLocationDropdown()
    
// // }

// // function populateParkLocationDropdown () {
// //     // const selectElement = document.querySelector("#locationChoice")
// //     // selectElement.onchange = handleChange

// //     for (const location of locationsArray) {
// //         const option = document.createElement("option")

// //         option.value = location
// //         option.innerText = location

// //         selectElement.append(option)
// //     }

// // }

// // function handleChange (event) {
// //     console.log(event.target.value)

// //     const selectedLocationArray = event.target.value
// //     const locationByUserChoice = location => location.locationsArray === selectedLocationArray
// //     const selectedLocation = location.find (locationByUserChoice)
// //     console.log(selectedLocationArray)

// //     const parentElement = document.querySelector("main")

// //     for (const path of selectedLocation.paths) {
// //         const locationElement = document.createElement("div")



// //     }
// // }


// function searchByLocation (state) {

//     for (index = 0; index < locationsArray.length; index += 1) {
//         console.log(locationsArray[i])
//     }
    
//     // if (state === locationsArray.match(String)) {

//     // }

//     //return selectedState
// }


// const parkDropDown = document.getElementById("parkDropDown")

// for (index = 0; index < locationsArray.length; index += 1) {
// let option = document.createElement("option");
// option.setAttribute('value', data[index]);

// let optionText = document.createTextNode(key);
// option.append(optionText)

// parkDropDown.append(option)
// }


// function stateList (stateListSelections) {
//     let states = ""
//     for (index = 0; index < stateListSelections.length; index += 1) {
//         const selectedState = stateListSelections[index]
//         states += `<option value = ${selectedState} > ${selectedState}</option>`
//     }
//     return states
// }


// function addStatesList () {
//     const selectState = document.querySelector("#parks");
//     selectState.innerHtml = stateList(locationsArray);
//     selectState.onchange = stateChange
// }


// window.onload = function searchByLocation () {
//     let states = locationsArray;

//     const parks = document.getElementById("parks");

//     let length = states.length;

//     for (let index = 0; index < length; index += 1) {
//         let theOption = document.createElement("option");

//         theOption.textContent = states[index];
//         theOption.value = states[index];

//         parks.append(theOption)
        
//     }



// }

// function searchByLocation (location) {

//     let location = locationsArray

//     for (let index = 0; index < length; index += 1) {

//     }

//     return location;
// }