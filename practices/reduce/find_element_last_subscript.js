'use strict';

function calculate_elements_sum(collection, element) {
  let lastIndex;
  for(let i=0;i<collection.length;i++){
    if(collection[i]===element){
      lastIndex=i;
    }
  }
  return lastIndex;
}

module.exports = calculate_elements_sum;
