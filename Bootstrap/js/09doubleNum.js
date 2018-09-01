var arr=['1','5','3','4','2'];
var k=2;
var newArr=arr.map(function(item){
    return parseInt(item);
});
console.log(newArr);
var obj={};
var len=newArr.length;
var rsu=0;
for(var i=0;i<len;i++){
    obj[newArr[i]]=1;
}
for(var j in obj){
    if(obj[parseInt(j)+k] === 1){
        rsu++;
    }
}
console.log(rsu);