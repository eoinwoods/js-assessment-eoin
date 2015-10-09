exports = (typeof window === 'undefined') ? global : window;

exports.regexAnswers = {
  containsNumber : function(str) {
    return str.match("[0-9]") !== null;
  },

  containsRepeatingLetter : function(str) {
    return /([A-Za-z])\1/.test(str) ;
  },

  endsWithVowel : function(str) {
    return /[AEIOUaeiou]$/.test(str) ;
  },

  captureThreeNumbers : function(str) {
    var ret =  str.replace(/[^0-9]*([0-9]{3}).*/, "$1") ;
    return (ret === str ? false : ret) ;
  },

  matchesPattern : function(str) {
    return /^[0-9]{3}-[0-9]{3}-[0-9]{4}$/.test(str) ;
  },

  isUSD : function(str) {
    return /^[$][0-9]{1,3}(,[0-9]{3})*(\.[0-9]{2})?$/.test(str) ;
  }
};
