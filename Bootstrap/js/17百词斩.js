var arr=[1,2,1,1,1,3];
var len=arr.length;
var step=0;
var flag=false;

step1(arr,step,0);
step2(arr,step,0);
console.log(flag);


function step1(arr,step,depth){
    if(depth==len&&step==len-1){
        flag=true;
    }
    if(depth<len){
        step=step+arr[depth];
        depth++;
        console.log('step:'+step+'depth:'+depth);
        step1(arr,step,depth);
        step2(arr,step,depth);
    }
   
}

function step2(arr,step,depth){
    if(depth==len&&step==len-1){
        flag=true;
    }
    if(depth<len){
        step=step-arr[depth];
        depth++;
        console.log('step:'+step+'depth:'+depth);
        step1(arr,step,depth);
        step2(arr,step,depth);
    }
    
}