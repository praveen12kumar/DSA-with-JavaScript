

function printPattern(num){

    let rows = 2 * num -1;

    let numOfSpace = 0;
    let numOfStars = num;
    let start = 1;

    for(let row = 1; row <= rows; row++){

        let spaces = "";
        for(let space = 0; space < numOfSpace; space++){
            spaces+=" ";
        }

        let stars = "";

        for(let star = start; star <= numOfStars; star++){
            stars = stars+ " "+star
        }

        console.log(spaces + stars);

        if(row < Math.floor(rows/2 + 1)){
            numOfSpace++;
            start++;
        }
        else{
            numOfSpace--;
            start--;
        }
    }
}


console.log(printPattern(7));