// Find the Most Frequent Element: Write a method that takes in a list of integers and returns the element that appears the most frequently. If there are ties, return any one of them. 
// Example input: [1, 3, 5, 2, 5]
// Output: 5

// Logic: 
// write a loop that will go through the array and check if any elements are repeated
// I need to keep track of how many times an element is repeated 
// will need count and mostFrequent count. Change mostFrequent element if the count is greater than it 

function mostFrequent(arr){
    let mostFrequentElement; // return this. Must be an element, not how many times the element repeats in array
    let maxCount = 0;
    for (let i=0; i<arr.length; i++){
        let count = 0;
        for (let j=0; j<arr.length; j++){
            if(arr[i] === arr[j]){
                count++;
            }
        }
        if(count > maxCount){
            maxCount = count;
            mostFrequentElement = arr[i];
        }
    }
    return mostFrequentElement;
}

console.log(mostFrequent([1,3,5,2,5, 10, 10, 10]));