'use strict';

function get_integer_interval(number_a, number_b) {
  var outPut=new Array();
  if(number_a<number_b)
  {
    for (var i=0;number_a<=number_b;i++)
    {
      outPut[i]=number_a;
      number_a=number_a+1;
    }
  }
  else if(number_a>number_b)
  {
    for(var i=0;number_a>=number_b;i++)
    {
      outPut[i]=number_a;
      number_a=number_a-1;
    }
  }
  else{
    outPut[0]=number_a;
  }
  return outPut;
}

module.exports = get_integer_interval;
