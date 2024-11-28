// Code your solution in this file!
// 1. receivesAFunction: Accepts a callback and calls it
function receivesAFunction(callback) {
    return callback();
  }
  
  
  function returnsANamedFunction() {
    return function namedFunction() {
      return "I am a named function";
    };
  }
  
  // 3. returnsAnAnonymousFunction: Returns an anonymous function
  function returnsAnAnonymousFunction() {
    return function() {
      return "I am an anonymous function";
    };
  }