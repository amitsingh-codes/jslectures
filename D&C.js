console.log("hello 'amit here'");

console.log('hello "Amit here"');

console.log(`"Hello" 'Amit here'`);

let name = "Amit";
console.log("My name is", name)
console.log(`My name is ${name}`) //better 


console.log( `the result is ${1 + 2}`);

console.log(typeof(name))


const newline = `One day you finally knew
what you had to do, and began,`;
console.log(newline);

const name1 = "Front ";
const number = 242;
console.log(name1 + number)
console.log(typeof(name1 + number)); // "Front 242"

console.log("O">"O");
console.log("O">"o");
console.log(56<100);

console.log("5"==5) //string "5" became number 5
console.log( 1 || 0 );
console.log( null || 1 );
console.log( null || 0 || 1 );
console.log( undefined || null || 0 );

console.log(true && true )
console.log(0 && 0);
console.log(1 && 1);

let a1 = "car"
if (a1 == "car"){
    console.log("it is ")
}
else {
    console.log("it is not")
}

let shoppingDone = false;
let childAllowance ;
console.log(childAllowance)
if (shoppingDone === true) {
  childAllowance = 10;
} else {
  childAllowance = 5;
}
console.log(childAllowance)


const select = document.querySelector("select");
const para = document.querySelector("p");

select.addEventListener("change", setWeather);

function setWeather() {
  const choice = select.value;

  if (choice === "sunny") {
    para.textContent =
      "It is nice and sunny outside today. Wear shorts! Go to the beach, or the park, and get an ice cream.";
  }
   else if (choice === "rainy") {
    para.textContent =
      "Rain is falling outside; take a rain coat and an umbrella, and don't stay out for too long.";
  } 
  else if (choice === "snowing") {
    para.textContent =
      "The snow is coming down — it is freezing! Best to stay in with a cup of hot chocolate, or go build a snowman.";
  } 
  else if (choice === "overcast") {
    para.textContent =
      "It isn't raining, but the sky is grey and gloomy; it could turn any minute, so take a rain coat just in case.";
  }
   else {
    para.textContent = "";
  }
}

let cheese = false;

if (cheese) {
  console.log("Yay! Cheese available for making cheese on toast.");
} 
else {
  console.log("No cheese on toast for you today.");
}

let age = 160;

if (age<15){
    console.log("Not allowed ")
}
else if (age>15 && age <18){
    console.log("allowed with learning permit")
}
else if (age>50 && age==18 && age>18){
    console.log("allowed")
}
else{
    console.log("not allowed due to high age")
}

let n = prompt(`What's the “official” name of JavaScript?`);
if (n == "ECMAScript"){
  alert("Right")
} 
else{
  alert(`You don't know? “ECMAScript”!`)
}

let num = prompt(`Enter a random number`);

switch (num){
  case (num > 0):
    alert("1")
    break;
  case (num < 0):
    alert("-1")
    break
  default:
    alert("0")
}

//it won't work cause switch statement doesn't work on conditions it work when we give a variable a name or value 


let message1 = (num > 0) ? "1" : 
    (num<0) ? "-1":
    "0"
alert(message1)

let a2 = prompt("Enter a")
let b1 = prompt("Enter b")

let result;
if (a2 + b1 < 4) {
  result = 'Below';
} else {
  result = 'Over';
}

let a3 = Number(prompt("Enter a"));
let b = Number(prompt("Enter b"));
let result1 = (a3 + b < 4 ) ?"Below" : "over"
alert(result1)

let message2;
if (login == 'Employee') {
  message2 = 'Hello';
} else if (login == 'Director') {
  message2 = 'Greetings';
} else if (login == '') {
  message2 = 'No login';
} else {
  message2 = '';
}

let login = prompt("enter your designation")

let message = (login == "Employee") ? "Hello":
    (login=="Director") ? "Greetings" :
    (login == "") ? "No login":
    "";
alert(message)

let browser = prompt("Enter your browser")

if (browser == "Edge"){
  alert("You've got the Edge!")
}

else if (browser == "chrome"||"Firefox"||"Safari"||"Opera"){
  alert("Okay we support this browser too")
}

else{
  alert( 'We hope that this page looks ok!' )
}

let a = +prompt('a?')

switch(a){
  case 0 :
    alert("0")
    break;
  case 1 :
    alert(1)
    break;
  case 2:
  case 3:
    alert('2,3')
    break;
}

let game = "assassin's creed shadows"
let version = "2"
console.log(game.length) 
console.log(game.charAt(4)) //old bro is unc
console.log(game.at(4)) //young bro is genz
console.log(game[4]) //same
game[0] = "A";    
console.log(game) // Gives no error, but does not work
console.log(game.concat("-",version))
console.log(game.slice(3,9))
console.log(game.slice(-3))
console.log(game.substring(5,10))
let c = "                           he                llo                     "
console.log(c)
console.log(c.trim())
let text = "5";
text = text.padStart(4," ");
console.log(text)
let text1 = "Please visit Microsoft!";
let newText = text1.replace("MICROSOFT", "W3Schools");  //case sensitive
console.log(newText)
let newText1 = text1.replace(/MICROSOFT/i,"amit")
console.log(newText1)

let text2 = "Please visit Microsoft and Microsoft!";
let newText2 = text2.replace(/Microsoft/g, "W3Schools");
console.log(newText2)