

function printPattern(num){
    let rows = num;
    

    for(let row = 0; row < rows; row++){
        let stars = "";
        for(let col = 0; col <= row; col++){
            stars += "* ";
        }
        console.log(stars);
    }
}


console.log(printPattern(4));
console.log(printPattern(6));