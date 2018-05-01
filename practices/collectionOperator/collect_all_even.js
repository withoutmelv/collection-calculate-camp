'use strict';

function collect_all_even(collection) {
  var even=new Array();
  var n=-1;
  for(var i=0;i<collection.length;i++)
  {
    if(collection[i]%2==0)
    {
      n=n+1;
      even[n]=collection[i];
    }
  }
  return even;
}

module.exports = collect_all_even;
