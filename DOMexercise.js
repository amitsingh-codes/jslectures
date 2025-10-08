// Add the following elements to the container using ONLY JavaScript and the DOM methods shown above:

// 1.a <p> with red text that says “Hey I’m red!”
// 2.an <h3> with blue text that says “I’m a blue h3!”
// 3.a <div> with a black border and pink background color with the following elements inside of it:
//           another <h1> that says “I’m in a div”
//           a <p> that says “ME TOO!”


const container = document.querySelector("#container")

const redp = document.createElement("p")
redp.textContent = "Hey I'm red"
redp.style.cssText=("color:red")
container.appendChild(redp)


const blueh3 = document.createElement("h3")
blueh3.textContent = "I'm a blue h3"
blueh3.style.cssText = "color:blue" 
container.appendChild(blueh3)

const div = document.createElement("div")
div.setAttribute("style","border:2px solid black;background-color:pink")
const h1 = document.createElement("h1")
h1.textContent="I'm in a div"
div.appendChild(h1)
const p = document.createElement("p")
p.textContent = "ME TOO"
div.appendChild(p)
container.appendChild(div)