//test 1
function printCapitalLetters(n) {
  for (let i = 0; i < n; i++) {
    let capitalLetter = String.fromCharCode('A'.charCodeAt(0) + i);
    console.log(capitalLetter);
  }
}

printCapitalLetters(5);

//test 2
function identifyCharacter(char) {
  if (!isNaN(char)) {
    return "digit";
  } else if (/[a-zA-Z]/.test(char)) {
    return "lotin";
  } else {
    return 0;
  }
}

const char = 'cvz'
const result = identifyCharacter(char);
console.log(result);

//test 3
function printFirstAndLastCharCodes(str) {
  const firstCharCode = str.charCodeAt(0);
  const lastCharCode = str.charCodeAt(str.length - 1);
  console.log(`Birinchi belgi: ${firstCharCode}, oxirgi belgi: ${lastCharCode}`);
}

printFirstAndLastCharCodes("JavaScript");

//test 4
function createString(n, char) {
  const str = char.repeat(n);
  console.log(str);
}

createString(5, "A");

//test 5
function reverseString(str) {
  const arr = str.split('');
  const reversedArr = arr.reverse();
  const reversedStr = reversedArr.join('');
  console.log(reversedStr);
}

reverseString("JavaScript");

//test 6
function getStringStars(n, str) {
  const stars = "*".repeat(n);
  const arr = str.split('');
  const resultArr = [];
  for (let i = 0; i < arr.length; i++) {
    resultArr.push(arr[i]);
    if (i < arr.length - 1) {
      resultArr.push(stars);
    }
  }
  const resultStr = resultArr.join('');
  console.log(resultStr);
}

getStringStars(3, "JavaScript");

//test 7
function countNumbers(str) {
  let count = 0;
  for (let char of str) {
    if (!isNaN(char)) {
      count++;
    }
  }
  console.log(count);
}

countNumbers("JavaScript123");

//test 8
function countSmallLetters(str) {
  const match = str.match(/[a-zа-я]/g);
  const count = match ? match.length : 0;
  console.log(count);
}

countSmallLetters("JavaScript и HTML");

//test 9
function toLowerCase(str) {
  const lowerCaseStr = str.toLowerCase();
  console.log(lowerCaseStr);
}

toLowerCase("JavaScript");

//test 10
function swapCase(str) {
  let swappedStr = '';
  for (let char of str) {
    if (char === char.toUpperCase()) {
      swappedStr += char.toLowerCase();
    } else if (char === char.toLowerCase()) {
      swappedStr += char.toUpperCase();
    } else {
      swappedStr += char;
    }
  }
  console.log(swappedStr);
}

swapCase("JavaScript HTML");

//test 12
function getInverseNumber(n) {
  const reversedStr = n.toString().split('').reverse().join('');
  const reversedNumber = parseFloat(reversedStr);
  console.log(reversedNumber);
}

getInverseNumber(1234);

//test 14
function createNewString(n1, n2, s1, s2) {
  const newStr = s1.slice(0, n1) + s2.slice(-n2);
  console.log(newStr);
}

createNewString(4, 3, "JavaScript", "HTML");

//test 18
// let s1 = "hello world";
// let s2 = "lo";
// if (s1.includes(s2)) {
//     let index = s1.indexOf(s2);
//     s1 = s1.slice(0, index) + s1.slice(index + s2.length);
// }
// console.log("Result: " + s1); 

// //test 19
// let s1 = "hello world";
// let s2 = "lo";
// while (s1.includes(s2)) {
//     let index = s1.indexOf(s2);
//     s1 = s1.slice(0, index) + s1.slice(index + s2.length);
// }
// console.log("Result: " + s1);

// //test 20
// let s1 = "hello world";
// let s2 = "lo";
// let s3 = "p";
// if (s1.includes(s2)) {
//     let index = s1.indexOf(s2);
//     s1 = s1.slice(0, index) + s3 + s1.slice(index + s2.length);
// }
// console.log("Result: " + s1); 

//test 21
let s1 = "hello world";
let s2 = "l";
let s3 = "p";
if (s1.includes(s2)) {
    let index = s1.lastIndexOf(s2);
    s1 = s1.slice(0, index) + s3 + s1.slice(index + s2.length);
}
console.log("Result: " + s1); 

//test 24
function getMaxOfString(s) {
  let words = s.split(" ");
  let max_word = "";
  for (let i = 0; i < words.length; i++) {
      if (words[i].length > max_word.length) {
          max_word = words[i];
      }
  }
  return max_word;
}

let s = "Asaka Sirdaryo Toshkent Xiva";
console.log("Result: " + getMaxOfString(s));

//test 25
let words = s.split(".");
for (let i = 0; i < words.length; i++) {
    console.log(words[i]);
}