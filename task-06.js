let input;
const numbers = [];
let total = 0;

do {
  input = prompt(`Введите число`);

  const numInput = Number.isNaN(Number(input));

  if (numInput === true) {
    alert(`${input} Это не число, попробуй ввести число`);
    continue;
  }
  numbers.push(+input);
} while (input !== null);
{
  numbers.pop();
}
if (numbers.length > 0) {
  for (const number of numbers) {
    total += number;
  }
} else {
  console.log(`Массив пуст`);
}

console.log(numbers);
console.log(`Общая сумма чисел равна ${total}`);
