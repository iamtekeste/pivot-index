const findPivotIndex = numbers => {
  const totalSum = 0;
  let leftSum = 0;

  for (let i = 0; i < numbers.length; i++) {
    totalSum += numbers[i];
  }

  for (let i = 0; i < numbers.length; i++) {
    const rightSum = totalSum - numbers[i];
    if (rightSum == leftSum) {
      return i;
    } else {
      leftSum += numbers[i];
      totalSum -= numbers[i];
    }
  }

  return -1;
};
