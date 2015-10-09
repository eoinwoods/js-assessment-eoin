exports = (typeof window === 'undefined') ? global : window;

exports.recursionAnswers = {


  listFiles: function(data, dirname) {
	var findFiles = function(data, dirname, collectFiles) {

	  	if (!dirname || (!collectFiles && dirname && data.dir === dirname)) {
	  		collectFiles = true ;
	  	}

	  	var filelist = [] ;

	  	data.files.forEach(function(f) {
	  		if (typeof f === 'string') {
	  			if (collectFiles) {
	  				filelist.push(f) ;
	  			}
	  		} else {
	  			filelist = filelist.concat(findFiles(f, dirname, collectFiles)) ;
	  		}
	  	}) ;
	  	return filelist ;
	}

  	return findFiles(data, dirname, false) ;
  },

  permute: function(arr) {

  	var permuteArray = function(a) {
  		if (a.length === 0) {
  			return [];
  		}

  		if (a.length === 1) {
  			return [a] ;
  		}

  		if (a.length === 2) {
  			return [ [a[0], a[1]], [a[1], a[0]]] ;
  		}

  		var ret = [] ;
  		var head = a.shift() ;
  		var tails = permuteArray(a) ;
  		tails.forEach(function(aTail) {
  			for (var idx=0; idx <= aTail.length; idx++) {
  				var tailClone = aTail.map(function(x) { return x;}) ;
  				tailClone.splice(idx,0, head) ;
	  			ret.push(tailClone) ;
  			}
  		}) ;

  		return ret;
  	}
  	return permuteArray(arr) ;


  },

  fibonacci: function(n) {

  	var nthFib = function(x) {
  		if (x <= 1) {
  			return x ;
  		}
  		return nthFib(x-1) + nthFib(x-2) ;

  	}

  	return nthFib(n) ;

  },

  validParentheses: function(n) {

  	var addUnique = function(array, item) {
  		if (array.indexOf(item) == -1) {
  			array.push(item) ;
  		}
  		return array ;
  	}
  	var generateParentheses = function(n) {
  		if (n === 1) {
  			return ["()"] ;
  		} 
  		var innerSet = generateParentheses(n-1) ;
  		var ret = [] ;
  		innerSet.forEach(function(set) {
  			addUnique(ret, "()" + set) ;
  			addUnique(ret, set + "()") ;
  			addUnique(ret, "(" + set + ")") ;
  		}) ;
  		return ret ;
  	}
  	return generateParentheses(n) ;

  }
};
