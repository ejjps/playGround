//Form JS File
function frm2_button1089753662759580_onClick_seq0(eventobject) {
    test_case_setReqHdr_02.call(this);
};

function frm2_button1089753662760662_onClick_seq0(eventobject) {
    frmHome.show();
};

function addWidgetsfrm2() {
    var button1089753662759580 = new kony.ui.Button({
        "id": "button1089753662759580",
        "isVisible": true,
        "text": "INIT",
        "skin": "btns1",
        "focusSkin": "btnFocus",
        "onClick": frm2_button1089753662759580_onClick_seq0
    }, {
        "widgetAlignment": constants.WIDGET_ALIGN_CENTER,
        "vExpand": false,
        "hExpand": true,
        "margin": [0, 2, 0, 2],
        "padding": [0, 3, 0, 3],
        "contentAlignment": constants.CONTENT_ALIGN_CENTER,
        "displayText": true,
        "marginInPixel": false,
        "paddingInPixel": false,
        "containerWeight": 6
    }, {});
    var lbl1 = new kony.ui.Label({
        "id": "lbl1",
        "isVisible": true,
        "text": "Label",
        "skin": "lbls1"
    }, {
        "widgetAlignment": constants.WIDGET_ALIGN_CENTER,
        "vExpand": false,
        "hExpand": true,
        "margin": [0, 4, 0, 4],
        "padding": [1, 1, 1, 1],
        "contentAlignment": constants.CONTENT_ALIGN_MIDDLE_LEFT,
        "marginInPixel": false,
        "paddingInPixel": false,
        "containerWeight": 6
    }, {
        "textCopyable": false
    });
    var lbl2 = new kony.ui.Label({
        "id": "lbl2",
        "isVisible": true,
        "text": "Label",
        "skin": "lbls2"
    }, {
        "widgetAlignment": constants.WIDGET_ALIGN_CENTER,
        "vExpand": false,
        "hExpand": true,
        "margin": [0, 4, 0, 4],
        "padding": [1, 1, 1, 1],
        "contentAlignment": constants.CONTENT_ALIGN_MIDDLE_LEFT,
        "marginInPixel": false,
        "paddingInPixel": false,
        "containerWeight": 6
    }, {
        "textCopyable": false
    });
    var button1089753662760662 = new kony.ui.Button({
        "id": "button1089753662760662",
        "isVisible": true,
        "text": "HOME",
        "skin": "btns2",
        "focusSkin": "btnFocus",
        "onClick": frm2_button1089753662760662_onClick_seq0
    }, {
        "widgetAlignment": constants.WIDGET_ALIGN_CENTER,
        "vExpand": false,
        "hExpand": true,
        "margin": [0, 2, 0, 2],
        "padding": [0, 3, 0, 3],
        "contentAlignment": constants.CONTENT_ALIGN_CENTER,
        "displayText": true,
        "marginInPixel": false,
        "paddingInPixel": false,
        "containerWeight": 6
    }, {});
    frm2.add(
    button1089753662759580, lbl1, lbl2, button1089753662760662);
};

function frm2Globals() {
    var MenuId = [];
    frm2 = new kony.ui.Form2({
        "id": "frm2",
        "title": null,
        "needAppMenu": true,
        "enabledForIdleTimeout": false,
        "skin": "frm",
        "addWidgets": addWidgetsfrm2
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