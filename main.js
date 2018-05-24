const createButton = document.querySelector("#create");
const outputDiv = document.querySelector("#output");

const createCard = () => {
  const textInput = document.querySelector("#input").value;
  const newCard = document.createElement("div");
  const firstChild = outputDiv.firstElementChild;
  newCard.className = "card";
  newCard.innerHTML = `
    <input type="color">
    <input type="color">
    <p>${textInput}</p>
    <button class="delete">Delete</button>
  `;
  if (outputDiv.firstElementChild === null) {
    outputDiv.appendChild(newCard);
  } else {
    outputDiv.insertBefore(newCard, firstChild);
  }
}

createButton.addEventListener("click", createCard);