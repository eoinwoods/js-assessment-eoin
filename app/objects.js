exports = (typeof window === 'undefined') ? global : window;

exports.objectsAnswers =  {
  alterContext : function(fn, obj) {
  	return fn.apply(obj) ;
  },

  alterObjects : function(constructor, greeting) {
  	constructor.prototype.greeting = greeting;
  },

  iterate : function(obj) {
  	var props = [] ;
	for (var property in obj) {
    	if (obj.hasOwnProperty(property)) {
        	props.push(property + ": " + obj[property]) ;
    	}
    }
  	return props ;
  }
};
