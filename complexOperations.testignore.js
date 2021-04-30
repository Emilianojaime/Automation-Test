import 'jest';
import * as complexOperations from './complexOperations';

/* describe('complexOperation - Unit Tests', () => {

  describe('checkEmail', () => {

    it('Testing ideal scenario for function (sending and email)', () => {
      expect(complexOperations.checkEmail('emiliano@gmail.com')).toEqual('The email is valid');
    });
    it('Testing validation of email(string)', () => {
      expect(complexOperations.checkEmail(77)).toEqual('The email should be an string');
      expect(complexOperations.checkEmail()).toEqual('The email should be an string');
      expect(complexOperations.checkEmail(undefined)).toEqual('The email should be an string');
    });
    it('Testing sending a string that is not and email', () => {
      expect(complexOperations.checkEmail('adghad')).toEqual('The email is invalid');
      expect(complexOperations.checkEmail('@')).toEqual('The email is invalid');
      expect(complexOperations.checkEmail('sdad@af11')).toEqual('The email is invalid');
    });
    it('Testing sending a blank space within an email should fail ', () => {
      expect(complexOperations.checkEmail('emi@g mail.com')).toEqual('The email is invalid');
      expect(complexOperations.checkEmail('emi @gmail.com')).toEqual('The email is invalid');
      expect(complexOperations.checkEmail(' emi@gmail.com')).toEqual('The email is invalid');
    });
  });

  describe('calculateArea', () => {
    it('Testing Rectangle (Ideal scenario)', () => {
      expect(complexOperations.calculateArea('rectangle', 2, 4)).toEqual(8);
    });
    it('Testing square (Ideal scenario)', () => {
      expect(complexOperations.calculateArea('square', 2, 0)).toEqual(4);
    });
    it('Testing triangle (Ideal scenario)', () => {
      expect(complexOperations.calculateArea('triangle', 5, 10)).toEqual(25);
    });
    it('Testing circle (Ideal scenario)', () => {
      expect(complexOperations.calculateArea('circle', 1)).toEqual(Math.PI);
    });
    it('Testing sending Empty arguments', () => {
      expect(complexOperations.calculateArea()).toEqual(`undefined is not supported`);
      expect(complexOperations.calculateArea(undefined)).toEqual(`undefined is not supported`);
      expect(complexOperations.calculateArea('')).toEqual(` is not supported`);
    });
    it('Testing sending arguments in the wrong order', () => {
      expect(complexOperations.calculateArea(2, 'square')).toEqual('number1 and number2 should be numbers');
    });
    it('Testing validations of numbers', () => {
      expect(complexOperations.calculateArea('rectangle', '1', '5')).toEqual('number1 and number2 should be numbers');
      expect(complexOperations.calculateArea('rectangle', 1, 'dog')).toEqual('number1 and number2 should be numbers');
      expect(complexOperations.calculateArea('rectangle', '1', 3)).toEqual('number1 and number2 should be numbers');
    });
    it('Sending 1 arguments', () => {
      expect(complexOperations.calculateArea('circle')).toEqual('number1 and number2 should be numbers');
    });
    it('Sending other figures', () => {
      expect(complexOperations.calculateArea('Pentagon', 4, 30)).toEqual(`Pentagon is not supported`);
      expect(complexOperations.calculateArea('hexagon', 4, 30)).toEqual(`hexagon is not supported`);
    });
  }); 

  describe('sumGratherThan', () => {

    it('Testing Ideal Scenario', () => {
      expect(complexOperations.sumGratherThan(4, 4, 5)).toEqual(`8 is grather than 5`);
      expect(complexOperations.sumGratherThan(1, 2, 5)).toEqual(`3 is less than 5`);
    });
    it('Testing Negative numbers', () => {
      expect(complexOperations.sumGratherThan(-1, -2, -1)).toEqual(`-3 is less than -1`);
      expect(complexOperations.sumGratherThan(1, -2, 0)).toEqual(`-1 is less than 0`);
      expect(complexOperations.sumGratherThan(0, -10, -10)).toEqual(`-10 is less than -10`);
    });
    it('Testing validations of numbers', () => {
      expect(complexOperations.sumGratherThan(1, 'dock', 5)).toEqual('The params should be numbers');
      expect(complexOperations.sumGratherThan(1, 2, 'dog')).toEqual('The params should be numbers');
      expect(complexOperations.sumGratherThan('cat', 2, 5)).toEqual('The params should be numbers');
      expect(complexOperations.sumGratherThan('cat', 'dog', 5)).toEqual('The params should be numbers');
      expect(complexOperations.sumGratherThan('dog', 'cat', 'bed')).toEqual('The params should be numbers');
    });
    it('Testing empty arguments', () => {
      expect(complexOperations.sumGratherThan()).toEqual('The params should be numbers');
      expect(complexOperations.sumGratherThan(1, 2,)).toEqual('The params should be numbers');
      expect(complexOperations.sumGratherThan({})).toEqual('The params should be numbers');
      expect(complexOperations.sumGratherThan([])).toEqual('The params should be numbers');
      expect(complexOperations.sumGratherThan('')).toEqual('The params should be numbers');
      expect(complexOperations.sumGratherThan(undefined)).toEqual('The params should be numbers');
    });
  }); 

  describe('intersectionBetweenArrays', () => {

    it('Testing ideal scenarios with numbers, strings and different lengths', () => {
      expect(complexOperations.intersectionBetweenArrays([1, 3, 5],[1, 2, 4])).toEqual([1]);
      expect(complexOperations.intersectionBetweenArrays(['cat'],[1, 5, 'cat'])).toEqual(['cat']);
      expect(complexOperations.intersectionBetweenArrays([33,44,'dog'],['dog', 4, 33, 5, 'cat'])).toEqual([33, 'dog']);
    });
    it('Testing no-mach message with numbers, strings and different lengths', () => {
      expect(complexOperations.intersectionBetweenArrays([1, 3, 4],[6, 8, 9])).toEqual('There are not matching elements');
      expect(complexOperations.intersectionBetweenArrays(['dog'],[1, 2])).toEqual('There are not matching elements');
      expect(complexOperations.intersectionBetweenArrays(['dog', 'cat'],['bed', 'glass'])).toEqual('There are not matching elements');
    });
    it('Testing params validations', () => {
      expect(complexOperations.intersectionBetweenArrays()).toEqual('The params should be arrays');
      expect(complexOperations.intersectionBetweenArrays(undefined)).toEqual('The params should be arrays');
      expect(complexOperations.intersectionBetweenArrays({},[1])).toEqual('The params should be arrays');
      expect(complexOperations.intersectionBetweenArrays(undefined,[1])).toEqual('The params should be arrays');
      expect(complexOperations.intersectionBetweenArrays('cat', 'dog')).toEqual('The params should be arrays');
      expect(complexOperations.intersectionBetweenArrays('cat',[1])).toEqual('The params should be arrays');
    });
  });

  describe('sortArrayOfObjectsByKey', () => {

    it('Testing ideal Scenarios for numbers and names as a key', () => {
      expect(complexOperations.sortArrayOfObjectsByKey([{animal: 'cat', age: '2'}], 'animal')).toEqual([{animal: 'cat', age: '2'}]);
      expect(complexOperations.sortArrayOfObjectsByKey([{animal: 'cat', age: '2'}], 'age')).toEqual([{animal: 'cat', age: '2'}]);
      expect(complexOperations.sortArrayOfObjectsByKey([{animal: 'cat', age: '2'}], 'cat')).not.toEqual([{animal: 'cat', age: '2'}]);
      expect(complexOperations.sortArrayOfObjectsByKey([{animal: 'cat', age: '2'}], '2')).not.toEqual([{animal: 'cat', age: '2'}]);
    });
    it('Testing ideal scenarios with 2 objets', () => {  
      expect(complexOperations.sortArrayOfObjectsByKey([{animal: 'cat', age: '2'}, {model: 'ford', year: '1992'}], 'animal')).toEqual([{animal: 'cat', age: '2'}]);
      expect(complexOperations.sortArrayOfObjectsByKey([{animal: 'cat', age: '2'}, {model: 'ford', year: '1992'}], 'model')).toEqual([{animal: 'cat', age: '2'}]);
    });
    it('Testing validations of array / string as an argument', () => {
      expect(complexOperations.sortArrayOfObjectsByKey('', 'animal')).toEqual('The first param should be an array');
      expect(complexOperations.sortArrayOfObjectsByKey(undefined, 'animal')).toEqual('The first param should be an array');
      expect(complexOperations.sortArrayOfObjectsByKey(2, 'animal')).toEqual('The first param should be an array');
      expect(complexOperations.sortArrayOfObjectsByKey(33, 33)).toEqual('The first param should be an array');
      expect(complexOperations.sortArrayOfObjectsByKey([{animal: 'cat', age: '2'}, {model: 'ford', year: '1992'}], 1)).toEqual('The second param should be an string');
      expect(complexOperations.sortArrayOfObjectsByKey([{animal: 'cat', age: '2'}, {model: 'ford', year: '1992'}], ['animal'])).toEqual('The second param should be an string');
    });
    it('Testing no-maching key search', () => {
      expect(complexOperations.sortArrayOfObjectsByKey([{animal: 'cat', age: '2'}, {model: 'ford', year: '1992'}], 'space')).toEqual(`Some elements in the array does not have the space property`);
      expect(complexOperations.sortArrayOfObjectsByKey([{animal: 'cat', age: '2'}, {model: 'ford', year: '1992'}], '1992')).toEqual(`Some elements in the array does not have the 1992 property`);
    });
    
  });

  describe('numberOfOddAndEvenNumbers', () => {

    it('Testing Ideal Scenario', () => {
      expect(complexOperations.numberOfOddAndEvenNumbers([1, 2, 3, 4])).toEqual({ odd: 2, even: 2 });
      expect(complexOperations.numberOfOddAndEvenNumbers([1, 2, 3])).toEqual({ odd: 2, even: 1 });
      expect(complexOperations.numberOfOddAndEvenNumbers([1, 2])).toEqual({ odd: 1, even: 1 });
      expect(complexOperations.numberOfOddAndEvenNumbers([0, 2])).toEqual({ odd: 0, even: 2 });
      expect(complexOperations.numberOfOddAndEvenNumbers([-1, -4, 0])).toEqual({ odd: 1, even: 2 });
    });
    it('Testing Validations of Arguments (array)', () => {
      expect(complexOperations.numberOfOddAndEvenNumbers(1)).toEqual('The param should be an array');
      expect(complexOperations.numberOfOddAndEvenNumbers('test')).toEqual('The param should be an array');
      expect(complexOperations.numberOfOddAndEvenNumbers()).toEqual('The param should be an array');
      expect(complexOperations.numberOfOddAndEvenNumbers(undefined)).toEqual('The param should be an array');
      expect(complexOperations.numberOfOddAndEvenNumbers({})).toEqual('The param should be an array');
      expect(complexOperations.numberOfOddAndEvenNumbers([1,3,'gato',5])).toEqual(`The array should have only numbers`);
      expect(complexOperations.numberOfOddAndEvenNumbers([undefined,3,'gato','perro'])).toEqual(`The array should have only numbers`);
      expect(complexOperations.numberOfOddAndEvenNumbers([{1: 1},3,5])).toEqual(`The array should have only numbers`);
    });

  }); 
}); */