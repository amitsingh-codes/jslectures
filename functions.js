function favoriteAnimal(animal) {
    return animal + " is my favorite animal!"
}

console.log(favoriteAnimal('Goat'))


const myArray = ["I", "love", "chocolate", "frogs"];
const madeAString = myArray.join(" ");
console.log(madeAString);
// the join() function takes an array, joins
// all the array items together into a single
// string, and returns this new string


// (function () {
//     alert("Hello");
// })
//     ();

// textBox.addEventListener("keydown", function (event) {
//   console.log(`You pressed "${event.key}".`);
// });

let car = "SUV"

const originals = [1, 2, 3];

const doubled = originals.map(item => item * 2);

console.log(doubled); // [2, 4, 6]

const textBox = document.querySelector("#textBox");
const output = document.querySelector("#output");

textBox.addEventListener("keydown", (event) => {
  output.textContent = `You pressed "${event.key}".`;
});

const textbox = document.querySelector("#textBox");

let say_hi = function(){
  alert("Hello! User")
}
// say_hi()

function capitalize(string){
  console.log(string[0].toUpperCase()+string.slice(1).toLowerCase());
}

capitalize("aMit")