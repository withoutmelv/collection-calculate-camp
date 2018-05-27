'use strict';
var even_group_calculate_average = function(collection){
  let outPut=[];
  let count=0;
  let sum_1=0,temp_1=0,average_1=0;
  let sum_2=0,temp_2=0,average_2=0;
  let sum_3=0,temp_3=0,average_3=0;
  for(let i=0;i<collection.length;i++){
    if((i+1)%2===0){
      if(collection[i]%2===0){
        outPut[count]=collection[i];
        count++;
      }
    }
  }
  if(count===0){
    return [0];
  }
  for(let i=0;i<outPut.length;i++){
    if(outPut[i]/10<1){
      sum_1+=outPut[i];
      temp_1++;
      average_1=sum_1/temp_1;
    }
    else if(outPut[i]/100<1){
      sum_2+=outPut[i];
      temp_2++;
      average_2=sum_2/temp_2;
    }
    else if(outPut[i]/1000<1){
      sum_3+=outPut[i];
      temp_3++;
      average_3=sum_3/temp_3;
    }
  }

  if(!average_1&&!average_2){
    return [average_3];
  }
  else{
    return [average_1,average_2,average_3];
  }
};
module.exports = even_group_calculate_average;
