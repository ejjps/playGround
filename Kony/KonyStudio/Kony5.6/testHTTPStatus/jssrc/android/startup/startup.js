//startup.js file
var globalhttpheaders = {};
var appConfig = {
    appId: "testHTTPStatus",
    appName: "testHTTPStatus",
    appVersion: "1.0.0",
    platformVersion: null,
    serverIp: "192.168.1.6",
    serverPort: "80",
    secureServerPort: "443",
    isDebug: true,
    middlewareContext: "testHTTPStatus",
    url: "https://abhijeet-anand.konycloud.com/testHTTPStatus/MWServlet",
    secureurl: "https://abhijeet-anand.konycloud.com/testHTTPStatus/MWServlet"
};
sessionID = "";

function appInit(params) {
    skinsInit();
    frm1Globals();
    setAppBehaviors();
};

function setAppBehaviors() {
    kony.application.setApplicationBehaviors({
        applyMarginPaddingInBCGMode: false,
        adherePercentageStrictly: true,
        retainSpaceOnHide: true,
        marginsIncludedInWidgetContainerWeight: true
    })
};

function themeCallBack() {
    kony.application.setApplicationInitializationEvents({
        init: appInit,
        showstartupform: function() {
            frm1.show();
        }
    });
};

function loadResources() {
    globalhttpheaders = {};
    kony.theme.setCurrentTheme("default", themeCallBack, themeCallBack);
};
kony.application.setApplicationMode(constants.APPLICATION_MODE_NATIVE);
//If default locale is specified. This is set even before any other app life cycle event is called.
loadResources();
// If you wish to debug Application Initialization events, now is the time to
// place breakpoints.
debugger;