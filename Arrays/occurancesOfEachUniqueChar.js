// Given a string, try to print number of occurances of each unique character 
// in the string.

function uniqueChar(str){
    let uniqueChars = {};

    for(let char of str){
        if(uniqueChars[char]){
            uniqueChars[char] += 1;
        }
        else{
            uniqueChars[char] = 1;
        }
    }

    return uniqueChars;
}

console.log(uniqueChar("hululu"));


/*
The syntax uniqueChars.char does not work in your case 
because JavaScript interprets .char as looking for a property 
literally named char, not using the value of the char variable.

*/