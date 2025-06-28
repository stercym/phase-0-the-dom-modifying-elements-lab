// Write your code here!
const main = document.getElementById("main");
// Check if main exists then remove the <main> element with id="main"
if (main) {
  main.remove();
}

// Create a new headerer <h1> element
const newHeader = document.createElement("h1");

// Set its id to "victory"
newHeader.id = "victory";

// Set its text content to include my name
newHeader.textContent = "Stercy Mutuku is the champion";

// Append the newHeader to the body
document.body.appendChild(newHeader);
