'use strict';

function hybrid_operation_to_uneven(collection) {
  let outPut=[];
  let count=0;
  for(let i=0;i<collection.length;i++){
    if(collection[i]%2!==0){
      outPut[count]=collection[i]*3+2;
      count++;
    }
  }
  return outPut;
}

module.exports = hybrid_operation_to_uneven;

