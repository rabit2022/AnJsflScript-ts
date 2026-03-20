/**
 * @file: test1.ts
 * @author: 穹的兔兔
 * @email: 3101829204@qq.com
 * @date: 2026/3/18 23:03
 * @project: AnJsflScript-ts
 * @description:
 */

// flash TypeScript file test1.ts

/**
 * Finds the full path
 * @type {RegExp}    operator, node, index, filter, attribute, matchIndex
 * @ignore
 */
var rxPath =
  /(?:(\.{0,2})([\-*\w]+))?(?:\[(\d+)\])?(?:\.\((.+?)\))?(?:\.(@[\-\w]+))?/g;

var xml = `
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
            </xml>`;

var path = "path.to.node.(.red).target.(#gateway).@class";

// var pathMatches	= path.matchAll( rxPath, null, true);
const pathMatches = Array.from(path.matchAll(rxPath), (m) => {
  const matchArray = Array.from(m);
  const index = m.index ?? -1;
  return [...matchArray, index];
});
console.log(pathMatches);

[
  [
    'path',    '',
    'path',    undefined,
    undefined, undefined,
    0
  ],
  [ '.to', '.', 'to', undefined, undefined, undefined, 4 ],
  [ '.node.(.red)', '.', 'node', undefined, '.red', undefined, 7 ],
  [
    '.target.(#gateway).@class',
    '.',
    'target',
    undefined,
    '#gateway',
    '@class',
    19
  ],
  [
    '',        undefined,
    undefined, undefined,
    undefined, undefined,
    44
  ]
]


