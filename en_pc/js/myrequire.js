require.config({
  paths:{
    "jquery":"./jquery-3.3.1",
    "wow": "./wow.min",
    "Swiper": "./swiper.min",
    "text":"./text",
    "head":"../common/head.html",
    "footer":"../common/footer.html",
    "heads":"../common/heads.html"
  }
})
require(['jquery', 'wow', 'Swiper', 'text', 'text!head', 'text!footer', 'text!heads'], function(jquery, wow, Swiper, text, head, footer, heads){
$(function(){
  var REQUESTURL = 'http://admin.greenprosperitygroup.cn/applet/public/index.php';
  //进入页面  
  if ($("#home").length != 0) {
    $("#head").html(heads).addClass("on");
  } else {
    $("#head").html(head).addClass("on"); 
  }
  $("#footer").html(footer);
  if ($("#team").length != 0) {
    $("#head ul li a").attr("target" , "_parent" );
  }
  $("#head ul li").hover(function(){
    $(this).find("dl").stop().slideDown(200);
  }, function(){
    $(this).find("dl").stop().slideUp(200);
  });
  function statistics() {
    var _mtac = {"senseQuery":1};
    (function() {
      var mta = document.createElement("script");
      mta.src = "//pingjs.qq.com/h5/stats.js?v2.0.4";
      mta.setAttribute("name", "MTAH5");
      mta.setAttribute("sid", "500679048");
      mta.setAttribute("cid", "500679049");
      var s = document.getElementsByTagName("script")[0];
      s.parentNode.insertBefore(mta, s);
    })();
    var isMtaH5 = setInterval(function(){
      if (MtaH5) {
         clearInterval(isMtaH5); 
         MtaH5.clickStat("pce");   
      }
    }, 1000);
  }
  statistics();
  navCurrent();
  function isuserAgent(){
    //Edge
    var userAgent = navigator.userAgent; //取得浏览器的userAgent字符串
    if (userAgent.indexOf("Edge") != -1 || userAgent.indexOf("Trident") != -1) {
      $("#home .content .video,#model .video,#team .video,#model ul.click-box").css("transform", "scale(1.25)");
      // $("#home .content .video,#team .video").css("transform", "scale(1.3)");
    } else {
      $("#team .con-box li .right").addClass("on");
    }
  }
  isuserAgent();
  $("#head ul li:eq(2)").on("click", function(){
    $("#iframes").addClass("on");
    if ($("#project").length != 0) {
      $("#footer").removeClass("on");
      $("html,body").css("overflowY", "auto");
    }
    setTimeout(function(){
      $("#iframes").contents().find("#guide").fadeOut();
      $("#iframes").contents().find("#team .hand").removeClass("on");
      // $("#guide").fadeOut();
      // $("#team .hand").addClass("on");
    }, 2000);
    //document.title = "Team";
  });
  if ($("#home").length != 0) {
    setTimeout(function(){
      $("#home .content .con").addClass("on");
    }, 500);
  }
  //$("#footer").html(footer);
  //导航当前状态
  function navCurrent() {
    var url = window.location.href.toLowerCase() || '';
    var x = 0;
    if (url.indexOf("/model") > 0) {
      x = 1;
    } else if (url.indexOf("/team") > 0) {
      x = 2;
    } else if (url.indexOf("/project") > 0) {
      x = 3;
    } else if (url.indexOf("/contact") > 0 || url.indexOf("/cooperate") > 0) {
      x = 4;
    } else {
      x = 6;
    }
    $("#head ul li:eq("+x+")").addClass("cur");
  }
   if ($("#model").length != 0) {
     $("body").css("overflow", "hidden");
     var ISVIDEOPLAY = true;//控制视频暂停播放
     var prevent_multipoint = true;//防止多点
     var isClickPause = false;//是否提前点击了星球
     videoPlay("myvideo");
     videoPause("myvideo", [{second: 4, seconds: 4, ele: "#model ul.click-box"}]);
     //视频播放 
     function videoPlay(video) {
       var _video = document.getElementById(video);
       _video.play();
     }
     //视频暂停
    function videoPause(video, pauseList){
      var _video = document.getElementById(video);
      var _curPauseTime;
      //使用事件监听方式捕捉事件
      _video.addEventListener("timeupdate",function(){
        var timeDisplay;
        //用秒数来显示当前播放进度
        timeDisplay = Math.floor(_video.currentTime);
        if (timeDisplay > _curPauseTime + 1) {ISVIDEOPLAY = true;}
        //if (timeDisplay >= 3) {$("#model ul.click-box").show();}
        for (var i = 0; i < pauseList.length; i++) {
          if (timeDisplay == pauseList[i].seconds && ISVIDEOPLAY) {
            _curPauseTime = timeDisplay;
            ISVIDEOPLAY = false;
            if (!isClickPause) {_video.pause();}
            $(pauseList[i].ele).show();
          }
        }
      }, false);
    }
    function jumpVideo(video, times, isPlay){
      var _video = document.getElementById(video);
      _video.currentTime = times;
      if (isPlay) {
        _video.pause(); 
      } else {
        _video.play();
      }
    }
    $("#model ul.click-box li").on("click", function(){
      if (!prevent_multipoint) {return;}
      prevent_multipoint = false;
      var _index = $(this).index();
      jumpVideo("myvideo", 4 + (_index * 4), false);
      if (_index == 0 || _index == 1) {
        setTimeout(function(){showIndex(_index);}, 1400);
      } else {
        setTimeout(function(){showIndex(_index);}, 1650);
      }
      setTimeout(function(){
        jumpVideo("myvideo", 4, true);
        prevent_multipoint = true;  
      }, 3000);
    });
    //去掉动画代码段
    // $("#model ul.click-box li").on("click", function(){
    //   var _index = $(this).index();
    //   showIndex(_index);
    // });
    /*点击星球弹出相应介绍*/
function showIndex(index){
  var list = [
    {title: "Key Differentiators", text: "Unlike traditional institutional venture investors who, by definition are passive participants once the investment is complete, Green Prosperity takes an operational role and isn’t afraid of the hard work necessary for success in the China market. Our model includes investing and financing all China JV´s costs so we clearly show confidence in the partnership. We have access to right talents and hire the right team, leverage the right relationships and take responsibility for execution, follow through and monetizing value for both parent companies. We are not just armchair advisors, we actually do the heavy lifting. GP is incentivized to drive to profitability for all parties as quickly as possible. When the partnership succeeds, we all succeed."},
    {title: "Shared Risk Approach: How does it work?", text:"Green Prosperity takes a “Shared Risk” approach. Together with our JV partner, we form a local Chinese entity (JV) customized to the unique value of the initiative. GP takes responsibility for all capital requirements in China (staff, office, travel, overhead, legal, etc.), localization, go to market and management for risk mitigation and maximized return for all stakeholders. Our focus isn’t just about return on investment but about building value and monetization through operational excellence. It was for that reason that we built Green Prosperity from the beginning as a Macau based holding company so that we can move profits back to our partners with much greater ease. When we succeed, everyone succeeds. We’re not investors “per-se’” but a commercialization and go-to-market partner that has the ability to invest."},
    {title: "IP Protection and Defensibility – Green Prosperity protects the interest of our partnerships", text:"Because GP is funding the China JV, protecting the IP of our partners is critical. It's also in our own best interest to defend the value of the partnership. It is for this reason we have engaged and partnered with the world class law firm of Baker Botts (www.bakerbotts.com) to help protect the interest of our partnerships and our stakeholders in China."},
    {title: "The Green Prosperity Team Commercialization and Investment", text:"Green Prosperity has both a go-to-market team and an investment team with two individual two funds. One fund is a corporate venture fund and the other is in partnership with the Shenzhen regional government. This allows us the flexibility to tailor the needs of the company with the needs the right capital to maximize value.We know China. Our exclusive focus is China. We are not domain constrained but rather process and value constrained as it relates to China."},
    {title: "The Resources and Network<br/> to Take Off in China", text: "In addition to capital, we also have to right working relationships that we can put to work and leverage (corporate, enterprise, government, corporate, customers and channels). We don’t partner with a company unless we have a high confidence that we have to relationships necessary to be successful and we illustrate our confidence by investing strategic capital to unlock that value."},
    {title: "Our Target Audience", text:'Our business model is built with the focus on timing, scaling and team building. We are not about quantity of deal flow but rather about quality of partnerships.<br/>We focus on these core questions:<br/>-   With the right “product market fit,” Is there market demand and opportunity for this product & service in China?<br/>-   Are they ready to hit "scale?"<br/>-   As any partnership would involve protecting the core value for all involved, is it defensible for China?<br/>-   Does Green Prosperity have the right relationships necessary to be successful?'}
  ]
  $("#model .introduce .box h3").html(list[index].title);    
  $("#model .introduce .box p").html(list[index].text);  
  // $("#model .introduce").css("display", "flex").addClass("zoomInUp animated"); 
  $("#model .introduce").css({"zIndex": "1200"}).addClass("on"); 
  $("#model .introduce .box .close").on("click", function(e){
    e.stopPropagation();
    $("#model .introduce").removeClass("on").css({"zIndex": "150"});
    // $("#model .introduce").addClass("bounceOut animated");
    // setTimeout(function(){$("#model .introduce").removeClass("bounceOut animated on").css({"zIndex": "150"});}, 500);
  });
}
     // $("#model .introduce .box .close").on("click", function(){
     //   $("#model .introduce").addClass("bounceOut animated");
     //   setTimeout(function(){$("#model .introduce").removeClass("bounceOut animated").hide();}, 1000);
     // });
     // function starBackInit() {
     //   var stars = 800;
     //   var $stars = $('.stars');
     //   var r = 800;
     //   for (var i = 0; i < stars; i++) {
     //       if (window.CP.shouldStopExecution(1)) {
     //           break;
     //       }
     //       var $star = $('<div/>').addClass('star');
     //       $stars.append($star);
     //   }
     //   window.CP.exitedLoop(1);
     //   $('.star').each(function () {
     //       var cur = $(this);
     //       var s = 0.2 + Math.random() * 1;
     //       var curR = r + Math.random() * 300;
     //       cur.css({
     //           transformOrigin: '0 0 ' + curR + 'px',
     //           transform: ' translate3d(0,0,-' + curR + 'px) rotateY(' + Math.random() * 360 + 'deg) rotateX(' + Math.random() * -50 + 'deg) scale( ' + s + ',' + s + ')'
     //       });
     //   });
     // }
     // starBackInit();
     function particleInit() {
       var config = {
        vx: 4,  //小球x轴速度,正为右，负为左
        vy: 4,  //小球y轴速度
        height: 5,  //小球高宽，其实为正方形，所以不宜太大
        width: 5,
        count: 200,   //点个数
        color: "121, 162, 185",   //点颜色
        stroke: "130,255,255",    //线条颜色
        dist: 16000,   //点吸附距离
        e_dist: 20000,  //鼠标吸附加速距离
        max_conn: 10  //点到点最大连接数
      }
      //调用
      CanvasParticle(config);
     }
     particleInit();
   }
  //团队
  if ($("#team").length != 0) {
    $("#team .con .con-box .close").on("click", function(){
      $("#team .con").fadeOut(100);
      $("#team ul li").removeClass("on");
    });
    // var userAgent = navigator.userAgent; //取得浏览器的userAgent字符串
    // if (userAgent.indexOf("Edge") != -1 || userAgent.indexOf("Trident") != -1) {
    //   $("#team .con-box .left p").slimScroll({
    //     width: '440px', //可滚动区域宽度
    //     //height: 'calc(100vh - 147px)', //可滚动区域高度
    //     height: '370px', //可滚动区域高度
    //     size: '4px', //组件宽度
    //     color: '#3AA4FF', //滚动条颜色
    //     position: 'right', //组件位置：left/right
    //     distance: '0', //组件与侧边之间的距离
    //     start: 'top', //默认滚动位置：top/bottom
    //     opacity: 1, //滚动条透明度
    //     alwaysVisible: true, //是否 始终显示组件
    //     disableFadeOut: false, //是否 鼠标经过可滚动区域时显示组件，离开时隐藏组件
    //     railVisible: true, //是否 显示轨道
    //     railColor: '#B9B9B9', //轨道颜色
    //     railOpacity: 1, //轨道透明度
    //     railDraggable: true, //是否 滚动条可拖动
    //     railClass: 'slimScrollRail', //轨道div类名 
    //     barClass: 'slimScrollBar', //滚动条div类名
    //     wrapperClass: 'slimScrollDiv', //外包div类名
    //     allowPageScroll: true, //是否 使用滚轮到达顶端/底端时，滚动窗口
    //     wheelStep: 80, //滚轮滚动量
    //     touchScrollStep: 200, //滚动量当用户使用手势
    //     borderRadius: '7px', //滚动条圆角
    //     railBorderRadius: '7px' //轨道圆角
    //   });
    // }
  }
  //联系我们
  if ($("#contact").length != 0) {
    $("#contact .content-top .background dd").each(function(index, item){
      var _self = $(this);
      setTimeout(function(){
        _self.addClass("ons");
      }, 800 * index);
    });
    setTimeout(function(){$("#contact .content-top").addClass("on");}, 3200);
    setTimeout(function(){$("#contact .content-top").addClass("ons");}, 5200);
    var curIndex = -1;
    var officeList = [
      {name: "Macau Office", add: "Add: Rua De Seng Tou UNO.357, Sala G,Bloco 23 Edif. Nova Taipa Garden-Orquidea 22 Aadar, Tipa, Macau", tel: "Tel：28855503", email: "E-mail: inquiry@greenprosperitygroup.com"},
      {name: "Shenzhen Office (China HQ)", add: "Add:5-212 E-Hub, Qianhai, Shenzhen", tel: "Tel：+86 0755- 26604489", email: "E-mail: inquiry@greenprosperitygroup.com"},
      {name: "Hengqin Office", add: "Add:111-114,Bulding 19 B,Inno Valley HQ, Hengqin, China", tel: "Tel：+86 0756-6969113", email: "E-mail: inquiry@greenprosperitygroup.com"},
      {name: "Silicon Valley Office", add: "Add:400 Concar Dr, San Mateo, CA 94402", tel: "Tel: 650-520-7086", email: "E-mail: michael@volponellc.com"},
      {name: "Vienna Office", add: "Add: Handelskai 94–96, 1200 Wien, Austria ", tel: "Tel: +43 664 8219770", email: "E-mail: Karl@greenprosperitygroup.com"},
    ]
    $("#contact .content-top ul li").on("click", function(){
      if ($(this).index() == 5) { 
        //$("#information").css("display", "flex").addClass("bounceInUp animated");
        return;
      }
      if (curIndex == $(this).index()) {return;}
      if (curIndex != -1) {
        curIndex = $(this).index();
        $("#contact .background dd.on").removeClass("on");
        setTimeout(function(){$("#contact .background dd:eq("+curIndex+")").addClass("on")}, 1000);
      } else {
        $("#contact .background dd:eq("+$(this).index()+")").addClass("on");
        curIndex = $(this).index();
      }
      var _str = '<h3>'+officeList[curIndex].name+'</h3>'+
                 '<p>'+officeList[curIndex].add+'</p>'+   
                 '<p>'+officeList[curIndex].tel+'</p>'+ 
                 '<p>'+officeList[curIndex].email+'</p>';
      $("#contact .content-bottom .left").html(_str);     
      $("#contact .content-bottom .right img").attr("src", '../images/contact_0'+curIndex+'.jpg');      
      setTimeout(function(){
        $("html, body").animate({"scrollTop": 2000}, 800);
      }, 2500);
    });
    
  }
  //留资页
  if ($("#cooperate").length != 0) {
    $("#information .box .left h4").on("click", function(e){
      e.stopPropagation();
      if ($("#information .select").hasClass("on")) {
        $("#information .select").removeClass("on");
        setTimeout(function(){$("#information .select").hide();}, 500);
      } else {
        $("#information .select").fadeIn(0, function(){$("#information .select").addClass("on")});
      }
    }); 
    $("#information .select dd").on("click", function(){
      $(this).addClass("cur").siblings().removeClass("cur");
      $("#information .box .selects h4").html($(this).html()).addClass("on");
      $("#information .select").removeClass("on");
      setTimeout(function(){$("#information .select").hide();}, 500);
    });
    $("#information").on("click", function(){
      $("#information .select").removeClass("on");
      setTimeout(function(){$("#information .select").hide();}, 500);
    });
    $("#information .close").on("click", function(){
      $("#information").addClass("bounceOutDown animated").removeClass("bounceInUp");
      setTimeout(function(){$("#information").hide().removeClass("bounceOutDown animated");}, 1000);
    });
    var form = new FormData();
    $('#file').on("change", function(){
      if (file.files[0].size / 1024 / 1024 > 20) {
        document.getElementById('file').value = '';
        showToast("single file 20M", 3000);
        return;
      }
      $("#information .input.file h4").html(getFileName($('#file').val())).addClass("on");
      form.append('file', file.files[0]);
      function getFileName(file){
        var pos=file.lastIndexOf("\\");
        return file.substring(pos+1);
      }
    });
    $("#btn").on("click", function(){
      if ($("#btn").hasClass("disabled")) {return;}
      if (!$("#name").val()) {
        showToast("Please enter your name");
        return;
      } else if (!$("#mobile").val()) {
        showToast("Please enter your mobile phone number.");
        return;
      } else if (!$("#email").val()) {
        showToast("Please enter your email.");
        return;
      } else if (!$("#country").val()) {
        showToast("Please enter your Country/region.");
        return;
      } else if (!$("#projectName").val()) {
        showToast("Please enter your mobile phone project name.");
        return;
      } else if ($("#information .select dd.cur").length == 0) {
        showToast("Please select your Category.");
        return;
      }
      //点击提交留资信息 
      $("#btn").addClass("disabled");
      if ($('#file').val()) {
        $.ajax({
          url: REQUESTURL + '/api/lzpc/file_post',
          data: form,
          type:'post',
          contentType:false,
          processData:false,
          success: function(res){
            submit(res.data.image);
          },
          error: function() {
            showToast("Submit fail");
            $("#btn").removeClass("disabled");
          }
        })
      } else {
        submit();
      }
      function submit(file) {
        var _data = {
          name: $("#name").val(),
          mobile: $("#mobile").val(),
          email: $("#email").val(),
          country: $("#country").val(),
          project_name: $("#projectName").val(),
          category: $("#information .select dd.cur").html(),
        }
        if (file) {_data.file = file;}
        $.post(REQUESTURL + '/api/lzpc/form_post', _data, function(res){
          console.log(res);
          var _data = res.data;
          if (res.errcode == 0) {
            showToast("Submit successfully");
            $("#btn").removeClass("disabled");
            $("#information input").val('');
            $("#information .input.selects h4").html("click on the select field").removeClass("on");
            $("#information .input.file h4").html("Select the file").removeClass("on");
            document.getElementById('file').value = '';
          } else {
            showToast("Submit fail");
            $("#btn").removeClass("disabled");
          }
        });
      }
    }); 
  }
  //project
  if ($("#project").length != 0) {
    $("body,html").css("overflowY", "hidden");
    // $("#slimscroll").slimScroll({
    //   width: 'auto', //可滚动区域宽度
    //   //height: 'calc(100vh - 147px)', //可滚动区域高度
    //   height: '100vh', //可滚动区域高度
    //   size: '2px', //组件宽度
    //   color: '#272822', //滚动条颜色
    //   position: 'right', //组件位置：left/right
    //   distance: '13px', //组件与侧边之间的距离
    //   start: 'top', //默认滚动位置：top/bottom
    //   opacity: 1, //滚动条透明度
    //   alwaysVisible: true, //是否 始终显示组件
    //   disableFadeOut: false, //是否 鼠标经过可滚动区域时显示组件，离开时隐藏组件
    //   railVisible: true, //是否 显示轨道
    //   railColor: '#B9B9B9', //轨道颜色
    //   railOpacity: 1, //轨道透明度
    //   railDraggable: true, //是否 滚动条可拖动
    //   railClass: 'slimScrollRail', //轨道div类名 
    //   barClass: 'slimScrollBar', //滚动条div类名
    //   wrapperClass: 'slimScrollDiv', //外包div类名
    //   allowPageScroll: true, //是否 使用滚轮到达顶端/底端时，滚动窗口
    //   wheelStep: 60, //滚轮滚动量
    //   touchScrollStep: 200, //滚动量当用户使用手势
    //   borderRadius: '7px', //滚动条圆角
    //   railBorderRadius: '7px' //轨道圆角
    // });
    // $("#iframes").attr("src", "./team.html");
    watchScroll();
    $("#slimscroll").on("scroll", function(e){
      //console.log(e.originalEvent);
      //e.originalEvent.wheelDelta.preventDefault();
      watchScroll();
    });
    function watchScroll() {
      var _h = $("#slimscroll").height();
      var _s = $("#slimscroll").scrollTop();
      if (_s >=100 && _s < 2000) {
        $("#head, #footer").removeClass("on");
        $("#project .content").addClass("on");
      } else {
        if (_s < 2000) {
          $("#project .content").removeClass("on");
        }
        $("#head, #footer").addClass("on");
      }
      $("#project .content dd").each(function(index, item){
        var _t = $(this)[0].offsetTop + 300;
        if (index < 4) {
          _t += 400;
        } else if (index == 5 || index == 6 || index == 7) {
          _t += 200;
        }
        if (_s + _h >= _t) {
          var _this = $(this);
          $(this).addClass("on");
          // $(this).find("h3").addClass("flipInX animated");
          setTimeout(function(){_this.addClass("ons");}, 2000);
        }
      });
    }
  }
  /*消息提示弹框*/       
  function showToast(text, duration, icon, callback) {
    var _box = '<div class="showModal_box">'+text+'</div>';
    if (icon) {
      var _iconType = 'icon-weibiaoti14';
      if (icon == "loading") { _iconType = 'icon-jiazaizhong'; }
      _box = '<div class="showModalBox iconBox">'+  
                '<i class="iconfont '+_iconType+'"></i>'+
               '<p>'+text+'</p>'+ 
              '</div>';    
    }
    var _str = '<div id="showModal">'+ _box +'</div>';
    $("body").append(_str);
    if (icon && duration === "none") {return;}
    setTimeout(function(){$("#showModal").css("zIndex", 9999).fadeOut(400,function(){$("#showModal").remove();if(callback){callback();}});}, duration ? duration : 1500);        
  }
})
})