// Write a method that takes a list and a target value as input, and returns the index of the target in the list. If the target is not found, return -1.

// example input: list = [10, 20, 30, 40] target = 30
// output: 2 

//logic: I will need to loop through the array and see if any of those elements matches the target element. If it does, return that index number 

function returnTargetIndex(arr, target){ 
    for (let i = 0; i<arr.length; i++){
        if(arr[i] === target){
            return i; 
        }
    }
    return -1; 
}

console.log(returnTargetIndex([10, 20, 30, 40], 30)); 
console.log(returnTargetIndex([10, 20, 40], 30)); 

