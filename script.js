// const result1 = 'Soyeb' / 5;

// console.log(result1); // NaN

// console.log(typeof(result1)); // number



// const array = [NaN];

// const result2 = array.includes(NaN)

// console.log(result2); // true // same value zero algorithm 

// 1. Swapping values
// let array = [1,2,3,4,5];

// temp variable
// let temp = array[0];
// array[0] = array[4];
// array[4] = array[4];
// array[4] = temp;

// console.log(array);

// array destructuring
// [array[0], array[4]] = [array[4], array[0]];
// console.log(array);

// let a = 1;
// let b = 2;
// [a,b] = [b,a];

// console.log(a,b);

// math
// b = a + (a = b) - b;
// console.log(a, b);

// 2. Copy to clipboard

// function copyToClipBoard(str) {
//     const element = document.createElement('textarea');
//     element.value =  str;
//     document.body.appendChild(element);
//     element.select();
//     document.execCommand('copy');
//     document.body.removeChild(element);
// }

// function handleClick() {
//     let text = document.querySelector('#text');
//     copyToClipBoard(text.innerText);
// }

// 3. destrucuring aliases

// const language = {
//     name: 'Javascript',
//     founded: 1995,
//     founder: 'Brendan Eich',
// }

// const {name:languageName,founder: creatorName} = language;

// console.log(languageName,creatorName);

// 4. Get value as data type

// const element = document.querySelector('#number').valueAsNumber;

// console.log(typeof element);

// 5. remove duplicate from array
// const array = [1,2,2,3,3,4,6,5,5];

// console.log([...new Set(array)]);

// 6. compare two arrays by value
// const hasSameElements = (a, b) => {
//     return a.length === b.length && a.every((v, i) => v === b[i])
// }

// console.log(hasSameElements([1,2], [1,2])); //true

// 7. shuffling array
// const numbers = [1,2,3,4,5,6];

// console.log(numbers.sort(() => Math.random() - 0.5));


// 8. what will be the output of the below code?
// console.log([] + []); // ""

// console.log({} + []); // object Object

// 9. what will be the output of the below code?
// function myFunc() {
//     return 'Bangladesh';
// }

// const string = myFunc `hello `;
// console.log(string); // this hello  go to the argument

// 10. make a function that sorts its arguments without using loops
// const myFunc = function () {
//     return [].slice.call(arguments).sort();
// };

// console.log(myFunc(2,1,4,3));

// 11. reverse words in a string

// input 
// const str = "I love Bangladesh";

// // output = ""

// function reverseWords(data){
//     const dataAsArray = data.split(" ");

//     const result = dataAsArray.map(d => {
//         return d.split("").reverse().join("");
//     })

//     return result.join(" ");
// }

// console.log(reverseWords(str));

// 12. sorting words by length in a sentence by asc order

// input 
// const str = "Java is a Programming language";

// // ouput = "a is Java language Programming";

// function sortWords(data){
//     const dataAsArray = str.split(" ");

//     dataAsArray.sort((a,b) => {
//         return a.length - b.length;
//     });

//     return dataAsArray.join(" ");
// }

// console.log(sortWords(str));

