
function printPattern(num){
    let numOfSpaces = Math.floor(num/2);
    let numOfStars = 1;

    let rows = num;
    for(let row = 1; row <= rows; row++){
        
        let spaces = "";
        for(let space = 1; space <= numOfSpaces; space++){
            spaces += " ";
        }
        let stars = "";
        for(let star = 1; star <= numOfStars; star++){
            stars += "*";
        }

        console.log(spaces + stars);
    
        if( row <= num/2){
            numOfSpaces--;
            numOfStars += 2;
        }
        else{
            numOfSpaces++;
            numOfStars -= 2;
        }
    }

}



console.log(printPattern(5));