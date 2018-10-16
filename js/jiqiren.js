var robot=(function(){
    return{
        init:function(){
            this.$box1=document.querySelector('.box1');
            this.$txt=document.getElementById('txt');
            this.$btn=document.getElementById('btn')
            this.event();
        },
        event:function(){
            var _this=this;
            this.$btn.onclick=function(){
                _this.showContent();
            };
            this.$txt.onkeydown=function(ev){
                ev=ev||window.event;
                var keyCode = ev.keyCode || ev.which;
                if(ev.ctrlKey){
                    if(keyCode==13){
                        _this.showContent();
                    }
                }
            }
        },
        showContent:function(){
            if(this.$txt.value.trim()==''){
                alert('请输入内容');
                return
            }
            // console.log(this.$txt.value)
            var $value=document.createElement('p');
            $value.className='p2';
            var $value2=document.createElement('span');
            var $value3=document.createElement('img');
            $value3.src='img2.jpg';
            var $text=document.createTextNode(this.$txt.value)
            $value2.appendChild($text);
            $value.appendChild($value3);
            $value.appendChild($value2);
            this.$box1.appendChild($value);

            this.getData(this.$txt.value);
            // console.log($txt.value)
            this.$txt.value='';
            
            this.$box1.scrollTop=this.$box1.scrollHeight-this.$box1.clientHeight;
        },
        showContent2:function(data){
            // console.log(this.$txt.value)
            var $value=document.createElement('p');
            $value.className='p1';
            var $value2=document.createElement('span');
            var $value3=document.createElement('img');
            $value3.src='img1.jpg';
            var $text=document.createTextNode(data)
            $value2.appendChild($text);
            $value.appendChild($value3);
            $value.appendChild($value2);
            this.$box1.appendChild($value);

            // console.log($txt.value)
 
            this.$box1.scrollTop=this.$box1.scrollHeight-this.$box1.clientHeight;
        },
        getData:function(val){
            var params = {
                data:{
                    "key": "6cb46447459a42058d4900e09e2724b1",
                    "info":val,
                    "userid":123456,
                    "cb": "robot.insertData"
                },
                success:function(data){
                    robot.insertData(data)
                }
                // success:"baiduInput.insertData"
            }
            sendAjax('http://www.tuling123.com/openapi/api', params);
        },
        insertData:function(data){
            var val=data.text;
            this.showContent2(val)
        }
    }
}())