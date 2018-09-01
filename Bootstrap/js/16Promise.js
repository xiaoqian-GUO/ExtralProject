// var promise=new Promise(function(resolve,reject){
//     var img=new Image();
//     img.src='aaaaa';
//     img.onload=function(){
//         resolve();
//     };
//     img.onerror=function(){
//         reject();
//     }
// }).then(()=>console.log('图片加载成功'),()=>console.log('图片加载失败'));



// var promise=new Promise(function(resolve,reject){
//     setTimeout(resolve, 2000);
// }).then(()=>setTimeout(()=>{console.log('it is null')},2000)).then(()=>setTimeout(function(){
//     console.log('6s后执行输出该条语句！')
// },2000))


//promise和setTimeout一起运行的时候，优先级是先执行promise后执行setTimeout
// var data='abc';
// var promise=new Promise((resolve,reject)=>{
//     var a=1;
//     resolve(a);
// }).then((data)=>{
//     console.log(data);
//     data++;
//     setTimeout(()=>{
//         console.log(data+'settimeout');
//     }, 2000);
//     return ++data;
// }).then((data)=>{
//     console.log(data);
//     return ++data;
// })

//promise的catch异常处理：在出现异常的时候，不会导致js卡死，会继续往下执行，直到异常被捕获
var promise=new Promise((resolve,reject)=>{
    n;
}).then(()=>{console.log('运行成功')}).catch(()=>{
    a;
    console.log('报错');
}).catch(()=>{
    console.log('报错2');
}).then(()=>{
    console.log('报错后的回调');
})