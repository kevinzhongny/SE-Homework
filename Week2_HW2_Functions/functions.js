// 1. Write a n n maxOfTwoNumbers that takes two numbers as arguments and returns 
//    the largest of them. Use the if-then-else construct available in Javascript. Do 
//    some googling to figure this out if you forget how conditionals work. 
function maxOfTwoNumbers(num1, num2) {
    const first = num1;
    const second = num2;
    if (first > second) {
        return first;
    } else if (first < second) {
        return second;
    } else {
        return (`Numbers are the same: ${first}`);
    }
}

console.log(maxOfTwoNumbers(1, 2));
// console.log(maxOfTwoNumbers(3, 2));
// console.log(maxOfTwoNumbers(2, 2));


// 2. Write a function maxOfThree that takes three numbers as arguments and returns 
//    the largest of them. 

// Convoluted, complex code.
// function maxOfThree(a, b, c) {
//     const num1 = a;
//     const num2 = b;
//     const num3 = c;
//     if ((num1 > num2 && num1 > num3) || (num1 > num2 && num1 === num3) || (num1 > num3 && num1 === num2)) {
//         return num1;
//     } else if ((num2 > num1 && num2 > num3) || (num2 > num1 && num2 === num3) || (num2 > num3 && num2 === num1)) {
//         return num2;
//     } else if ((num3 > num1 && num3 > num2) || (num3 > num1 && num3 === num2) || (num3 > num2 && num3 === num1)) {
//         return num3;
//     }
// }

// console.log(maxOfThree(8, 4, 2));

function maxOfThree(a, b, c) {
    let max = Math.max(a, b, c);
    return max;
}

console.log(`\n` + maxOfThree(5, 6, 7));

// 3.  Write a function isCharacterAVowel that takes a character (i.e. a string of length 1) and 
//     returns true if it is a vowel, false otherwise 

function isCharacterAVowel(char) {
    let character = char;
    if (character === 'A' || character === 'E' || character === 'I' || character === 'O'|| character === 'U' ||
        character === 'a' || character === 'e' || character === 'i' || character === ''|| character === 'u') {
        return true;
    } else {
        return false;
    }
}

console.log(`\n` + isCharacterAVowel('b') + `\n`);

// 4. Define a function sumArray and a function multiplyArray that sums and multiplies (respectively) all the numbers in an array of numbers. 
//    For example, sumArray([1,2,3,4]) should return 10, and multiplyArray([1,2,3,4]) should return 24.

testArray = [1, 2, 3, 4];

function sumArray(testArray) {
    let arr1 = testArray;
    let arrSum = 0;
    let i = 0;
    while (i < arr1.length) {
        arrSum += arr1[i];
        i++;
    }
    console.log(`The sum of the array is ${arrSum}.`);
}

function multiplyArray(testArray) {
    let arr1 = testArray;
    let arrProduct = 1;
    let i2 = 0;
    while (i2 < arr1.length) {
        arrProduct *= arr1[i2];
        i2++;
    }
    console.log(`The product of the array is ${arrProduct}.`);
}

function runArrayMath(sumArray, multiplyArray) {
    console.log(`The array being tested is ${testArray}.`);
    sumArray(testArray);
    multiplyArray(testArray);
}

runArrayMath(sumArray, multiplyArray);

// 5. Write a function that returns the number of arguments passed to the function when called.

function learnArguments() {
    return(arguments.length);
}

console.log(learnArguments(12, 16, 18));

// 6. Define a function reverseString that computes the reversal of a string. For  
//    example, reverseString("jag testar") should return the string "ratset gaj".

function reverseString(str) {
    if (!str) { 
        str = this; 
    }

    var newString = "";
    for (let i = str.length - 1; i >= 0; i--) {
        newString += str[i];
    }
    console.log(newString);
};

reverseString('jag testar');

// 7. Write a function findLongestWord that takes an array of words 
//    and returns the length of the longest one.

function findLongestWord(arr) {
    let longestWord = 0;
    for (let i = 0; i < arr.length; i++) {
        if (arr[i].length > longestWord) {
            longestWord = arr[i].length;
        }
    }
    return longestWord;
}

const wordArray = ['find', 'longest', 'word', 'opportunity']
console.log(findLongestWord(wordArray));

// 8. Write a function filterLongWords that takes an array of words and a number i and 
//    returns the array of words that are longer than i characters long.

function filterLongWords(arr, i) {
    let longWordArray = [];
    for (let test = 0; test < arr.length; test++) {
        if (arr[test].length > i) {
            longWordArray += arr[test];
        }
    }
    return longWordArray;
}

const newWordArray = filterLongWords(wordArray, 5);
console.log(newWordArray);

// Bonus 1. 

String.prototype.reverseStringMethod = reverseString;
"Per Scholas".reverseStringMethod();

// Bonus 2. String HashMap

function stringBreakdown(string) {
    const testString = string;
    const hashMap = {};

    for(let i = 0; i < testString.length; i++) {
        const individualCharacterAscii = testString[i].toLowerCase();
        const ifExists = hashMap[individualCharacterAscii];
        if (hashMap[individualCharacterAscii] === " ");  
        else if (!ifExists/*  if it doesn't exist */) {
            // create the property and attach num1
            hashMap[individualCharacterAscii] = 1;
        }
        else {
            hashMap[individualCharacterAscii] += 1;
        }
    }

    return hashMap;
}

console.log(stringBreakdown('Per Scholas'));

