

function printPattern(num){
    let rows = num;
    
    for(let row = 1; row <= rows; row++){
        let spaces = "";
        let numOfSpaces = rows - row;
        
        for(let space = 1; space <= numOfSpaces; space++){
            spaces += "  ";
        }

        let numOfStars = 2 * row - 1;
        let stars = "";
        let nums = row;

        for(let star = 1; star <= numOfStars; star++){
            stars = stars + nums + " "; 
            if(star < row){
                nums++;
            }
            else{
                nums--;
            }
            
        }
        console.log(spaces + stars);
    }
}


console.log(printPattern(5));