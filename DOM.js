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
// adds several style rules without CssText
controls.setAttribute("style","color:green; background:black;width:150px")
//we can use  camelcase or even kebab-case here
controls.style["backgroundColor"]="red"

// if id exists, update it to 'theDiv', else create an id with value "theDiv"
div.setAttribute("id", "theDiv");
console.log(div)

// returns value of specified attribute, in this case "theDiv"
console.log(div.getAttribute("id"));

// removes specified attribute
div.removeAttribute("id");
console.log(div)

//adds class "new" to div element
div.classList.add("New")

//removes class "new" from div element
div.classList.remove("New")

//if div have class "active" removes it else adds it 
div.classList.toggle("active")

//Adding text content
div.textContent = "Hello World!"    //<div>Hello World!</div>

//adding HTML content 
div.innerHTML = "<span>text</span>"