//递归调用实现全排列
var preM=[];
var usedArr=[];
var arr=[2,4,5,6];

function premuteArray(arr){
    var len=arr.length;
    for(var i=0;i<len;i++){
        var ch=arr.splice(i,1)[0];
        usedArr.push(ch);
        if(arr.length===0){
            preM.push(usedArr.slice());     //深复制
        }
        premuteArray(arr);
        arr.splice(i,0,ch);
        usedArr.pop();
    }
    return preM;
}
var result=premuteArray(arr);
console.log(result.length);
for(var j=0;j<result.length;j++){
    console.log(result[j].join(','));
}
