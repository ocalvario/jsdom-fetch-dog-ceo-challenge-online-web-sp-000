console.log('%c HI', 'color: firebrick')
let breeds;

fetch("https://dog.ceo/api/breeds/image/random/4")
  .then(resp => resp.json())
  .then(json => getDogs(json));

fetch("https://dog.ceo/api/breeds/list/all")
  .then(resp => resp.json())
  .then(json => getBreeds(json));

function getDogs(json) {
  const imgContainer = document.querySelector("#dog-image-container");
  let arr = json.message;
  arr.forEach(imgUrl => {
    const img = document.createElement("img");
    img.src = imgUrl;
    imgContainer.append(img);
  });
}

function getBreeds(json) {
  const breedContainer = document.querySelector("#dog-breeds");
  breeds = Object.keys(json.message);
  breeds.forEach(breed => {
    const li = document.createElement("li");
    li.innerText = breed;
    breedContainer.append(li);
    makePinkOnClick(li);
  });
}

function filterDropdown() {
  const breedContainer = document.querySelector("#dog-breeds");
  const select = document.querySelector("#breed-dropdown");
  const letter = select.value;
  breedContainer.innerHTML = "";
  breeds.forEach(breed => {
    if (breed.startsWith(letter)) {
      const li = document.createElement("li");
      li.innerText = breed;
      breedContainer.append(li);
      makePinkOnClick(li);
    }
  });
}

function makePinkOnClick(li) {
  li.addEventListener("click", function(e) {
    li.style.color = "hotpink";
  });
}