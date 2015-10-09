exports = (typeof window === 'undefined') ? global : window;

exports.countAnswers =  {
	count : function (start, end) {
		var continueCounting = true ;
		var timeoutId ;
		function countOne(start, end, continueCounting) {
			console.log(start) ;
			if (start < end && continueCounting) {
				timeoutId = setTimeout(function(){ 
					countOne(start + 1, end, continueCounting)
				}, 100) ;
			}
		}
		countOne(start, end, continueCounting) ;
		return {
			cancel : function() {
				continueCounting = false ;
				clearTimeout(timeoutId) ;
			}
		}

	}


};
