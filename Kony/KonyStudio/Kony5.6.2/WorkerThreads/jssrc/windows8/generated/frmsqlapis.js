//Form JS File
function frmsqlapis_button1587561095306399_onClick_seq0(eventobject) {
    frmSQL1.show();
};

function addWidgetsfrmsqlapis() {
    var button1587561095306399 = new kony.ui.Button({
        "id": "button1587561095306399",
        "isVisible": true,
        "text": "SQL 1",
        "skin": "btnskn",
        "focusSkin": "btnFocus",
        "onClick": frmsqlapis_button1587561095306399_onClick_seq0
    }, {
        "widgetAlignment": constants.WIDGET_ALIGN_CENTER,
        "vExpand": false,
        "hExpand": true,
        "margin": [1, 1, 1, 1],
        "padding": [0, 3, 0, 3],
        "contentAlignment": constants.CONTENT_ALIGN_CENTER,
        "displayText": true,
        "marginInPixel": true,
        "paddingInPixel": false,
        "containerWeight": 6
    }, {});
    frmsqlapis.add(
    button1587561095306399);
};

function frmsqlapisGlobals() {
    var MenuId = [];
    frmsqlapis = new kony.ui.Form2({
        "id": "frmsqlapis",
        "title": null,
        "needAppMenu": true,
        "enabledForIdleTimeout": false,
        "skin": "frm",
        "addWidgets": addWidgetsfrmsqlapis
    }, {
        "padding": [0, 0, 0, 0],
        "displayOrientation": constants.FORM_DISPLAY_ORIENTATION_PORTRAIT,
        "paddingInPixel": false,
        "layoutType": constants.CONTAINER_LAYOUT_BOX
    }, {
        "retainScrollPosition": false,
        "layout": constants.Vertical,
        "titleBar": true,
        "directChildrenIDs": ["button1587561095306399"],
        "viewConfig": {
            "referenceWidth": 0,
            "referenceHeight": 0
        }
    });
};