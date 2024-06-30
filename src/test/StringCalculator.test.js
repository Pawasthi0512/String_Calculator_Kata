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

test('should throw an error for negative numbers', () => {
    expect(() => AddNumbers('1,-2,3')).toThrow('Negatives not allowed: -2');
});

test('should ignore numbers greater than 1000', () => {
    const result = AddNumbers('2,1001');
    expect(result).toBe(2);
});

test('should handle delimiters of any length', () => {
    const result = AddNumbers('//[***]\n1***2***3');
    expect(result).toBe(6);
});
  
test('should handle multiple delimiters', () => {
    const result = AddNumbers('//[*][%]\n1*2%3');
    expect(result).toBe(6);
});
  
test('should handle multiple delimiters with length longer than one char', () => {
    const result = AddNumbers('//[**][%%]\n1**2%%3');
    expect(result).toBe(6);
});

// Additional test cases
test('should handle empty input with delimiters specified', () => {
    const result = AddNumbers('//;\n');
    expect(result).toBe(0);
});
  
test('should handle input with only delimiters and no numbers', () => {
    const result = AddNumbers('//;\n;;;;');
    expect(result).toBe(0);
});
  
  
test('should handle input with delimiters at the end', () => {
    const result = AddNumbers('1,2,3,');
    expect(result).toBe(6);
});
  
test('should handle input with only new lines', () => {
    const result = AddNumbers('\n\n\n');
    expect(result).toBe(0);
});
  
test('should handle multiple custom delimiters with numbers', () => {
    const result = AddNumbers('//[*][%][!]\n1*2%3!4');
    expect(result).toBe(10);
});
  
test('should handle multiple custom delimiters of different lengths', () => {
    const result = AddNumbers('//[***][%%%][!!]\n1***2%%%3!!4');
    expect(result).toBe(10);
});
  
test('should throw an error for multiple negative numbers', () => {
    expect(() => AddNumbers('1,-2,-3')).toThrow('Negatives not allowed: -2, -3');
});
  
test('should handle input with numbers greater than 100000', () => {
    const result = AddNumbers('2,1001,6');
    expect(result).toBe(8);
});
  
test('should handle input with multiple large numbers and different delimiters', () => {
    const result = AddNumbers('//[**][%%]\n2**1001%%6**2000');
    expect(result).toBe(8);
});
  