const createPerson = (name, age) => {
  return {
    'name': name,
    'age': age 
  };
};

const getName = object => {
  return object.name;
};

const getProperty = (property, object) => {
  return object[property];
};

const hasProperty = (property, object) => {
  if (object[property]) {
    return true;
  }
  return false;
};

const isOver65 = person => {
  if (person.age > 65) {
    return true;
  }
  return false;
};

const getAges = people => {
  return people.map(index => index.age);
};

const findByName = (name, people) => {
  return people.filter(index => index.name === name)[0];
};

const findHondas = cars => {
  let hondaCars = [];
  for (const i in cars) {
    if (cars[i].manufacturer === 'Honda') {
      hondaCars.push(cars[i]);
    }
  }
  return hondaCars;
};

const averageAge = people => {
  let avrAge = 0;
  for (const i in people) {
    avrAge += Math.round(people[i].age / people.length);
  }
  return avrAge;
  // Could try using .reduce() as another method of getting one number from mulitple //
};

const createTalkingPerson = (name, age) => {
  return {
    'name': name,
    'age': age,
    'introduce': function(name2) {
      return `Hi ${name2}, my name is ${this.name} and I am ${this.age}!`;
    }
  };
};

module.exports = {
  createPerson,
  getName,
  getProperty,
  hasProperty,
  isOver65,
  getAges,
  findByName,
  findHondas,
  averageAge,
  createTalkingPerson
};
