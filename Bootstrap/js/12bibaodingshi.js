//包含闭包，更复杂的一个用法
/*var arr=[1,2,3,4,5,6];
function test(arr){
    var fun=[];
    for(var i=0;i<arr.length;i++){
        fun.push((function(num){
            return function(){
                console.log(arr[num]);
            }
        })(i));
    }
    return fun;
}
var rsu=test(arr);

var first=0;
function dingshi(){
    rsu[first]();
    first++;
    clr=setTimeout(dingshi,1000);
    if(first==arr.length&&clr){
        clearTimeout(clr);
    }
}
dingshi();
*/


//setTimeout：
// var num=0;
// var clr;
// function dingshi(){
//     var arr=[1,2,3,4,5];
//     console.log(arr[num]);
//     num++;
//     clr=setTimeout(dingshi,1000);
//     if(num==arr.length&&clr){
//         clearTimeout(clr);
//     }
// }
// dingshi();



//setInterval:
// function test2(arr,num){
//     console.log(arr[num]);
// }
// var i=0;
// while(i<arr.length){
//     setInterval(test2,1000,arr,i);
//     i++;
// }



//另一个闭包的用法：
function createFunctions(){
    var arr=[];
    for(var i=0;i<12;i++){
        arr[i]=function(num){
            return function(){
                return num;
            }
        }(i);
    }
    return arr;
}

var newArr=createFunctions();
console.log(newArr[0]());