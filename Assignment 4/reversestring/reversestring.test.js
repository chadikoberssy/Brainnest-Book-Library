const reverseString = require('./reverseString')

describe('reverseString', () => {
  test('reverses string', () => {
    expect(reverseString('hello')).toEqual('olleh');
  });

  test('reverses multiple', () => {
    expect(reverseString('why Branko why')).toEqual('yhw oknarb yhw')
  })

});
