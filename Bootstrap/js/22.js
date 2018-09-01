// //失落的ip
// var str='22314589';
// var num=str.length;
// var count=0;
// var path=[];
// var result=[];
// solutionOne(0,str,0,path);
// solutionTwo(0,str,0,path);
// result=result.map(function(item){
//     return item.join('.');
// });
// console.log([...new Set(result)]);


// function solutionOne(n,str,depth,use){
//     var used=use.slice();
//     if(n==num&&depth==4){
//         result.push(used);
//         count++;
//         return;
//     }
//     else if(n<num-1&&depth<4){
//         var temp='';
//         if((n+2)<num){
//             temp=str.slice(n,n+2);
//         }
//         else{
//             temp=str.slice(n);
//         }
//         if(parseInt(temp)>=10&&parseInt(temp)<=255){
//         n=n+temp.length;
//         depth++;
//         used.push(temp);
//         solutionOne(n,str,depth,used);
//         solutionTwo(n,str,depth,used);
//         }
//         else{
//             return;
//          }
//     }
    
//     else{
//         return;
//     }
// }
    
// function solutionTwo(n,str,depth,use){
//     var used=use.slice();
//     if(n==num&&depth==4){
//         result.push(used);
//         count++;
//         return;
//     }
//     else if(n<num-1&&depth<4){
//         var temp='';
//         if((n+3)<num){
//             temp=str.slice(n,n+3);
//         }
//         else{
//             temp=str.slice(n);
//         }
//         if(parseInt(temp)>=10&&parseInt(temp)<=255){
//             used.push(temp);
//             n=n+temp.length;
//             depth++;
//             solutionOne(n,str,depth,used);
//             solutionTwo(n,str,depth,used);
//         }
//         else{
//             return;
//         }
//     }
//     else{
//         return;
//     }
// }

//第三题：多少种字母的组合
// var str='123';
// var num=str.length;
// var count=0;
// var path=[];
// var result=[];
// solutionOne(0,str,path);
// solutionTwo(0,str,path);
// result=result.map(function(item){
//     var leng=item.length;
//     item=item.map(function(it){
//         return String.fromCharCode(parseInt(it)+96);
//     });
//     return item.join('');
// });
// console.log([...new Set(result)].join(' '));


// function solutionOne(n,str,use){
//     var used=use.slice();
//     if(n==num){
//         result.push(used);
//         count++;
//         return;
//     }
//     else if(n<num){
//         var temp='';
//         temp=str.slice(n,n+1);
//         if(parseInt(temp)>=1&&parseInt(temp)<=26){
//             n=n+1;
//             used.push(temp);
//             solutionOne(n,str,used);
//             solutionTwo(n,str,used);
//         }
//         else{
//             return;
//          }
//     }
    
//     else{
//         return;
//     }
// }
    
// function solutionTwo(n,str,use){
//     var used=use.slice();
//     if(n==num){
//         result.push(used);
//         count++;
//         return;
//     }
//     else if(n<num){
//         var temp='';
//         temp=str.slice(n,n+2);
//         if(parseInt(temp)>=1&&parseInt(temp)<=26){
//             n=n+2;
//             used.push(temp);
//             solutionOne(n,str,used);
//             solutionTwo(n,str,used);
//         }
//         else{
//             return;
//          }
//     }
    
//     else{
//         return;
//     }
// }

// //节点是否连通
// var arr=['0-1','0-2','2-3','3-4'];
// var obj={};
// var start='1';
// var end='4';
// var result=[];
// result.push(start);
// var i,len=arr.length;
// var flag=false;
// var used=[];
// for(i=0;i<len;i++){
//     var temp=arr[i].split('-');
//     if(temp[0] in obj){
//         obj[temp[0]].push(temp[1]);
//     }
//     else{
//         obj[temp[0]]=[];
//         obj[temp[0]].push(temp[1]);
//     }
//     if(temp[1] in obj){
//         obj[temp[1]].push(temp[0]);
//     }
//     else{
//         obj[temp[1]]=[];
//         obj[temp[1]].push(temp[0]);
//     }
// }
// console.log(JSON.stringify(obj));
// while(result.length>0){
//     var head=result.shift();
//     used.push(head);
//     if(head in obj){
//         var middle=obj[head];
//         middle=middle.map(function(item){
//             if(used.indexOf(item)==-1){
//                 return item;
//             }  
//         });
//         result=result.concat(middle);
//     }
//     if(result.indexOf(end)!=-1){
//         flag=true;
//         break;
//     }
// }
// console.log(flag);

// //京东第二题
// var num=5;
// console.log(minBeishu(4,4));

// function minBeishu(num,multi){
//     var i;
//     for(i=1;i<=num;i++){
//         if(multi%i!=0){
//             multi=multi*i;
//         }
//     }
//     return multi;
// }

//京东第三题：回文数的种类
var str='xx'.split('');
var count=0;
var used=[];
var result=[];
delLeftChar(str,used);
delRightChar(str,used);
console.log(result.join(','));


function isHui(str){
    var len=str.length;
    var i;
    for(i=0;i<len/2;i++){
        if(str[i]!=str[len-1-i]){
            return false;
        }
    }
    return true;
}

function delLeftChar(str,used){
    var len=str.length;
    if(len>1){
        var temArr=used.slice();
        var strArr=str.slice();
        var ch=strArr.splice(0,1)[0];
        temArr.push(ch);
        if(isHui(strArr.join(''))){
            result.push(temArr.join(''));
            return;
        }
        else{
            delLeftChar(strArr,temArr);
            delRightChar(strArr,temArr);
        }
    }
    else if(len==1){
        result.push(used);
        return;
    }
}
function delRightChar(str,used){
    var len=str.length;
    if(len>1){
        var temArr=used.slice();
        var strArr=str.slice();
        var ch=strArr.splice(len-1,1)[0];
        temArr.push(ch);
        if(isHui(strArr.join(''))){
            result.push(temArr.join(''));
            return;
        }
        else{
            delLeftChar(strArr,temArr);
            delRightChar(strArr,temArr);
        }
    }
    else if(len==1){
        result.push(used);
        return;
    }
}
































