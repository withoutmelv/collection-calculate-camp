'use strict';

function average_uneven(collection) {
  let sum=0;
  let count=0;
  let average;
  for(let i=0;i<collection.length;i++){
    if(collection[i]%2!==0){
      sum+=collection[i];
      count++;
    }
  }
  average=sum/count;
  return average;
}

module.exports = average_uneven;
