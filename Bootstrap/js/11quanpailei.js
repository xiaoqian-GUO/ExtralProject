var permArr = [];  
var usedChars = [];
//递归调用，实现全排列
function permute(input) {  
    var i, ch;  
    for (i = 0; i < input.length; i++) {  
        ch = input.splice(i, 1)[0];  
        usedChars.push(ch);  
        if (input.length == 0) {  
            permArr.push(usedChars.slice());  
        }  
        permute(input);  
        input.splice(i, 0, ch);  
        usedChars.pop();  
    }  
    return permArr;  
}
function allPai(arr){
    permArr=[];
    usedChars=[];
    return permute(arr);
}
function multi(arr1,arr2){
    var len=arr1.length;
    var result=0;
    for(var i=0;i<len;i++){
        result+=arr1[i]*arr2[i];
    }
    return result;
}
var rsu1=allPai([1,2,3]);
var rsu2=allPai([1,2,3]);
var len1=rsu1.length;
var len2=rsu2.length;
var count=Number.MAX_VALUE;
for(var i=0;i<len1;i++){
    for(var j=0;j<len2;j++){
        var tem=multi(rsu1[i],rsu2[j]);
        if(count>tem){
            count=tem;
        }
    }
}
console.log(count);

