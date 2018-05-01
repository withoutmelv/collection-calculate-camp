'use strict';

function get_letter_interval_2(number_a, number_b) {
  var outPut=new Array();
          if(number_a<number_b){
            if(number_a<=26&&number_b<=26){
              for(var i=0;i<=number_b-number_a;i++){
                outPut[i]=String.fromCharCode(number_a+96+i);
              }
            }
            else if(number_a<=26&&number_b>26){
              for(var count=0;count<=26-number_a;count++){
                outPut[count]=String.fromCharCode(number_a+96+count);
              }
              for(var j=27;j<=number_b;j++){
                outPut[j-number_a]=String.fromCharCode((j-1)/26+96,j%26+96);
                if(j%26==0){
                  outPut[j-number_a]=String.fromCharCode((j-1)/26+96,26+96);
                }
              }
            }
            else if(number_a>26&&number_b>26){
              for(var i=0;i<=number_b-number_a;i++){
                outPut[i]=String.fromCharCode((i+number_a-1)/26+96,(i+number_a)%26+96);
                if((i+number_a)%26==0){
                  outPut[i]=String.fromCharCode((i+number_a-1)/26+96,26+96);
                }
              }
            }
          }

          if(number_a>number_b){
            if(number_b<=26&&number_a<=26){
              for(var i=0;i<=number_a-number_b;i++){
                outPut[i]=String.fromCharCode(number_a+96-i);
              }
            }
            if(number_a>26&&number_b<=26){
              for(var i=0;i<number_a-26;i++){
                outPut[i]=String.fromCharCode((number_a-i-1)/26+96,(number_a-i)%26+96);
                if((number_a-i)%26==0){
                  outPut[i]=String.fromCharCode((number_a-i-1)/26+96,26+96);
                }
              }
              for(var j=26;j>=number_b;j--){
                outPut[number_a-j]=String.fromCharCode(j+96);
              }
            }
            if(number_a>26&&number_b>26){
              for(var k=0;k<=number_a-number_b;k++){
                outPut[k]=String.fromCharCode((number_a-k-1)/26+96,(number_a-k)%26+96);
                if((number_a-k)%26==0){
                  outPut[k]=String.fromCharCode((number_a-k-1)/26+96,26+96);
                }
              }
            }
          }

          if(number_b==number_a){
            if(number_a<=26)
            outPut[0]=String.fromCharCode(number_a+96);
            else
              outPut[0]=String.fromCharCode(number_a/26+96,number_a%26+96);
          }

          return outPut;
}

module.exports = get_letter_interval_2;

