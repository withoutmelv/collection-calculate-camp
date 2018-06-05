function count_same_elements(collection) {
  let outPut=[];
  let num=1;
  for(let i=0;i<collection.length;i++){
    if(collection[i]===collection[i+1]){
      num++
    }
    else{
     if(i===collection.length-1){
       let temp=collection[i].split('-');
       outPut.push(
         {
           'key':temp[0],
           'count':temp[1]-'0',
         }
       )
     }
     else{
       outPut.push(
         {
           'key':collection[i],
           'count':num,
         }
       );
     }
      num=1;
    }
  }
  return outPut;
}

module.exports = count_same_elements;
