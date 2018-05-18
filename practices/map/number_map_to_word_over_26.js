'use strict';
var number_map_to_word_over_26 = function(collection){
  for(var i=0;i<collection.length;i++){
    if(collection[i]<=26){
      collection[i]=String.fromCharCode(collection[i]+96);
    }
    else{
      collection[i]=String.fromCharCode((collection[i]-1)/26+96,collection[i]%26+96);
    }
  }
  return collection;
};

module.exports = number_map_to_word_over_26;
