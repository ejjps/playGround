//Template File
function initializefooter1() {
    hbox115058290428839 = new kony.ui.BoxTemplate({
        "id": "hbox115058290428839",
        "isVisible": true,
        "orientation": constants.BOX_LAYOUT_HORIZONTAL,
        "addWidgets": addWidgetshbox115058290428839
    }, {
        "containerWeight": 11,
        "percent": true,
        "widgetAlignment": constants.WIDGET_ALIGN_TOP_LEFT,
        "margin": [0, 0, 0, 0],
        "padding": [0, 0, 0, 0],
        "vExpand": false,
        "marginInPixel": false,
        "paddingInPixel": false,
        "layoutType": constants.CONTAINER_LAYOUT_BOX
    }, {});

    function addWidgetshbox115058290428839() {
        var label115058290428852 = new kony.ui.Label({
            "id": "label115058290428852",
            "isVisible": true,
            "text": "Footer",
            "skin": "lbl2"
        }, {
            "widgetAlignment": constants.WIDGET_ALIGN_CENTER,
            "vExpand": false,
            "hExpand": true,
            "margin": [0, 0, 0, 0],
            "padding": [1, 1, 1, 1],
            "contentAlignment": constants.CONTENT_ALIGN_MIDDLE_LEFT,
            "marginInPixel": false,
            "paddingInPixel": false,
            "containerWeight": 100
        }, {
            "textCopyable": false
        });
        hbox115058290428839.add(
        label115058290428852);
    }
};