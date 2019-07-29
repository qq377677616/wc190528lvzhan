/*页面默认js*/
import Vue from 'vue'
//VConsole配置
import VConsole from 'vconsole'
// if (process.env.NODE_ENV != 'development'){ const vConsole = new VConsole() }
//腾讯统计
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
       MtaH5.clickStat("moc");
       console.log("sss")
    }
  }, 1000);
}
statistics();