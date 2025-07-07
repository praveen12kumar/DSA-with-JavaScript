

function printPattern(num){
    let rows = num;
    
    for(let row = 0; row < rows; row++){
        let spaces = "";
        let numOfSpaces = rows - row -1;
        let numOfStars = 2 * row + 1;
        let stars = "";
        
        for(let space = 0; space < numOfSpaces; space++){
            spaces += " ";
        }

        for(let star = 0; star < numOfStars; star++){
            stars += "*";
        }
        console.log(spaces + stars);
    }
}


console.log(printPattern(7));