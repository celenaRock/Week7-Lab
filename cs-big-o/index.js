//////////////////////
//// TIME & SPACE ////
//////////////////////

// 1) -------------------------------------------------------
let numbers = [0,1,2,3,4,5,6,7,8,9]

function printNumbers(numbers) {
    for (let i = 0; i < numbers.length; i++) {
      console.log(numbers[i])
    }
  }
  
// Q: Given an array of numbers, what is the time complexity of this function?
// ANSWER: O(n)

// Q: What is the space complexity?
// ANSWER: Linear space




// 2) -------------------------------------------------------
// You are challenged to find the 4th element of an array, and you came up with this solution:

function findFourth(numbers) {
    var count = 1
    var answer = 0
  
    for (let i = 0; i < numbers.length; i++) {
        if (count === 4) {
            answer = numbers[i]
            return
        } else {
            count += 1
        }
    }
  }

// Q: What is the time complexity of of this solution?
// ANSWER: O(n)

// Q: Given an array of numbers, what is the space complexity of this function?
// ANSWER: linear


// Q: Could you come up with a solution that has a better time complexity? If so, write out that solution and note the time complexity. If not, why not?
// ANSWER: no, simple


// 3) -------------------------------------------------------
function printA() {
    for (let i = 0; i < 5; i++) {
        console.log(i)
    }
}
// Q: What is the time complexity of this function?
// ANSWER: O(1)

// Q: What is the space complexity of this function?
// ANSWER: constant

// 4) -------------------------------------------------------
function printB(number) {
  for (let i = 0; i < number; i++) {
    console.log(i)
  }
}
// Q: What is the time complexity of this function?
// ANSWER: O(n)

// Q: What is the space complexity of this function?
// ANSWER: linear



// 5) -------------------------------------------------------
function printC(num, arr) {
  for (let i = 0; i < num; i++) {
    for (let j = 0; j < arr.length; j++) {
      console.log(j)
    }
  }
}
// Q: What is the time complexity of this function?
// ANSWER: O(n^2)

// Q: What is the space complexity of this function?
// ANSWER: Linear


// 6) -------------------------------------------------------
function nested(numbers) {
    for (let i = 0; i < numbers.length; i++) {
      for (let j = 0; j < numbers.length; j++) {
        console.log(j)
      }
    }
  }
// Q: What is the time complexity of this function?
// ANSWER: O(n^2)

// Q: What is the space complexity of this function?
// ANSWER: Quadratic



// 7) -------------------------------------------------------
let numbers = [76,35,73,13,4,88,23,12,86,1,54,9,10,2]
// remember numbers could be reassigned, added to, etc.
let newNumbersA = numbers.filter((num) => {
  return num < 5
})
// Q: What is the time complexity of the filter higher-order function?
// ANSWER:O(n)

// Q: What is the space complexity of the filter higher-order function?
// ANSWER:linear


// 8) -------------------------------------------------------
// remember numbers (in #7) could be reassigned, added to, etc.
let newNumbersB = numbers.map((num) => {
  return num * 3
})
// Q: What is the time complexity of the map higher-order function?
// ANSWER:O(n)

// Q: What is the space complexity of the map higher-order function?
// ANSWER:linear





//////////////
//// TIME ////
//////////////

// 9) -------------------------------------------------------
function removeNum() {
    numbers.splice(3,1)
}
// Q: What is the time complexity of the function?
// ANSWER:


// 10) -------------------------------------------------------
function insertNum() {
    numbers.splice(3, 0, 19)
}
// Q: What is the time complexity of the function?
// ANSWER:


// 11) -------------------------------------------------------
function pushNum() {
    numbers.push(25)
}
// Q: What is the time complexity of the function?
// ANSWER:


// 12) -------------------------------------------------------
// Given an array of names....
function printFirstTwoNames(array) {
    console.log(array[0])
    console.log(array[1])
}

// Q: What is the time complexity of the function? 
// ANSWER:






///////////////
//// SPACE ////
///////////////

// 13) -------------------------------------------------------
// This function takes in parentArr which is an array of arrays
// It will only ever have 2 levels of arrays (the child arrays can't have array children)
// ex: [[1,2,3], ['a','b','c'], [5,null,'x',0]]
// NOT: [[1,2,3], ['a', ['an', 'invalid', '(grand)child', 'array], 'b', 'c'], [6,7,8,9,10]]
function arrInception(parentArr) {
    for (let i = 0; i < parentArr.length; i++) {
      let childArr = parentArr[i]
      for (let j = 0; j < childArr.length; j++) {
        console.log(`value at index ${j} in child arr (at ${i} in parent arr): ${childArr[j]}`)
      }
    }
  }
  // Q: What is the space complexity of this function?
  // ANSWER:
  
  
// 14) You are challenged to find the squared value of each number in an array. This is not the best solution, but it is what you come up with anyway...

function getNumbersSquared(numbers) {
  let numbers2 = [...numbers]

  let answers = []

  for (let i = 0; i < numbers.length; i++) {
    let squaredValue = numbers[i] * numbers2[i]
    answers.push(squaredValue)
  }
  return answers
}

// Q: What is the space complexity of this function?
// ANSWER:


// Q: Is it possible to improve this function's space complexity? If it is, write a new function below.
// ANSWER:


// 15) Here are two functions that you came up with to count how many of each letter is in a given string and return an object with the individual counts: 

function countLetters(str) {
  let letters = {
    a: 0,
    b: 0,
    c: 0,
    d: 0,
    e: 0,
    f: 0,
    g: 0,
    h: 0,
    i: 0,
    j: 0,
    k: 0,
    l: 0,
    m: 0,
    n: 0,
    o: 0,
    p: 0,
    q: 0,
    r: 0,
    s: 0,
    t: 0,
    u: 0,
    v: 0,
    w: 0,
    x: 0,
    y: 0,
    z: 0,
  }

  str = str.toLowerCase()
  const splitStr = str.split('')

  splitStr.forEach(char => {
    if (letters.hasOwnProperty(char)) {
      letters[char]++
    }
  })

return letters
}

/////////////////////////////

function countLettersRoundTwo(str) {
  // this contains a RegEx or Regular Expression, feel free to google
  str = str.toLowerCase().replace(/([^a-z])+/g,'')
  let letters = {}
  for (let i = 0; i < str.length; i++) {
    if (letters.hasOwnProperty(str[i])) {
      letters[str[i]]++
    } else {
      letters[str[i]] = 0
    }
  }
  return letters
}


// Q: Do these functions have the same space complexity?
// ANSWER:


// Q: What is the space complexity of each? 
// ANSWER - countLetters:
// ANSWER - countLettersRoundTwo:


// Q: Explain how you came to your conclusions about the space complexity of each function. 
// ANSWER: 
