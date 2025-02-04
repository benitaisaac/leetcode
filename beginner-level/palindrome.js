// Write a method that checks if a given string is a palindrome (reads the same way forwards and backwards)

// Example input: "racecar" 
// output: True 

//Logic: run a for loop to go through half of the length of the string and check if the first element matches the last element 
// str = "racecar"

function palindrome(str){
    for (let i = 0; i < str.length/2; i++){
        if(str[i] !== str[str.length-1-i]){
            return false;
        } 
    }
    return true;
}

console.log(palindrome("racecar"));
console.log(palindrome("helllo"));