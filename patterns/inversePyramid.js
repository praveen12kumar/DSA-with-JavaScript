
function printPattern(num){

    let rows = num;

    for(let row = 1; row <= rows; row++){
        let numOfSpaces = row -1;
        let spaces = "";
        for(let space = 1; space <= numOfSpaces; space++){
            spaces += " ";
        }
        let numOfStars = 2 * num - 2 * row + 1;
        let stars = "";
        for(let star = 1; star <= numOfStars; star++){
            stars += "*";
        }

        console.log(spaces + stars);
    }


};

console.log(printPattern(5));