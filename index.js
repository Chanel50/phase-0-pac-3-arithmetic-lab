// Basic Math Functions
function add(a, b) {
    return a + b;
  }
  
  function subtract(a, b) {
    return a - b;
  }
  
  function multiply(a, b) {
    return a * b;
  }
  
  function divide(a, b) {
    if (b === 0) {
      throw new Error("Division by zero is not allowed");
    }
    return a / b;
  }
  
  // Math + Assignment Functions
  function increment(n) {
    return ++n;
  }
  
  function decrement(n) {
    return --n;
  }
  
  // Parsing Numbers Functions
  function makeInt(string) {
    return parseInt(string, 10);
  }
  
  function preserveDecimal(string) {
    return parseFloat(string);
  }
  
  module.exports = {
    add,
    subtract,
    multiply,
    divide,
    increment,
    decrement,
    makeInt,
    preserveDecimal,
  };
  