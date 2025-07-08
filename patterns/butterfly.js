

function printPattern(num){
    let rows = num;
    let numOfStars = 1;
    let numOfSpaces = rows - 2;

    for(let row = 1; row <= rows; row++){

        let stars = "";
        for(let star = 1; star <= numOfStars; star++){
            stars += "* ";
        }
        let spaces = "";
        for(let space = 1; space <= numOfSpaces; space++){
            spaces += "  ";
        }

        let stars2 = "";
        let numOfStars2 = numOfStars;

        if(row == Math.floor(num/2) + 1){
            numOfStars2 = numOfStars -1;
        }

        for(let star = 1; star <= numOfStars2; star++){
            stars2 += "* ";
        }


        console.log(stars + spaces + stars2);
        if(row <= Math.floor(num/2)){
            numOfStars += 1;
            numOfSpaces -= 2;
        }
        else{
            numOfStars -= 1;
            numOfSpaces += 2;
        }
    }

};

console.log(printPattern(5));