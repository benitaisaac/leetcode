// Write a method that takes a list of integers and returns a new list with duplicates removed.
// Example Input: [1, 2, 2, 3, 4, 4, 5]
// Output: [1, 2, 3, 4, 5]

// Logic: 
// create an array that will be returned at end of function 
// write a loop that goes through an array
// set found variable to be initialized at false 
// write another loop to go through the second array 
    // check if the value of the element in first array matches any values in the second array
    // if it does, break out of the loop and set found to be true 
    // if the value is not found, add it to the returned array 
// return the array 


function removeDuplicates(arr){
    let finalArray = [];
    for (let i = 0; i < arr.length; i++){
        let found = false; 
        for (let j=0; j<finalArray.length; j++){
            if (arr[i] === finalArray[j]){
                found = true;
                break;
            }
        }
        if (!found){
            finalArray.push(arr[i]);
        }
    }
    return finalArray;
}

console.log(removeDuplicates([1, 2, 2, 3, 4, 4, 5]));