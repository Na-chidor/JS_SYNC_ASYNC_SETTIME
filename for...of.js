function doubleNumbers(arr) {
    const doubledArray = [];
    for (const num of arr) {
      doubledArray.push(num * 2);
    }
    return doubledArray;
  }
  
  const numbers = [1, 2, 3, 4];
  console.log(doubleNumbers(numbers)); 
  