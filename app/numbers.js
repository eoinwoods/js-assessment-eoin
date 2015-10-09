exports = (typeof window === 'undefined') ? global : window;

exports.numbersAnswers = {
  valueAtBit: function(num, bit) {
  	return 1 & (num >> (bit-1));
  },

  base10: function(str) {
  	return parseInt(str, 2) ;
  },

  convertToBinary: function(num) {
  	var strNum = num.toString(2);
  	for (var i=strNum.length; i < 8; i++) {
  		strNum = "0" + strNum ;
  	}
  	return strNum ;
  },

  multiply: function(a, b) {
    return +(a*b).toFixed(4);
  }
};
