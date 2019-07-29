require.config({
  paths:{
    "jquery":"./jquery-3.3.1",
    "wow": "./wow.min",
    "typewriter": "./typewriter",
    "slimscroll": "./jquery.slimscroll",
    "Swiper": "./swiper.min",
    "text":"./text",
    "head":"../common/head.html",
    "footer":"../common/footer.html",
    "heads":"../common/heads.html",
    "tabbar":"../common/tabbar.html",
    "tabbar2":"../common/tabbar2.html",
    "tabbar3":"../common/tabbar3.html"
  }
})
require(['jquery', 'wow', 'typewriter', 'slimscroll', 'Swiper', 'text', 'text!head', 'text!footer', 'text!heads', 'text!tabbar', 'text!tabbar2', 'text!tabbar3'], function(jquery, wow, typewriter, slimscroll, Swiper, text, head, footer, heads, tabbar, tabbar2, tabbar3){
$(function(){
  var REQUESTURL = 'http://admin.greenprosperitygroup.cn/applet/public/index.php';
  //进入页面  
  new WOW().init();
  if ($("#home").length != 0) {
    $("#head").html(heads).addClass("on");
  } else {
    $("#head").html(head).addClass("on"); 
  }
  $("#footer").html(footer);
  $("#tabbar").html(tabbar); 
  navCurrent();
  $("#head ul li").hover(function(){
    $(this).find("dl").stop().slideDown(200);
  }, function(){
    $(this).find("dl").stop().slideUp(200);
  });
  function isuserAgent(){
    //Edge
    var userAgent = navigator.userAgent; //取得浏览器的userAgent字符串
    if (userAgent.indexOf("Edge") != -1 || userAgent.indexOf("Trident") != -1) {
      $("#video").css("transform", "scale(1.3)");
    } else {
      
    }
  }
  isuserAgent();
  //首页
  if ($("#home").length != 0) {
    setTimeout(function(){
      $("#home .content h2").addClass("bounceInRight animated");
    }, 500);
  }
  //联系我们-全球办公室
  
  //关于
  if ($("#about").length != 0) {
    $.get(REQUESTURL + '/api/lzpc/aboutchj_run', function(res){
      console.log(res)
      if (res.errcode == 0) {
        var _data = res.data;
        var _str = '';
        for (var i = 0; i < _data.length; i++) {
          _str += '<dd><span>'+_data[i].title+'</span></dd>';      
        }
        $("#tabbar dl").html(_str);
        var _str1 = '<div class="title">'+_data[0].title+'</div>'+
          '<div class="text">'+_data[0].description+'</div>';
        var _str2 = '<img src="'+_data[1].img1+'" alt="" />';
        var _str3 = '<div><h3>'+_data[2].title+'</h3><p>'+_data[2].description.replace(/#/g, '<br/>')+'</p></div>';  
        var _str4 = '<div><h3>'+_data[3].title+'</h3><p>'+_data[3].description.replace(/#/g, '<br/>')+'</p></div>';  
        // var _str4 = '<div class="box flex"><div class="left flex-cen" style="background-image:url('+_data[3].img1+')"></div><div class="right" style="background-image:url('+_data[3].img2+')"></div></div>';
        var _str5 = '<div><h3>'+_data[4].title+'</h3><p><b>'+_data[4].description.replace(/#/g, '</b><br/>')+'</p><p><b>'+_data[4].description_two.replace(/#/g, '</b><br/>')+'</p><div class="img"><img src="'+_data[4].img3+'" alt="" /></div></div>';
        $("#about .content ul li.li1").html(_str1);
        $("#about .content ul li.li6").html(_str2);
        $("#about .content ul li.li3 .left").html(_str3);
        $("#about .content ul li.li4 .left").html(_str4);
        $("#about .content ul li.li7 .left").html(_str5);
      }
    });
    $("#head ul li span").on("click", function(){
      $("#tabbar").addClass("on");
      $("#tabbar .back").addClass("on");
    });
    setTabbar();
    $("#tabbar .back").trigger("click");
    var _aboutIndex = -1;
    $("#tabbar dl").on("click", "dd", function(){
      var _self = $(this);
      if ($(this).index() == 1 || $(this).index() == 2 || $(this).index() == 3 || $(this).index() == 4) {
        $("#head").addClass("white");
      } else {
        $("#head").removeClass("white");
      }
      if ($(this).index() == 1) {
        $("#tabbar .back").addClass("ons");
      } else {
        $("#tabbar .back").removeClass("ons");
      }
      $("#tabbar").removeClass("on");
      setTimeout(function(){$("#tabbar .back").removeClass("on");}, 500);
      $(this).addClass("cur").siblings().removeClass("cur");
      $("#video").hide();
      // _aboutIndex = _self.index();
      // $("#about .content li:eq("+_aboutIndex+")").show().addClass("bounceInUp animated");
      // setTimeout(function(){
      //   $("#about .content li:eq("+_aboutIndex+")").siblings().hide().removeClass("bounceInUp animated");
      // }, 500);
      if (_aboutIndex != -1) {
        $("#about .content li:eq("+_aboutIndex+")").removeClass("bounceInUp").addClass("bounceOut");
        setTimeout(function(){
          $("#about .content li:eq("+_aboutIndex+")").hide().removeClass("bounceOut animated");
          _aboutIndex = _self.index();
          $("#about .content li:eq("+_aboutIndex+")").show().addClass("bounceInUp animated");
        }, 500);
      } else {
        _aboutIndex = _self.index();
        $("#about .content li:eq("+_aboutIndex+")").show().addClass("bounceInUp animated");
      }
    });
  }
  //项目展示
  if ($("#project").length != 0) {
    $.get(REQUESTURL + '/api/lzpc/about', function(res){
        console.log(res)
      if (res.errcode == 0) {
        var _data = res.data;
        var _str = '';
        var _str2 = '';
        for (var i = 0; i < _data.length; i++) {
          _str += '<li><div class="img">'+
                    '<div class="top"><div class="box"></div><div class="img">'+_data[i].title+'</div></div>'+
                    '<div class="bottom"><div class="box"></div></div>'+
                  '</li>';
          var _p = _data[i].description.replace(/#/g, '<br/>');        
          _str2 += '<dd>'+
                      '<div class="text flex-cen"><div class="close"></div><div>'+
                        '<h3>'+_data[i].title+'</h3>'+
                        '<p>'+_p+'</p>'+
                      '</div></div>'+
                    '</dd>';        
        }
        $("#project .con ul").html(_str);
        $("#project .con dl").html(_str2);
        setTimeout(function(){
          $("#project .con").addClass("on");
        }, 500);
      }
    });
    $("#project .con").on("click", "li", function(){
      $("#project .con dd:eq("+$(this).index()+")").show();
      $("#project .con dd .text").addClass("flipInY animated");
    });
    $("#project .con").on("click", "dd .close", function(){
      var _selfP = $(this).parents('dd');
      $(this).parents('dd').find(".text").removeClass("flipInY animated").addClass("animated bounceOut");
      setTimeout(function(){
        _selfP.hide();
        _selfP.find(".text").removeClass("bounceOut animated");
      }, 500);
    });
  }
  //集团基金
  if ($("#fund").length != 0) {
    $("#fund .content h2").addClass("bounceInRight animated");
  }
  //绿展生态
  if ($("#ecology").length != 0) {
    $.get(REQUESTURL + '/api/lzpc/lzstchj_run', function(res){
        console.log(res)
      if (res.errcode == 0) {
        var _data = res.data;
        var _str = '';
        var _str2 = '';
        for (var i = 0; i < _data.length; i++) {
          _str += '<dd>'+_data[i].title+'</dd>';
          var _p = _data[i].description.replace(/#/g, '<br/>');        
          _str2 += '<div class="title-box flex-cen"><div class="close"></div><span>'+_p+'</span></div>';        
        }
        $("#ecology .con dl").html(_str);
        $("#ecology .title").html(_str2);
      }
    });
    $("#ecology .con .box").addClass("on");
    $("#ecology .con").on("click", "dd", function(){
      $("#ecology .title").css("display", "flex");
      $("#ecology .title .title-box:eq("+$(this).index()+")").show().siblings().hide();
      setTimeout(function(){$("#ecology .title").addClass("on");}, 10);
    });
    $("#ecology").on("click", ".close", function(){
      $("#ecology .title").removeClass("on");
      setTimeout(function(){$("#ecology .title").hide();}, 500);
    });
  }
  //新闻侧边导航
  function setSidebar(isOpen, curIndex, callback) {
    $("#tabbar").html(tabbar2);
    $.post(REQUESTURL + '/api/lzpc/type', function(res){
      var _data = res.data;
      if (res.errcode == 0) {
        if (callback) { callback(_data[0].id); return;}
        var _str = '';
        for (var i = 0; i < _data.length; i++) {
          var _href = "../pages/newslist.html";
          if (_data[i].id == 3) {_href = "../pages/newslists.html";}
          _str += '<dd><span><a href="'+_href+'?id='+_data[i].id+'">'+_data[i].name+'</a></span></dd>'
        }
        $("#tabbar dl").html(_str);
        if (curIndex) {
          $("#tabbar dl dd:eq("+curIndex+")").addClass("cur");
        }
        if (isOpen) { setTimeout(function(){$("#tabbar,#tabbar .back").addClass("on");}, 1000); }
      }
    });
    setTabbar();
  }
  //新闻
  if ($("#news").length != 0) {
    setSidebar(true, false, function(res){
      window.location.href = '../pages/newslist.html?id=' + res;
    });
  }
  //查看更多新闻列表
  if ($("#newlistmore").length != 0) {
    setSidebar(false);
    var _page = 1;
    function getNewListmore() {
      $.post(REQUESTURL + '/api/lzpc/newlist', {type: getUrlParameter("id"), page: _page, pagesize: 10}, function(res){
        var _data = res.data.list;
        console.log(_data);
        isDis(_data);
        if (_data.length == 0) return;
        if (res.errcode == 0) {
          var _str = '';
          for (var i = 0; i < _data.length; i++) {
            _str += '<dd><a href="./newsdetails.html?id='+_data[i].id+'&type='+getUrlParameter("id")+'">'+
                      '<div class="img"><div style="background-image:url('+_data[i].image+')"></div></div>'+
                      '<div class="text">'+
                        '<h3>'+_data[i].title+'</h3>'+
                        '<p>'+_data[i].about+'</p>'+
                        '<h4>'+_data[i].create_time+'</h4>'+
                      '</div>'+
                    '</a></dd>';
          }
          $("#newlistmore .con dl").append(_str);
        }
      });
    }
    function isDis(data) {
      if (data.length < 10) {
        $("#newlistmore .con .more").html("没有更多了~").addClass("dis");
      } 
    }
    getNewListmore();
    $("#newlistmore .more").on("click", function() {
      if ($(this).hasClass("dis")) return;
      _page ++;
      getNewListmore();
    });
  }
  //新闻列表
  if ($("#newslist").length != 0) {
    if (getUrlParameter("id") == 1) {
      setSidebar(true, "0");
    } else if (getUrlParameter("id") == 2) {
      setSidebar(false, "1");
    }
    $("#newslist .con .con-top .right a").attr("href", "./newlistmore.html?id=" + getUrlParameter("id"));
    var _page = 1;
    function getNewList() {
      $.post(REQUESTURL + '/api/lzpc/newlist', {type: getUrlParameter("id"), page: _page, pagesize: 6}, function(res){
        var _data = res.data.list;
        isDis(_data);
        if (_data.length == 0) return;
        if (res.errcode == 0) {
          var _str = '';
          for (var i = 0; i < _data.length; i++) {
            var _media = '新闻';
            if (getUrlParameter("id") == 2) { _media = _data[i].media; }
            _str += '<dd><a href="./newsdetails.html?id='+_data[i].id+'&type='+getUrlParameter("id")+'">'+
                       '<h4>'+_media+' '+_data[i].create_time+'</h4>'+
                       '<p>'+_data[i].title+'</p>'+
                    '</a></dd>';
          }
          $("#newslist .con .con-top .right dl").html(_str);
        }
      });
    }
    function isDis(data) {
      if (_page == 1) {
        $("#newslist .con .con-top .right .btns .btn-prev").addClass("dis");
      } else {
        $("#newslist .con .con-top .right .btns .btn-prev").removeClass("dis");
      }
      if (data.length < 6) {
        $("#newslist .con .con-top .right .btns .btn-next").addClass("dis");
      } else {
        $("#newslist .con .con-top .right .btns .btn-next").removeClass("dis");
      }
    }
    getNewList();
    $("#newslist .con .con-top .right .btns>div").on("click", function(){
      if ($(this).hasClass("dis")) return;
      if ($(this).data("type") == 0) {
        _page --;
      } else {
        _page ++;
      }
      getNewList();
    });
    function getSwiperImg() {
      $.post(REQUESTURL + '/api/lzpc/image', {type: getUrlParameter("id")}, function(res){
        var _data = res.data;
        if (_data.length == 0) return;
        if (res.errcode == 0) {
          var _str = '';
          var _text = '';
          for (var i = 0; i < _data.length; i++) {
            if (_data[i].about) {
              _text = '<p>' + _data[i].about + '</p>';
            }
            _str += '<li class="swiper-slide" style="background-image:url('+_data[i].image+')"><a href="./newsdetails.html?id='+_data[i].new_id+'&type='+getUrlParameter("id")+'"></a>'+_text+'</li>'
          }
          $("#newslist .con .con-top .left ul").html(_str);
          swiperInit();
        }
      });
    }
    getSwiperImg();  
    function getRecommend() {
      $.post(REQUESTURL + '/api/lzpc/hotnew', {type: getUrlParameter("id")}, function(res){
        var _data = res.data;
        if (_data.length == 0) return;
        if (res.errcode == 0) {
          var _str = '';
          for (var i = 0; i < _data.length; i++) {
            _str += '<li><a href="./newsdetails.html?id='+_data[i].id+'&type='+getUrlParameter("id")+'>'+_data[i].title+'</a></li>'
          }
          $("#newslist .con-bottom ul").html(_str);
          cyclicRolling();
        }
      });
    }
    getRecommend();
    function cyclicRolling() {
      var s_l=0;
      var autoUl=null;
      var ul_w=$("#newslist .con-bottom li").length*$("#newslist .con-bottom li").outerWidth(true);
      $("#newslist .con-bottom ul").width(ul_w*2);
      $("#newslist .con-bottom ul").append($("#newslist .con-bottom li").clone());
      function autoLeft(){
        s_l>ul_w?s_l=0:s_l++;
        $("#newslist .con-bottom .box").scrollLeft(s_l);    
      }
      autoUl=setInterval(autoLeft,20);
      $("#newslist .con-bottom .box").hover(function(){
        clearInterval(autoUl);
      },function(){autoUl=setInterval(autoLeft,20);});
    } 
  }
  function swiperInit() {
      var swiperNews = new Swiper('.swiper-container', {
        spaceBetween: 0,
        centeredSlides: true,
        observer:true, 
        observeParents:true,
        autoplay: {
          delay: 2500,
          disableOnInteraction: false,
        },
        pagination: {
          el: '.swiper-pagination',
          clickable: true,
        },
        navigation: {
          nextEl: '.swiper-button-next',
          prevEl: '.swiper-button-prev',
        },
      });
    }
  //团队发展新闻列表
  if ($("#newslists").length != 0) {
    setSidebar(false, 2);
    var _page = 1;
    function getNewLists() {
      $.post(REQUESTURL + '/api/lzpc/newlist', {type: getUrlParameter("id"), page: _page, pagesize: 6}, function(res){
        var _data = res.data.list;
        console.log(_data);
        isDis(_data);
        if (_data.length == 0) return;
        if (res.errcode == 0) {
          var _str = '';
          for (var i = 0; i < _data.length; i++) {
            _str += '<li><a href="./newsdetails.html?id='+_data[i].id+'&type=3">'+
                     '<div class="img"><div style="background-image:url('+_data[i].image+')"></div></div>'+
                      '<div class="text">'+
                      '<h3>'+_data[i].title+'</h3>'+
                      '<p>'+_data[i].about+'</p>'+
                    '</div>'+
                  '</a></li>';
          }
          $("#newslists .con ul").append(_str);
        }
      });
    }
    function isDis(data) {
      if (data.length < 6) {
        $("#newslists .con .more").html("没有更多了~").addClass("dis");
      } 
    }
    getNewLists();
    $("#newslists .con .more").on("click", function() {
      if ($(this).hasClass("dis")) return;
      _page ++;
      getNewLists();
    });
  } 
  //新闻详情
  if ($("#newsdetails").length != 0) {
    setSidebar(false);
    function getNewsdetails() {
      $.post(REQUESTURL + '/api/lzpc/newcontent', {id: getUrlParameter("id"), type: getUrlParameter("type")}, function(res){
        if (res.errcode == 0) {
          $("#newsdetails .content h2").html(res.data.title);
          $("#newsdetails .content h3").html(res.data.create_time);
          $("#newsdetails .content .box").html(res.data.content);
          // $("video").attr("poster", "http://game.flyh5.cn/resources/game/wechat/szq/lvzhanc/images/poster.jpg");
          $("video").attr("poster", res.data.mv_img);
          // var _videos = $("video");
          // for (var i = 0; i < _videos.length; i++) {
          //   $(_videos[i]).attr("src", "http://game.flyh5.cn" + $(_videos[i]).attr("src"));
          // }
        }
      });
    }
    getNewsdetails();
    // $("#newsdetails .back").on("click", function(){
    //   window.history.go(-1);
    // });
  }
  //团队发展新闻详情
  if ($("#newsdetailss").length != 0) {
    setSidebar(false, 2);
    function getNewsdetails() {
      $.post(REQUESTURL + '/api/lzpc/newcontent', {id: getUrlParameter("id"), type: 3}, function(res){
        if (res.errcode == 0) {
          var _data = res.data.img
          console.log(_data)
          var _str = '';
          var _text = '';
          for (var i = 0; i < _data.length; i++) {
            if (_data[i].about) {
              _text = '<p>' + _data[i].about + '</p>';
            }
            _str += '<li class="swiper-slide" style="background-image:url('+_data[i]+')"><a href="./newsdetails.html?id='+_data[i].new_id+'"></a>'+_text+'</li>'
          }
          $("#newsdetailss .con .con-top .left ul").html(_str);
          swiperInit();
        }
      });
    }
    getNewsdetails();
    $("#newsdetails .back").on("click", function(){
      window.history.go(-1);
    });
  }
  //加入我们
  if ($("#join").length != 0) {
    $("#tabbar").html(tabbar3);
    $.post(REQUESTURL + '/api/lzpc/aboutlist', function(res){
      var _data = res.data;
      if (res.errcode == 0) {
        var _str = '';
        for (var i = 0; i < _data.length; i++) {
          _str += '<dd><span><a href="javascript:;" data-id="'+_data[i].id+'">'+_data[i].title+'</a></span></dd>'
        }
        $("#tabbar dl").html(_str);
        setTimeout(function(){$("#tabbar,#tabbar .back").addClass("on");}, 1000);
      }
    });
    //$("#tabbar,#tabbar .back").addClass("on");
    setTabbar();
    $("#tabbar").on("click", "dl dd", function(){
      var _self = this;
      $.post(REQUESTURL + '/api/lzpc/aboutcat', {id: $(this).find("a").data("id")}, function(res){
        if (res.errcode == 0) {
          var _data = res.data[0];
          $(_self).addClass("cur").siblings().removeClass("cur");
          $("#join h3").html(_data.title);
          $("#join .duty p").html(_data.content);
          $("#join .requirement p").html(_data.contents);
          $("#tabbar").removeClass("on");
          $("#join .con").addClass("on");
          $("#join h6").fadeOut();
        }
      }); 
    });
    $("#join .con .close").on("click", function(){
      $("#join .con").removeClass("on");
      $("#tabbar,#tabbar .back").addClass("on");
      $("#join h6").fadeIn();
    });
  }
  function setTabbar() {
    $("#tabbar .back").on("mouseleave", function(e){
      e.stopPropagation();
    });
    $("#tabbar .back").on("mouseenter", function(){
      if ($("#newsdetails").length != 0 || $("#newlistmore").length != 0 || $("#newslists").length != 0) {return;}
      if (!$(this).hasClass("on")) {
        $("#tabbar").addClass("on");
        $(this).addClass("on");
      }
    });
    $("#tabbar").on("mouseleave", function(){
      if ($(this).hasClass("on")) {
        $("#tabbar").removeClass("on");
        setTimeout(function(){$("#tabbar .back").removeClass("on");}, 500);
      }
    });
    $("#tabbar .back").on("click", function(){
      if ($("#newsdetails").length != 0 || $("#newlistmore").length != 0 || $("#newslists").length != 0) {
        window.history.go(-1);
        return;
      }
      var _self = $(this)
      if ($(this).hasClass("on")) {
        $("#tabbar").removeClass("on");
        setTimeout(function(){_self.removeClass("on");}, 500);
      } else {
        $("#tabbar").addClass("on");
        $(this).addClass("on");
      }
    });
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
    $.get(REQUESTURL + '/api/lzpc/getOffo', function(res){
    // $.get('http://game.flyh5.cn/game/wuhui/h5/applet/public/api/lzpc/getOffo', function(res){
      console.log("办公室",res);
      if (res.errcode === 0) {
        var officeList = [];
        var lis = '';
        for (x in res.data) {
          $("#contact .content-top .background dd:eq("+x+")").css("background-image", 'url('+res.data[x].offo_img+')');
          let _add = res.data[x].content;
          officeList.push({name: res.data[x].offo_title, add: _add.slice(0, _add.indexOf('电话')).trim(), tel: _add.slice(_add.indexOf('电话'), _add.indexOf('邮箱')).trim(), email: _add.slice(_add.indexOf('邮箱')).trim(), mapImg: res.data[x].offo_ditu})
          lis += '<li>'+res.data[x].offo_title+'</li>'
        }
        $("#contact .content-top ul").html(lis);
        var curIndex = -1;
        // var officeList = [
        //   {name: "澳门总部", add: "地址：氹仔成都街357号 濠景花园23座紫荆苑22楼G座", tel: "电话：28855503", email: "邮箱： inquiry@greenprosperitygroup.com"},
        //   {name: "中国内地总部", add: "地址：深圳市南山区前湾一路前海深港青年梦工场5栋212", tel: "电话：+86 0755- 26604489", email: "邮箱： inquiry@greenprosperitygroup.com"},
        //   {name: "横琴办事处", add: "地址：珠海市横琴新区横琴创意谷19栋B  111-114室", tel: "电话：+86 0756-6969113", email: "邮箱： inquiry@greenprosperitygroup.com"},
        //   {name: "硅谷办公室", add: "地址：美国加利福尼亚州圣马特奥县康卡街道400号", tel: "电话：650-520-7086", email: "邮箱：michael@volponellc.com"},
        //   {name: "维也纳办公室", add: "地址：奥地利维也纳汉德斯凯街道94-96号", tel: "电话：+43 664 8219770", email: "邮箱：Karl@greenprosperitygroup.com"},
        // ]
        domConcat(officeList[0]);
        $("#contact .content-top ul li").on("click", function(){
          if ($(this).index() == 5) {
            $("#information").css("display", "flex").addClass("bounceInUp animated");
            return;
          }
          if (curIndex == $(this).index()) {return;}
          if (curIndex != -1) {
            curIndex = $(this).index();
            $("#contact .background dd.on").removeClass("on");
            setTimeout(function(){$("#contact .background dd:eq("+curIndex+")").addClass("on")}, 1000);
          } else {
            curIndex = $(this).index();
            $("#contact .background dd:eq("+curIndex+")").addClass("on");
          }
          domConcat(officeList[curIndex]);  
          setTimeout(function(){
            $("html, body").animate({"scrollTop": $("#contact .content-top").height()}, 800);
          }, 2500);   
        });
        function domConcat(item) {
          var _str = '<h3>'+item.name+'</h3>'+
                   '<p>'+item.add+'</p>'+   
                   '<p>'+item.tel+'</p>'+ 
                   '<p>'+item.email+'</p>';
          $("#contact .content-bottom .left").html(_str);     
          $("#contact .content-bottom .right img").attr("src", item.mapImg); 
        }
      }
    });

  }
  //留资页
  if ($("#cooperate").length != 0) {
    //点击提交留资信息
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
        showToast("请输入您的姓名");
        return;
      } else if (!$("#mobile").val()) {
        showToast("请输入您的手机号码");
        return;
      } else if (!$("#email").val()) {
        showToast("请输入您的电子邮箱");
        return;
      } else if (!$("#country").val()) {
        showToast("请输入您的国家/地区");
        return;
      } else if (!$("#projectName").val()) {
        showToast("请输入您的项目名称");
        return;
      } else if ($("#information .select dd.cur").length == 0) {
        showToast("请选择您的领域");
        return;
      }
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
            showToast("提交失败，请稍后再试");
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
            showToast("提交成功");
            $("#btn").removeClass("disabled");
            $("#information input").val('');
            $("#information .input.selects h4").html("点击选择领域").removeClass("on");
            $("#information .input.file h4").html("选择文件").removeClass("on");
            document.getElementById('file').value = '';
          } else {
            showToast("提交失败，请稍后再试");
            $("#btn").removeClass("disabled");
          }
        });
      }
    });
  }
  /*序列帧图片dom加载*/
  function sequence_img(ele, imgUrl, imgNum){
    var _imgList = '';
    for (var i = 1; i <= imgNum; i++) {
      _imgList += '<img src="'+imgUrl+i+').png" alt="" />';
    }
    $(ele).append(_imgList);
  }  
  /*序列帧图片播放*/
  function sequence_play(ele, speed, callback, isClose){
    var i = 0;
    var _play = setInterval(function(){
      if (i < $(ele).length) {
        $(ele+":eq("+(i++)+")").show().siblings().hide();
      } else {
        //$(ele).hide();
        clearInterval(_play);
        if (callback) {callback()};
      }
    }, speed);
    if (isClose) {
      $(ele).parent().on("click", function(){
        clearInterval(_play);
        $(ele).hide().parent().hide().parents(".effect").hide();
      });
    }
  }
  //导航当前状态
  function navCurrent() {
    var url = window.location.href.toLowerCase() || '';
    var x = 0;
    if (url.indexOf("/about") > 0) {
      x = 1;
    } else if (url.indexOf("/ecology") > 0) {
      x = 2;
    } else if (url.indexOf("/project") > 0) {
      x = 3;
    } else if (url.indexOf("/news") > 0 || url.indexOf("/newlistmore") > 0) {
      x = 4;
    } else if (url.indexOf("/join") > 0) {
      x = 5;
    } else if (url.indexOf("/contact") > 0 || url.indexOf("/cooperate") > 0) {
      x = 6;
    }
    $("#head ul li:eq("+x+")").addClass("cur");
  }
  /*从地址栏获取传参*/
  function getUrlParameter(name) {
    var reg = new RegExp("(^|&)"+ name +"=([^&]*)(&|$)")
    var URL =  decodeURI(window.location.search)
    var r = URL.substr(1).match(reg)
    if(r!=null){
      //decodeURI() 函数可对 encodeURI() 函数编码过的 URI 进行解码
      return  decodeURI(r[2])
    };
    return null
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