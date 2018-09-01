// console.log(['1','10','100'].map(parseInt));

function count(start, end) {
    console.log(start++);
    var timer=setTimeout(function(){
        if(start<=end){
            count(start,end);
        }
        else{
            clearTimeout(timer);
        }
        
    },100);
    
    return {
        cancel:function(){
            clearTimeout(timer);
        }
    };
}
count(1,9);