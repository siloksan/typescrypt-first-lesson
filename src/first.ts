// const button = document.getElementById("button") as HTMLButtonElement;
// const input1 = document.getElementById("num1")! as HTMLInputElement;
// const input2 = document.getElementById("num2")! as HTMLInputElement;

const add = (num1: number, num2: number, showResult: boolean, phrase: string) => {
  if (showResult) {
    console.log(phrase, num1 + num2);
  } else {
    return num1 + num2;
  }
};

const n1 = 4;
const n2 = 2.3;
const printResult = true;
const resultPhrase = 'Function result: '

add(n1, n2, printResult, resultPhrase);

// console.log(add('3', 4.5))

// button.addEventListener("click", () => {
//   console.log(add(+input1.value, +input2.value));
// });
