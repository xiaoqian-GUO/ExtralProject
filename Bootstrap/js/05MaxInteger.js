  
    var str='12 123';
    var arr=str.split(' ');
    arr.sort(compare);
    var result='';
    for(var i=0;i<arr.length;i++){
        result+=arr[i].toString();
    }
    console.log(result); 

function compare(value1,value2){
    var vlu1=value1.toString();
    var vlu2=value2.toString();
    var cmp=vlu1.localeCompare(vlu2);
    if(cmp==0){
        return 0;
    }
    else{
        var str1=vlu1.concat(vlu2);
        var str2=vlu2.concat(vlu1);
        var cha=str1.localeCompare(str2);
        if(cha==0){
            return 0;
        }
        else if(cha==1){
            return -1;
        }
        else{
            return 1;
        }
    } 
}