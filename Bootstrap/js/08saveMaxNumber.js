var del=2;
var num='19190';
var arr=[];
for(var i=0;i<num.length;i++){
    arr.push(parseInt(num[i]));
}
var a=findMax(arr,0,arr.length,del);
console.log(a);
console.log(arr);


function findMax(arr,start,end,del){
    var newArr=arr.slice(start,start+del);
    var max=Math.max.apply(null,newArr);
    var deleted=0;
    for(var i=start;i<start+del;i++){
        if(arr[i]!=max){
            arr[i]=-1;
            deleted+=1;
        }
    }
    return deleted;
}