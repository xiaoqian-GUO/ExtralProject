// //闭包的时候，由于var声明变量的作用域是全域的，所以i值会变成
// //最终的值，而换成let声明就可以解决这个问题；如下所示；
// // var a = [];
// // for (let i = 0; i < 10; i++) {
// //   a[i] = function () {
// //     console.log(i);
// //   };
// // }
// // a[7]();

// // function f1() {
// //     let n = 5;
// //     if (true) {
// //       let n = 10;
// //     }
// //     console.log(n);
// //   }
// // f1();

// //顶层对象在浏览器环境中是指window对象，在Node指的是global对象；
// //在全局环境下，可以添加属性，却不可以删除内在属性；
// // global.a=1;
// // console.log(a);
// // delete global.a;
// // console.log(global.a);

// // console.log([[1,2],[3,4]].map(([a,b])=>{a+b;}));

// //计数排序
// // var arr=[10,3,2,5,1,4,9];
// // jishu(arr);
// // function jishu(arr){
// //     var len=arr.length;
// //     var max=Math.max.apply(null,arr);
// //     var b=[],c=[];
// //     var i,j;
// //     for(i=0;i<len;i++)
// //     {
// //         b[i]=0;
// //     }
// //     for(j=0;j<max;j++){
// //         c[j]=0;
// //     }
// //     for(var k=0;k<len;k++){
// //         c[arr[k]-1]+=1;
// //     }
// //     for(i=1;i<max;i++){
// //         c[i]+=c[i-1];
// //     }
// //     for(j=0;j<len;j++){
// //         b[c[arr[j]-1]]=arr[j];
// //         c[arr[j]-1]--;
// //     }
// //     console.log(b);
// // }

// //连通图是否连通
// // var n=4;
// // var m=2;
// // var i;
// // var arr=['1 2','2 1'];
// // var obj={};
// // for(var j=0;j<n;j++){
// //     obj[j]=[];
// // }
// // for(var k=0;k<m;k++){
// //     var temp=arr[k].split(' ');
// //     var s=temp[0];
// //     var e=temp[1];
// //     if(s in obj){
// //         if(obj[s].indexOf(e)==-1){
// //             obj[s].push(e);
// //         }
// //     }
// //     else{
// //         obj[s]=[];
// //         obj[s].push(e);
// //     }
// //     if(e in obj){
// //         if(obj[e].indexOf(s)==-1){
// //             obj[e].push(s);
// //         }
// //     }
// //     else{
// //         obj[e]=[];
// //         obj[e].push(s);
// //     }
// // }
// // console.log(obj);
// // var used=[];
// // console.log(isAccess(obj,'1','2'));
// // console.log(isAccess(obj,'3','2'));
// // console.log(isAccess(obj,'2','1'));

// // function isAccess(obj,start,end){
// //     used=[];
// //     var arr=[];
// //     arr.push(start);
// //     used.push(start);
// //     while(arr.length>0){
// //         var tt=[];
// //         obj[arr[0]].forEach(function(item){
// //             if(used.indexOf(item)==-1){
// //                 tt.push(item);
// //             }
// //         });
// //         arr=arr.concat(tt);
// //         var it=arr.shift();
// //         used.push(it);
// //         if(arr.indexOf(end)!=-1){
// //             return true;
// //         }
// //     }
// //     return false;
// // }

// //计数排序
// var arr=[10,10,9,9,8,7,6,5,4,3,2,11,2,3,4];
// var len=arr.length;
// var max=Math.max.apply(null,arr);
// var b=[],c=[];
// var i;
// for(i=0;i<max;i++){
//     c[i]=0;
// }
// for(i=0;i<len;i++){
//     b[i]=0;
// }
// for(i=0;i<len;i++){
//     c[arr[i]-1]+=1;
// }
// for(i=1;i<max;i++){
//     c[i]+=c[i-1];
// }
// for(i=0;i<len;i++){
//     b[c[arr[i]-1]]=arr[i];
//     c[arr[i]-1]-=1;
// }
// console.log(b);

//全排列再实现一遍
// var used=[];
// var premuse=[];
// var arr=[1,3,6];
// function premute(arr){
//     var len=arr.length;
//     for(var i=0;i<len;i++){
//         var ch=arr.splice(i,1)[0];
//         used.push(ch);
//         if(arr.length===0){
//             premuse.push(used.slice());
//         }
//         premute(arr);
//         arr.splice(i,0,ch);
//         used.pop();
//     }
//     return premuse;
// }
// console.log(premute(arr));

//自己的方法实现求取最大子字符串:比较笨的方法；
// function maxSequence(str,index){
//     var len=str.length;
//     var arr=[];
//     for(var i=0;i<len;i++){
//         if(arr.indexOf(str[index])==-1){
//             arr.push(str[index]);
//             index++;
//         }
//         else{
//             break;
//         }
//     }
//     return index;
// }

// var str='abcdefgaabb';
// var length=str.length;
// var index=0;
// var array=[];
// while(index<length){
//     var temp=maxSequence(str,index);
//     array.push(temp-index);
//     index+=1;
// }
// console.log(Math.max.apply(null,array));

//实现求取最大子字符串：聪明的方法；

// function findLongestSubstring(str){
//     var obj={};
//     var start=0;
//     var end=0;
//     var substr='';
//     var len=str.length;
//     var resultLen=0;
//     while(end<len){
//         if(obj[str[end]]>=start){
//             if(end-start>resultLen){
//                 resultLen=end-start;
//                 substr=str.slice(start,end);
//             }
//             start=obj[str[end]]+1;  //冲突元素第一次出现的位置；
//         }
//         obj[str[end]]=end;
//         end++;
//     }
//     //最后还有一波比较
//     if(end-start>resultLen){
//         resultLen=end-start;
//         substr=str.slice(start,end);
//     }
//     return {
//         len:resultLen,
//         substr:substr,
//         obj:obj
//     }

// }

//实现那个画板的笔画数
// var result=[['Y','X','X','B'],['X','Y','G','X'],['Y','B','Y','Y'],['B','Y','X','Y']];
// var start=0,end=0;
// var m=4,n=4;
// var count=0;
// for(var i=0;i<m;i++){
//     for(var j=0;j<n;j++){
//         var s=i,e=j;
//         var s1=i,e1=j;
//         if(result[i][j]=='Y'){
//             count++;
//             while(s<m&&e<n){
//                 result[s][e]='X';
//                 s++;
//                 e++;
//             }
//             while(s1>=0&&e1>=0){
//                 result[s1][e1]='X';
//                 s1--;
//                 e1--;
//             }
//         }
//         if(result[i][j]=='B'){
//             count++;
//             while(s<m&&e>=0){
//                 result[s][e]='X';
//                 s++;
//                 e--;
//             }
//             while(s1>=0&&e1<n){
//                 result[s1][e1]='X';
//                 s1--;
//                 e1++;
//             }
//         }
//     }
// }
// console.log(count);

// var str='a1a2a3';
// var reg=/a\d/gy;
// console.log(str.match(reg));
// console.log(reg.sticky);
// console.log(reg.source);//正则表达式的正文
// console.log(reg.flags);


// var re=/far.cha/s;
// var str='far\rcha';
// console.log(re.test(str));
// console.log(re.dotAll);
// console.log(re.flags);

// var str='123abc23%34%avbnvfab';
// var re=/a(?!b)/g;
// var reg=/\d+(?!%)/g;
// console.log(str.match(re));
// console.log(str.match(reg));

// var regex = /t(e)(st(\d?))/g;
// var string = 'test1test2test3';
// console.log(string.match(regex));

// var num='12';
// console.log(isFinite(Number(num)));
// console.log(Number.isFinite(num));

// console.log(Number.parseFloat===parseFloat);
// console.log(Number.parseInt===parseInt);;

// var num=2.3e7;
// console.log(Number.isFinite(num));
// console.log(typeof num);

//指数运算符
//console.log(3**3);

//链家的第二次笔试编程题
// var num=3;
// var arr=['1 3','1 2','2 1 2'];
// var len=arr.length;
// var result=[];
// for(var i=0;i<len;i++){
//     var temp=arr[i].split(' ');
//     var leng=temp.length;
//     for(var j=1;j<leng;j++){
//         result.push(temp[j]);
//     }
// }
// var set=new Set(result);
// console.log([...set]);
// console.log([...set].length);

// var num=1;
// function fn(){
//     console.log(num);
//     var num=2;
//     console.log(window);
// }
// fn();


// function fn(...values){
//     var arr=Array.from(arguments);
//     var arr2=Array.prototype.slice.call(arguments);
//     console.log(arr);
//     console.log(arr2);
// }
// fn(1,2,3,4,5);

//扩展运算符实现数组的克隆，与concat和slice相同
// const arr1=[1,2,3];
// const arr=[...arr1];
// arr[0]=3;
// console.log(arr1[0]);

// var arr=[1,2,3,4,5,6].copyWithin(4,4);
// console.log(arr);

// var index=[NaN].findIndex(y=>Object.is(NaN,y));
// var index2=[NaN].indexOf(NaN);
// console.log(index);
// console.log(index2);
// console.log(Object.is(NaN,NaN));

// var str='XXY';
// var len=str.length;
// var arr=str.split('');
// var used=[];
// var rsu=[];
// var count=0;
// moveLeftChar(arr,used);
// moveRightChar(arr,used);
// console.log(rsu.length);


// function isHui(str){
//     var len=str.length;
//     var i;
//     var flag=true;
//     for(i=0;i<=len/2;i++){
//         if(str[i]!=str[len-1-i]){
//             flag=false;
//             break;
//         }
//     }
//     return flag;
// }

// function moveLeftChar(left,usedLeft){
   
//         var arr=left.slice();
//         var used=usedLeft.slice();
//         var temp=arr.join('');
//         if(isHui(temp)){
//             count++;
//             return;
//         }
//         else{
//             var ch=arr.splice(0,1);
//             used.push(ch);
//             if(used.length==len-1){
//                 rsu.push(used);
//             }
//             moveLeftChar(arr,used);
//             moveRightChar(arr,used);
//         }
    
    
// }
// function moveRightChar(right,usedRight){
   
//         var arr=right.slice();
//         var used=usedRight.slice();
//         var len=arr.length;
//         var temp=arr.join('');
//         if(isHui(temp)){
//             count++;
//             return;
//         }
//         else{
//             var ch=arr.splice(len-1,1);
//             used.push(ch);
//             if(used.length==len-1){
//                 rsu.push(used);
//             }
//             moveLeftChar(arr,used);
//             moveRightChar(arr,used);
//         }
//}

// var str='abcd';
// console.log(str.slice(2,5).length);

// var proto={};
// var obj={x:10};
// Object.setPrototypeOf(obj,proto);
// proto.y=20;
// proto.z=30;
// console.log(obj.x);
// console.log(obj.y);
// console.log(obj.z);

// console.log(Object.getPrototypeOf(1)===Number.prototype);
// console.log(Object.getPrototypeOf('foo')===String.prototype);
// console.log(Object.getPrototypeOf(true)===Boolean.prototype);

// var obj={
//     foo:'hello',
//     getFoo(){
//         return super.foo;
//     },
// };
// var proto={
//     foo:'world',
// };
// Object.setPrototypeOf(obj,proto);
// console.log(obj.getFoo());


// var obj={a:1,b:2,c:3};
// for(let [key,value] of Object.definePropertyentries(obj)){
//     console.log(key,value);
// }

// const obj = Object.create({}, {p:
//     {
//       value: 12,
//       enumerable: true
//     }
//   });
// console.log(Object.values(obj)); // [42]

// var {a,b,...c}={a:3,b:4,q:1,e:2};
// console.log(a);
// console.log(b);
// console.log(c);

// var set=new Set();
// set.add(1).add(2).add(3);
// console.log(set);
// console.log([...set.keys()]);
// console.log(set.values());
// console.log(Array.from(set.entries()));
// set.forEach(function(value,key){
//     console.log(value,key);
// });

// var arr=[[1,2],[3,4],[5,6]];
// var map=new Map();
// arr.forEach(([key,value])=>{
//     map.set(key,value);
// });
// console.log(map.get(1));

// const reportor={
//     report:function(key,value){
//         console.log('key:%s,value:%s',key,value);
//     }
// };
// var map=new Map();
// map.set(1,'a').set(2,'b');
// map.forEach((value,key,map)=>{
//     reportor.report(key,value);
// });

// var arr=[];
// arr.push(...'hello');
// console.log(arr);

// var promise=new Promise((resolve,reject)=>{
//     resolve(1);
//     console.log(2);
// });
// promise.then((r)=>{
//     console.log(r);
// });












