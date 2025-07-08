


function printPattern(num){
    
    let rows = num;
    
    for(let row = 0; row < rows; row++){
        let numOfStars = num - row;
        let stars = "";
        for(let star = 0; star < numOfStars; star++){
            stars +="*";
        }
        console.log(stars);
    }
}




console.log(printPattern(5));