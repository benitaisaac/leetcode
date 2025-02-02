// Write a method that takes a list of integers as input and returns the smallest element in the list
// Example Input: [3,5,2,9,1]
// Output: 1 

function findLargest(arr){
    let largest = arr[0];
    for (let i=0; i < arr.length; i++){
        if (arr[i] > largest) {
            largest = arr[i];
        }
    }
    return largest;
}

console.log(findLargest([4,2,7,1]));