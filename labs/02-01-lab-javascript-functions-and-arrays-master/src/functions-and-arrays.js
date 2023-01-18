// Iteration #1: Find the maximum
function maxOfTwoNumbers(num1, num2) {
  if (num1 > num2) {
    return num1;
  } else {
    return num2;
  }
}
console.log(`The bigger number is ${maxOfTwoNumbers(10, 6)}`);

// New Declaration
const maxOfTwoNumbers2 = (num1, num2) => {
  //v001
  if (num1 === num2) {
    console.log(`${num1} & ${num2} area the same number`);
  } else if (num1 > num2) {
    console.log(`In this case ${num1} is bigger than ${num2}`);
  } else {
    console.log(`In this case ${num2} is bigger than ${num1}`);
  }
};

console.log(`Iteration 001 - V001`);
maxOfTwoNumbers2(40, 30);

// // V002 Teranry
// const maxOfTwoNumbers3 = (num1, num2) => {
//   (num1 > num2)`In this case ${num1} is bigger than ${num2}`
//     ? num1 === num2`${num1} & ${num2} area the same number`
//     : num1 < num2`In this case ${num1} is bigger than ${num2}`;
// };

// maxOfTwoNumbers3(60, 100);

// Iteration #2: Find longest word
const words = [
  "mystery",
  "brother",
  "aviator",
  "crocodile",
  "pearl",
  "orchard",
  "crackpot",
];

// function findLongestWord(words) {
//   let longestWord = [];
//   for (let i = 0; i < words.length; i++) {
//     if (words[i].length > longestWord.length) {
//       longestWord = words[i];
//     }
//   }

//   return longestWord;
// }

const findLongestWord = (words) => {
  // Stop logic if array is empty
  if (words.length === 0) return null;
  // Use this empty string variable to store longest word
  let longestWord = "";
  for (let i = 0; i < words.length; i++) {
    if (words[i].length > longestWord.length) longestWord = words[i];
  }

  return longestWord;
};

console.log(`The longest word is: ${findLongestWord(words)}`);

// Iteration #3: Calculate the sum
const numbers = [6, 12, 1, 18, 13, 16, 2, 1, 8, 10];

const sumNumbers = (numbersArray) => {
  let result = 0;
  for (let i = 0; i < numbersArray.length; i++) {
    result += numbersArray[i];
  }
  return result;
};

console.log(
  `The sum of all of the numbers in the array is ${sumNumbers(numbers)}`
);

// Iteration #3.1 Bonus:
const mixedArr = [6, 12, "miami", 1, true, "barca", "200", "lisboa", 8, 10];

function sum(mixedArr) {
  let count = 0;
  for (let i = 0; i <= mixedArr.length; i++) {
    if (typeof mixedArr[i] === "string") {
      count += mixedArr[i].length;
    } else if (mixedArr[i] === true) {
      count++;
    } else if (typeof mixedArr[i] === "number") {
      count += mixedArr[i];
    }
  }
  return count;
}

console.log(`The sum of all of the elements in the array is ${sum(mixedArr)}`);

// Como se ha hecho en clase

const sum2 = (mixedArray) => {
  let totalSumOfMixedArrayPositions = 0;
  for (let i = 0; i < mixedArray.length; i++) {
    // strings
    if (typeof mixedArray[i] === "string") {
      totalSumOfMixedArrayPositions += mixedArray[i].length;
    }
    // booleanos
    else if (mixedArray[i] === true) {
      totalSumOfMixedArrayPositions++;
    }
    // resto de numeros
    else {
      totalSumOfMixedArrayPositions += mixedArray[i];
    }
  }
  return totalSumOfMixedArrayPositions;
};

console.log(`The sum of all of the elements in the array is ${sum2(mixedArr)}`);

// Iteration #4: Calculate the average
// Level 1: Array of numbers
const numbersAvg = [2, 6, 9, 10, 7, 4, 1, 9];

// const averageNumbers = (numbers) => {
//   let result2 = 0;
//   for (let i = 0; i < numbers.length; i++) {
//     result2 += numbers[i];
//   }
//   return result2 / numbers.length;
// };

// Reutilizar funcion sumNumbers que suma los numeros de un array
const averageNumbers = (numbers) => {
  return (sumNumbers(numbers) / numbers.length).toFixed(2);
};

console.log(`The average of the numbers is ${averageNumbers(numbersAvg)}`);

// Level 2: Array of strings
const wordsArr = [
  "seat",
  "correspond",
  "linen",
  "motif",
  "hole",
  "smell",
  "smart",
  "chaos",
  "fuel",
  "palace",
];

function averageWordLength(wordsArr) {
  let sumMediaCaracteres = 0;
  for (let i = 0; i < wordsArr.length; i++) {
    sumMediaCaracteres += wordsArr[i].length;
  }
  return sumMediaCaracteres / wordsArr.length;
}

console.log(`The average length of the words: ${averageWordLength(wordsArr)}`);

const averageWordLength2 = (wordsArr) => {
  return wordsArr.join("").length / wordsArr.length;
};

console.log(`The average length of the words: ${averageWordLength2(wordsArr)}`);

// Bonus - Iteration #4.1
function avg() {}

// Iteration #5: Unique arrays
const wordsUnique = [
  "crab",
  "poison",
  "contagious",
  "simple",
  "bring",
  "sharp",
  "playground",
  "poison",
  "communion",
  "simple",
  "bring",
];
let newWordsUnique = [];

function uniquifyArray(wordsUnique) {
  const newUniquifyArray = [];
  for (let i = 0; i < wordsUnique.length; i++) {
    if (newUniquifyArray.indexOf(wordsUnique[i]) === -1) {
      newUniquifyArray.push(wordsUnique[i]);
    }
  }
  return newUniquifyArray;
}

console.log(uniquifyArray(wordsUnique));

// Iteration #6: Find elements
const wordsFind = [
  "machine",
  "subset",
  "trouble",
  "starting",
  "matter",
  "eating",
  "truth",
  "disobedience",
];

function doesWordExist(array, word) {
  let message;
  for (let i = 0; i < array.length; i++) {
    message = array.includes(word);
  }
  return message;
}

console.log(doesWordExist(wordsFind, "starting"));

// Iteration #7: Count repetition
const wordsCount = [
  "machine",
  "matter",
  "subset",
  "trouble",
  "starting",
  "matter",
  "eating",
  "matter",
  "truth",
  "disobedience",
  "matter",
];

function howManyTimes(array, word) {
  const repeat = [];
  for (let i = 0; i < array.length; i++) {
    if (array[i].includes(word) === true) {
      repeat.push(array[i]);
    }
  }
  return repeat.length;
}

console.log(
  `The number of times that word appears in the array: ${howManyTimes(
    wordsCount,
    "matter"
  )}`
);

// Iteration #8: Bonus
const matrix = [
  [8, 2, 22, 97, 38, 15, 0, 40, 0, 75, 4, 5, 7, 78, 52, 12, 50, 77, 91, 8],
  [
    49, 49, 99, 40, 17, 81, 18, 57, 60, 87, 17, 40, 98, 43, 69, 48, 4, 56, 62,
    0,
  ],
  [
    81, 49, 31, 73, 55, 79, 14, 29, 93, 71, 40, 67, 53, 88, 30, 3, 49, 13, 36,
    65,
  ],
  [52, 70, 95, 23, 4, 60, 11, 42, 69, 24, 68, 56, 1, 32, 56, 71, 37, 2, 36, 91],
  [
    22, 31, 16, 71, 51, 67, 63, 89, 41, 92, 36, 54, 22, 40, 40, 28, 66, 33, 13,
    80,
  ],
  [
    24, 47, 32, 60, 99, 3, 45, 2, 44, 75, 33, 53, 78, 36, 84, 20, 35, 17, 12,
    50,
  ],
  [
    32, 98, 81, 28, 64, 23, 67, 10, 26, 38, 40, 67, 59, 54, 70, 66, 18, 38, 64,
    70,
  ],
  [
    67, 26, 20, 68, 2, 62, 12, 20, 95, 63, 94, 39, 63, 8, 40, 91, 66, 49, 94,
    21,
  ],
  [
    24, 55, 58, 5, 66, 73, 99, 26, 97, 17, 78, 78, 96, 83, 14, 88, 34, 89, 63,
    72,
  ],
  [21, 36, 23, 9, 75, 0, 76, 44, 20, 45, 35, 14, 0, 61, 33, 97, 34, 31, 33, 95],
  [78, 17, 53, 28, 22, 75, 31, 67, 15, 94, 3, 80, 4, 62, 16, 14, 9, 53, 56, 92],
  [
    16, 39, 5, 42, 96, 35, 31, 47, 55, 58, 88, 24, 0, 17, 54, 24, 36, 29, 85,
    57,
  ],
  [86, 56, 0, 48, 35, 71, 89, 7, 5, 44, 44, 37, 44, 60, 21, 58, 51, 54, 17, 58],
  [
    19, 80, 81, 68, 5, 94, 47, 69, 28, 73, 92, 13, 86, 52, 17, 77, 4, 89, 55,
    40,
  ],
  [4, 52, 8, 83, 97, 35, 99, 16, 7, 97, 57, 32, 16, 26, 26, 79, 33, 27, 98, 66],
  [
    88, 36, 68, 87, 57, 62, 20, 72, 3, 46, 33, 67, 46, 55, 12, 32, 63, 93, 53,
    69,
  ],
  [
    4, 42, 16, 73, 38, 25, 39, 11, 24, 94, 72, 18, 8, 46, 29, 32, 40, 62, 76,
    36,
  ],
  [
    20, 69, 36, 41, 72, 30, 23, 88, 34, 62, 99, 69, 82, 67, 59, 85, 74, 4, 36,
    16,
  ],
  [
    20, 73, 35, 29, 78, 31, 90, 1, 74, 31, 49, 71, 48, 86, 81, 16, 23, 57, 5,
    54,
  ],
  [
    1, 70, 54, 71, 83, 51, 54, 69, 16, 92, 33, 48, 61, 43, 52, 1, 89, 19, 67,
    48,
  ],
];

function greatestProduct(matrix) {
  // variable para almacenar el mayor producto encontrado
  let maxProduct = 0;

  // recorremos la matriz
  for (let row = 0; row < matrix.length; row++) {
    for (let col = 0; col < matrix[row].length; col++) {
      // calculamos el producto horizontal
      if (col <= matrix[row].length - 4) {
        let product =
          matrix[row][col] *
          matrix[row][col + 1] *
          matrix[row][col + 2] *
          matrix[row][col + 3];
        maxProduct = Math.max(maxProduct, product);
      }
      // calculamos el producto vertical
      if (row <= matrix.length - 4) {
        let product =
          matrix[row][col] *
          matrix[row + 1][col] *
          matrix[row + 2][col] *
          matrix[row + 3][col];
        maxProduct = Math.max(maxProduct, product);
      }
      // calculamos el producto diagonal (de izquierda a derecha)
      if (col <= matrix[row].length - 4 && row <= matrix.length - 4) {
        let product =
          matrix[row][col] *
          matrix[row + 1][col + 1] *
          matrix[row + 2][col + 2] *
          matrix[row + 3][col + 3];
        maxProduct = Math.max(maxProduct, product);
      }
      // calculamos el producto diagonal (de derecha a izquierda)
      if (col >= 3 && row <= matrix.length - 4) {
        let product =
          matrix[row][col] *
          matrix[row + 1][col - 1] *
          matrix[row + 2][col - 2] *
          matrix[row + 3][col - 3];
        maxProduct = Math.max(maxProduct, product);
      }
    }
  }
  // devolvemos el mayor producto encontrado
  return maxProduct;
}

console.log(greatestProduct(matrix));

// The following is required to make unit tests work.
/* Environment setup. Do not modify the below code. */
if (typeof module !== "undefined") {
  module.exports = {
    maxOfTwoNumbers,
    findLongestWord,
    sumNumbers,
    sum,
    averageNumbers,
    averageWordLength,
    avg,
    uniquifyArray,
    doesWordExist,
    howManyTimes,
    greatestProduct,
  };
}
