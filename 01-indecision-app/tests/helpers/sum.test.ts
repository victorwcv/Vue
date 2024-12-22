import { expect, it } from 'vitest';
import { sum, addArray } from '../../src/helpers/sum';

it('should return the sum of two numbers', () => {
  // Arrange
  const a = 1;
  const b = 2;

  // Act
  const result = sum(a, b);

  // Assert
  expect(result).toBe(a + b);
});

it('should return the sum of the array', () => {
  // Arrange
  const arr = [1, 2, 3];

  // Act
  const result = addArray(arr);

  // Assert
  expect(result).toBe(6);
});

it('should return 0', () => {
  // Arrange
  const arr = [];

  // Act
  const result = addArray(arr);

  // Assert
  expect(result).toBe(0);
});
