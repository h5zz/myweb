// var QuickSDK= window["QuickSDK"];
//0 测试 1 正式
window["loginType"] = 0;

//平台
window["pf"] = "test";

window["platform"] = "quick";

window["noticeTxt"] = "测试测试测";

//资源版本
window["resVersion"] = "?v=2020033105";
window["thmVersion"] = "?v=2020033004";

//拉取服务器列表
window["serviceListdUrl"] = "";

//订单号
window["orderUrl"] = "";


var webViewJavascriptBridge = null; //对象名应用可自行指定

if (window["h5PT"] == 200) {
    document.addEventListener('WebViewJavascriptBridgeReady', function(event) {
        webViewJavascriptBridge = event.bridge;
        WebViewJavascriptBridge.callHandler("showToolBar", { right: 10, top: 600 });
        WebViewJavascriptBridge.callHandler("changeOrientation", { orientation: 1 }); //
    });
}

var urlData = window.location.search; //获取url中"?"符后的字串
if (urlData.indexOf("?") != -1) {
    urlData = urlData.substr(1);
    // window['userData']=str.split("&");
    var strs = urlData.split("&");
    var objDat = {};
    for (var i = 0; i < strs.length; i++) {
        objDat[strs[i].split("=")[0]] = unescape(strs[i].split("=")[1]);
    }
    window['userData'] = objDat;
} else {
    window['userData'] = null;
}

document.getElementById("mainDiv").innerHTML = '<iframe id="paramIframe" style="border: 0px; width: 100%;height: 99%;"src="./games/Test/indexlogin.html?v=2019091701"></iframe>';

function Login() {
    var pIframe = document.getElementById("paramIframe");
    if (pIframe) {
        var LoginFunction = pIframe.contentWindow.LoginFunction;
        if (window["h5PT"] == 200) {
            if (window['userData'] && window['userData']['code']) {
                var reqHttpRequest = pIframe.contentWindow.reqHttpRequest;
                if (reqHttpRequest) {
                    var verifyUrl = "http://bdwxyx.nongplay.com/Web/liaobei_h5/login.php?code=" + window['userData']['code'];
                    reqHttpRequest(verifyUrl, function(e) {
                        if (e) {
                            var verifData = JSON.parse(e);
                            if (verifData && verifData['result'] == 0) {
                                window['userData']['unionid'] = "liaobei_" + verifData.unionid
                                LoginFunction({ openId: "liaobei_" + verifData.unionid });
                            } else {
                                alert("登录错误：" + verifData['result']);
                            }
                        }
                    });
                }
            } else {
                alert("账号获取失败");
            }
        } else {
            if (window["pf"] == "ydx") {
                LoginFunction(window['userData']);
            }
            if (window['ish5'] == 1) {
                LoginFunction({ openId: window['userData']['username'] });
            }
            if (window["platform"] == "quick") { //Quick登录
                var sdk = window["QuickSDK"];
                var productCode = '48059811933782444119513778388472'; //QuickSDK后台自动分配
                var productKey = '28726935'; //QuickSDK后台自动分配
                sdk.init(productCode, productKey, true, function() {
                    console.log("init success");
                })
                onClickLogin();
                sdk.setLogoutNotification(function(logoutObject) {
                    // console.log('Game:玩家点击注销帐号');
                    onClickLogin();
                    // window.location.reload();
                })
            } else {
                alert("暂无平台！")
            }
        }
    }
}


function loginout() {
    var sdk = window["QuickSDK"];
    sdk.logout(function(logoutObject) {
        console.log('Game:成功退出游戏');
        window.location.reload();
    })
}

function onClickLogin() {
    console.log("点击登录了吗？")
    var pIframe = document.getElementById("paramIframe");
    if (pIframe) {
        var showLoginButton = pIframe.contentWindow.showLoginButton;
        if (showLoginButton) {
            showLoginButton();
        }
        var LoginFunction = pIframe.contentWindow.LoginFunction;
        var sdk = window["QuickSDK"];
        sdk.login(function(callbackData) {
            var message;
            if (callbackData.status) {
                message = 'GameDemo:QuickSDK登录成功: uid=>' + callbackData.data.uid;
                // window('userInfo') = callbackData.data;
                window['channelId'] = callbackData.data.channelId;
                window['username'] = callbackData.data['username'];
                //alert(window['channelId']);
                // if(callbackData.data.uid == 'xh_14629168'){
                //      alert(window['channelId']);
                // }
                LoginFunction({ openId: callbackData.data.uid });
                sdk.setLogoutNotification(function(logoutObject) {
                    // console.log('Game:玩家点击注销帐号');
                    window.location.reload();
                })
            } else {
                message = 'GameDemo:QuickSDK登录失败:' + callbackData.data.message;
                // if (callbackData.data.message == "cancel") {
                //     //百度用户取消时，强制重新调用登录
                //     self.reqLogin();
                // }
            }
            console.log(message);
        })
    }
}

function paramInit(str) {
    var whIndex = str.indexOf("?");
    if (whIndex != -1) {
        var param = str.slice(whIndex + 1).split("&");
        var strArr;
        for (var i = 0; i < param.length; i++) {
            strArr = param[i].split("=");
            urlParam[strArr[0]] = strArr[1];
        }
    }
}

function showLoadProgress(progress, des) {
    var pIframe = document.getElementById("paramIframe");
    if (pIframe) {
        pIframe.contentWindow.showLoadProgress(progress, des);
    }
}

function showGame() {
    var pIframe = document.getElementById("paramIframe");
    if (pIframe) {
        document.getElementById("mainDiv").removeChild(pIframe)
    }

}

function stop() {
    return false;
}
document.oncontextmenu = stop;

window.onorientationchange = function(e) {
    // var d = document.getElementById("screenHint");
    // if (window.orientation == 180 || window.orientation == 0) {
    //     //竖屏状态
    //     d.style.display = "none";
    // }
    // if (window.orientation == 90 || window.orientation == -90) {
    //     //横屏状态
    //     d.style.display = "block";
    // }
}

function sdkInit(appid) {}

function showRecharge(orderInfo) {
    if (webViewJavascriptBridge) { //聊呗
        var rechargeData = {
            appId: "lbPpfbzwxTitH4",
            cpOrderId: orderInfo["cpOrderNo"] + "|" + window['userData']['unionid'] + "|" + orderInfo["extrasParams"],
            amount: orderInfo["amount"] * 100,
            productName: orderInfo["subject"],
            productDesc: orderInfo["desc"],
            callbackUrl: "http://bdwxyx.nongplay.com/Web/liaobei_h5/callback.php"
        };
        webViewJavascriptBridge.callHandler("pay", rechargeData, function(ret) {})
            // webViewJavascriptBridge.callHandler("pay", rechargeData,
            //     ret => {
            //         if (ret === "success") {
            //             // SDK调用成功，不代表充值成功
            //             // 充值成功仅以服务器通知为准。
            //         } else {
            //             // SDK调用失败
            //         }
            //     });

    } else {
        var sdk = window["QuickSDK"];
        if (window["platform"] == "quick" && sdk) { //Quick支付
            orderInfo["productCode"] = '48059811933782444119513778388472';
            // if(sdk.getChannelType() == 413 || sdk.getChannelType() ==537){//两个平台要是
            //     orderInfo["amount"] = 0.01;
            // }
            // orderInfo["amount"] = 1;
            orderInfo['username'] = window['username'];
            var orderInfoJson = JSON.stringify(orderInfo);
            console.log("payinfo:" + orderInfoJson);
            sdk.pay(orderInfoJson, function(payStatusObject) {
                console.log('GameDemo:下单通知' + JSON.stringify(payStatusObject));
            });

        }
    }

}

function gameRoleInfo(roleInfo) {
    var sdk = window["QuickSDK"];
    if (sdk) {
        roleInfo['username'] = window['username'];
        var roleInfoJson = JSON.stringify(roleInfo);
        sdk.uploadGameRoleInfo(roleInfoJson, function(response) {

        })
    }
}

function showQrCode(use) {}

function connectError() {}

function closeSocket() {
    Main.closesocket();
}

function checkAWY() {

}

function reportSDK(str) {

}

function showQRCode() {

}

function isFocus() {

}

function isShare() {

}

function roleUp() {

}

function enterGame() {

}

function createRole() {

}

function getVipInfo() {

}

function isShowGameDesktop() {}

function saveGameDesktop() {}
//微端下载功能-------------------------------
function download(type) {
    var eleLink = document.createElement('a');
    // eleLink.download = filename;
    eleLink.style.display = 'none';
    // // 字符内容转变成blob地址
    // var blob = new Blob([content]);
    // eleLink.href = URL.createObjectURL(blob);
    if (type == 1) {
        eleLink.href = "http://bdwxzy.nongplay.com/gameapp/download/3733_baodao.apk";
        // 触发点击
        document.body.appendChild(eleLink);
        eleLink.click();
        // 然后移除
        document.body.removeChild(eleLink);
    } else {
        window.open("http://xapi.3733.com/mobile.php/Mobile/Game/sub?appid=62261", "newwindow", "toolbar =no, menubar=no, scrollbars=no, resizable=no, location=no, status=no") //写成一行
            //    eleLink.href = "http://bdwxzy.nongplay.com/gameapp/download/quwanyouxi_3733new_iOS_9.2_201907261923.ipa";
    }
}
//------------------------------------------
function getClientVersion(callback) {
    if (callback) callback(0);
}
var loadScript = function(list, callback) {
    var loaded = 0;
    var loadNext = function() {
        loadSingleScript(list[loaded], function() {
            loaded++;
            if (loaded >= list.length) {
                callback();
            } else {
                loadNext();
            }
        })
    };
    loadNext();
};

var loadSingleScript = function(src, callback) {
    var s = document.createElement('script');
    s.async = false;
    s.src = src;
    s.addEventListener('load', function() {
        s.parentNode.removeChild(s);
        s.removeEventListener('load', arguments.callee, false);
        callback();
    }, false);
    document.body.appendChild(s);
};

function start(param) {
    window['paraUrl'] = param;
    var xhr = new XMLHttpRequest();
    xhr.open('GET', './manifest.json?v=' + Math.random(), true);
    xhr.addEventListener("load", function() {
        var manifest = JSON.parse(xhr.response);
        var list = manifest.initial.concat(manifest.game);
        loadScript(list, function() {
            /**
             * {
             * "renderMode":, //Engine rendering mode, "canvas" or "webgl"
             * "audioType": 0 //Use the audio type, 0: default, 2: web audio, 3: audio
             * "antialias": //Whether the anti-aliasing is enabled in WebGL mode, true: on, false: off, defaults to false
             * "retina": //Whether the canvas is based on the devicePixelRatio
             * }
             **/
            egret.runEgret({ renderMode: "webgl", audioType: 0 });
        });
    });
    xhr.send(null);
}