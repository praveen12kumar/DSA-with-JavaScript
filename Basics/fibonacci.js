


function fibonacci(num){
    
    let result = "";

    if(num == 0){
        console.log(0)
        return;
    }

    if(num >= 1){
        console.log(0);
        console.log(1);
    
        let a = 0, b = 1;
        let c = 0;
        for(let i = 2; i <= num; i++){
            c = a + b;
            result += c + " ";
            a = b;
            b = c;
        }
        return result;
    }
    
}


console.log(fibonacci(10));