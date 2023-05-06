const calculator = require('./calculator')

describe('calculator', () => {
    test('Lets add some stuff !!!', () => {
      expect(calculator.add(1, 1)).toEqual(2);
    });
    test('Lets subtract some stuff !!!', () => {
        expect(calculator.subtract(2, 1)).toEqual(1);
      });
      test('Lets multiply some stuff !!!', () => {
        expect(calculator.multiply(3, 3)).toEqual(9);
      });
      test('Lets divide some stuff !!!', () => {
        expect(calculator.divide(8, 2)).toEqual(4);
      });
});
