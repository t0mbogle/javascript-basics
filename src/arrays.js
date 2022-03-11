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
  let removeNth = array.slice(0, index).concat(array.slice(index + 1, array.length));
  return removeNth;
};

const elementsStartingWithAVowel = strings => {
  return strings.filter(strings => /^[aeiou]/i.test(strings));
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
  return strings.sort(
    (a, b) => a.charCodeAt(a.length - 1) - b.charCodeAt(b.length - 1)
  );
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
