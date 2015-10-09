exports = (typeof window === 'undefined') ? global : window;

exports.stringsAnswers = {
	reduceString: function(str, amount) {

		var createReplacementString = function(n) {
			var replacement = "";
			for(var count=1; count <= amount; count++) {
				replacement = replacement+"$1" ;
			}
			return replacement ;
		}

		var changeMade = true ;
		var newStr = str ;
		while(changeMade) {
			var old = newStr;
			var regex = "(.)\\1{" + (amount) + ",}" ;
			newStr = newStr.replace(new RegExp(regex), createReplacementString(amount)) ;
			changeMade = old !== newStr ;
		}
		return newStr ;
	},

	wordWrap: function(str, cols) {
		var words = str.split(" ") ;
		var col = 0 ;

		var ret = "" ;
		for (var widx = 0 ; widx < words.length; widx++) {
			if (widx > 0) {
				if (words[widx].length + col > cols && col > 0) {
					ret = ret + "\n" ;
					col++ ;
				} else {
					ret = ret + " " ;
					col++ ;
				}
			}
			ret = ret + words[widx];
			col = col + words[widx].length ;
		}
		return ret ;
	},

	reverseString: function(str) {

		var reverse = function(str) {
			if (str.length === 0) {
				return "" ;
			}
			if (str.length === 1) {
				return str ;
			}
			var head = str[0] ;
			var tail = str.slice(1) ;
			return reverse(tail) + head ;
		}
		return reverse(str) ;
	}
};
