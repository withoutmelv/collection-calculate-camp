'use strict';
function one_add_next_multiply_three(collection){
  let outPut=[];
  let count=0;
  for(let i=0;i<collection.length-1;i++){
    outPut[count]=(collection[i]+collection[i+1])*3;
    count++;
  }
  return outPut;
}
module.exports = one_add_next_multiply_three;
