// var fn=(x)=>({key:x});
// var fn1=fn(2);
// console.log(fn1);

// var func=param=>param.split(" ");
// var arr=func("abfv udgr");
// console.log(arr);

//函数立即执行
// var result=((x,y)=>{
//     x=x*2;
//     return x+y;
// })(3,'b');
// console.log(result);

//函数的相关思考问题:没有构造函数，不能new实例；同样也没有原型对象；
var newFun=x=>{return x++};
newFun(10);

//剩余参数
(function test(...extra){
    console.log(extra[1]);
}(10,20));

//箭头函数结合剩余参数
var a=(...args)=>{console.log(args);};
a(10,20,30);

//箭头函数的this：可以很好的改善this指针的指向问题
//箭头函数神似python里的lambda
var arr=[1,2,3].map(x=>(x*x));
console.log(arr);


