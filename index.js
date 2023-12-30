function receivesAFunction(callback) {
    // Call the provided callback function
    callback();
  }

  function returnsANamedFunction() {
    // Named function declaration
    function namedFunction() {
      console.log("befor all");
    }
    return namedFunction;
  }

  const returnsAnAnonymousFunction = function() {
    return function() {
      // This is an anonymous function
    };
  };

 

    

