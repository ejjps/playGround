//Form JS File
function frmBrowser_button685084058980981_onClick_seq0(eventobject) {
    button1.call(this);
};

function frmBrowser_button685084058980982_onClick_seq0(eventobject) {
    button2.call(this);
};

function frmBrowser_button685084058980983_onClick_seq0(eventobject) {
    button3.call(this);
};

function frmBrowser_button685084058980984_onClick_seq0(eventobject) {
    button4.call(this);
};

function addWidgetsfrmBrowser() {
    var button685084058980981 = new kony.ui.Button({
        "id": "button685084058980981",
        "isVisible": true,
        "text": "Button",
        "skin": "btnNormal",
        "focusSkin": "btnFocus",
        "onClick": frmBrowser_button685084058980981_onClick_seq0
    }, {
        "widgetAlignment": constants.WIDGET_ALIGN_CENTER,
        "vExpand": false,
        "hExpand": true,
        "margin": [0, 0, 0, 0],
        "padding": [0, 3, 0, 3],
        "contentAlignment": constants.CONTENT_ALIGN_CENTER,
        "displayText": true,
        "marginInPixel": false,
        "paddingInPixel": false,
        "containerWeight": 6
    }, {});
    var button685084058980982 = new kony.ui.Button({
        "id": "button685084058980982",
        "isVisible": true,
        "text": "Button",
        "skin": "btnNormal",
        "focusSkin": "btnFocus",
        "onClick": frmBrowser_button685084058980982_onClick_seq0
    }, {
        "widgetAlignment": constants.WIDGET_ALIGN_CENTER,
        "vExpand": false,
        "hExpand": true,
        "margin": [0, 0, 0, 0],
        "padding": [0, 3, 0, 3],
        "contentAlignment": constants.CONTENT_ALIGN_CENTER,
        "displayText": true,
        "marginInPixel": false,
        "paddingInPixel": false,
        "containerWeight": 6
    }, {});
    var button685084058980983 = new kony.ui.Button({
        "id": "button685084058980983",
        "isVisible": true,
        "text": "Button",
        "skin": "btnNormal",
        "focusSkin": "btnFocus",
        "onClick": frmBrowser_button685084058980983_onClick_seq0
    }, {
        "widgetAlignment": constants.WIDGET_ALIGN_CENTER,
        "vExpand": false,
        "hExpand": true,
        "margin": [0, 0, 0, 0],
        "padding": [0, 3, 0, 3],
        "contentAlignment": constants.CONTENT_ALIGN_CENTER,
        "displayText": true,
        "marginInPixel": false,
        "paddingInPixel": false,
        "containerWeight": 6
    }, {});
    var button685084058980984 = new kony.ui.Button({
        "id": "button685084058980984",
        "isVisible": true,
        "text": "Button",
        "skin": "btnNormal",
        "focusSkin": "btnFocus",
        "onClick": frmBrowser_button685084058980984_onClick_seq0
    }, {
        "widgetAlignment": constants.WIDGET_ALIGN_CENTER,
        "vExpand": false,
        "hExpand": true,
        "margin": [0, 0, 0, 0],
        "padding": [0, 3, 0, 3],
        "contentAlignment": constants.CONTENT_ALIGN_CENTER,
        "displayText": true,
        "marginInPixel": false,
        "paddingInPixel": false,
        "containerWeight": 6
    }, {});
    frmBrowser.add(
    button685084058980981, button685084058980982, button685084058980983, button685084058980984);
};

function frmBrowserGlobals() {
    var MenuId = [];
    frmBrowser = new kony.ui.Form2({
        "id": "frmBrowser",
        "title": null,
        "needAppMenu": true,
        "enabledForIdleTimeout": false,
        "skin": "frm",
        "addWidgets": addWidgetsfrmBrowser
    }, {
        "padding": [0, 0, 0, 0],
        "displayOrientation": constants.FORM_DISPLAY_ORIENTATION_PORTRAIT,
        "paddingInPixel": false,
        "layoutType": constants.CONTAINER_LAYOUT_BOX
    }, {
        "retainScrollPosition": false,
        "windowSoftInputMode": constants.FORM_ADJUST_RESIZE,
        "titleBar": true,
        "footerOverlap": false,
        "headerOverlap": false,
        "inTransitionConfig": {
            "formAnimation": 0
        },
        "outTransitionConfig": {
            "formAnimation": 0
        },
        "menuPosition": constants.FORM_MENU_POSITION_AFTER_APPMENU
    });
};