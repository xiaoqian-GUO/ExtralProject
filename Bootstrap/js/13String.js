var arr=[10,9,1,13,24,3,9];
var len=arr.length;
fastSort(arr,0,len-1);
console.log(arr);


function fastSort(arr,low,high){
    var middle;
    if(low<high){
        middle=fast(arr,low,high);
        fastSort(arr,low,middle-1);
        fastSort(arr,middle+1,high);
    }
}

function fast(arr,low,high){
    var flag=arr[low];
    while(low<high){
        while(arr[high]>=flag&&low<high){
            high--;
        }
        swap(arr,low,high);
        while(arr[low]<=flag&&low<high){
            low++;
        }
        swap(arr,low,high);
    }
    return low;
}

function swap(arr,m,n){
    var temp=arr[m];
    arr[m]=arr[n];
    arr[n]=temp;
}