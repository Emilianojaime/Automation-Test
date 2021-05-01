const numberOfOddAndEvenNumbers = (array) => {
  if (!isArray(array)) {
    return 'The param should be an array';
  }
  const elementsAreNumbers = array.every(isNumber);
  if (!elementsAreNumbers) {
    return `The array should have only numbers`;
  }
  return {
    odd: getOddNumbersFromArray(array).length,
    even: getEvenNumbersFromArray(array).length
  }
}


// Simple Functions 

const isNumber = number => {
  return typeof number === 'number';
}

const isArray = array => {
  return Array.isArray(array);
}

const isString = string => {
  return typeof string === 'string';
}

const validateEmail = string => {
  const emailRegex = /^(([^<>()[\]\.,;:\s@\"]+(\.[^<>()[\]\.,;:\s@\"]+)*)|(\".+\"))@(([^<>()[\]\.,;:\s@\"]+\.)+[^<>()[\]\.,;:\s@\"]{2,})$/i;
  return emailRegex.test(string);
}

const sum = (a, b) => {
  return a + b;
}

const multip = (a, b) => {
  return a * b;
}

const division = (a, b) => {
  return a / b;
}

const exponent = (a, b) => {
  return Math.pow(a, b)
}

const isSupportedFigure = (figure) => {
  const supportedFigures = ['square', 'rectangle', 'triangle', 'circle'];
  return supportedFigures.includes(figure.toLowerCase());
};

const arrayElementsAreObjectWithKey = (array, key) => {
  return array.every(element => element[key]);
}

const arrayIntersection = (array1, array2) => {
  return array1.filter(element => array2.includes(element));
};

const sortArrayByKey = (array, key) => {
  return array.sort((a,b) => {
    if (a[key] < b[key]) {
      return -1;
    }
    if (a[key] > b[key]) {
      return 1;
    }
    return 0;
  });
}

const getEvenNumbersFromArray = (array) => {
  return array.filter(element => element % 2 === 0);
};

const getOddNumbersFromArray = (array) => {
  return array.filter(element => element % 2 !== 0);
}