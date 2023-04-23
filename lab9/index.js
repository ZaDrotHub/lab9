  function inputNumber(count = 0, sum = 0) {
    let input = prompt("Введіть число:");

    let number = parseInt(input);
  
    if (!isNaN(number)) {
      count++;
      sum += number;
    }

    if (input === "0") {
      let average = sum / count;
      return { count, sum, average };
    }
    return inputNumber(count, sum);
  }
  
  let result = inputNumber();
  
  console.log(`Кількість чисел: ${result.count}`);
  console.log(`Сума чисел: ${result.sum}`);
  console.log(`Середнє арифметичне: ${result.average}`);