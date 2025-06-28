// Remove the existing <main> element
const main = document.getElementById("main");
if (main) {
  main.remove();
}

// Create a new <h1> element
const newHeader = document.createElement("h1");
newHeader.id = "victory";
newHeader.textContent = "John Doe is the champion"; // Replace 'John Doe' with your name

// Append it to the DOM
document.body.appendChild(newHeader);
