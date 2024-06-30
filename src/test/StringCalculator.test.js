import AddNumbers from '../utils/AddNumbers';

test('should return 0 for an empty string', () => {
    const result = AddNumbers('');
    expect(result).toBe(0);
});