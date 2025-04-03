let a =5;
let b=2;

console.log('a + b =',a+b);
console.log('a - b =',a-b);
console.log('a * b =',a*b);
console.log('a / b =',a/b);
console.log('a % b =',a%b);
console.log('a ** b =',a**b);

//comparison operations
//> < >= <= == === != !==

console.log(a>b);
console.log(a>b);
 
let c=5;
let d='5';

console.log(c=d);//check values or equal
console.log(c!==d);// check the values or equal and also the type
console.log(c!=d);
console.log(c!==d);

//logical operations
//&& || !

console.log((5==5) && (a==b));
console.log((5==5) && (a!=b));
console.log((5==5) || (a==b));
console.log((5!=5) || (a!=b));
console.log(!(a>b));

//conditional statements
//if  if-else else-if

alert("security check")
let age=prompt("enter your age")

if(age<20){
    console.log("junior");
}
else if(age>=20 && age<60){
    console.info("adult");
}
     

else{
    console.log("senior")
}