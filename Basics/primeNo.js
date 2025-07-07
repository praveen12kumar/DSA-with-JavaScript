
function isPrime(num){
    let i = 2;
    while( i < num/2){
    if(num % i == 0){
        console.log("not prime");
        return false;
    }
        i++;
    }
    return true;
}

console.log(isPrime(8));

