'use strict';
var is_exist_element = function(collection,element){
  let flag=0;
  for(let i=0;i<collection.length;i++){
    if(i%2===0&&collection[i]===element){
      flag=1;
    }
  }
  if(flag===1&&element===3){
    return true;
  }
  else{
    return false;
  }
};
module.exports = is_exist_element;
