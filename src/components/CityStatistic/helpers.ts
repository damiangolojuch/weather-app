export const compareValues = (currentValue: number, baseValue: number) => {
  if (currentValue === baseValue) {
    return 0;
  }

  return Math.abs(currentValue - baseValue);
};
