(function () {

    // /*
        var xml =
            <xml>
                <path>
                    <to>
                        <node index="1" value="value1" id="ID"/>
                        <node index="2" value="value2" />
                        <node index="3" value="value3" class="green"/>
                        <node index="4" value="value4" class="red">
                            <target index="5" id="dummy"/>
                            <target index="6" id="gateway" class="green">
                                <node index="7" id="final" />
                            </target>
                        </node>
                    </to>
                    <node index="8" value="value1" id="ID"/>
                </path>
                <node index="9" value="value1" id="ID"/>
            </xml>
    // */


    // /*
    //     var path	= "xml.path.to.node.(.value4).target.(#gateway).node.(@value=Dave)";
    //     var path	= "xml.path.to.node.(function::attribute('value') == 'value4').target.(function::attribute('id') == 'gateway')";
        //var path	= "xml.path.to.node.(function::attribute('value') == 'value4').target";
        //var node	= xml.path.to.node.(function::attribute('value') == 'value4').target.(function::attribute('id') == 'gateway')
        //var nodes	= eval(str);


        var path	= "path.to.node.(.red).target.(#gateway).@class";

        //var path = 'path.to'
        //var path	= ".*.(.green)";
        //var path	= ".green";
        //var path	= "@class^=g";

        // var path	= "@index>1";
        //var path	= "path.to.node.(@index>2)";
        //var path	= "path.to.node.(@index)";
        //var path	= ".*.(#ID)";
        //var nodes	= findNode(xml, path, true, true);

        var nodes	= xml.get(path, true, true);
        console.log(nodes.length(), nodes.toXMLString())
    // */

//var nodes = xml.path.to.node.(@index == 3)

    /*

        trace(nodes.length(), nodes.toXMLString())

        var state = xml.find('path.to.node').remove();
        trace(state)

        trace(xml.toXMLString())

        //var node = xml.path.to.node.(function::attribute('id') == 'ID').remove()
        //var node = xml.find('@id', true).remove()

        //var node = xml.find('node', true, true).remove()
        trace();

        var node = xml..*.(function::name() == 'node');
        var node = xml..*.(function::attribute('index') > 0);
        //var node = xml.find('@index>0', true, true);


        var node = xml.find('@index>0', false, true);
        var node = xml.find('*.(@index>0)', false, true);

        var node = xml.find('@index>0', true, true);
        var node = xml.find('*.(@index>0)', true, true);
        var node = xml.find('.*.(@index>0)', false, true);
        var node = xml.find('..*.(@index>0)', false, true);

        function callback(node, index)
        {
            return node.@index > 4;
        }

        var node = xml.find(callback, true)[0].remove()

        delete[0]//.remove()
        //inspect(node)
    */


    /*

    clear();
    var xml =
        <xml>
            <a id="a" vowel="true"/>
            <b id="b" />
            <c id="c" class="test" />
            <d id="d" class="test">
                <e id="e" vowel="true">
                    <f id="f" class="test" />
                </e>
            </d>
        </xml>


        //inspect(xml.get('a'));
        //inspect(xml.get('d.e.f'));
        //inspect(xml.get('*.(.test)'));
        inspect(xml.get('*.(@class=test)', true));

        //inspect(xml.get('#id'));
        //inspect(xml.get('.class'));
        //inspect(xml.get('a.b.c.(@name=dave)'));
        //inspect(xml.get('a.b.c.(@name=dave).d.e.@attr'));

        //xml.remove('*.(.test)', true)
        //xml.remove('a.@id', true)

        //delete xml.*.(function::attribute('@class') == 'test')


        //trace(xml.toXMLString());
    */
})();
