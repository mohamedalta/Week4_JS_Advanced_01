// Callback Function Example
function greet(name, myFunction) {
  console.log('hellow Alta');

  // callback function
  // executed only after the greet() is executed
  myFunction(name);
}

// callback function
function sayName(name) {
  console.log('Hello' + ' ' + name);
}

// calling the function after 2 seconds
setTimeout(greet, 2000, 'Mohamed', sayName);