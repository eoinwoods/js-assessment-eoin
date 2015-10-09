exports = (typeof window === 'undefined') ? global : window;

exports.functionsAnswers = {
  argsAsArray : function(fn, arr) {
    return fn.apply(null, arr);
  },

  speak : function(fn, obj) {
    return fn.apply(obj) ;

  },

  functionFunction : function(str) {
    return function(str2) {
      return str + ", " + str2 ;
    }
  },

  makeClosures : function(arr, fn) {
    var closures = [] ;
    arr.forEach(function(item) {
      closures.push(function() { return fn(item) }) ;
    });
    return closures;
  },

  partial : function(fn, str1, str2) {
    return fn.bind(undefined, str1, str2) ;
  },

  useArguments : function() {
    // This is how you convert 'arguments' to a real Array
    var args = Array.prototype.slice.call(arguments);
    return args.reduce(function(acc, item) {
      return acc + item ;
    }, 0) ;
  },

  callIt : function(fn) {
    var args = Array.prototype.slice.call(arguments, 1) ;
    return fn.apply(undefined, args) ;
  },

  partialUsingArguments : function(fn) {
    var args = Array.prototype.slice.call(arguments, 1) ;
    return fn.bind.apply(fn, [undefined].concat(args)) ;
  },

  curryIt : function(fn) {

  }
};
