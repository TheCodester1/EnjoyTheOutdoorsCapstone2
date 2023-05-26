window.onload = main

function main () {
    populateMountainDropdown ();
}


function populateMountainDropdown() {
   const selectElement = document.querySelector("#mountainsDropDown");
  selectElement.onchange = mountainChoice;


    for (const mountains of mountainsArray) {
        
        const option = document.createElement("option");
        option.value = mountains.name;
        option.innerText = mountains.name;
        selectElement.append(option);
    }
}

function mountainChoice () {
  const selectElement = document.querySelector ("#mountainsDropDown");
  const mountainRef = document.querySelector  ("main");
  const selectedMountain = selectElement.value;

  for (const mountains of mountainsArray) {
    if (selectedMountain === mountains.name) {
      mountainRef.innerHTML = `
        <img src="images/${mountains.img}" class="card-img-top">
        <div class="card-body">
          <h5 class="card-title">${mountains.name}</h5>
          <p class="card-text">${mountains.desc}</p>
          <p class="card-text">${mountains.effort}</p>
          <p class="card-text">${mountains.coords.lat}</p>
          <p class="card-text">${mountains.coords.lng}</p>
        </div>
      `;
    }
  }

  //for (const mountains of mountainsArray) {
  //  if (selectedMountain === mountains.name) {
      //  mountainRef.innerHTML = `<img src = "images/${mountains.img}"> ${mountains.desc} 
        //Effort : ${mountains.effort} <br><br>Latitude: ${mountains.coords.lat} <br>Longitude: ${mountains.coords.lng}`;
    }
  //}

//}




// window.onload = main

// function main () {
//     // loadImages()
//     populateMountainDropdown()
// }

// function populateMountainDropdown() {
//     // the target of a form's "submit" event is the form
//     // the target of a click event is the element's 

//     const selectElement = document.querySelector("#mountainsDropDown")
//     // event listener 
//     selectElement.onchange = handleChange

//     for (const mountains of mountainsArray) {
//         // Example: <option value="album.folder">album.name</option>

//         // 1. Create a new empty element by tag name:
//         const option = document.createElement("option")

//         // 2. Customize the new baby element:
//         option.value = mountains
//         option.innerText = mountains.name

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
//     const selectedMountainsFolder = event.target.value
//     const mountainsFolderByUserChoice = mountains => mountains === selectedMountainsFolder
//     const selectedMountain = mountainsArray.find(mountainsFolderByUserChoice)
//     // const albumFolderByUserChoice = selectElement.value
//     console.log(selectedMountainsFolder)
    
//     const parentElement = document.querySelector("main")

//     for (const path of selectedMountain.paths) {
//         // VISUALIZE THE GOAL: <img class="card" src="insert-image-path-here">

//         // 1. Create the empty element by tag name:
//         const imageElement = document.createElement("img")

//         // 2. Customize it in some way:
//         imageElement.setAttribute("src", `images/${selectedMountainsFolder}/${path}`)
//         imageElement.classList.add("img-thumbnail", "gallery-image")

//         // 3. Add it to an existing branch on the DOM tree:
//         parentElement.append(imageElement)
//     }

//     console.log(parentElement)
// }

// function searchMountainInfo() {
//     const mountainInfo = document.querySelector("#mountainsDropDown")
//     const currentOption = selectElement.value

//     for (const mountain of mountainsArray) {
//         if (currentOption === mountain.name) {
//             mountainInfo.innerHTML = `img src="images/${currentOption.img}"> ${mountain.desc}`
//         }
//     }
// }

// function mountainChoice () {
//   const selectElement = document.querySelector ("#mountainChoice");
//   const mountainRef = document.querySelector  ("main");
//   const selectedMountain = selectElement.value;

//   for (const mountains of mountainsArray) {
//     if (selectedMountain === mountains.name) {
//       mountainRef.innerHTML = `
//         <img src="images/${mountains.img}" class="card-img-top">
//         <div class="card-body">
//           <h5 class="card-title">${mountains.name}</h5>
//           <p class="card-text">${mountains.desc}</p>
//           <p class="card-text">${mountains.effort}</p>
//           <p class="card-text">${mountains.coords.lat}</p>
//           <p class="card-text">${mountains.coords.lng}</p>
//         </div>
//       `;
//     }
//   }
// }