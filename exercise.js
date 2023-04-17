// Write your code here!
// Create new nodes
// Delete nodes
// Update node properties

// takes main out
// const main = document.getElementsByTagName("main")[0];
// main.remove();

// new header
// const newHeader = document.createElement("h1");

// id of victory
// newHeader.setAttribute("id", "victory")

// champion text 
// newHeader.textContent = "Juan Salazar is the champion";
// document.body.append(newHeader);

// creates the div
const element = document.createElement("div");
// appends the div
document.body.append(element);
// creates an unordered list
let ul = document.createElement("ul");

// populates the ul with 3 li's
for (let i = 0; i < 3; i++) {
    const li = document.createElement("li");
    li.textContent = (1 + i).toString();
    ul.append(li);
}

// append the ul
element.append(ul);

// using innerHTML for complicated text, not recommended
// due to the risk of XSS
const main = document.getElementById("main");
main.innerHTML =
    `<h1>Poodles!</h1>
  <h3>
  An Essay into the Pom-Pom as Aesthetic Reconfiguration of the Other from a post-Frankfurt
   School Appropriationist Perspective
  </h3>
  <p><em>By: Byron Q. Poodle, Esq., BA.</em></p>`;

//const element = document.getElementById("main");
main.style.height = "300px";
main.style.backgroundColor = "#27647B";
main.textContent = "You've changed what's on the screen!";
main.style.fontSize = "24px";
main.style.marginLeft = "30px";
main.style.lineHeight = 2;

main.className = "pet-listing dog";
main.classList.remove("dog");
main.classList.add("cat", "sale"); // pet-listing cat sale


// separation of concerns
// html define the structure; js, the functionality
// css, the visualization

ul = document.getElementsByTagName("ul")[0];
const secondChild = ul.querySelector("li:nth-child(2)");
ul.removeChild(secondChild);

// to remove the whole ul
ul.remove();
