function count_same_elements(collection) {
  let outPut=[];
  let remember=1;
  for(let i=0;i<collection.length;i++){
    if(collection[i]===collection[i+1]){
      remember++;
    }
    else{
      outPut.push(
        {
          'key':collection[i],
          'count':remember,
        }
      );
      remember=1;
    }
  }
  return outPut;
}

module.exports = count_same_elements;
