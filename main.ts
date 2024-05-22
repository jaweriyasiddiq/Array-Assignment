////////////////////////ARRAY ASSIGNMENT/////////////////////////
//<...............QUESTION NO 1..............>
//Create  an array named fruit that contain the following string elements
//: "apple","banana","mango","orange".
let fruit: string[] = ["apple", "banana", "mango", "orange"];
console.log(fruit);
//<................QUESTION NO 2................>
//Declare an array named numbers that can contain only number
//elements and initialize it with the values 10, 20, 30, and 40.l
let number: number[] = [10, 20, 30, 40];
console.log(number);
////<................QUESTION NO 3................>
//Access the third element of the fruits array and assign it to a
//variable named thirdFruit.
let thirdfruit = fruit[3];
console.log(thirdfruit);
//<................QUESTION NO 4................>
//Change the second element of the numbers array to 25
number[1] = 25;
console.log(number);
//<................QUESTION NO 5................>
//Add the element "grape" to the end of the fruits array using the method.
fruit.push("grapes");
console.log(fruit);
//<................QUESTION NO 6................>
//Remove the last element from the fruits array using the
//method and assign it to a variable named lastFruit
let lastFruit = fruit.pop();
console.log(fruit);
//<................QUESTION NO 7................>
//Remove the first element from the fruits array using the
//method and assign it to a variable named firstFruit.
let firstFruit = fruit.shift();
console.log(fruit);
////<................QUESTION NO 8................>
//Add the element "kiwi" to the beginning of the fruits array
//using the method.
fruit.unshift("kiwi");
console.log(fruit);
//<................QUESTION NO 9................>
//Remove 2 elements from the fruits array starting from index 1
//using the method.
fruit.splice(1, 2);
console.log(fruit);
//<................QUESTION NO 10................>
//Insert the elements "pineapple" and "pear" at index 2 of the
//fruits array using the method.
fruit.splice(2, 0, "pineapple", "pear");
//<................QUESTION NO 11................>
//Create a new array named citrusFruits that contains the first
//two elements of the fruits array using the method.
let citrusFruits: string[] = fruit.slice(0, 2);
console.log(citrusFruits);
//<................QUESTION NO 12................>
//Create a new array named lastTwoFruits that contains the last
//two elements of the fruits array using the method.
let lastTwoFruits = fruit.slice(-2);
console.log(lastTwoFruits);
