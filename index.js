// Write your code here!
// takes main out
const main = document.getElementsByTagName("main")[0];
main.remove();
// new header
const newHeader = document.createElement("h1");
// id of 'victory'
const id = document.createElement("id");
id.textContent = "victory";
// champion text 
newHeader.textContent = "Juan Salazar is the champion";
document.body.append(newHeader);
newHeader.append(id);
