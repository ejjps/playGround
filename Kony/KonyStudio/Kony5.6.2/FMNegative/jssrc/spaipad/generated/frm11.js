//Form JS File
function frm11_button68508508643453_onClick_seq0(eventobject) {
    changeLableText.call(this);
};

function addWidgetsfrm11() {
    var label68508508643456 = new kony.ui.Label({
        "id": "label68508508643456",
        "isVisible": true,
        "text": "This form will be loaded in multiple modules, whenever this form is shown below label should read default text 'Label'",
        "skin": "skinLabel"
    }, {
        "widgetAlignment": constants.WIDGET_ALIGN_CENTER,
        "vExpand": false,
        "hExpand": true,
        "margin": [0, 0, 0, 0],
        "padding": [1, 1, 1, 1],
        "contentAlignment": constants.CONTENT_ALIGN_MIDDLE_LEFT,
        "marginInPixel": false,
        "paddingInPixel": false,
        "containerWeight": 6
    }, {
        "textCopyable": false
    });
    var lbl1 = new kony.ui.Label({
        "id": "lbl1",
        "isVisible": true,
        "text": "Label",
        "skin": "skinLabel"
    }, {
        "widgetAlignment": constants.WIDGET_ALIGN_CENTER,
        "vExpand": false,
        "hExpand": true,
        "margin": [0, 0, 0, 0],
        "padding": [1, 1, 1, 1],
        "contentAlignment": constants.CONTENT_ALIGN_MIDDLE_LEFT,
        "marginInPixel": false,
        "paddingInPixel": false,
        "containerWeight": 6
    }, {
        "textCopyable": false
    });
    var button68508508643453 = new kony.ui.Button({
        "id": "button68508508643453",
        "isVisible": true,
        "text": "Change Above Label's Text",
        "skin": "skinBtn",
        "focusSkin": "btnFocus",
        "onClick": frm11_button68508508643453_onClick_seq0
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
    frm11.add(
    label68508508643456, lbl1, button68508508643453);
};

function frm11Globals() {
    var MenuId = [];
    frm11 = new kony.ui.Form2({
        "id": "frm11",
        "title": null,
        "needAppMenu": true,
        "enabledForIdleTimeout": false,
        "skin": "frm",
        "addWidgets": addWidgetsfrm11
    }, {
        "padding": [0, 0, 0, 0],
        "paddingInPixel": false,
        "layoutType": constants.CONTAINER_LAYOUT_BOX
    }, {
        "retainScrollPosition": false,
        "inTransitionConfig": {
            "formTransition": "None"
        },
        "outTransitionConfig": {
            "formTransition": "None"
        }
    });
};
frm11Globals();