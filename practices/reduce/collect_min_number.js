'use strict';

function collect_min_number(collection) {
    let minIndex=0;
    for(let i=0;i<collection.length-1;i++){
      if(collection[i+1]<collection[minIndex]){
        minIndex=i+1;
      }
    }

  return collection[minIndex];
}

module.exports = collect_min_number;

