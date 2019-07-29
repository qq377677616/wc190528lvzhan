//根据rectange:{x:number,y:number,width:number,height:number}来设置样式
function styleWithRectange(element, rectange) {
    var b = document.body;
    //窗口宽
    var bW = b.clientWidth;
    //窗口高
    var bH = b.clientHeight;
    //白鹭宽
    var eW = window.egretWidth;
    //白鹭高
    var eH = window.egretHeight;
    //
    var xRange = 0;
    //
    var yRange = 0;
    //
    var widthRadio;
    //
    var heightRadio;
    //
    var style = element.style;
    style.left = style.top = "0px";
    //如果当前窗口是宽小于高
    if (bW < bH) {
        var w, h;
        //白鹭比例宽
        var sW;
        //白鹭比例高
        var sH;
        //如果白鹭是竖屏
        if (window.egretIsPortrait) {
            style.transform = "rotate(0deg)";
            sW = eW;
            sH = bH * eW / bW;
            //如果比例高大于白鹭高
            if (sH > eH) {
                //如果是填充模式
                if (window.isFillMode) sH = eH;
            }
            //如果比例高不大于白鹭高
            else {
                switch (window.egretAdaptTactics) {
                    //如果egretAdaptTactics模式为1
                    case 1:
                        //比例高小于白鹭高-100
                        if (sH < eH - 100) sH = eH - 100;
                        break;
                    //如果egretAdaptTactics模式为2
                    default:
                        yRange = (bH - bW / eW * eH) / 2;
                        break;
                }
            }
            widthRadio = bW / sW;
            heightRadio = bH / sH;
        }
        //如果白鹭是横屏
        else {
            style.transform = "rotate(" + (90 - window.orientation || 0) + "deg)";
            //白鹭比例宽
            var sW = eH;
            //白鹭比例高
            var sH = bH * eH / bW;
            //如果比例高大于白鹭高
            if (sH > eW) {
                //如果是填充模式
                if (window.isFillMode) sH = eW;
            }
            //如果比例高不大于白鹭高
            else {
                switch (window.egretAdaptTactics) {
                    //如果egretAdaptTactics模式为1
                    case 1:
                        //比例高小于白鹭高-100
                        if (sH < eW - 100) sH = eW - 100;
                        break;
                    //如果egretAdaptTactics模式为2
                    default:
                        yRange = (bH - bW / eH * eW) / 2;
                        break;
                }
            }
            widthRadio = bH / sH;
            heightRadio = bW / sW;
            xRange = bW - (rectange.y + rectange.height * 0.5) * heightRadio - (rectange.x + rectange.width * 0.5) * widthRadio;
            yRange += (rectange.x + rectange.width * 0.5) * widthRadio - (rectange.y + rectange.height * 0.5) * heightRadio;
        }
    }
    //如果当前窗口是宽大于高
    else {
        //窗口比例宽
        var rW;
        //窗口比例高
        var rH;
        //如果白鹭是竖屏
        if (window.egretIsPortrait) {
            style.transform = "rotate(" + (-window.orientation || -90) + "deg)";
            //如果窗口宽高比小于白鹭高宽比
            if (bW / bH < eH / eW) {
                rW = bW / eH * eW;
                rH = bW;
                widthRadio = rW / eW;
                heightRadio = rH / eH;
                xRange = (bH - rW) + (rectange.y - rectange.x) * widthRadio;
                yRange = bH + (bH - rW) / 2 - (rectange.y + rectange.x + rectange.height) * widthRadio;
            }
            //如果窗口宽高比不小于白鹭高宽比
            else {
                rW = bH;
                rH = bH / eW * eH;
                widthRadio = rW / eW;
                heightRadio = rH / eH;
                xRange = (bW - rH) / 2 + (rectange.y - rectange.x + rectange.height * 0.5 - rectange.width * 0.5) * widthRadio;
                yRange = bH - (rectange.y + rectange.x + rectange.height * 0.5 + rectange.width * 0.5) * widthRadio;
            }
        }
        //如果白鹭是横屏
        else {
            style.transform = "rotate(0deg)";
            //如果窗口宽高比小于白鹭宽高比
            if (bW / bH < eW / eH) {
                rW = bW;
                rH = bW / eW * eH;
                yRange = (bH - rH) / 2;
            }
            //如果窗口宽高比不小于白鹭宽高比
            else {
                rW = bH / eH * eW;
                rH = bH;
                xRange = (bW - rW) / 2;
            }
            widthRadio = rW / eW;
            heightRadio = rH / eH;
        }
    }
    style.left = (rectange.x * widthRadio + xRange) + "px";
    style.top = (rectange.y * heightRadio + yRange) + "px";
    style.width = rectange.width * widthRadio + "px";
    style.height = rectange.height * heightRadio + "px";
}
//发起GET请求
function doGET(url, param, callback, callbackObj, parseType) {
    var request = new XMLHttpRequest();
    request.open("GET", url + param, false);
    request.setRequestHeader("Content-type", "application/x-www-form-urlencoded");
    request.addEventListener("load", function () {
        if (request.status != 200) { console.warn("请求失败！请检查参数是否错误！"); return; }

        switch (parseType) {
            case 1:
                try { callback && callback.call(callbackObj, JSON.parse(request.response.trim())); }
                catch (e) { console.warn(e); callback && callback.call(callbackObj, request.response); }
                break;
            case 2:
                try { callback && callback.call(callbackObj, new DOMParser().parseFromString(request.response.trim(), "text/xml")); }
                catch (e) { console.warn(e); callback && callback.call(callbackObj, request.response); }
                break;
            default:
                callback && callback.call(callbackObj, request.response);
                break;
        }
    });
    request.send(null);
}
//发起POST请求
function doPOST(url, param, callback, callbackObj, parseType) {
    var request = new XMLHttpRequest();
    request.open("POST", url, false);
    request.setRequestHeader("Content-type", "application/x-www-form-urlencoded");
    request.addEventListener("load", function () {
        if (request.status != 200) { console.warn("请求失败！请检查参数是否错误！"); return; }

        switch (parseType) {
            case 1:
                try { callback && callback.call(callbackObj, JSON.parse(request.response.trim())); }
                catch (e) { console.warn(e); callback && callback.call(callbackObj, request.response); }
                break;
            case 2:
                try { callback && callback.call(callbackObj, new DOMParser().parseFromString(request.response.trim(), "text/xml")); }
                catch (e) { console.warn(e); callback && callback.call(callbackObj, request.response); }
                break;
            default:
                callback && callback.call(callbackObj, request.response);
                break;
        }
    });
    param ? request.send(param) : request.send();
}
//加载css
function loadCSS(href, callback) {
    var link = document.createElement("link");
    link.rel = "styleSheet";
    link.type = "text/css";
    link.href = href;
    var evtName = null;
    var evtListener = null;
    function logic() {
        // link.parentNode.removeChild(link);
        link.removeEventListener(evtName, evtListener, false);
        callback && callback();
    }
    if (!-[1,]) {
        evtName = "readystatechange";
        evtListener = function () { if (this.readyState == "loaded" || this.readyState == "complete") logic(); }
    } else {
        evtName = "load";
        evtListener = logic;
    }
    link.addEventListener(evtName, evtListener, false);
    document.head.appendChild(link);
}
//对比判断
function checkIDE(check, refer) {
    return String(window.navigator.userAgent.toLowerCase().match(check)) == refer;
}
//获取连接参数
function getQueryString(name) {
    var r = window.location.search.substr(1).match(new RegExp("(^|&)" + name + "=([^&]*)(&|$)"));
    if (null != r) return decodeURIComponent(r[2]) || decodeURI(r[2]);

    return null;
}
//flyh5域名下的cdn转换
function replaceFlyH5CDN(url) {
    if (url.indexOf("game.flyh5.cn/resources") > -1) return "http://img.flyh5.cn" + url.split("game.flyh5.cn/resources")[1];

    return url;
}
//判断是否是PC
window.isPC = (function () {
    //app = navigator.appVersion;
    var u = window.navigator.userAgent;
    u = u.toLowerCase();
    var isIPad = u.match(/ipad/i) == "ipad";
    var isIos = u.match(/iphone os/i) == "iphone os";
    var isMidp = u.match(/midp/i) == "midp";
    var isUC7 = u.match(/rv:1.2.3.4/i) == "rv:1.2.3.4";
    var isUC = u.match(/ucweb/i) == "ucweb";
    var isAndroid = u.match(/android/i) == "android";
    var isWinCE = u.match(/windows ce/i) == "windows ce";
    var isMobile = u.match(/windows mobile/i) == "windows mobile";
    return !(isIPad || isIos || isMidp || isUC7 || isUC || isAndroid || isWinCE || isMobile);
})();
//判断是否是6.7.2版本以上的微信
window.isNewWeChat = (function () {
    //app = navigator.appVersion;
    var u = window.navigator.userAgent;
    if (u.indexOf("MicroMessenger/") < 0) return;
    var v = u.split("MicroMessenger/")[1].split(" ")[0].split(".");
    if (
        Number(v[0]) > 6 ||
        (Number(v[0]) == 6 && Number(v[1]) > 7) ||
        (Number(v[0]) == 6 && Number(v[1]) == 7 && Number(v[2]) > 1)) {
        return true;
    }
    return false;
} ());
//识别设备终端
window.terminal = (function () {
    //app = navigator.appVersion;
    var u = window.navigator.userAgent;
    //浏览器版本信息
    return {
        trident: u.indexOf("Trident") > -1,
        presto: u.indexOf("Presto") > -1,
        webKit: u.indexOf("AppleWebKit") > -1,
        gecko: u.indexOf("Gecko") > -1 && u.indexOf("KHTML") > -1,
        mobile: !!u.match(/AppleWebKit.*Mobile.*/),
        ios: !!u.match(/\(i[^;]+;( U;)? CPU.+Mac OS X/),
        android: u.indexOf("Android") > -1 || u.indexOf("Linux") > -1,
        iPhone: u.indexOf("iPhone") > -1,
        iPad: u.indexOf("iPad") > -1,
        webApp: u.indexOf("Safari") > -1,
        weixin: u.indexOf("MicroMessenger") > -1 && u.replace(/.*(MicroMessenger\/[^\s]*).*/, "$1").replace("MicroMessenger/", "") || false,
        appVersion: u.indexOf("bocapp(") > -1 ? u.match(/bocapp\(\S+\)/)[0].slice(7, -1) : "3.0.0"
    };
} ());