$(function(){
  var self;//当前文本 
    var text;//当前文本内容
    var index=0;//下标
    var speed=200;//打字速率
    var typewriters=null;//定时打字器
    var isCursor=false;//是否显示光标
    var isEndCursor=true;//打字完毕后是否显示光标
    var cursorStyle="#000";//光标颜色
    function autoAdd(){
      self.find("b").remove();
      self.append(text.substr(index,1));
      if(isCursor){self.append('<b style="border-color:'+cursorStyle+'"></b>');}
      index++;
      if(index>=text.length){
        self.html(text);
        if(isCursor){self.append('<b style="border-color:'+cursorStyle+'"></b>');}
        clearInterval(typewriters);
        if(isEndCursor){self.find("b").addClass("end");}
        else{self.find("b").remove();}
      }  
    }  
    $.fn.extend({
      typewriter:function(configure){
        self=$(this);//当前文本   
        text=self.html();//当前文本内容
        self.html('');
        if(typeof(configure.speed)=="number"){speed=configure.speed;}
        if(typeof(configure.cursor)=="boolean"){isCursor=configure.cursor;}
        if(typeof(configure.endCursor)=="boolean"){isEndCursor=configure.endCursor;}
        if(configure.cursorCategory=="level"){self.addClass("level");}
        else if(configure.cursorCategory=="vertical"){self.removeClass("level");}
        if(configure.cursorStyle){cursorStyle=configure.cursorStyle;}
        typewriters=setInterval(autoAdd,speed);
      }      
    });
});