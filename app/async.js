exports = (typeof window === 'undefined') ? global : window;

exports.asyncAnswers = {
  async : function(value) {
  	return new Promise(function(resolve, reject) {
  		resolve(value) ;
  	})

  },

  manipulateRemoteData : function(url) {
  	var deferred = $.Deferred() ;

  	$.ajax(url).then(function(result) {
  		var names = $.map(result.people, function(p) { return p.name;}) ;
  		deferred.resolve(names.sort()) ;
  	})

  	return deferred.promise() ;
  }
};
