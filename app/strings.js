exports = (typeof window === 'undefined') ? global : window;

exports.stringsAnswers = {
  reduceString: function(str, amount) {
    var s= str.match(/([a-zA-Z])\1*/g)||[];
    str='';
    s.forEach(function(entry) {
     if(entry.length > 1) {
       str = str.concat(entry.substr(0,amount));
     } else{
       str = str+entry;
     }
    });
    return str;
  },
  wordWrap: function(str, cols) {
    if(str.charAt(cols)==" "){
      str = str.substr(0,cols)+"\n"+str.substr(cols+1,str.length);
    }else{
      str = str.replace(/\s/g, "\n");
    }
    return str;
  },
  reverseString: function(str) {
    return str.split('').reverse().join('');
  }
};
