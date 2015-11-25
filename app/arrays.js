exports = (typeof window === 'undefined') ? global : window;

exports.arraysAnswers = {

  indexOf : function(arr, item) {
    return arr.indexOf(item);
  },

  sum : function(arr) {
    return (arr.reduce(function(prev, cur) {return prev + cur;}));
  },

  remove : function(arr, item) {
    return arr.filter(function(i) {return i != item});
  },

  removeWithoutCopy : function(arr, item) {
    for(var i = arr.length; i--;){
	    if (arr[i] === item) arr.splice(i, 1);
    }
    return arr;
  },

  append : function(arr, item) {
    arr.push(item);
    return arr;
  },

  truncate : function(arr) {
    arr.pop();
    return arr;
  },

  prepend : function(arr, item) {
    arr.unshift(item);
    return arr;
  },

  curtail : function(arr) {
    arr.shift();
    return arr;
  },

  concat : function(arr1, arr2) {
    return arr1.concat(arr2);
  },

  insert : function(arr, item, index) {
    arr.splice( index, 0, item );
    return arr;

  },

  count : function(arr, item) {
    var counts = 0;
    for(var i = arr.length; i--;){
	    if (arr[i] === item) counts++;
    }
    return counts;
  },

  duplicates : function(arr) {
    var sorted_arr = arr.sort();
    var results = [];
    for (var i = 0; i < arr.length - 1; i++) {
      if (sorted_arr[i + 1] == sorted_arr[i]) {
        if(results[results.length - 1] !== sorted_arr[i])results.push(sorted_arr[i]);
      }
    }
    return results;
  },

  square : function(arr) {
    for (var i = 0; i < arr.length; i++) {
      arr[i] = arr[i] * arr[i];
    }
    return arr;

  },

  findAllOccurrences : function(arr, target) {
    var results = [];
    for (var i = 0; i < arr.length - 1; i++) {
      if (arr[i] === target) {
        results.push(i);
      }
    }
    return results;
  }
};
