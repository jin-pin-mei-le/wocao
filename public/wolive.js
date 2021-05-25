
  /**
 *
 * wolive 浮层版 客服咨询js
 * [wolive description]
 * @return {[type]} [description]
 */

var wolive ={
     appName:'WoLive',
     icon:'http://www.wolive.tt/assets/images/admin/avatar-admin2.png',
     business_id:'',
     groupid:0,
     visiter_id:'',
     visiter_name:'',
     avatar:'',
     open:function(){
        var d =document.getElementById('wolive-box');
        if(!d){
            var div =document.createElement('div');
            div.id ='wolive-box';
            div.className +='wolive-tag';
            div.style='display:block';
            document.body.appendChild(div);
            var w =document.getElementById('wolive-box');
            w.innerHTML='<div id="wolive-min" class="wolive-content" onclick="wolive.connenct(this)"><img src="'+this.icon+'" ><span>'+this.appName+'</span></div>';

        }else{
            d.style ='display:block';
        }

        var s =document.getElementById('wolive-talk');

        if(s){
           s.style='display:none';
        }
     },
     connenct:function(obj){
      
       if ((navigator.userAgent.match(/(phone|pad|pod|iPhone|iPod|ios|iPad|Android|Mobile|BlackBerry|IEMobile|MQQBrowser|JUC|Fennec|wOSBrowser|BrowserNG|WebOS|Symbian|Windows Phone)/i))) {
          
         window.open("http://www.wolive.tt/mobile/index?visiter_id="+this.visiter_id+"&visiter_name="+this.visiter_name+"&avatar="+this.avatar+"&business_id="+this.business_id+"&groupid="+this.groupid+"&product=", "_blank"); 
       
       }else{

       document.getElementById('wolive-box').style='display:none';
       var s =document.getElementById('wolive-talk');
        
       if(!s){
            var div = document.createElement('div');
            div.id ='wolive-talk';
            document.body.appendChild(div);
            div.innerHTML='<i class="wolive-close" onclick="wolive.narrow()"></i><iframe id="wolive-iframe" src="http://www.wolive.tt/layer?visiter_id='+this.visiter_id+'&visiter_name='+this.visiter_name+'&avatar='+this.avatar+'&business_id='+this.business_id+'&groupid='+this.groupid+'"></iframe>'
          
        }else{
          document.getElementById('wolive-talk').style='display:block';
        }
      
       }

     },
     narrow:function(){
        document.getElementById('wolive-box').style ='display:block';
        document.getElementById('wolive-talk').style='display:none';
     }
}






    