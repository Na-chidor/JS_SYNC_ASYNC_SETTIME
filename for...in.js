function printObjectKeysAndValues(obj) {
    for (const key in obj) {
      console.log(`${key}: ${obj[key]}`);
    }
  }
  
  const person = { name: 'Alice', age: 25, city: 'Wonderland' };
  printObjectKeysAndValues(person);
 
  