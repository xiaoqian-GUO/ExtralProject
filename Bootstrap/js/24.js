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

// console.log(mi(5));
// console.log(mi(6));
// console.log(mi(7));
// console.log(mi(125));

// var s = "𠮷";
// console.log(s.length);
// console.log(0xffff);

// var arr=[1,2,3];
// arr=arr.concat(5,[6,7,8]);
// console.log(arr);

// var str='abcdefg';
// console.log(str.slice(1,3));
// console.log(str.substring(1,3));
// console.log(str.substr(1,3));

// var str='1454135606@qq.com';
// var reg=/^(\w)*(\.\w+)*@(\w)+(\.\w+)+$/;
// console.log(reg.test(str));

// var str='abcdefg';
// var reg=/e|g/g;
// var str2=str.replace(reg,function(str){
//     var result='';
//     result+='***'+str;
//     return result;
// });
// console.log(str2);

// var str='123-abcde456-';
// var reg=/(\d+)(-)/g;
// var str2=str.replace(reg,function($0,$1,$2){
//     console.log($0,$1,$2);
// });

// var arr1=[3,2,1];
// var arr2=[1,2,3];
// arr1.sort((a,b)=>a-b);
// arr2.sort((a,b)=>b-a);
// var rsu=arr1.map((a,i)=>a*arr2[i]).reduce((a,b)=>a+b);
// console.log(rsu);
// module.exports = function(arr1, arr2) {
//     arr1 = [...arr1].sort((a, b) => a-b)
//     arr2 = [...arr2].sort((a, b) => b-a)

//     return arr1.map((a, i) => a * arr2[i]).reduce((a, b) => a+b)
// }

// var str='name';
// var obj={
//     str:'xiaoqian',
// };
// console.log(obj.str);

var arr=[];
console.log(arr.join(' '));


















