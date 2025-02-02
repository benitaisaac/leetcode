// Write a method that takes a list of integers as input and returns the smallest element in the list
// Example Input: [3,5,2,9,1]
// Output: 1 

function smallestElement(arr){
    let smallest = arr[0];
    for (let i=0; i<arr.length; i++){
        if (arr[i] < smallest){
            smallest = arr[i];
        }
    }
    return smallest;
}

console.log(smallestElement([3,5,2,9,11]))