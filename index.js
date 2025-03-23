const imgUrl = "https://dog.ceo/api/breeds/image/random/4";
const breedUrl = "https://dog.ceo/api/breeds/list/all";
document.addEventListener("DOMContentLoaded", function () {
    const breedUrl = "https://dog.ceo/api/breeds/list/all";
    const breedList = document.getElementById("dog-breeds");
    const dropdown = document.getElementById("breed-dropdown");
    let breeds = [];
  
    // Fetch breeds and populate the list
    fetch(breedUrl)
      .then((response) => response.json())
      .then((data) => {
        breeds = Object.keys(data.message); // Store all breeds in an array
        renderBreeds(breeds); // Render all breeds initially
      })
      .catch((error) => console.error("Error fetching breeds:", error));
  
    // Filter breeds based on dropdown selection
    dropdown.addEventListener("change", function (event) {
      const selectedLetter = event.target.value;
      const filteredBreeds =
        selectedLetter === "all"
          ? breeds
          : breeds.filter((breed) => breed.startsWith(selectedLetter));
      renderBreeds(filteredBreeds);
    });
  
    // Function to render breeds
    function renderBreeds(breeds) {
      breedList.innerHTML = ""; // Clear the list
      breeds.forEach((breed) => {
        const liElement = document.createElement("li");
        liElement.textContent = breed;
        breedList.appendChild(liElement);
      });
    }
  });