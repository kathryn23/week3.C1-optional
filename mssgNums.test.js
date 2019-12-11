const mssgNums = require('./mssgNums');

test('it does not accept strings as input ', () => {
    expect(mssgNums('string')).toBe('invalid input');
});

test('it does not accept booleans as input',() => {
    expect(mssgNums('boolean')).toBe('invalid input')
});

test('it returns the missing numbers', () => {
    expect(mssgNums([-3, 1, 2, 5, 6, 7, 8, 9])).toEqual([-2, -1, 0, 3, 4]);
});

