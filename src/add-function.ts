type ConversionDescriptor = 'as-number' | 'as-string';

const combine = (
  input1: number | string,
  input2: number | string,
  result: ConversionDescriptor
) => {
  if (
    (typeof input1 === 'number' && typeof input2 === 'number') ||
    result === 'as-number'
  ) {
    return +input1 + +input2;
  } else {
    return input1.toString() + input2.toString();
  }
};

console.log(combine(2, 4, 'as-number'));
console.log(combine(2, '12', 'as-number'));
console.log(combine('John', 'Yulia', 'as-string'));
