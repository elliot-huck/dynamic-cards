const createButton = document.querySelector("#create");
const outputDiv = document.querySelector("#output");

const createCard = () => {
  const textInput = document.querySelector("#input").value;
  const newCard = document.createElement("div");
  const firstChild = outputDiv.firstElementChild;

  // creates the card
  newCard.className = "card";
  newCard.innerHTML = `
    <div class="color-fields">
      Background color: <input type="color" class="background-color" value="#ffffff">
    </div>
    <div class="color-fields">
      Text color: <input type="color" class="text-color" value="#000000">
    </div>
    <div class="text-input">${textInput}</div>
    <div class="delete-bar">
      <button class="delete">X</button>
    <div>
  `;

  // inserts the newest card at the beginning of the outputDiv
  if (outputDiv.firstElementChild === null) {
    outputDiv.appendChild(newCard);
  } else {
    outputDiv.insertBefore(newCard, firstChild);
  }

  // adds function deleteCard to the delete button
  newCard.querySelector(".delete").addEventListener("click", deleteCard);
  
  // adds functions to the color inputs
  newCard.querySelector(".background-color").addEventListener("input", setBackgroundColor);
  newCard.querySelector(".text-color").addEventListener("input", setTextColor);
}

const deleteCard = function() {
  const parentCard = this.parentNode.parentNode;
  outputDiv.removeChild(parentCard);
}

const setBackgroundColor = function() {
  const parentCard = this.parentNode.parentNode;
  const textInput = parentCard.querySelector(".text-input");
  textInput.style.backgroundColor = this.value;
}

const setTextColor = function() {
  const parentCard = this.parentNode.parentNode;
  const textInput = parentCard.querySelector(".text-input");
  textInput.style.color = this.value;
}

createButton.addEventListener("click", createCard);
