// Write a method that takes a list of integers and returns True if the list is sorted in ascending order, and False otherwise.

// Example input: 
// [1, 2, 3, 4, 5] True
// [2, 1, 5, 3, 1] False 


// write a function that loops through the array 
// we need to check for arr[i] < arr [i+1]
// if above is not true, then we just return false 
// if it finishes the loop then it return true 

function sortedList(arr){
    for (let i =0; i < arr.length-1; i++){
        if (arr[i] > arr[i+1]){
            return false;
        }
    }
    return true; 
}


console.log(sortedList([1, 2, 3, 4, 5]));
console.log(sortedList([2, 1, 5, 3, 1]));
