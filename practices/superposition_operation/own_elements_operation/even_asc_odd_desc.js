'use strict';
var even_asc_odd_desc = function(collection){
  let even_sort=[];
  let even_count=0;
  let odd_sort=[];
  let odd_count=0;
  let outPut=[];
  for(let i=0;i<collection.length;i++){
    if(collection[i]%2===0){
      even_sort[even_count]=collection[i];
      even_count++;
    }
    else{
      odd_sort[odd_count]=collection[i];
      odd_count++;
    }
  }
  for(let i=0;i<even_sort.length-1;i++){
    for(let j=i+1;j<even_sort.length;j++){
      if(even_sort[i]>even_sort[j]){
        let temp=even_sort[i];
        even_sort[i]=even_sort[j];
        even_sort[j]=temp;
      }
    }
  }
  for(let i=0;i<odd_sort.length-1;i++){
    for(let j=i+1;j<odd_sort.length;j++){
      if(odd_sort[i]<odd_sort[j]){
        let temp=odd_sort[i];
        odd_sort[i]=odd_sort[j];
        odd_sort[j]=temp;
      }
    }
  }
  for(let i=0;i<even_sort.length+odd_sort.length;i++){
    if(i<even_sort.length){
      outPut[i]=even_sort[i];
    }
    else{
      outPut[i]=odd_sort[i-even_sort.length];
    }
  }
  return outPut;
};
module.exports = even_asc_odd_desc;
