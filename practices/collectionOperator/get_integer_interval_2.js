'use strict';

function get_integer_interval_2(number_a, number_b) {
  var outPut=new Array();
  if(number_a<number_b)
  {
    if(number_a%2!=0)
    {
      number_a=number_a+1;
    }

    for(var i=0;number_a<=number_b;i++)
    {
      outPut[i]=number_a;
      number_a=number_a+2;
    }
  return outPut;
  }
  else if (number_a>number_b) {
    if(number_a%2!=0)
    {
      number_a=number_a-1;
    }
    for (var i=0;number_a>=number_b;i++) {
      outPut[i] = number_a;
      number_a = number_a - 2;
    }
    return outPut;
  }
  else(number_a==number_b)
    outPut[0]=number_a;
  return outPut;
}

module.exports = get_integer_interval_2;
