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