// 1. Make a function that will return a greeting statement that uses an input; your program should return, "Hello, <name> how are you doing today?".
//    [Make sure you type the exact thing I wrote or the program may not execute properly]

function greet(name) {
    return `Hello, ${name} how are you doing today?`
}

// 2. Create a method that takes as input a name, city, and state to welcome a person.
// Note that name will be an array consisting of one or more values that should be joined together with one space between each,
// and the length of the name array in test cases will vary.
//     Example:
//     ['John', 'Smith'], 'Phoenix', 'Arizona'
//     This example will return the string Hello, John Smith! Welcome to Phoenix, Arizona!

function sayHello(name, city, state) {
    const fullName = name.join(' ')
    return `Hello, ${fullName}! Welcome to ${city}, ${state}!`
}

// 3. Determine the total number of digits in the integer (n>=0) given as input to the function.
// For example, 9 is a single digit, 66 has 2 digits and 128685 has 6 digits. Be careful to avoid overflows/underflows.
// All inputs will be valid.

function digits(n) {
    const numStr = n.toString()
    return numStr.length
}

// 4. Wilson primes satisfy the following condition. Let P represent a prime number.
//     Then,
//     ((P-1)! + 1) / (P * P)
// should give a whole number.
// Your task is to create a function that returns true if the given number is a Wilson prime.

function amIWilson(p) {
    if (p < 2) return false
    let factorial = 1
    for (let i = 2; i <= (p - 1); i++) {
        factorial *= i;
    }
    return (factorial + 1) % (p * p) === 0;
}

// 5. Complete the solution so that it splits the string into pairs of two characters.
// If the string contains an odd number of characters then it should replace the missing second character of the final pair with an underscore ('_').
// Examples:
// * 'abc' =>  ['ab', 'c_']
// * 'abcdef' => ['ab', 'cd', 'ef']

function solution(str) {
    if (str.length % 2 != 0) str += '_'
    let array = []
    for (let i = 0; i < str.length; i += 2) {
        array.push(str.slice(i, i + 2))
    }
    return array
}

// 6. Modify the kebabize function so that it converts a camel case string into a kebab case.
// "camelsHaveThreeHumps"  -->  "camels-have-three-humps"
// "camelsHave3Humps"  -->  "camels-have-humps"
// "CAMEL"  -->  "c-a-m-e-l"
// Notes: the returned string should only contain lowercase letters

function kebabize(str) {
    if (str === str.toLowerCase()) return str;
    let kebab = '';
    for (let i = 0; i < str.length; i++) {
        if (/[a-zA-Z]/.test(str[i])) {
            if (str[i] === str[i].toUpperCase()) {
                if (i !== 0) {
                    kebab += '-';
                }
                kebab += str[i].toLowerCase();
            } else kebab += str[i].toLowerCase();
        }
        if (/[0-9]/.test(kebab[kebab.length - 1])) {
            kebab = kebab.slice(0, -1);  //если последний символ - цифра, удаляем ее (!!!!!!!!!!!!!!!!!!почему-то не работает)
        }

    }
    return kebab;
}

// 7. While surfing in web I found interesting math problem called "Always perfect".
// That means if you add 1 to the product of four consecutive numbers the answer is ALWAYS a perfect square.
// For example we have: 1,2,3,4 and the product will be 1X2X3X4=24. If we add 1 to the product that would become 25,
// since the result number is a perfect square the square root of 25 would be 5.
// So now lets write a function which takes numbers separated by commas in string format and returns the number
// which is a perfect square and the square root of that number.
// If string contains other characters than number or it has more or less than 4 numbers separated by comma function returns "incorrect input".
// If string contains 4 numbers but not consecutive it returns "not consecutive".

function checkRoot(string) {
    let perfectSquareTmp = parseInt(string[0])
    let perfectRoot
    let numberArray = string.split(',').map(Number)
    if (numberArray.length !== 4) {
        return 'incorrect input'
    } else {
        for (let i = 0; i < numberArray.length - 1; i++) {
            if (parseInt(numberArray[i]) + 1 != parseInt(numberArray[i + 1])) {
                return 'not consecutive'
            }
        }
        for (let i = 1; i < numberArray.length; i++) {
            perfectSquareTmp *= parseInt(numberArray[i])
        }
    }
    let perfectSquare = perfectSquareTmp + 1
    perfectRoot = Math.sqrt(perfectSquare)

    return {perfectSquare, perfectRoot}
}

// 8. Given an array of 4 integers [a,b,c,d] representing two points (a, b) and (c, d),
// return a string representation of the slope of the line joining these two points.
// For an undefined slope (division by 0), return undefined . Note that the "undefined" is case-sensitive.
// a:x1
// b:y1
// c:x2
// d:y2
// Assume that [a,b,c,d] and the answer are all integers (no floating numbers!). Slope: https://en.wikipedia.org/wiki/Slope

function getSlope(array) {
    
}