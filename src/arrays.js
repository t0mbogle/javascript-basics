const getNthElement = (index, array) => {
  return array[index % array.length];
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
  return strings.map(strings => {
    return strings.toUpperCase();
  });
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
  return numbers.filter(numbers => numbers % 2 === 0);
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
  return numbers.reduce(
    (previousValue, currentValue) => previousValue + currentValue, 0);
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
