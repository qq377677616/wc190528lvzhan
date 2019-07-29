//白鹭方向 portrait=>垂直 landscape=>水平
window.egretOrientation = "landscape";
//白鹭适配策略 1=>750x1334下留100 2=>750x1334上留100下留175 3=>1994x750横屏适配
window.egretAdaptTactics = 4;
//ios渲染模式
window.iosRenderMode = "canvas";
//android渲染模式
window.androidRenderMode = "canvas";
//超过1334是否填充
window.isFillMode = true;
//监听可见改变
window.monitorVisibility = true;
//是否开启屏幕旋转提示
window.runOrientationTips = false;
//微信配置用appid
window.wechatAppid = "wx7c3ed56f7f792d84";
//是否授权
window.auth = false;
//授权入口地址	
window.authUrl = "";
//接口地址
window.serverUrl = "";
//跳转链接
window.linkUrl = {
    normal: ""
};
//三方JS列表
window.thirdJs = {
    //debug绿标
    Vconsole: {
        //无
        load: "",
        //文件地址
        src: "resource/js/third/Vconsole-3.2.0.min.js",
        //无
        key: ["测试版", "下线喽", "debug"]
    },
    //微信jssdk
    jweixin: {
        //无
        load: "",
        //文件地址
        src: "resource/js/third/jweixin-1.4.0.min.js",
        //是否打开debug
        key: false
    },
    //图片拉取库
    Lrz: {
        //是否加载
        load: false,
        //文件地址
        src: "resource/js/third/lrz/Lrz.min.js",
        //无
        key: ""
    },
    //加密库
    Crypto: {
        //是否加载
        load: false,
        //文件地址
        src: "resource/js/third/Crypto-3.1.9.min.js",
        //无
        key: ""
    },
    //外部字体库，同一个字体库请准备好同名的ttf和woff文件
    Font: {
        //是否加载
        load: false,
        //文件地址
        src: "resource/assets/",
        //文件名，请以数组的形式增加字体名
        key: ["mFont"]
    },
    //jq库
    JQuery: {
        //是否加载
        load: false,
        //文件地址
        src: "resource/js/third/JQuery-3.2.1.min.js",
        //无
        key: ""
    },
    //微信UI库
    wxmoment: {
        //是否加载
        load: false,
        //文件地址
        src: "resource/js/third/wxmoment-0.0.6.min.js",
        //无
        key: ""
    },
    //存储文档库
    FileSaver: {
        //是否加载
        load: false,
        //文件地址
        src: "resource/js/third/FileSaver-1.3.2.js",
        //无
        key: ""
    },
    //百度地图库
    BaiduMap: {
        //是否加载
        load: false,
        //文件地址
        src: "resource/js/third/BaiduMap-2.0.0.min.js",
        //无
        key: ""
    },
    //百度小程序库
    BaiduMini: {
        //是否加载
        load: false,
        //文件地址
        src: "resource/js/third/BaiduMini-1.3.3.min.js",
        //无
        key: ""
    },
    //淘宝API库
    TaobaoTida: {
        //是否加载
        load: false,
        //文件地址
        src: "resource/js/third/TaobaoTida-3.3.26.min.js",
        //请自行设置淘宝API的appkey
        key: "25106980"
    },
    //讯飞录音库
    IFlyIat: {
        //是否加载
        load: false,
        //文件地址
        src: "resource/js/third/IFlyIatSession-1.0.0",
        //无
        key: ""
    },
    //讯飞统计代码库
    IFlyVTM: {
        //是否加载
        load: false,
        //文件地址
        src: "resource/js/third/IFlyVTM-1.0.0.min.js",
        //埋点SI
        key: "576"
    }
}