const btn1 = document.querySelector("#btn1");
btn1.onclick = () => alert("Hello World:2");

const btn2 = document.querySelector("#btn2");
btn2.addEventListener("click",() => {
    alert("Hello world:3")
})

btn2.addEventListener("click", function (e) {
  console.log(e);
});

btn2.addEventListener("click", function (e) {
  console.log(e.target);
});

btn2.addEventListener("click", function (e) {
  e.target.style.background = "blue";
});

// buttons is a node list. It looks and acts much like an array.
const buttons = document.querySelectorAll("button");

// we use the .forEach method to iterate through each button
buttons.forEach((button) => {
  // and for each one we add a 'click' listener
  button.addEventListener("click", () => {
    alert(button.id);
  });
});
