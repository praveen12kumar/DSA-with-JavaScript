// GCD of two numbers
// GCD of two numbers is the largest number that divides both of them.

function gcd(a, b) {
    if (b == 0) {
        return a;
    }
    if(a == 0){
        return b;
    }
    
    let res = 1; // for prime numbers
    let min = Math.min(a, b);
    for (let i = 2; i <= min; i++) {
        if (a % i == 0 && b % i == 0) {
            res = i;
        }
    }
    return res;
}


console.log(gcd(12, 15));