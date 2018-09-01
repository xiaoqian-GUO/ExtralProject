// class MyClass{
//     constructor(){

//     }
//     get prop(){
//         return 'getter';
//     }
//     set prop(value){
//         console.log('setter:'+value);
//     }
// }
// var list=new MyClass();
// list.prop=123;
// console.log(list.prop);

// var promise=new Promise((resolve,reject)=>{
//     console.log(1);
//     resolve(3);
// });
// setTimeout(()=>{
//     console.log(2);
// },0);
// promise.then((value)=>{
//     console.log(value);
// });

// var ftp=10;
// var animationID;
// var timeoutID;
// function render(){
//     timeoutID=setTimeout(function(){
//         animationID=global.requestAnimationFrame(render);
//         myFunc();
//     },1000/ftp);
// }
// function myFunc(){
//     console.log('执行动画代码');
// }
// render();

// class Point{
//     constructor(x,y){
//         this.x=x;
//         this.y=y;
//     }
//     toString(){
//         return this.x+','+this.y;
//     }
//     static f(){
//         console.log('static method');
//     }
// }
// class ColorPoint extends Point{
//     constructor(x,y,color){
//         super(x,y);
//         this.color=color;
//     }
//     toString(){
//         return this.color+','+super.toString();
//     } 
// }
// var p=new ColorPoint(2,3,'red');
// console.log(ColorPoint.f());

// var compare=function(v1,v2){
//     return v1-v2;
// }
// var arr=[10,20,40,32,67,40,20,89,300,400,15];
// arr=[...new Set(arr)];
// arr.sort(compare);
// console.log(arr.join('\n'));

// var foo='bar';
// setTimeout(() => {
//     foo='baz';
//     console.log(foo);
// }, 5000);
// setTimeout(() => {
//     console.log('abc');
// }, 2000);

// var str='tuest';
// var arr=[];
// var rsu=[];
// var len=str.length;
// var i;
// for(i=0;i<len;i++){
//     arr.push(str.charCodeAt(i));
// }
// maxSeq(arr,0,rsu);
// var result='';
// rsu.forEach(function(item){
//     result+=String.fromCharCode(item);
// });
// console.log(result);

// function maxSeq(arr,index,rsu){
//     while(index<arr.length){
//         arr=arr.slice(index);
//         var max=Math.max.apply(null,arr);
//         rsu.push(max);
//         index=arr.indexOf(max)+1;
//     }
   
// }

// var arr='2 6 4'.split(' ');
// arr=arr.map(function(item){
//     return parseInt(item);
// });
// var flag=false;
// var count=0;
// var stateArr=[];
// all(arr);
// console.log(1+mi(count-1));


// function addTwo(index,arr){
//     if(flag){
//         return [];
//     }
//     var temArr=arr.slice();
//     if(temArr[0]==temArr[1]&&temArr[1]==temArr[2]){
//         flag=true;
//         return [];
//     }
//     else{
//         temArr[index]+=2;
//         if(temArr[0]==temArr[1]&&temArr[1]==temArr[2]){
//             flag=true;
//             return [];
//         }
//         return temArr;
//     }
// }

// function addOne(index1,index2,arr){
//     if(flag){
//         return [];
//     }
//     var temArr=arr.slice();
//     if(temArr[0]==temArr[1]&&temArr[1]==temArr[2]){
//         flag=true;
//         return [];
//     }
//     else{
//         temArr[index1]+=1;
//         temArr[index2]+=1;
//         if(temArr[0]==temArr[1]&&temArr[1]==temArr[2]){
//             flag=true;
//             return [];
//         }
//         return temArr;
//     }
// }
// function all(arr){
//         var ar1=addTwo(0,arr);
//         var ar2=addTwo(1,arr);
//         var ar3=addTwo(2,arr);
//         var ar4=addOne(0,1,arr);
//         var ar5=addOne(1,2,arr);
//         var ar6=addOne(0,2,arr);
//         stateArr.push(ar1,ar2,ar3,ar4,ar5,ar6);
//         count++;
//         while(!flag){
//             arr=stateArr.splice(0,1)[0];
//             stateArr.push(addTwo(0,arr));
//             stateArr.push(addTwo(1,arr));
//             stateArr.push(addTwo(2,arr));
//             stateArr.push(addOne(0,1,arr));
//             stateArr.push(addOne(1,2,arr));
//             stateArr.push(addOne(0,2,arr));
//             count++;
//         }
//         return count;
// }

// function mi(count){
//     var c=0;
//     var i=0;
//     var flag=false;
//     while(!flag){
//         var low=Math.pow(5,i);
//         var high=Math.pow(5,i+1);
//         if(count>low&&count<=high){
//             c=i+1;
//             flag=true;
//         }
//         i++;
//     }
//     return c;
// }

// for(var i=0;i<5;i++){
//     setTimeout((function(i){
//         console.log(i);
//     })(i),i*1000);
// }

//定制对象的类型
// var str={[Symbol.toStringTag]:'Foo'}.toString();
// console.log(str);



// setTimeout(function(){
//     console.log('定时器开始啦')
// });

// var name='xiaoqian';
// var flag=false;
// new Promise(function(resolve){
//         console.log(name);
//         setTimeout(() => {
//             flag==true;
//             console.log('10s后');
//             resolve();
//         }, 10000);
// }).then(function(){
//         console.log(name);
//         console.log('执行then函数啦');
//         new Promise((resolve,reject)=>{
//             console.log('开始异步');
//             resolve();
//         }).then(()=>{
//             console.log('开始异步2...');
//         });
// }).then(function(){
//         console.log('上一个异步处理结束之后采用这种方式');
//  });
// console.log('代码执行结束');


console.log('1');
setTimeout(function() {
    console.log('2');
    process.nextTick(function() {
        console.log('3');
    });
    new Promise(function(resolve) {
        console.log('4');
        resolve();
    }).then(function() {
        console.log('5')
    });
});
process.nextTick(function() {
    console.log('6');
});
new Promise(function(resolve) {
    console.log('7');
    resolve();
}).then(function() {
    console.log('8')
});

setTimeout(function() {
    console.log('9');
    process.nextTick(function() {
        console.log('10');
    });
    new Promise(function(resolve) {
        console.log('11');
        resolve();
    }).then(function() {
        console.log('12')
    });
});
//1 7 6 8 2 4 9 11 3 10 5 12


// const f = () => new Promise((resolve,reject)=>{
//     console.log('one');
//     resolve();
// }).then(()=>{
//     console.log('two');
// });
// (async () => f())();
// console.log('next');

// function* fn(){
//     var i=1;
//     var flag=true;
//     while(flag){
//         if(i==100){
//             flag=false;
//         }
//         yield i++;
//     }
// }
// var f=fn();//是一个generator对象
// for(var i of f){
//     console.log(i);
// }


// function* fn(x){
//     yield x+1;
//     yield x+2;
//     yield x+3;
//     return x+4;
// }
// var f=fn(1);   //不包括return语句执行的情况
// for(var i of f){
//     console.log(i+'\n');
// }

// function fn(...args){
//     console.log(arguments);
//     console.log(args);
// }
// fn(1,2,3);


// function* itera(arr){
//     if(Array.isArray(arr)){
//         var len=arr.length;
//         var i;
//         for(i=0;i<len;i++){
//             yield* itera(arr[i]);
//         }
//     }
//     else{
//         yield arr;
//     }
// }
// var arr=[1,[2,3],4,[5,6]];
// for(let item of itera(arr)){
//     console.log(item);
// }

// function fn(obj){
//     const {first,second}=obj;
//     var three='abc';
//     var four='def';
//     return {first,second,three,four};
// }
// var obj={
//     first:1,
//     second:2
// };
// const {first,four}=fn(obj);
// console.log(four);

// let arr2=[3,4];
// arr2[Symbol.isConcatSpreadable]=false;
// var arr=[];
// arr=arr.concat(arr2);
// console.log(arr);

// function fn(arr){
//     var len=arr.length;
//     var newArr=[];
//     for(var i=0;i<len;i++){
//         var type=Object.prototype.toString.call(arr[i]).slice(8,-1);
//         if(type=='Number'){
//             newArr.push(arr[i]);
//         }
//         else if(type=='Array'){
//             newArr.push(...arr[i]);
//         }
//     }
//     return newArr;
// }
// var arr=[1,2,[3,4],5,6];
// console.log(fn(arr));

//通过闭包来实现计数器的功能
// var count=(function (){
//     var num=0;
//     return (function(){
//         return num=num+1;
//     });
// })();
// console.log(count());
// console.log(count());


// //闭包实现计数器
// var cnt=(function(){
//     var count=0;
//     return function(){
//         return count+=1;
//     }
// })();
// console.log(cnt());
// console.log(cnt());
// console.log(cnt());

// for(var i=0;i<10;i++){
//     (function(x){
//         setTimeout(() => {
//             console.log(x);
//         }, x*1000);
//     })(i);
// }















































