let numbers = [1, 3, 5, 1, 1, 3, 4, 10];
let number = 20;
let lastIndex = -1;

for (let i = 0; i < numbers.length - 1; i++){
    if (numbers[i] == number){
        lastIndex = i;
    }
}

alert("последний индекс элемента " + number + " это " + lastIndex);