//立即执行函数，实现定时器的作用
// (function(arr){
//     var i=0,len=arr.length;
//     (function a(){
//         setTimeout(function(){
//             console.log(arr[i++]);
//             i<len&&a();
//         }, 1000);
//     }())

// }([1,2,3,4,5,6,8]))

//普通函数实现定时器
// var arr=[2,4,5,6,7,8];
// var i=0,len=arr.length;
// (function test(){
//     console.log(arr[i]);
//     i++;
//     if(i<len){
//         setTimeout(test,1000);
//     }
// })();


//闭包实现定时器
// function out(arr){
//     if(Object.prototype.toString.call(arr).slice(8,-1)!=='Array'){return;}
//     var i=0,len=arr.length;
//     return function(){
//         i<len&&console.log(arr[i++]);
//         if(i>=len){
//             clearInterval(si);
//         }
//     }
// }
// var si=setInterval(out([1,3,5,7]),1000);

//合理使用立即执行函数以及匿名函数
// function test(){
//     var result=[];
//     for(var i=1;i<4;i++){
//         result.push((function(n){
//             return function(){
//                 console.log(n*n);
//             }();
//         })(i));
//     }
//     return result;
// }

// var rsu=test();
// rsu[0];
// rsu[1];
// rsu[2];


//在独立执行一边全排列函数
//可以使用Pomise.resolve等价于new Promise(resolve=>resolve('foo'));
var prem=[];
var usedArr=[];

function premute(input){
    var i=0,len=input.length;
    for(i=0;i<len;i++){
        var ch=input.splice(i,1)[0];
        usedArr.push(ch);
        if(input.length===0){
            prem.push(usedArr.slice());
        }
        premute(input);
        input.splice(i,0,ch);
        usedArr.pop();
    }
    return prem;
}

var result=premute([5,6,7]);
console.log(result.length);
for(var j=0;j<result.length;j++){
    console.log(result[j].join(','));
}

