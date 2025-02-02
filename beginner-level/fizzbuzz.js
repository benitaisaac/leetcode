// Write a method that prints numbers from 1 to n. For multiples of 3, print "Fizz" instead of the number. For multiples of 5, print "Buzz". For numbers that are multiples of both 3 and 5, print "FizzBuzz".

// example input: 15
// output: 1, 2, Fizz, 4, Buzz, Fizz, 7, 8, Fizz, Buzz, 11, Fizz, 13, 14, FizzBuzz
 

function fizzBuzz(n){
    let returnedArray = []; 
    for (let i=1; i<=n; i++){
        if (i%3 === 0 && i%5 === 0){
            returnedArray.push("FizzBuzz"); 
        } else if (i%3 === 0 ){
            returnedArray.push("Fizz");
        } else if (i%5 === 0){
            returnedArray.push("Buzz");
        } else {
            returnedArray.push(i); 
        }
    }
    return returnedArray; 
}

console.log(fizzBuzz(15));