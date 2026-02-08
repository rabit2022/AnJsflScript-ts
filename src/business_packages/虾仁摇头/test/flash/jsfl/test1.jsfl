require(['util'],function (util) {
    const DIALOGUE= "<?xml version=\"1.0\"?>\n" +
        "<dialog id=\"characterLayoutDialog\" title=\"人物排列设置\" buttons=\"accept,cancel\">\n" +
        "    <grid>\n" +
        "        <!--                <columns>-->\n" +
        "        <!--                    <column/>-->\n" +
        "        <!--                    <column/>-->\n" +
        "        <!--                </columns>-->\n" +
        "        <rows>\n" +
        "            <row>\n" +
        "                <label value=\"摇头力度:\"/>\n" +
        "            </row>\n" +
        "            <row>\n" +
        "                <textbox id=\"shakeIntensity\" value=\"6\"/>\n" +
        "            </row>\n" +
        "            <separator/>\n" +
        "\n" +
        "            <row>\n" +
        "                <label value=\"请选择头部朝向:\"/>\n" +
        "            </row>\n" +
        "            <row>\n" +
        "                <radiogroup id=\"headDirection\" orient=\"horizontal\">\n" +
        "                    <hbox>\n" +
        "                        <spacer flex=\"1\"/> <!-- 添加一个spacer来填充剩余空间 -->\n" +
        "                        <radio id=\"left\" label=\"头部向左\" value=\"-1\" selected=\"true\"/>\n" +
        "                        <radio id=\"right\" label=\"头部向右\" value=\"1\"/>\n" +
        "                    </hbox>\n" +
        "                </radiogroup>\n" +
        "            </row>\n" +
        "            <separator/>\n" +
        "        </rows>\n" +
        "    </grid>\n" +
        "\n" +
        "\n" +
        "</dialog>";

    var panel = fl.xmlPanelFromString(DIALOGUE);

    // console.log(typeof panel);
    // // console.log(JSON.stringify(panel));
    console.log(util.inspect(panel));


    // console.log(typeof panel.accept);
    // console.log(typeof panel.getEnabled);

});
