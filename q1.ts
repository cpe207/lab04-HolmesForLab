function typeChecker(a , b) {
  if(typeof a && typeof b == 'text') return "I LOVE YOU";
  else if(typeof a && typeof b == 'number') return a+b;
  else return "NOT MATCHED";
}


//Test cases
const a1 = "Jack";
const b1 = "Rose";
const a2 = 555;
const b2 = 100;
const a3 = "Jack";
const b3 = 100;

console.log(typeChecker(a1, b1));
console.log(typeChecker(a2, b2));
console.log(typeChecker(a3, b3));

module.exports = typeChecker;
