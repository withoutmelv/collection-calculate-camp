'use strict';
var number_map_to_word = function(collection){
  for(let i=0;i<collection.length;i++){
    collection[i]=String.fromCharCode(collection[i]+96);
  }
  return collection;
};

module.exports = number_map_to_word;
