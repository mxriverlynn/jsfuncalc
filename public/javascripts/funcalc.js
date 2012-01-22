// A raw value, represented as a function
var value = function(val){
  return function(){
    return val;
  }
}

// A function to subtract one function from another
var subtract = function(x, y){
  return function(){
    return x() - y();
  }
}

// A function to add two functions together
var add = function(x, y){
  return function(){
   return x() + y();
  }
}

// A function to multiply two functions
var multiply = function(x, y){
  return function(){
    return x() * y();
  }
}
