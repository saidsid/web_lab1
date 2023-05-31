let numbers = [11, 3, 2, 8, 5, 31];
let indexToFind = 2; 

for (let i = 0; i < numbers.length - 1; i++) {
  let minIndex = i;
  
  for (let j = i + 1; j < numbers.length; j++) {
    if (numbers[j] < numbers[minIndex]) {
      minIndex = j;
    }
  }
  
  let temp = numbers[minIndex];
  numbers[minIndex] = numbers[i];
  numbers[i] = temp;
}

let foundIndex = numbers.indexOf(indexToFind);

if (foundIndex === -1) {
  console.log("элемент не найден");
} else {
  console.log("Индекс элемента: " + foundIndex);
}