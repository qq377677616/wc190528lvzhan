
// var h = window.innerHeight + "px";
// document.body.style.height = h;
// egretDiv.style.height = h;		

//资源文件前缀
var mediaPath = window.mediaPath;
//资源版本吧号
var ver = window.sourceVer;

//设置默认图片
// (function () {
//     let img = document.getElementById("dftImg");
//     styleWithRectange(img, { x: 0, y: 0, width: 750, height: 1334 });
//     img.src = mediaPath + img.attributes["web-path"].value + ver;
//     img.addEventListener("touchmove", function (e) { e.preventDefault(); });
//     img = null;
// })();

//配置资源标签地址
(function () {
    //
    function restSrc(list, prevent) {
        for (var i = 0, len = list.length; i < len; i++) {
            var el = list[i];
            var sp = el.attributes["src-path"];
            if (!el.src && sp && sp.value) el.src = mediaPath + sp.value + ver;
            if (prevent) el.addEventListener("touchmove", function (e) { e.preventDefault(); });
        }
    }
    //图片列表赋值
    restSrc(document.getElementsByTagName("img"), true);
    //视频列表赋值
    restSrc(document.getElementsByTagName("video"), true);
    //音频列表赋值
    restSrc(document.getElementsByTagName("audio"));
})();

//加载debug绿标
function loadVConsole(icoText, src, callback, callbackObj) {
    window.icoText = icoText;
    //加载debug绿标
    loadScript(src, function () { new VConsole(); callback.call(callbackObj) });
}

//加载外部字体
function loadFont(fontName, src, callback, callbackObj) {
    //创建一个字体style并给body赋值
    var style = document.createElement("style");
    var textNode =
        "@font-face {\n" +
        "\tfont-family:\"" + fontName + "\";\n" +
        "\tsrc:\n" +
        "\turl(\"" + src + fontName + ".ttf" + ver + "\") format(\"truetype\"),\n" +
        "\turl(\"" + src + fontName + ".woff" + ver + "\") format(\"woff\");\n" +
        "\tfont-weight: normal;\n" +
        "\tfont-style: normal;\n" +
        "}\n" +
        "div{\n" +
        "\tfont-family:\"" + fontName + "\"\n" +
        "}";
    style.appendChild(document.createTextNode(textNode));
    var evtName = null;
    var evtListener = null;
    function logic() {
        // style.parentNode.removeChild(s);
        style.removeEventListener(evtName, evtListener, false);
        callback && callback.call(callbackObj)
    }
    if (!-[1,]) {
        evtName = "readystatechange";
        evtListener = function () { if (this.readyState == "loaded" || this.readyState == "complete") logic(); }
    } else {
        evtName = "load";
        evtListener = logic;
    }
    style.addEventListener(evtName, evtListener, false);
    document.head.appendChild(style);
    document.body.style.fontFamily = fontName;
}