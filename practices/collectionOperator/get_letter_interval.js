'use strict';

function get_letter_interval(number_a, number_b) {
          var outPut=new Array();
          if(number_a<number_b) {
            for (var i = 0; i <= number_b - number_a; i++) {
              outPut[i]=String.fromCharCode(96+number_a+i);
            }
          }
          else if(number_a>=number_b){
            for(var i=0;i<=number_a-number_b;i++){
              outPut[i]=String.fromCharCode(96+number_a-i);
            }
          }
          return outPut;

}

module.exports = get_letter_interval;
