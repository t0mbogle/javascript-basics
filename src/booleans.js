function negate(a) {
  return !a;
};

function both(a, b) {
  if (a === true && b === true) {
    return true;
  } else {
    return false;
  }
};

function either(a, b) {
  if (a === true || b === true) {
    return true;
  } else {
    return false;
  }
};

function none(a, b) {
  if (a !== true && b !== true) {
    return true;
  } else {
    return false;
  }
};

function one(a, b) {
  if (a === true && b === false || a === false && b === true) {
    return true;
  } else {
    return false;
  }
};

function truthiness(a) {
  return Boolean(a);
};

function isEqual(a, b) {
  if (a === b) {
    return true;
  } else {
    return false;
  }
};

function isGreaterThan(a, b) {
  if (a > b) {
    return true;
  } else {
    return false;
  }
};

function isLessThanOrEqualTo(a, b) {
  if (a <= b) {
    return true;
  } else {
    return false;
  }
};

function isOdd(a) {
  if (a%2 !== 0) {
    return true;
  } else {
    return false;
  }
};

function isEven(a) {
  if (a%2 === 0) {
    return true;
  } else {
    return false;
  }
};

function isSquare(a) {
  if (Math.sqrt(a) % 1 === 0) {
    return true;
  } else {
    return false;
  }
};

function startsWith(char, string) {
  if (string[0] === char) {
    return true;
  } else {
    return false;
  }
};

function containsVowels(string) {
let vowels = 'aeiouAEIOU';

for (let i = 0; i < string.length; i++) {
  if (vowels.indexOf(string[i]) !== -1) {
    return true;
    }
  }
  return false;
};

function isLowerCase(string) {
  if (string == string.toLowerCase()) {
    return true;
  }
  return false;
};

module.exports = {
  negate,
  both,
  either,
  none,
  one,
  truthiness,
  isEqual,
  isGreaterThan,
  isLessThanOrEqualTo,
  isOdd,
  isEven,
  isSquare,
  startsWith,
  containsVowels,
  isLowerCase
};
