'use strict';
var single_element = function(collection){
  let outPut=[];
  let final=[];
  let real=[];
  let count=0;
  let flag=0;
  for(let i=0;i<collection.length;i++){
    if((i+1)%2===0){
     outPut[count]=collection[i];
     count++;
    }
  }
  for(let i=0;i<outPut.length;i++){
    for(let j=i+1;j<outPut.length;j++){
      if(outPut[i]===outPut[j]){
        final[outPut[i]]=-1;
      }
    }
  }
  for(let i=0;i<outPut.length;i++){
    if(final[outPut[i]]!==-1) {
      real[flag]=outPut[i];
      flag++;
    }
  }
  return real;
};
module.exports = single_element;
