var n=4;
var s=1;
var m=s;
var result=0;
var flag=false;

step1(s,m,0);
step2(s,m,0);
console.log(result);


function step1(s,m,depth){
    if(flag){return;}
    m=s;
    s=s+s;
    if(s===n){
        flag=true;
        result=depth+1;
    }
    else if(s<n){
        step1(s,m,depth+1);
        step2(s,m,depth+1);
    }

}

function step2(s,m,depth){
    if(flag){return;}
    s=s+m;
    if(s===n){
        flag=true;
        result=depth+1;
    }
    else if(s<n){
        step1(s,m,depth+1);
        step2(s,m,depth+1);
    }

}