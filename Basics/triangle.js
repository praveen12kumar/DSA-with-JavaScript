// Three side of a triangle given, check if it is a valid triangle or not.
// If it is a valid triangle, check if it is an equilateral, isosceles or scalene triangle.

// "Equilateral triangle": all the sides are equal to each other
// "Isosceles triangle": two sides are equal to each other
// "Scalene triangle": all the sides are different from each other


let a = 5;
let b = 5;
let c = 5;

if( a + b > c && b + c > a && c + a > b){
    if(a == b && b == c){
        console.log("Equilateral triangle");
    }
    else if(a == b || b == c || c == a){
        console.log("Isosceles triangle");
    }
    else{
        console.log("Scalene triangle");
    }
}
else{
    console.log("Invalid triangle");
}