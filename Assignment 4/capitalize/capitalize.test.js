const capitalize = require('./capitalize')

describe('capitalize', () => {
    test('makes the first letter uppercase', () => {
      expect(capitalize('hello')).toEqual('Hello');
    });

});
