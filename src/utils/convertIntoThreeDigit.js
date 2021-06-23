const convertIntoThreeDigit = (number) => {
  const digitOfNumber = number.toString().length;

  if (digitOfNumber === 3) {
    return number;
  } else if (digitOfNumber === 2) {
    return `0${number}`;
  } else if (digitOfNumber === 1) {
    return `00${number}`;
  }
}

export default convertIntoThreeDigit;