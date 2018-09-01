//查找两个子串的最长公共子序列：
var str1='abcbdab';
var str2='bdcaba';
var obj={};
var lenx=str1.length;
var leny=str2.length;
var c=[];
var b=[];
for(var i=0;i<lenx+1;i++){
    c[i]=[];
    b[i]=[];
    for(var j=0;j<leny+1;j++){
        c[i][j]=0;
        b[i][j]=0;
    }
}
LCS(str1,str2,c);
var arr=printPath(b,str1,str2);
arr.reverse();
console.log(arr);


function LCS(x,y,c){
    var lenx=x.length;
    var leny=y.length;
    for(var i=1;i<lenx+1;i++){
        for(var j=1;j<leny+1;j++){
            if(x[i-1]==y[j-1]){
                c[i][j]=c[i-1][j-1]+1;
                b[i][j]=0;
            }
            else{
                var temp1=c[i-1][j];
                var temp2=c[i][j-1];
                if(temp1>temp2){
                    c[i][j]=temp1;
                    b[i][j]=1;
                }
                else{
                    c[i][j]=temp2;
                    b[i][j]=2;
                }
            }
        }
    } 
}

function printPath(b,x,y){
    var i=x.length;
    var j=y.length;
    var arr=[];
    while(i>0&&j>0){
        if(b[i][j]==0){
            arr.push(x[i-1]);
            i=i-1;
            j=j-1;
        }
        else if(b[i][j]==1){
            i=i-1;
        }
        else if(b[i][j]==2){
            j=j-1;
        }
    }
    return arr;
}