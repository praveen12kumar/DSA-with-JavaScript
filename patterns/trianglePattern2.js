

function printPattern(num){
    let rows = num;
    

    for(let row = 0; row < rows; row++){
        let spaces = "";
        let numOfSpaces = rows - row -1;
        for(let space = 0; space < numOfSpaces; space++){
            spaces += " ";
        }
        let stars = "";
        for(let col = 0; col <= row; col++){
            stars += "*";
        }
        console.log( spaces + stars);
    }
}


console.log(printPattern(4));
console.log(printPattern(6));