'use strict';

function spilt_to_zero(number, interval) {
  let split_zero=new Array();
  let len;
    len=(number*10)/(interval*10)+1;
    number=number*10;
  for(let i=0;i<len;i++){
    split_zero[i]=number;
    number=number-interval*10;
    split_zero[i]=split_zero[i]/10;
  }

  return split_zero;
}
module.exports = spilt_to_zero;
