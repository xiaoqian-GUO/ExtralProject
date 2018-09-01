$(function(){
    alert('加载成功！');
    var title=document.getElementById('title');
    title.onclick=function(){
        alert('点击成功！');
        test();
    };

    function test(){
        var me={
            name:'xiaoqian',
            age:18,
            address:'xian',
            friends:{
                name:'dp',
                age:18,
            }
        };
        var you={
            name:'dp',
            age:20,
        };
        alert('再次点击成功！');
        extend(me,you);
    }
    
        function  _isObject(o){
            //调用Object的原型对象的方法，来判断当前对象是否为对象
            //注意前面一个object表示object类型，后一个Object表示constructor为Object
            return Object.prototype.toString.call(o)=='[object Object]';
            //return typeof(o)=="object";
        }
    
        //用于递归调用自身
        function self(des,src){
            var property;
            for(property in des){
                if(des.hasOwnProperty(property)){
                    //如果des和src的属性都是对象的话，就要递归该函数；
                    if(_isObject(des[property])&&_isObject(src[property])){
                        self(des[property],src[property]);
                    }
                    else{
                        if(src.hasOwnProperty(property)){
                            continue;
                        }
                        else{
                            src[property]=des[property];
                        }
                    }
                }
            }
        }
    
        //用于循环所有的对象，即传入的参值
        function extend(){
            var arr=arguments;
            result={};
            if(!arr.length){
                //返回空对象
                return {};
            }
            else{
                for(var i=arr.length-1;i>=0;i--){
                    if(_isObject(arr[i])){
                        self(arr[i],result);
                    }
                }
                arr[0]=result;
                console.log(result);
                return result;
            }
    
        }

});