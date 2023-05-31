function getsortedArray(arr, key) {
    // Сортируем массив объектов по значению ключа
    arr.sort(function(a, b) {
      return a[key] - b[key];
    });
    return arr;
  }
  
  // Пример использования
  let people = [
    {name: 'Петя', age: 25},
    {name: 'Лена', age: 32},
    {name: 'Вася', age: 18},
    {name: 'Катя', age: 42}
  ];
  
  let sortedPeople = getsortedArray(people, 'age');
  console.log(sortedPeople); 