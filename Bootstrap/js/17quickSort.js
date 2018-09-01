//快排
function swap(arr,low,high){
    var temp=arr[low];
    arr[low]=arr[high];
    arr[high]=temp;
}
function partition(arr,low,high){
    var pivotKey=arr[low];
    while(low<high){
        while(arr[high]>=pivotKey&&low<high){
            high--;
        }
        swap(arr,low,high);
        while(arr[low]<=pivotKey&&low<high){
            low++;
        }
        swap(arr,low,high);
    }
    return low;
}
function QSort(arr,low,high){
    if(low<high){
        var part=partition(arr,low,high);
        QSort(arr,low,part-1);
        QSort(arr,part+1,high);
    }
}
var arr=[3,4,2,1,9,7,6];
var high=arr.length-1;
QSort(arr,0,high);
console.log(arr);