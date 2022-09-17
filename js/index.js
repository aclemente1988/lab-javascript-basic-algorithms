//Iteration 1: Names and Input
let hacker1 = "jhon"
let hacker2 = "sebastian"
console.log(`The driver name is ${hacker1}`);
console.log(`The navigator's name is ${hacker2}`);

//Iteration 2: Conditionals

if (hacker1.length> hacker2.length){
  console.log(`The driver has the longest name, it has ${hacker1.length} characters.`)}
else if (hacker1.length < hacker2.length){
  console.log(`It seems that the navigator has the longest name, it has ${hacker2.length} characters.`)}
else console.log(`Wow, you both have equally long names, ${hacker1.length} characters!`)

//Iteration 3: Loops

//for (i=0; i < hacker1.length; i++){
//console.log(hacker1[i].toUpperCase().split());


let result = hacker1.toUpperCase().split("").join(" ")
console.log(result);

console.log(hacker2.split('').reverse().join(''));

if (hacker1[0] < hacker2[0]){
  console.log ("The driver's name goes first.")
  
}
else if (console.log ("Yo the navigator goes first definitely."));
else ("What?! You both have the same name?");