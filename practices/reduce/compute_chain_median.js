'use strict';

function compute_chain_median(chain) {
  let outPut=[];
  outPut=chain.split("->");
  for(let i=0;i<outPut.length-1;i++){
    for(let j=i;j<outPut.length;j++){
      if(outPut[j]-outPut[j+1]>0){
        let temp=outPut[j];
        outPut[j]=outPut[j+1];
        outPut[j+1]=temp;
      }
    }
  }
  console.log(outPut[(outPut.length+1)/2-1]);
  if(outPut.length%2===0){
     let media1=outPut[outPut.length/2-1]-'0';
     let media2=outPut[outPut.length/2]-'0';
     let media=(media1+media2)/2;
     return media;
  }
  else{
    return outPut[(outPut.length+1)/2-1]-'0';
  }
}

module.exports = compute_chain_median;
