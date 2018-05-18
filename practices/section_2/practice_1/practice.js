function count_same_elements(collection) {
 /* let number=1;
  let remember=0;
  for(let i=0;i<collection.length;i++){
    if(collection[i]!==collection[i+1]){
      number++;
    }
  }
  let outPut=[];
  outPut[outPut.length].key=new Object();
  outPut[outPut.length].count=new Object();
  for(let i=0;i<number;i++){
    outPut[i].key='';
    outPut[i].count=1;
  }
  for(let i=0;i<collection.length-1;i++){
    if(collection[i]===collection[i+1]){
      outPut[remember].count++;
    }
    else{
      outPut[remember].key=collection[i];
      remember++;
    }
  }
  return outPut;
  */
}

module.exports = count_same_elements;
