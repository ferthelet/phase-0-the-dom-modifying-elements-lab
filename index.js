// Write your code here!
// YOUR-NAME is the champion

// takes main out
const main = document.getElementsByTagName("main")[0];
main.remove();

// new header
const newHeader = document.createElement("h1");

// id of victory
newHeader.setAttribute("id", "victory")

// champion text 
newHeader.textContent = "Juan Salazar is the champion";
document.body.append(newHeader);

