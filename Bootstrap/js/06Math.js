var num=12;
var arr=[12,35,23,100,68];
console.log(Math.sqrt(num).toFixed(3));
console.log(Math.max.apply(null,arr));
var a;
(function(){
    var a=b=0;
})();
console.log(a);
console.log(b);    //全局变量

var obj={'name':'xiaoqian'};
delete obj.name;
console.log(obj);