var numinput=document.getElementsByClassName('num');
var outputscreen=document.getElementById('output');
var operator=document.getElementsByClassName('operator');
var clearbtn=document.getElementById('ac');
var signchange=document.getElementById('signchange');
var percentage=document.getElementById('percentage');
var decimal=document.getElementById('decimal');
var decimalcheck=false;
var output=0;
var input=0;
var operator;
var first;
var decimalcount=1;
function giveoutput(outputdata){
    output=outputdata;
    outputscreen.innerText=outputdata;
}
function takeinput(data){
    if(!decimalcheck){
    input=(input*10)+data;
    giveoutput(input);
    }
    else{
        input=(input*decimalcount)+data;
        input/=decimalcount;
        decimalcount*=10;
        giveoutput(input);
    }
}
function takedecimalinput(){
    var tempstring=input+'.';
    decimalcheck=true;
    decimalcount*=10;
    giveoutput(tempstring);
}
function clear(){
    giveoutput('');
}
function ans(_first,_second,_operation){
var result=eval (_first+" "+_operation+" "+_second);
giveoutput(result);
input=result;
}
function evaluator(_operation){
    
   if(_operation!=4){
   clear();
   first=input;
   input=0; 
   decimalcheck=false;
   decimalcount=1;
   if(_operation==0){
      operator="+";
   }
   else if(_operation==1){
    operator="-";
   }
   else if(_operation==2){
    operator="*";
   }
   else if(_operation==3){
    operator="/";
    }
    }
else{
   ans(first,input,operator);
   
}
}
for(var i=0;i<numinput.length;i++){
    numinput[i].addEventListener('click',function (){
      takeinput(this);
    }.bind(i));
}
for(var i=0;i<operator.length;i++){
    operator[i].addEventListener('click',function (){
      evaluator(this);
    }.bind(i));
}
clearbtn.addEventListener('click',function(){
    giveoutput('');
    input=output=operator=first=0;
    decimalcount=1;
    decimalcheck=false;
})
signchange.addEventListener('click',function(){
    input=(-input);
    giveoutput(input);
})
percentage.addEventListener('click',function(){
    var temp=(output/100);
    giveoutput(temp);
})
decimal.addEventListener('click',function(){
takedecimalinput();
})