let num = Number(prompt("Enter the number"))

for (let i = 1; i <= num; i++){
    if (i%3 == 0 && i%5 == 0){
        console.log("Fizz Buzz")
    }
    else if (i%3 == 0 && i%5 != 0 ){
        console.log("fizz")
    }   
    else if (i%3 != 0 && i%5 == 0){
        console.log("Buzz")
    }
    else{
        console.log(i)
    }
}