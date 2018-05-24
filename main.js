const createButton = document.querySelector("#create");
const outputDiv = document.querySelector("#output");

const createCard = () => {
  let textInput = document.querySelector("#input").value;
  let newCard = document.createElement("div");
  newCard.className = "card";
  newCard.innerHTML = `
    <input type="color">
    <input type="color">
    <p>${textInput}</p>
    <button class="delete">Delete</button>
  `;
  outputDiv.appendChild(newCard);

}

createButton.addEventListener("click", createCard);