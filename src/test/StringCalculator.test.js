import AddNumbers from '../utils/AddNumbers';

test('should return 0 for an empty string', () => {
    const result = AddNumbers('');
    expect(result).toBe(0);
});

test('should return the number itself for a single number', () => {
    const result = AddNumbers('1');
    expect(result).toBe(1);
});
  
test('should return the sum of two numbers', () => {
    const result = AddNumbers('1,2');
    expect(result).toBe(3);
});

test('should handle an unknown amount of numbers', () => {
    const result = AddNumbers('1,2,3,4');
    expect(result).toBe(10);
});

test('should handle new lines between numbers', () => {
    const result = AddNumbers('1\n2,3');
    expect(result).toBe(6);
});

test('should handle different delimiters', () => {
    const result = AddNumbers('//;\n1;2');
    expect(result).toBe(3);
});