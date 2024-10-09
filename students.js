studentName = "Alice";
studentAge = 15;
studentGrade = 10;
isPresent = true;

console.log(studentName, "(" + studentAge + ")", 
    "is", 
    isPresent ? "present" : "absent", 
    "in their grade", 
    String(studentGrade), "class"
);

let x
let y

x = 25
y = 4

console.log("The sum of", x, "&", y, "is", x+y);
console.log("The difference of", x, "&", y, "is", x-y);
console.log("The product of", x, "&", y, "is", x*y);
console.log("The quotient of", x, "&", y, "is", x/y);

console.log("X was", x, "but now it's", x = 29);
console.log("Y was", y, "but now it's", y = 13);

console.log("See Y is still", y);


console.log("Is X ("+x+") equal to Y ("+y+")?", x == y);
console.log("Is X ("+x+") greater than Y ("+y+")?", x > y);
console.log("Is X ("+x+") not equal to Y ("+y+")?", x != y);



let isPositive = x > 0 && y > 0;
let isEven = x % 2 == 0 || y % 2 == 0;

console.log("Are both " + x + " and " + y, "positive?", isPositive);
console.log("Is at least one number even between " + x + " and", y+"?", isEven);