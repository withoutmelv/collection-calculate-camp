'use strict';

function calculate_elements_sum(collection, element) {
  let firstIndex;
  for(let i=0;i<collection.length;i++){
    if(collection[i]===element){
      firstIndex=i;
      break;
    }
  }
  return firstIndex;
}

module.exports = calculate_elements_sum;

