// Write a method that takes a list of integers as input and returns the sum of all even numbers in the list.

// example input: [1, 2, 3, 4, 5, 6]
// output: 12 

// Logic: 
// need to check if the element is even using mod 2 = 0
// need to make new array with all even numbers? 
//  OR solution: variable sum of even, where if an element is even, we add it to that variable 

function sumEvenNumbers(arr){
    let evenSum = 0; 
    for (let i=0; i < arr.length ; i++){
        if (arr[i]%2 === 0){
            evenSum += arr[i];
        }
    }
    return evenSum;
}

console.log(sumEvenNumbers([1,2,3])); // should be 2 
console.log(sumEvenNumbers([1, 2, 3, 4, 5, 6])); 
