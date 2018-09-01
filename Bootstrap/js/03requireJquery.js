var jsdom=require('jsdom');
const { JSDOM } = jsdom;
const { window } = new JSDOM();
const { document } = (new JSDOM('')).window;
global.document = document;
var $ = jQuery = require('jquery')(window);


$(document).ready(function(){
    var a=0;
   
    $('#click').click(function(){
        alert(a++);
        jq(this).css('color','red');
    });
    $('#dblclick').dblclick(function(){
        alert(a++);
        jq(this).css('color','pink');
    });
    $('#mousedown').mousedown(function(){
        alert(a++);
        jq(this).css('color','green');
    });
    $('#mouseup').mouseup(function(){
        alert(a++);
        jq(this).css('color','blue');
    });
});

// var a='abcdefg';
// var b=11;
// var c=[1,2,3];
// var d={name:'xiao',};
// var e=function(){alert('abcd');};

//第一种方式：typeof
// console.log(typeof(a));
// console.log(typeof(b));
// console.log(typeof(c));
// console.log(typeof(d));
// console.log(typeof(e));

//第二种：instanceof
/* console.log(c instanceof Array);
console.log(d instanceof Object);
console.log(e instanceof Function); */

//第三种：constructor来判断对象

// console.log(c.constructor==Array);
// console.log(d.constructor==Object);
// console.log(e.constructor==Function);

//第四种：使用prototype
// console.log(Object.prototype.toString.call(a)==='[object String]');
// console.log(Object.prototype.toString.call(b)==='[object Number]');
// console.log(Object.prototype.toString.call(c)==='[object Array]');
// console.log(Object.prototype.toString.call(d)==='[object Object]');
// console.log(Object.prototype.toString.call(e)==='[object Function]');

//第五种：使用jquery的type方法：
// console.log(typeof undefined);
// console.log(typeof null);
// console.log(typeof true);
// console.log($.type(a));
// console.log($.type(b));
// console.log($.type(c));
// console.log($.type(d));
// console.log($.type(e));
// console.log($.type(true));
// console.log($.type(undefined));
// console.log($.type(null));
// console.log($.type(/test/));