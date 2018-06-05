function count_same_elements(collection) {
  let outPut=[];
  let count=1;
  for(let i=0;i<collection.length;i++){
    if(i===collection.length-1){
      count=collection[i].replace(/[^0-9]/ig, "")-'0';
      outPut.push(
        {
          'name':collection[i].charAt(0),
          'summary':count,
        }
      );
    }
    else{
      if(collection[i].charAt(0)===collection[i+1].charAt(0)){
        if(collection[i].replace(/[^0-9]/ig, "")===''){
          count++;
        }
        else{
          count+=collection[i].replace(/[^0-9]/ig, "")-'0';
        }
      }
      else if(collection[i].replace(/[^0-9]/ig, "")!==''){
        count+=collection[i].replace(/[^0-9]/ig, "")-'0';
        outPut.push(
          {
            'name':collection[i].charAt(0),
            'summary':count-1,
          }
        );
        count=1;
      }
      else{
        outPut.push(
          {
            'name':collection[i].charAt(0),
            'summary':count,
          }
        );
        count=1;
      }
    }
    }

  return outPut;
}

module.exports = count_same_elements;
