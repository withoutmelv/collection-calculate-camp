'use strict';
function choose_no_repeat_number(collection) {
  var countSame=new Array();
  var outPut=new Array();
  var count=0;
  for(var i=0;i<collection.length;i++){
    if(!countSame[collection[i]]){
      countSame[collection[i]]=1;
      outPut[count]=collection[i];
      count++;
    }
  }
  return outPut;
}

module.exports = choose_no_repeat_number;



