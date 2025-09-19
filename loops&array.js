const cats = ["Leopard", "Serval", "Jaguar", "Tiger", "Caracal", "Lion"];

for (const cat of cats) {
  console.log(cat);
}

let Array = ["car","bike"]
for (let index = 0; index < Array.length; index++) {
    const element = Array[index];
    console.log(element)
}

let myFavoriteCats = "My cats are called ";

for (let i = 0; i < cats.length; i++) {
  if (i === cats.length - 1) {
    // We are at the end of the array
    myFavoriteCats += `and ${cats[i]}.`;
  } else {
    myFavoriteCats += `${cats[i]}, `;
  }
}

console.log(myFavoriteCats); // "My cats are called Pete, Biggles, and Jasmine."


const contacts = [
  "Chris:2232322",
  "Sarah:3453456",
  "Bill:7654322",
  "Mary:9998769",
  "Dianne:9384975",
];
const para = document.querySelector("p");
const input = document.querySelector("input");
const btn = document.querySelector("button");

btn.addEventListener("click", () => {
  const searchName = input.value.toLowerCase();
  input.value = "";
  input.focus();
  para.textContent = "";
  for (const contact of contacts) {
    const splitContact = contact.split(":");
    if (splitContact[0].toLowerCase() === searchName) {
      para.textContent = `${splitContact[0]}'s number is ${splitContact[1]}.`;
      break;
    }
  }
  if (para.textContent === "") {
    para.textContent = "Contact not found.";
  }
});

// const cats = ["Pete", "Biggles", "Jasmine"];

// let myFavoriteCats = "My cats are called ";

let i = 0;

while (i < cats.length) {
  if (i === cats.length - 1) {
    myFavoriteCats += `and ${cats[i]}.`;
  } 
  else {
    myFavoriteCats += `${cats[i]}, `;
  }

  i++;
}

console.log(myFavoriteCats); // "My cats are called Pete, Biggles, and Jasmine."

do {
  if (i === cats.length - 1) {
    myFavoriteCats += `and ${cats[i]}.`;
  } else {
    myFavoriteCats += `${cats[i]}, `;
  }

  i++;
} while (i < cats.length);

console.log(myFavoriteCats); // "My cats are called Pete, Biggles, and Jasmine."

let i1 = 10;

while(i1>=0){
  if (i1==10){
    console.log("Countdown",i1)
  }
  else if (i1==0){
    console.log("Blast off!")
  }
  else {
    console.log(i1)
  }
  i1--
}

// let a= prompt("Enter a number greater than 100") 
// while (a<100){
// a = prompt("The number should be greater then 100!!!!!!!!")
// }   

let l = ["A","B","C","D"] 

for (let i = 0; i < l.length; i++) {
  const element = l[i];
  console.log(element)
}

//get element
l[0] //A
l.at(-1) //D

//add element by push
l.push("E") //add at end

//update
l[1]="BB" //update B to BB

//length
l.length //5

//pop,push,shift,unshift

//pop ---> remove last element
//push ---> add element at last
//shift ---> remove first element
//unshift ---> add element at first

l.pop() //remove last element D
l.push("D") //add D at last
l.shift() //remove first element A
l.unshift("A") //add A at first


let fruits = ["Banana"]

let arr = fruits; // copy by reference (two variables reference the same array)

console.log( arr === fruits ); // true

arr.push("Pear"); // modify the array by reference

console.log( fruits ); // Banana, Pear - 2 items now

console.log(l.toString()) //A,BB,C,D

let car = "" + 1
console.log(typeof car) //string

let n = ["A","B","C","D","E","AA"]
// console.log(n.splice(1,4)) //returns the list of element jo delete kare hai 
console.log(n.length)
n.splice(0,3,"AA","CC")
console.log(n)

let b = ["hi","hello"];
let n1 = n.concat(["hi"])
console.log(n1)

n.forEach(function(item,index,array){
  console.log(`${item} is at index ${index}, in array ${array}`)
});

 console.log(n.indexOf("AA",3))

 let result = n.find(function(item,index = 1,array){
  let a = index>2
  console.log(item ,"-", a)
 });

 let numbers = [5, 12, 8, 130, 44];
// filter(callback(element, index, array), thisArg)
let result1 = numbers.filter(function(element, index, array) {
  console.log("Checking:", element, "at index", index, "in", array);
  return element > 10;  // condition
}, thisArg = null);

console.log("Result:", result1);


