import { capitalizeFirstLetter } from './formatUtils';

describe('capitalizeFirstLetter', () => {
  it('should capitalize the first letter of a regular string', () => {
    const result = capitalizeFirstLetter('hello');
    expect(result).toBe('Hello');
  });

  it('should not change a string with the first letter already capitalized', () => {
    const result = capitalizeFirstLetter('Hello');
    expect(result).toBe('Hello');
  });

  it('should return an empty string if the input is empty', () => {
    const result = capitalizeFirstLetter('');
    expect(result).toBe('');
  });

  it('should handle strings with numbers or special characters', () => {
    const result = capitalizeFirstLetter('123hello');
    expect(result).toBe('123hello');
  });

  it('should handle strings with multiple words', () => {
    const result = capitalizeFirstLetter('hello world');
    expect(result).toBe('Hello world');
  });
});
