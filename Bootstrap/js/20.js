// var jsdom=require('jsdom');
// const { JSDOM } = jsdom;
// const { window } = new JSDOM();
// const { document }=(new JSDOM('')).window;
// global.document=document;
// var $=require('jquery')(window);

window.onload=function(){
     var a=0;
     var click=document.getElementById('click');
     var dblclick=document.getElementById('dblclick');
     var mousedown=document.getElementById('mousedown');
     var mouseup=document.getElementById('mouseup');
     var input=document.getElementById('input');
     var p=document.getElementById('p');

     input.onchange=function(){
         alert(input.value);
     }
     p.onclick=function(){
         alert(this.firstChild.nodeValue);
         alert(this.textContent);
     }
    //  window.onkeydown=function(){
    //      if(event){
    //          var str=String.fromCharCode(event.keyCode);
    //         alert(str);
    //      }
    //  }


     click.onclick=function(){
         alert(a++);
         this.style.color='red';
     };
     dblclick.ondblclick=function(){
         alert(a++);
         this.style.color='pink';
     };
     mousedown.onmousedown=function(){
         alert(a++);
         this.style.color='green';
     };
     mouseup.onmouseup=function(){
         alert(a++);
         this.style.color='blue';
     };
}

// 最大字段和
// var arr=[-2,11,-4,13,-5,-2];
// var sum=0,b=0,besti=0,bestj=0;
// var len=arr.length;
// for(var i=0;i<len;i++){
//     if(b<=0){
//         b=arr[i];
//         besti=i;
//     }
//     else{
//         b+=arr[i];
//     }
//     if(b>sum){
//         sum=b;
//         bestj=i;
//     }
   
// }
// console.log([sum,besti,bestj]);

// new Promise(()=>{console.log('1')}).then(()=>{console.log('2')});
// console.log('3');


// var p = new Promise(function(resolve,reject){
//     var a=1;
//     console.log(a);
//     reject(a);
// }).then(function(data){
//     console.log(data)
//     return ++data;
// }).then( function(data){
//     console.log(data)
// }).catch((data)=>{
//     console.log(data+10);
// });

//判断一个字符串是不是回文字符串
// var str='abcdefgfedcba';
// console.log(isHuiwen(str));


// function isHuiwen(str){
//     var len=str.length;
//     var i=0;
//     while(i<=(len-1)/2){
//         if(str[i]!=str[len-1-i]){
//             return false;
//         }
//         i++;
//     }
//     return true;
// }