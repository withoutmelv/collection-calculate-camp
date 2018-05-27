'use strict';
var calculate_median = function(collection){
  let outPut=[];
  let count=0;
  for(let i=0;i<collection.length;i++){
    if((i+1)%2===0){
      outPut[count]=collection[i];
      count++;
    }
  }
  if(count%2===0){
    return (outPut[count/2]+outPut[count/2-1])/2;
  }
  else{
    return outPut[(count-1)/2];
  }
};
module.exports = calculate_median;
