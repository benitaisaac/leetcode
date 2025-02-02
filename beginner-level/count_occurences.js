// Write a method that takes a string and a character as input and returns the number of times the character appears in the string.

// Example input: 
// string = "banana" 
// char = "a"

// Output: 3

function countOccurences(char, str){
    let count = 0;
    for (let i=0; i < str.length; i++){
        if (str[i] === char) {
            count++;
        }
    }
    return count;
}

console.log(countOccurences("a", "banana")); 
console.log(countOccurences("b", "banana")); 
console.log(countOccurences("n", "banana")); 