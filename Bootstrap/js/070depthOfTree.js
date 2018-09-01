var nodes=7;
var arr=['0-1','0-2','1-3','1-4','3-5','5-6'];
var start=arr.filter(function(item){
    return (item.charAt(0)=='0');
});

var allPaths=[];
var obj={};
for(var i=0;i<arr.length;i++){
    var temp=arr[i].split('-');
    if(temp[0] in obj){
        obj[temp[0]].push(temp[1]);
    }
    else{
        obj[temp[0]]=[];
        obj[temp[0]].push(temp[1]);
    }
}
console.log(obj);
while(!allEpt(obj)){
    for(var item in obj){
        if(item.charAt(0)=='0'){
            if(obj[item]!=[]){
                var valueArr=obj[item];
                for(var j=0;j<valueArr.length;j++){
                    if(valueArr[j] in obj){
                        var tempStr=item+'-'+valueArr[j];
                        obj[tempStr]=obj[valueArr[j]];
                        obj[valueArr[j]]=[];
                    }
                    else{
                        var tempStr=item+'-'+valueArr[j];
                        obj[tempStr]=[];
                    }
                }
                
            }
            obj[item]=[];
            if(allEpt(obj)){
                break;
            }
        }
        
    }

}
console.log(obj);
var max=0;
for(var path in obj){
    if(path.charAt(0)=='0'){
        var pathArr=path.split('-');
        if(pathArr.length>max){
            max=pathArr.length;
        }
    }
}
console.log('最长的路径(深度)：'+max);


function allEpt(obj){
    for(var item in obj){
        if(obj[item].length!=0){
            return false;
        }
    }
    return true;
}