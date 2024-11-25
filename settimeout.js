function printStringsWithDelay(arr) {
    arr.forEach((str, index) => {
      setTimeout(() => {
        console.log(str);
      }, index * 1000);
    });
  }

  const strings = ['Hello', 'World', 'How', 'Are', 'You'];
  printStringsWithDelay(strings);
