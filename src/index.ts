const button = document.getElementById("button") as HTMLButtonElement;
const input1 = document.getElementById("num1")! as HTMLInputElement;
const input2 = document.getElementById("num2")! as HTMLInputElement;

const add = (num1: number, num2: number) => num1 + num2;
button.addEventListener("click", () => {
  alert(add(+input1.value, +input2.value));
});

alert('adsa')