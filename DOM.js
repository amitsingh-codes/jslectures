const container = document.querySelector("#container");

// selects the first child of #container => .display
const display = container.firstElementChild;
console.log(display);  // <div class="display"></div>

// selects the .controls div
const controls = document.querySelector(".controls");

// selects the prior sibling => .display
const display2 = controls.previousElementSibling;
console.log(display2); // <div class="display"></div>

const div = document.createElement("div")
container.insertBefore(div,controls)
console.log(container)

// adds the indicated style rule to the element in the div variable
controls.style.background = "blue";
// adds several style rules
controls.style.cssText = "color:red; background-color:green;width:200px ;"
// adds several style rules
controls.setAttribute("style","color:green; background:black;width:150px")