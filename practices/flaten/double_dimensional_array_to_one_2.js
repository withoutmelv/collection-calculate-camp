'use strict';

function double_to_one(collection) {
  var newArray=[];
var outPut=[];
var count=0;
var countSame=[];
for(let i=0;i<collection.length;i++){
  if(collection[i] instanceof Array){
    newArray=newArray.concat(double_to_one(collection[i]));
  }
  else{
    newArray.push(collection[i]);
  }
}
for(let i=0;i<newArray.length;i++){
  if(!countSame[newArray[i]]){
    countSame[newArray[i]]=1;
    outPut[count]=newArray[i];
    count++;
  }
}
return outPut;
}

module.exports = double_to_one;
