'use strict';

function collect_max_number(collection) {
    let maxIndex=0;
    for(let j=0;j<collection.length-1;j++){
      if(collection[j+1]>collection[maxIndex]){
        maxIndex=j+1;
      }
    }
  return collection[maxIndex];
}

module.exports = collect_max_number;
