

function printPatter(num){

    let rows = num;
    let cols = num;
    

    for(let row = 0; row < rows; row++){
        let stars = "";
        for(let star = 0; star < cols; star++){
            stars+='* ';
        }
        console.log(stars);
    }
}


console.log(printPatter(4));
console.log(printPatter(6));