const getNthElement = (index, array) => {
  if (index < array.length) {
    return array[index];
  }
  if (index >= array.length) {
    return array[index - array.length];
  }
};

const arrayToCSVString = array => {
  return array.toString();
};

const csvStringToArray = string => {
  return string.split(',');
};

const addToArray = (element, array) => {
  array.push(element);
};

const addToArray2 = (element, array) => {
  return array.concat(element);
};

const removeNthElement = (index, array) => {
  return array.splice(index, 1);
};

const numbersToStrings = numbers => {
  return numbers.map(String);
};

const uppercaseWordsInArray = strings => {
  const newArray = [];

  for (let i = 0; i < strings.length; i++) {
    newArray.push(strings[i].toUpperCase());
  }
  return newArray;
};
// Could do with refactoring to make more concise ^^ (use a higher order function) //

const reverseWordsInArray = strings => {
  const reverseWords = strings.map(word =>
    word
      .split('')
      .reverse()
      .join('')
  );
  return reverseWords;
};

const onlyEven = numbers => {
  let evenNumbers = [];
  for(let i = 0; i < numbers.length; i++) {
    if (numbers[i] % 2 === 0) {
      evenNumbers.push(numbers[i]);
    }
  }
  return evenNumbers;
};

const removeNthElement2 = (index, array) => {
  // return [...array.slice(0, index), ...array.slice(3)]; //
};

const elementsStartingWithAVowel = strings => {
  let vowelStart = strings.filter(strings => /^[aeiou]/i.test(strings));

  return vowelStart;
};

const removeSpaces = string => {
  return string.split(' ').join('');
};

const sumNumbers = numbers => {
  let sum = 0;
  for (let i = 0; i < numbers.length; i++) {
    sum += numbers[i];
  }
  return sum;
};

const sortByLastLetter = strings => {
 
};

module.exports = {
  getNthElement,
  arrayToCSVString,
  csvStringToArray,
  addToArray,
  addToArray2,
  removeNthElement,
  numbersToStrings,
  uppercaseWordsInArray,
  reverseWordsInArray,
  onlyEven,
  removeNthElement2,
  elementsStartingWithAVowel,
  removeSpaces,
  sumNumbers,
  sortByLastLetter
};
