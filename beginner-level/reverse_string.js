// Write a method that takes a string as input and returns the reversed version of the string.
//example input: hello
//example output: olleh


function reverseString(str){
    let outputString = "";
    for (let i = str.length-1; i >= 0; i-- ){
        outputString += str[i];
    }
    return outputString;
}

console.log(reverseString("hello"));