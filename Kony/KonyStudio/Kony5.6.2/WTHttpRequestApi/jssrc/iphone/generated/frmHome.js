//Form JS File
function frmHome_button1089753662759580_onClick_seq0(eventobject) {
    frm1.show();
};

function frmHome_button1089753662759590_onClick_seq0(eventobject) {
    frm2.show();
};

function frmHome_button1089753662761138_onClick_seq0(eventobject) {
    frm3.show();
};

function frmHome_button1089753662760662_onClick_seq0(eventobject) {
    frm4.show();
};

function frmHome_button1089753662760442_onClick_seq0(eventobject) {
    frm5.show();
};

function frmHome_button186678823875158_onClick_seq0(eventobject) {
    frm6.show();
};

function addWidgetsfrmHome() {
    var button1089753662759580 = new kony.ui.Button({
        "id": "button1089753662759580",
        "isVisible": true,
        "text": "httpRequest_open, send",
        "skin": "btns1",
        "focusSkin": "btnFocus",
        "onClick": frmHome_button1089753662759580_onClick_seq0
    }, {
        "widgetAlignment": constants.WIDGET_ALIGN_CENTER,
        "vExpand": false,
        "hExpand": true,
        "margin": [0, 7, 0, 7],
        "padding": [0, 3, 0, 3],
        "contentAlignment": constants.CONTENT_ALIGN_CENTER,
        "displayText": true,
        "marginInPixel": true,
        "paddingInPixel": false,
        "containerWeight": 5
    }, {
        "glowEffect": false,
        "showProgressIndicator": true
    });
    var button1089753662759590 = new kony.ui.Button({
        "id": "button1089753662759590",
        "isVisible": true,
        "text": "httpRequest_setRequestHeader",
        "skin": "btns2",
        "focusSkin": "btnFocus",
        "onClick": frmHome_button1089753662759590_onClick_seq0
    }, {
        "widgetAlignment": constants.WIDGET_ALIGN_CENTER,
        "vExpand": false,
        "hExpand": true,
        "margin": [0, 7, 0, 7],
        "padding": [0, 3, 0, 3],
        "contentAlignment": constants.CONTENT_ALIGN_CENTER,
        "displayText": true,
        "marginInPixel": true,
        "paddingInPixel": false,
        "containerWeight": 5
    }, {
        "glowEffect": false,
        "showProgressIndicator": true
    });
    var button1089753662761138 = new kony.ui.Button({
        "id": "button1089753662761138",
        "isVisible": true,
        "text": "httpRequest_Abort",
        "skin": "btns1",
        "focusSkin": "btnFocus",
        "onClick": frmHome_button1089753662761138_onClick_seq0
    }, {
        "widgetAlignment": constants.WIDGET_ALIGN_CENTER,
        "vExpand": false,
        "hExpand": true,
        "margin": [0, 7, 0, 7],
        "padding": [0, 3, 0, 3],
        "contentAlignment": constants.CONTENT_ALIGN_CENTER,
        "displayText": true,
        "marginInPixel": true,
        "paddingInPixel": false,
        "containerWeight": 5
    }, {
        "glowEffect": false,
        "showProgressIndicator": true
    });
    var button1089753662760662 = new kony.ui.Button({
        "id": "button1089753662760662",
        "isVisible": true,
        "text": "httpRequest_getResponseHeader",
        "skin": "btns2",
        "focusSkin": "btnFocus",
        "onClick": frmHome_button1089753662760662_onClick_seq0
    }, {
        "widgetAlignment": constants.WIDGET_ALIGN_CENTER,
        "vExpand": false,
        "hExpand": true,
        "margin": [0, 7, 0, 7],
        "padding": [0, 3, 0, 3],
        "contentAlignment": constants.CONTENT_ALIGN_CENTER,
        "displayText": true,
        "marginInPixel": true,
        "paddingInPixel": false,
        "containerWeight": 5
    }, {
        "glowEffect": false,
        "showProgressIndicator": true
    });
    var button1089753662760442 = new kony.ui.Button({
        "id": "button1089753662760442",
        "isVisible": true,
        "text": "httpRequest_getAllResponseHeader",
        "skin": "btns1",
        "focusSkin": "btnFocus",
        "onClick": frmHome_button1089753662760442_onClick_seq0
    }, {
        "widgetAlignment": constants.WIDGET_ALIGN_CENTER,
        "vExpand": false,
        "hExpand": true,
        "margin": [0, 7, 0, 7],
        "padding": [0, 3, 0, 3],
        "contentAlignment": constants.CONTENT_ALIGN_CENTER,
        "displayText": true,
        "marginInPixel": true,
        "paddingInPixel": false,
        "containerWeight": 5
    }, {
        "glowEffect": false,
        "showProgressIndicator": true
    });
    var button186678823875158 = new kony.ui.Button({
        "id": "button186678823875158",
        "isVisible": true,
        "text": "Network API's",
        "skin": "btns2",
        "focusSkin": "btnFocus",
        "onClick": frmHome_button186678823875158_onClick_seq0
    }, {
        "widgetAlignment": constants.WIDGET_ALIGN_CENTER,
        "vExpand": false,
        "hExpand": true,
        "margin": [0, 7, 0, 7],
        "padding": [0, 3, 0, 3],
        "contentAlignment": constants.CONTENT_ALIGN_CENTER,
        "displayText": true,
        "marginInPixel": true,
        "paddingInPixel": false,
        "containerWeight": 5
    }, {
        "glowEffect": false,
        "showProgressIndicator": true
    });
    frmHome.add(
    button1089753662759580, button1089753662759590, button1089753662761138, button1089753662760662, button1089753662760442, button186678823875158);
};

function frmHomeGlobals() {
    var MenuId = [];
    frmHome = new kony.ui.Form2({
        "id": "frmHome",
        "title": null,
        "needAppMenu": true,
        "enabledForIdleTimeout": false,
        "skin": "frm",
        "addWidgets": addWidgetsfrmHome
    }, {
        "padding": [0, 0, 0, 0],
        "displayOrientation": constants.FORM_DISPLAY_ORIENTATION_PORTRAIT,
        "paddingInPixel": false,
        "layoutType": constants.CONTAINER_LAYOUT_BOX
    }, {
        "retainScrollPosition": false,
        "needsIndicatorDuringPostShow": true,
        "formTransparencyDuringPostShow": "100",
        "inputAccessoryViewType": constants.FORM_INPUTACCESSORYVIEW_DEFAULT,
        "bounces": true,
        "configureExtendTop": false,
        "configureExtendBottom": false,
        "configureStatusBarStyle": false,
        "titleBar": true,
        "footerOverlap": false,
        "headerOverlap": false,
        "inTransitionConfig": {
            "transitionDirection": "none",
            "transitionEffect": "none"
        },
        "outTransitionConfig": {
            "transitionDirection": "none",
            "transitionEffect": "none"
        }
    });
};