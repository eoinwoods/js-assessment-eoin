exports = (typeof window === 'undefined') ? global : window;

exports.arraysAnswers = {

  indexOf : function(arr, item) {
    return arr.indexOf(item);
  },

  sum : function(arr) {
    return arr.reduce(function(last, current) {
      return last+current;
    }, 0)

  },

  remove : function(arr, item) {
    return arr.filter(function(element) {
      return element !== item;
    })

  },

  removeWithoutCopy : function(arr, item) {
    var idx = 0 ;
    while(idx < arr.length) {
      if (arr[idx] === item) {
        arr.splice(idx, 1) ;
      } else {
        idx++;
      }
    }
    return arr ;
  },

  append : function(arr, item) {
    arr.splice(arr.length, 0, item) ;
    return arr ;
  },

  truncate : function(arr) {
    arr.splice(arr.length - 1, 1) ;
    return arr;
  },

  prepend : function(arr, item) {
    arr.splice(0, 0, item) ;
    return arr;
  },

  curtail : function(arr) {
    arr.splice(0, 1) ;
    return arr;
  },

  concat : function(arr1, arr2) {
    return arr1.concat(arr2) ;
  },

  insert : function(arr, item, index) {
    arr.splice(index, 0, item) ;
    return arr ;
  },

  count : function(arr, item) {
    return arr.reduce(function(accum, arrayItem) {
      if (arrayItem === item) {
        accum++ ;
      }
      return accum ;
    }, 0) ;
  },

  duplicates : function(arr) {
    var dups = [] ;
    arr.forEach(function(item) {
      if (arr.indexOf(item) != arr.lastIndexOf(item)) {
        if (dups.indexOf(item) === -1) {
          dups.push(item) ;
        }
      }
    })
    return dups ;

  },

  square : function(arr) {
    return arr.map(function(item) {
      return item*item;
    })
  },

  findAllOccurrences : function(arr, target) {
    var indexes = [];
    arr.forEach(function(item, idx) {
      if (item === target) {
        indexes.push(idx) ;
      }
    })
    return indexes;
  }
};
