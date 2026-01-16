<!-- Source: docu5901.md -->

## document.swapStrokeAndFill()

#### Availability

Flash 8.

#### Usage

document.swapStrokeAndFill()

#### Parameters

None.

#### Returns

Nothing.

#### Description

Method; swaps the Stroke and Fill colors.

#### Example

```javascript
The following example swaps the Stroke and Fill colors in the current document:
fl.getDocumentDOM().swapStrokeAndFill();

```

---

<!-- Source: docu5932.md -->

## document.swfJPEGQuality

#### Availability

Flash Professional CS6.

#### Usage

document.swfJPEGQuality

#### Description

Property; an integer, returns the JPEG Quality setting from the current Publish Profile in the document.

#### Example

```javascript
The following example display the current SWF JPEG quality:
fl.trace("current profile's JPEG Quality is: " + fl.getDocumentDOM().swfJPEGQuality);

```

---

<!-- Source: docu5948.md -->

## document.testMovie()

#### Availability

Flash MX 2004.

#### Usage

document.testMovie([Boolean abortIfErrorsExist])

#### Parameters

**abortIfErrorsExist** Boolean; the default value is false. If set to true, the test movie session will not start and the .swf window will not open if there are compiler errors. Compiler warnings will not abort the command. This parameter was added in Flash Professional CS5.

#### Returns

Nothing.

#### Description

Method; executes a Test Movie operation on the document.

#### Example

```javascript
The following example tests the movie for the current document, but aborts the test movie if compiler errors exist:
fl.getDocumentDOM().testMovie(1);

```
#### See also

[document.canTestMovie()](../Document_object/docume27.md), [document.testScene()](../Document_object/docu5979.md)

<span id="document.testScene()" class="anchor"></span>


---

<!-- Source: docu5979.md -->

## document.testScene()

#### Availability

Flash MX 2004.

#### Usage

document.testScene()

#### Parameters

None.

#### Returns

Nothing.

#### Description

Method; executes a Test Scene operation on the current scene of the document.

#### Example

```javascript
The following example tests the current scene in the document:
fl.getDocumentDOM().testScene();

```
#### See also

[document.canTestScene()](../Document_object/docume28.md), [document.testMovie()](../Document_object/docu5948.md)


---

<!-- Source: docu5995.md -->

## document.timelines

#### Availability

Flash MX 2004.

#### Usage

document.timelines

#### Description

Read-only property; an array of Timeline objects (see [Timeline object](../Timeline_object/timeline_summary.md)).

#### Example

```javascript
The following example gets the array of current timelines in the active document and displays their names in the Output panel:
var i = 0;
var curTimelines = fl.getDocumentDOM().timelines; while(i < fl.getDocumentDOM().timelines.length){
alert(curTimelines[i].name);
++i;
}

```
#### See also

[document.currentTimeline](../Document_object/docume39.md), [document.getTimeline()](../Document_object/docume88.md)


---

<!-- Source: docu6010.md -->

## document.traceBitmap()

#### Availability

Flash MX 2004.

#### Usage

document.traceBitmap(threshold, minimumArea, curveFit, cornerThreshold)

#### Parameters

**threshold** An integer that controls the number of colors in your traced bitmap. Acceptable values are integers between 0 and 500.
**minimumArea** An integer that specifies the radius measured in pixels. Acceptable values are integers between 1 and 1000.
**curveFit** A string that specifies how smoothly outlines are drawn. Acceptable values are "pixels", "very tight", "tight", "normal", "smooth", and "very smooth".
**cornerThreshold** A string that is similar to *curveFit*, but it pertains to the corners of the bitmap image. Acceptable values are "many corners", "normal", and "few corners".

#### Returns

Nothing.

#### Description

Method; performs a trace bitmap on the current selection. This method is equivalent to selecting Modify >Bitmap>Trace Bitmap.

#### Example

```javascript
The following example traces the selected bitmap, using the specified parameters:
fl.getDocumentDOM().traceBitmap(0, 500, 'normal', 'normal');

```

---

<!-- Source: docu6042.md -->

## document.translate3DCenter()

#### Availability

Flash CS4 Professional.

#### Usage

document.translate3DCenter(xyzCoordinate)

#### Parameters

**xyzCoordinate** An XYZ coordinate that specifies the center point for 3D rotation or translation.

#### Returns

Nothing.

#### Description

Method: sets the XYZ position around which the selection is translated or rotated. This method is available only for movie clips.

#### Example

```javascript
The following example specifies the XYZ axes for 3D translation:
fl.getDocumentDOM().translate3DCenter({x:180, y:18,z:-30});

```

---

<!-- Source: docu6057.md -->

## document.translate3DSelection()

#### Availability

Flash CS4 Professional.

#### Usage

document.translate3DSelection(xyzCoordinate, bGlobalTransform)

#### Parameters

**xyzCoordinate** An XYZ coordinate that specifies the axes for 3D translation.
**bGlobalTransform** A Boolean value that specifies whether the transformation mode should be global (true) or local (false).

#### Returns

Nothing.

#### Description

Method: applies a 3D translation to the selection. This method is available only for movie clips.

#### Example

```javascript
In the following example, the selection is first translated relative to the stage (globally) and then relative to itself (locally).
var myDocument = fl.getDocumentDOM(); myDocument.translate3DSelection({x:52.0, y:0, z:0}, true); myDocument.translate3DSelection({x:52.0, y:0, z:-55.2}, false);

```
#### See also

[document.translate3DCenter()](../Document_object/docu6042.md)


---

<!-- Source: docu6058.md -->

## document.addTaggedSwatch()

#### Availability

Animate 2020.

#### Usage

document.addTaggedSwatch(swatch:object [,index:int [,palette:int ]] )

#### Parameters

**swatch** : swatch object to add.   
**index** : An integer that specifies the index where to add swatch.It is optional.  
**palette** :An integer that specifies the index of the tagged swatch palette.Default value is 0.It is optional.

#### Returns

Nothing.

#### Description

Method; To add new tagged swatch with the given swatch object at the given index, index is optional,in case no index is given adds swatch to end of the tagged swatches.

#### Example

In the following example,adding new tagged swatch,swatch1 to end of the tagged swatches.

```javascript
var document = fl.getDocumentDOM();
var swatch1 = new Object();
var fill = fl.getDocumentDOM().getCustomFill();
fill.color = "#FF00FF";
fill.style = "solid";
swatch1.fill = fill;
swatch1.name = "solid_swatch";
document.addTaggedSwatch(swatch1);

```
#### See also
[document.addTaggedSwatchWithColor()](../Document_object/docu6059.md)


---

<!-- Source: docu6059.md -->

## document.addTaggedSwatchWithColor()

#### Availability

Animate 2020.

#### Usage

document.addTaggedSwatchWithColor(color:string[,name:string [, index:int [, palette:int ]]])

#### Parameters

**color** :It is a string that specifies the color for which swatch is created like "#CCFF34".  
**name** : It is an integer that specifies the name of the tagged swatch,it is optional. 
**index** : It is an integer that specifies the index where to add swatch,it is optional.  
**palette** : It is an integer that specifies the index of the tagged swatch palette,default value is 0.It is optional.

#### Returns

Nothing.

#### Description

Method;To add new tagged swatch with the given color string and name at the given index. Name and index are optional,in case no name is given ,adds a unique name by itself and in case no index is given ,adds swatch to end of the tagged swatches. Name is required for index argument.

#### Example
The following example adds new tagged swatch for the color "#FF00FF".

```javascript
var document = fl.getDocumentDOM();
document.addTaggedSwatchWithColor("#FF00FF");
```
#### See also
[document.addTaggedSwatch()](../Document_object/docu6058.md)



---

<!-- Source: docu6060.md -->

## document.getIndexForTaggedSwatchesPalette()

#### Availability

Animate 2020.

#### Usage

document.getIndexForTaggedSwatchesPalette(paletteName:string).

#### Parameters

**paletteName**:It is a string that indicates tagged swatch palette name.

#### Returns

An integer that specifies the index of the palette.

#### Description

Method;To get the Tagged Swatches palette index for given palette name.

#### Example
The following example returns the index of tagged swatch palette "palette1".


```javascript

var document = fl.getDocumentDOM();
fl.trace(document.getIndexForTaggedSwatchesPalette("palette 1"));

```



---

<!-- Source: docu6061.md -->

## document.getTaggedSwatchAtIndex()

#### Availability

Animate 2020.

#### Usage

document.getTaggedSwatchAtIndex(index:int [,palette:int ])

#### Parameters

**index** : It is an integer that specifies the index of the tagged swatch.  
**palette** : It is an integer that specifies the index of the tagged swatch palette,default value is 0.It is optional.  

#### Returns

Swatch object.

#### Description

Method;returns the Tagged Swatch with the given index.

#### Example
The following example returns the tagged swatch at index 0.

```javascript

var document = fl.getDocumentDOM();
var swatch = document.getTaggedSwatchAtIndex(0);

```
#### See also
[document.getTaggedSwatchByName()](../Document_object/docu6062.md)
[document.getTaggedSwatchesPaletteList()](../Document_object/docu6063.md)
[document.getTaggedSwatches()](../Document_object/docu6064.md)




---

<!-- Source: docu6062.md -->

## document.getTaggedSwatchByName()

#### Availability

Animate 2020.

#### Usage

document.getTaggedSwatchByName(name:string).

#### Parameters

**name**:It is a string that specifies the name of the tagged swatch.

#### Returns

Swatch object.

#### Description

Method;returns the Tagged Swatch with the given name.

#### Example
The following example returns the tagged swatch with name "swatch1".

```javascript

var document = fl.getDocumentDOM();
var swatch = document.getTaggedSwatchByName("swatch1");

```
#### See also
[document.getTaggedSwatchesPaletteList()](../Document_object/docu6063.md)
[document.getTaggedSwatches()](../Document_object/docu6064.md)

---

<!-- Source: docu6063.md -->

## document.getTaggedSwatchesPaletteList()

#### Availability

Animate 2020.

#### Usage

document.getTaggedSwatchesPaletteList().

#### Parameters

Nothing.

#### Returns

Array of tagged swatches palette name list.

#### Description

Method;To get the array of Tagged Swatches palette name.

#### Example
The following example returns the array of tagged swatches.

```javascript

var document = fl.getDocumentDOM();
var arr = document.getTaggedSwatchesPaletteList();

```
#### See also
[document.getTaggedSwatchByName()](../Document_object/docu6062.md)
[document.getTaggedSwatches()](../Document_object/docu6064.md)



---

<!-- Source: docu6064.md -->

## document.getTaggedSwatches()

#### Availability

Animate 2020.

#### Usage

document.getTaggedSwatches([palette:int ])

#### Parameters

**palette**:It is an integer that specifies the index of the tagged swatch palette,it is optional.Default value is 0.

#### Returns

Array of tagged swatches.

#### Description

Method;It returns array of tagged swatch objects.
swatch object has two property,   
— [fill object](../Fill_object/fill_summary.md)

— name


#### Example
The following example returns the array of tagged swatches.

```javascript

var document = fl.getDocumentDOM();
var swatchArr = document.getTaggedSwatches();

```
#### See also

[document.getTaggedSwatchByName()](../Document_object/docu6062.md)
[document.getTaggedSwatchesPaletteList()](../Document_object/docu6063.md)


---

<!-- Source: docu6065.md -->

## document.deleteTaggedSwatchAtIndex()

#### Availability

Animate 2020.

#### Usage
document.deleteTaggedSwatchAtIndex(index:int [,palette:int ])

#### Parameters
**index** : It is an integer that speifies the index of the tagged swatch to delete.
**palette** : It is an integer that speifies the index of the tagged swatch palette,default value is 0.It is optional.  

#### Returns

Nothing.

#### Description

Method;delete tagged swatch with given index.

#### Example
The following example delete the tagged swatch at index 0.

```javascript

var document = fl.getDocumentDOM();
document.deleteTaggedSwatchAtIndex(0,4);

```
#### See also
[document.deleteTaggedSwatchByName()](../Document_object/docu6066.md)


---

<!-- Source: docu6066.md -->

## document.deleteTaggedSwatchByName()

#### Availability

Animate 2020.

#### Usage
document.deleteTaggedSwatchByName(name:string)

#### Parameters
**name**:It is a string that indicates the name of the tagged swatch to delete.

#### Returns

Nothing.

#### Description

Method;delete tagged swatch with given name.

#### Example
The following example delete the tagged swatch of name "swatch1"

```javascript

var document = fl.getDocumentDOM();
document.deleteTaggedSwatchByName("swatch1");

```
#### See also
[document.deleteTaggedSwatchAtIndex()](../Document_object/docu6065.md)



---

<!-- Source: docu6067.md -->

## document.setTaggedSwatchAtIndex()

#### Availability

Animate 2020.

#### Usage
document.setTaggedSwatchAtIndex(oldSwatchIndex:int ,newSwatch:Object [,palette:int ]).

#### Parameters

**oldSwatchIndex**:It is an integer that specifies the index of the tagged swatch to update.
**newSwatch**:swatch object to replace with.
**palette**:It is an integer that specifies the index of the tagged swatch palette,default value is 0.It is optional.  

#### Returns

Nothing.

#### Description

Method;replace the tagged swatch with the given index to the given new swatch object.

#### Example
The following example replace the tagged swatch with the given index 0 to the given new swatch object swatch1.

```javascript

var document = fl.getDocumentDOM();
var swatch1 = new Object();
var fill = fl.getDocumentDOM().getCustomFill();
fill.color = "#FF00FF";
fill.style = "solid";
swatch1.fill = fill;
swatch1.name = "solid_swatch";
document.setTaggedSwatchAtIndex(0,swatch1);

```
#### See also
[document.setTaggedSwatchByName()](../Document_object/docu6068.md)



---

<!-- Source: docu6068.md -->

## document.setTaggedSwatchByName()

#### Availability

Animate 2020.

#### Usage
document.setTaggedSwatchByName(oldSwatchName:name, newSwatch:object).

#### Parameters

**oldSwatchName**:It is a string that indicates the name of the tagged swatch to update.
**newSwatch**: new swatch Object.

#### Returns

Nothing.

#### Description

Method;replace the tagged swatch with the given name to the given new swatch object.

#### Example
The following example replace the tagged swatch with the given name "Oldswatch" to the given new swatch object swatch1.

```javascript

var document = fl.getDocumentDOM();
var swatch1 = new Object();
var fill = fl.getDocumentDOM().getCustomFill();
fill.color = "#FF00FF";
fill.style = "solid";
swatch1.fill = fill;
swatch1.name = "solid_swatch";
document.setTaggedSwatchByName("Oldswatch",swatch1);

```
#### See also
[document.setTaggedSwatchAtIndex()](../Document_object/docu6066.md)



---

<!-- Source: docu6069.md -->

## document.convertToDoc()

#### Availability

Animate 2020.

#### Usage
document.convertToDoc(fileURI, doctype [, fileClose])	


#### Parameters

**fileURI** :A string, expressed as a file:/// URI, that specifies the path of the generated file after conversion.

**docType** :A string value that specifies the required document type to be generated. To find document type, you can use document.type property. For example, fl.trace(fl.getDocumentDOM().type).

**fileClose**:A Boolean value that specifies whether to close the generated file after conversion. Specifying true closes the generated file. The default is false. It is optional.

#### Returns

A Boolean value.
True if document converted to expected document type successfully.False otherwise.

#### Description

Method;Converts a document to expected document type.

#### Example
The following example browse for a document and convert it to other document type.
```javascript

var fileURI = fl.browseForFileURL('open','open');
var doc = fl.openDocument(fileURI);
var sr = "";
sr +=fileURI;
fl.trace("fileuri: "+fileURI);
var str = sr.substring(0, sr.lastIndexOf("/"));
doc.convertToDoc('fileURI','htmlcanvas',true);

```



---

<!-- Source: docu6070.md -->

## document.exportCanvasPublishTemplate()

#### Availability

Animate 2020.

#### Usage
document.exportCanvasPublishTemplate(pathURI).

#### Parameters

**pathURI** :fileURI.A string, expressed as a file:/// URI, that specifies the path of the generated HTML template.

#### Returns

Boolean value.
True if exported successfully.False otherwise.

#### Description

Method;Exports the HTML5 Canvas Publishing Template for given document,at the specified location.This method is specific to HTML Canvas document only.

#### Example
The following example exports the HTML5 Canvas Publishing Template.

```javascript
var pathURI ="file:///C|/Users/username/desktop/CanvasTemplate.html";

var exportFlag =fl.getDocumentDOM().exportCanvasPublishTemplate(pathURI);

if(!exportFlag)

fl.trace(“Template could not be exported”);

```



---

<!-- Source: docu6071.md -->

## document.importCanvasPublishTemplate()

#### Availability

Animate 2020.

#### Usage
document.importCanvasPublishTemplate(pathURI)	

#### Parameters

**pathURI** :fileURI.A string, expressed as a file:/// URI, that specifies the path of the HTML template.

#### Returns

Boolean value.
True if imported successfully.False otherwise.

#### Description

Method;	Imports and sets the HTML5 Canvas Publishing Template for given document,from the specified location pathURI.This method is specific to HTML Canvas document only.

#### Example
The following example replace the tagged swatch with the given name"Oldswatch" to the given new swatch object swatch1.

```javascript

var pathURI= "file:///C|/Users/username/desktop/CanvasTemplate.html";

var exportFlag =fl.getDocumentDOM().importCanvasPublishTemplate(pathURI);

if(!exportFlag)

fl.trace(“Template could not be imported”);

```



---

<!-- Source: docu6072.md -->

## document.exportMedia()

#### Availability

Adobe Animate2020.

#### Usage
document.exportMedia (fileURI, format, preset [,bTransparent [, bRunBatch [, sceneName [, startFrame [, endFrame]]]]]).

#### Parameters
**fileURI:** A string, expressed as a file:/// URI, that specifies the output file path (without file extension)

**format:** A string that specifies the format of the file to be exported

**preset:** A string that specifies the preset to be used.

**bTransparent:** Boolean that specifies whether to ignore the stage colour.It is Optional. Default valu is false.

**bRunBatch:** Boolean that specifies whether to run AME batch automatically.It is Optional. Default value is true.

**sceneName:** A string that specifies the name of the scene if only that specific scene should be exported.It is Optional. By default all scenes will be exported.

**startFrame:** An integer, index of start frame in specific scene. Applicable only when a specific scene is exported.It is Optional. By default it will be either first frame of timeline or the start frame of the timeline loop range if defined.

**endFrame:** An integer, index of end frame in specific scene. Applicable only when a specific scene is exported.It is Optional. By default it will be last frame of timeline or the end frame of the timeline loop range if defined.

#### Returns

nothing.

#### Description

Method;generates the required media from the document by making use of Adobe Media Encoder.

#### Example
The following example generates the required media. 

```javascript

dom.exportMedia ("file:///C/Desktop/media", "H.264", "Default", true, false, "Scene 1", 20, 85);

```



---

<!-- Source: docu6073.md -->

## document.transformSelection()

#### Availability

Flash MX 2004.

#### Usage

document.transformSelection(a, b, c, d)

#### Parameters

**a** :A floating-point number that specifies the (0,0) element of the transformation matrix.

**b** :A floating-point number that specifies the (0,1) element of the transformation matrix. 

**c** :A floating-point number that specifies the (1,0) element of the transformation matrix. 

**d** :A floating-point number that specifies the (1,1) element of the transformation matrix.

#### Returns

Nothing.

#### Description

Method; performs a general transformation on the current selection by applying the matrix specified in the arguments. For more information, see the [element.matrix](../Element_object/elemen10.md) property.

#### Example

```javascript
The following example stretches the selection by a factor of 2 in the x direction:
fl.getDocumentDOM().transformSelection(2.0, 0.0, 0.0, 1.0);

```

---

<!-- Source: docu6074.md -->

## document.exportSVG()

#### Availability

Animate 2020.

#### Usage

document.exportSVG(fileURI, currentSettings, currentFrame);

#### Parameters

**fileURI:** A string, expressed as a file:/// URI, that specifies the output file path (without file extension)

**currentSettings** :A Boolean value that specifies whether to use the current SVG export settings (true) or to display the Export SVG dialog box (false)

**currentFrame**:A Boolean value that specifies whether to export only the current frame (true) or to export all frames, with each frame as a separate SVG file (false)

#### Returns

Nothing.

#### Description

Method;It generates SVG File. 

#### Example
The following example generates SVG FIle. 

```javascript
fl.getDocumentDOM().exportSVG("file:///users/usename/Desktop/Canvas/hap.svg", true, true);

```

---

<!-- Source: docu6104.md -->

## document.unGroup()

#### Availability

Flash MX 2004.

#### Usage

document.unGroup()

#### Parameters

None.

#### Returns

Nothing.

#### Description

Method; ungroups the current selection.

#### Example

The following example ungroups the elements in the current selection:

```javascript
fl.getDocumentDOM().unGroup();

```
#### See also

[document.group()](../Document_object/docume90.md)


---

<!-- Source: docu6120.md -->

## document.union()

#### Availability

Flash 8.

#### Usage

document.union()

#### Parameters

None.

#### Returns

None.

#### Description

Method; combines all selected shapes into a drawing object. If no objects are selected, calling this method results in an error and the script breaks at that point.

#### Example

The following example combines all selected shapes into a drawing object:

```javascript
fl.getDocumentDOM().union();

```
#### See also

[document.crop()](../Document_object/docume37.md), [document.deleteEnvelope()](../Document_object/docume41.md), [document.intersect()](../Document_object/docume97.md), [document.punch()](../Document_object/docum230.md), [shape.isDrawingObject](../Shape_object/shape6.md)


---

<!-- Source: docu6135.md -->

## document.unlockAllElements()

#### Availability

Flash MX 2004.

#### Usage

document.unlockAllElements()

#### Parameters

None.

#### Returns

Nothing.

#### Description

Method; unlocks all locked elements on the currently selected frame.

#### Example

The following example unlocks all locked objects on the current frame:

```javascript
fl.getDocumentDOM().unlockAllElements();

```
#### See also

[element.locked](../Element_object/element9.md)


---

<!-- Source: docu6167.md -->

## document.viewMatrix

#### Availability

Flash MX 2004.

#### Usage

document.viewMatrix

#### Description

Read-only property; a Matrix object. The viewMatrix is used to transform from object space to document space when the document is in edit mode. The mouse location, as a tool receives it, is relative to the object that is currently being edited. See [Matrix object](../Matrix_object/matrix_summary.md).
For example, if you create a symbol, double-click to edit it, and draw with the PolyStar tool, the point (0,0) will be at the registration point of the symbol. However, the drawingLayer object expects values in document space, so if you draw a line from (0,0) using the drawingLayer, it will start at the upper left corner of the Stage. The viewMatrix property provides a way to transform from the space of the object being edited to document space.

#### Example

The following example gets the value of the viewMatrix property:

```javascript
var mat = fl.getDocumentDOM().viewMatrix;

```

---

<!-- Source: docu6182.md -->

## document.width

#### Availability

Flash MX 2004.

#### Usage

document.width

#### Description

Property; an integer that specifies the width of the document (Stage) in pixels.

#### Example

The following example sets the width of the Stage to 400 pixels.

```javascript
fl.getDocumentDOM().width= 400;

```
#### See also

[document.height](../Document_object/docume91.md)


---

<!-- Source: docu6198.md -->

## document.xmlPanel()

#### Availability

Flash MX 2004.

#### Usage

document.xmlPanel(fileURI)

#### Parameters

**fileURI** A string, expressed as a file:/// URI, that specifies the path to the XML file defining the controls in the panel. The full path is required.

#### Returns

An object that has properties defined for all controls defined in the XML file. All properties are returned as strings. The returned object will have one predefined property named "dismiss" that will have the string value "accept" or "cancel".

#### Description

Method; posts an XMLUI dialog box. See [fl.xmlui](../flash_object_(fl)/fl81.md).

#### Example

The following example loads the Test.xml file and displays each property contained within it:

```javascript
var obj = fl.getDocumentDOM().xmlPanel(fl.configURI + "Commands/Test.xml"); 
for (var prop in obj) {
    fl.trace("property " + prop + " = " + obj[prop]);
}

```

---

<!-- Source: docu6229.md -->

## document.zoomFactor

#### Availability

Flash 8.

#### Usage

document.zoomFactor

#### Description

Property; specifies the zoom percent of the Stage at authoring time. A value of 1 equals 100 percent zoom, 8 equals 800 percent, .5 equals 50 percent, and so on.

#### Example

The following example sets the zoom factor of the Stage to 200 percent.

```javascript
fl.getDocumentDOM().zoomFactor = 2;

```

---

<!-- Source: docu9627.md -->

## document.setPublishDocumentData()

#### Availability

Adobe Animate.

#### Usage

document.setPublishDocumentData(format, publish)

#### Parameters

**format:** A string that specifies the publishing format.
**Note:** _EMBED_SWF_ is a special built-in publishing format for persistent data. If set, the persistent data will be embedded in the SWF file every time a document is published. The persistent data can then be accessed via ActionScript with the .metaData property. This requires SWF version 19 (Flash Player 11.6) and above and is only for symbol instances onstage. Other custom publishing formats may be specified for custom JSFL scripts if this method is called with the same format.

**publish:** A boolean that indicates whether to enable or disable publishing of persistent data for the specified format. None.

#### Returns

None.

#### Description

Method; Enables or disables publishing of persistent data for an entire document.

#### Example

```javascript
The following example illustrates the use of this method:
var doc = fl.getDocumentDOM();
// set the data
 if (doc) {
// get the first selected element
var elem = fl.getDocumentDOM().getTimeline().layers[0].frames[0].elements[0]; 
if (elem) {
// add persistent data "myAlign" of "left"
elem.setPersistentData( "myAlign", "string", "left" );
// enable publishing of persistent data to SWF for the element 
elem.setPublishPersistentData("myAlign", "_EMBED_SWF_", true);
// enable publishing to SWF for entire document 
doc.setPublishDocumentData("_EMBED_SWF_", true);
}
}
// example getting data
if (doc && doc.getPublishDocumentData("_EMBED_SWF_")) {
// get the first selected element
var elem = fl.getDocumentDOM().getTimeline().layers[0].frames[0].elements[0];
if (elem && elem.hasPersistentData("myAlign") && elem.getPublishPersistentData("myAlign", "_EMBED_SWF_")) {
alert("elem.metaData.myAlign = '" + elem.getPersistentData("myAlign") + "' will be embedded in SWF when published.");
}
}

```
#### See also

[document.getPublishDocumentData()](../Document_object/docume83.md)


---

<!-- Source: docu9643.md -->

## document.setRectangleObjectProperty()

#### Availability

Flash CS3 Professional.

#### Usage

document.setRectangleObjectProperty(propertyName, value)

#### Parameters

**propertyName** A string that specifies the property to be set. For acceptable values, see the Property summary table for the [Rectangle object](../Rectangle_object/RectangleObject_summary.md).
**value** The value to be assigned to the property. Acceptable values vary depending on the property you specify in *propertyName*.

#### Returns

Nothing.

#### Description

Method; specifies a value for a specified property of primitive Rectangle objects.

#### Example


See individual properties in [Rectangle object](../Rectangle_object/RectangleObject_summary.md) for examples.


#### See also

[Rectangle object](../Rectangle_object/RectangleObject_summary.md), [shape.isRectangleObject](../Shape_object/shape10.md)


---

<!-- Source: docu9658.md -->

## document.setSelectionBounds()

#### Availability

Flash MX 2004; *bContactSensitiveSelection* parameter added in Flash 8.

#### Usage

document.setSelectionBounds(boundingRectangle [, bContactSensitiveSelection])

#### Parameters

**boundingRectangle** A rectangle that specifies the new location and size of the selection. For information on the format of *boundingRectangle*, see [document.addNewRectangle()](../Document_object/docume10.md).
**bContactSensitiveSelection** A Boolean value that specifies whether the Contact Sensitive selection mode is enabled (true) or disabled (false) during object selection. The default value is false.

#### Returns

Nothing.

#### Description

Method; moves and resizes the selection in a single operation.
If you pass a value for *bContactSensitiveSelection*, it is valid only for this method and doesn’t affect the Contact Sensitive selection mode for the document (see [fl.contactSensitiveSelection](../flash_object_(fl)/fl14.md)).

#### Example

The following example moves the current selection to 10, 20 and resizes it to 100, 200:

```javascript
var l = 10; 
var t = 20;
fl.getDocumentDOM().setSelectionBounds({left:l, top:t, right:(100+l), bottom:(200+t)});

```
#### See also

[document.selection](../Document_object/docum430.md), [document.setSelectionRect()](../Document_object/docu9689.md)

<span id="document.setSelectionRect()" class="anchor"></span>


---

<!-- Source: docu9689.md -->

## document.setSelectionRect()

#### Availability

Flash MX 2004; *bContactSensitiveSelection* parameter added in Flash 8.

#### Usage

document.setSelectionRect(rect [, bReplaceCurrentSelection [, bContactSensitiveSelection]])

#### Parameters

**rect** A rectangle object to set as selected. For information on the format of *rect*, see [document.addNewRectangle()](../Document_object/docume10.md).
**bReplaceCurrentSelection** A Boolean value that specifies whether the method replaces the current selection (true) or adds to the current selection (false). The default value is true.
**bContactSensitiveSelection** A Boolean value that specifies whether the Contact Sensitive selection mode is enabled (true) or disabled (false) during object selection. The default value is false.

#### Returns

Nothing.

#### Description

Method; draws a rectangular selection marquee relative to the Stage, using the specified coordinates. This is unlike
document.getSelectionRect(), in which the rectangle is relative to the object being edited.
This method is equivalent to dragging a rectangle with the Selection tool. An instance must be fully enclosed by the rectangle to be selected.
If you pass a value for *bContactSensitiveSelection*, it is valid only for this method and doesn’t affect the Contact Sensitive selection mode for the document (see [fl.contactSensitiveSelection](../flash_object_(fl)/fl14.md).

***Note:** Repeating setSelectionRect() using the History panel or menu item repeats the step previous to the setSelectionRect() operation.*

#### Example

In the following example, the second selection replaces the first one:

```javascript
fl.getDocumentDOM().setSelectionRect({left:1, top:1, right:200, bottom:200}); 
fl.getDocumentDOM().setSelectionRect({left:364.0, top:203.0, right:508.0, bottom:434.0}, true);
```
In the following example, the second selection is added to the first selection. This is the same as the manual operation of holding down Shift and selecting a second object.
```javascript
fl.getDocumentDOM().setSelectionRect({left:1, top:1, right:200, bottom:200}); 
fl.getDocumentDOM().setSelectionRect({left:364.0, top:203.0, right:508.0, bottom:434.0}, false);

```
#### See also

[document.getSelectionRect()](../Document_object/docume84.md), [document.selection](../Document_object/docum430.md), [document.setSelectionBounds()](../Document_object/docu9658.md)


---

<!-- Source: docu9705.md -->

## document.setStageVanishingPoint()

#### Availability

Flash CS4 Professional.

#### Usage

document.setStageVanishingPoint(point)

#### Parameters

**point** A point that specifies the *x* and *y* coordinates of the location at which to set the vanishing point for viewing 3D objects.

#### Returns

Nothing.

#### Description

Specifies the vanishing point for viewing 3D objects.

#### Example

The following example sets the Stage vanishing point:

```javascript
fl.getDocumentDOM().setStageVanishingPoint({x:45, y:45});

```

---

<!-- Source: docu9721.md -->

## document.setStageViewAngle()

#### Availability

Flash CS4 Professional.

#### Usage

document.setStageViewAngle(angle)

#### Parameters

**angle** A floating point value between 0.0 and 179.0.

#### Returns

Nothing.

#### Description

Specifies the perspective angle for viewing 3D objects.

#### Example

The following example sets the Stage perspective angle to 70 degrees:

```javascript
fl.getDocumentDOM().setStageViewAngle(70);

```

---

<!-- Source: docu9752.md -->

## document.setStroke()

#### Availability

Flash MX 2004.

#### Usage

document.setStroke(color, size, strokeType)

#### Parameters

**color** The color of the stroke, in one of the following formats:

-   A string in the format "#RRGGBB" or "#RRGGBBAA"

-   A hexadecimal number in the format 0xRRGGBB

-   An integer that represents the decimal equivalent of a hexadecimal number

**size** A floating-point value that specifies the new stroke size for the selection.
**strokeType** A string that specifies the new type of stroke for the selection. Acceptable values are "hairline", "solid", "dashed", "dotted", "ragged", "stipple", and "hatched".

#### Returns

Nothing.

#### Description

Method; sets the color, width, and style of the selected stroke. For information on changing the stroke in the Tools panel and Property inspector, see [document.setCustomStroke()](../Document_object/docum480.md).

#### Example

The following example sets the color of the stroke to red, the size to 3.25, and the type to dashed:

```javascript
fl.getDocumentDOM().setStroke("#ff0000", 3.25, "dashed");

```

---

<!-- Source: docu9768.md -->

## document.setStrokeColor()

#### Availability

Flash MX 2004.

#### Usage

document.setStrokeColor(color)

#### Parameters

**color** The color of the stroke, in one of the following formats:

-   A string in the format "#RRGGBB" or "#RRGGBBAA"

-   A hexadecimal number in the format 0xRRGGBB

-   An integer that represents the decimal equivalent of a hexadecimal number

#### Returns

Nothing.

#### Description

Method; changes the stroke color of the selection to the specified color. For information on changing the stroke in the Tools panel and Property inspector, see [document.setCustomStroke()](../Document_object/docum480.md).

#### Example

The three statements in the following example set the stroke color using each of the different formats for specifying color:

```javascript
fl.getDocumentDOM().setStrokeColor("#cc00cc"); fl.getDocumentDOM().setStrokeColor(0xcc00cc); fl.getDocumentDOM().setStrokeColor(120000);

```

---

<!-- Source: docu9799.md -->

## document.setStrokeSize()

#### Availability

Flash MX 2004.

#### Usage

document.setStrokeSize(size)

#### Parameters

**size** A floating-point value from 0.25 to 250that specifies the stroke size. The method ignores precision greater than two decimal places.

#### Returns

Nothing.

#### Description

Method; changes the stroke size of the selection to the specified size. For information on changing the stroke in the Tools panel and Property inspector, see [document.setCustomStroke()](../Document_object/docum480.md).

#### Example

The following example changes the stroke size for the selection to 5:
fl.getDocumentDOM().setStrokeSize(5);

```

---

<!-- Source: docu9814.md -->

## document.setStrokeStyle()

#### Availability

Flash MX 2004.

#### Usage

document.setStrokeStyle(strokeType)

#### Parameters

**strokeType** A string that specifies the stroke style for the current selection. Acceptable values are "hairline", "solid","dashed", "dotted", "ragged", "stipple", and "hatched".

#### Returns

Nothing.

#### Description

Method; changes the stroke style of the selection to the specified style. For information on changing the stroke in the Tools panel and Property inspector, see [document.setCustomStroke()](../Document_object/docum480.md).

#### Example

The following example changes the stroke style for the selection to "dashed": 

```javascript

fl.getDocumentDOM().setStrokeStyle("dashed");

```

---

<!-- Source: docu9846.md -->

## document.setTextRectangle()

#### Availability

Flash MX 2004.

#### Usage

document.setTextRectangle(boundingRectangle)

#### Parameters

**boundingRectangle** A rectangle that specifies the new size within which the text item should flow. For information on the format of *boundingRectangle*, see [document.addNewRectangle()](../Document_object/docume10.md).

#### Returns

A Boolean value: true if the size of at least one text field is changed; false otherwise.

#### Description

Method; changes the bounding rectangle for the selected text item to the specified size. This method causes the text to reflow inside the new rectangle; the text item is not scaled or transformed. The values passed in *boundingRectangle* are used as follows:

-   If the text is horizontal and static, the method takes into account only the width value passed in *boundingRectangle*; the height is automatically computed to fit all the text.

-   If the text is vertical (and therefore static), the method takes into account only the height value passed in

*boundingRectangle*; the width is automatically computed to fit all the text.

-   If the text is dynamic or input, the method takes into account both the width and height values passed in *boundingRectangle*, and the resulting rectangle might be larger than needed to fit all the text. However, if the parameters specify a rectangle size that is too small to fit all the text, the method takes into account only the width value passed in *boundingRectangle* (the height is automatically computed to fit all the text).

#### Example

The following example changes the size of the bounding text rectangle to the specified dimensions:

```javascript
fl.getDocumentDOM().setTextRectangle({left:0, top:0, right:50, bottom:200})

```

---

<!-- Source: docu9861.md -->

## document.setTextSelection()

#### Availability

Flash MX 2004.

#### Usage

document.setTextSelection(startIndex, endIndex)

#### Parameters

**startIndex** An integer that specifies the position of the first character to select. The first character position is 0 (zero).
**endIndex** An integer that specifies the end position of the selection up to, but not including, *endIndex*. The first character position is 0 (zero).

#### Returns

A Boolean value: true if the method can successfully set the text selection; false otherwise.

#### Description

Method; sets the text selection of the currently selected text field to the values specified by the *startIndex* and *endIndex*
values. Text editing is activated, if it isn’t already.

#### Example

The following example selects the text from the 6th character through the 25th character:

```javascript
fl.document.setTextSelection(5, 25);

```

---

<!-- Source: docu9908.md -->

## document.setTextString()

#### Availability

Flash MX 2004.

#### Usage

document.setTextString(text [, startIndex [, endIndex]])

#### Parameters

**text** A string of the characters to insert in the text field.
**startIndex** An integer that specifies the first character to replace. The first character position is 0 (zero). This parameter is optional.
**endIndex** An integer that specifies the last character to replace. This parameter is optional.

#### Returns

A Boolean value: true if the text of at least one text string is set; false otherwise.

#### Description

Method; inserts a string of text. If the optional parameters are not passed, the existing text selection is replaced; if the Text object isn’t currently being edited, the whole text string is replaced. If only *startIndex* is passed, the string passed is inserted at this position. If *startIndex* and *endIndex* are passed, the string passed replaces the segment of text starting from *startIndex* up to, but not including, *endIndex*.

#### Example

```javascript
The following example replaces the current text selection with "Hello World":
var success = fl.getDocumentDOM().setTextString("Hello World!");
The following example inserts "hello" at position 6 of the current text selection:
var pass = fl.getDocumentDOM().setTextString("hello", 6);
The following example inserts "Howdy" starting at position 2 and up to, but not including, position 7 of the current text selection:
var ok = fl.getDocumentDOM().setTextString("Howdy", 2, 7);

```
#### See also

[document.getTextString()](../Document_object/docume87.md)


---

<!-- Source: docu9939.md -->

## document.setTransformationPoint()

#### Availability

Flash MX 2004.

#### Usage

document.setTransformationPoint( transformationPoint )

#### Parameters

**transformationPoint** A point (for example, {x:10, y:20}, where x and y are floating-point numbers) that specifies values for the transformation point of each of the following elements:

-   Shapes: *transformationPoint* is set relative to the document (0,0 is the upper left corner of the Stage).

-   Symbols: *transformationPoint* is set relative to the symbol’s registration point (0,0 is located at the registration point).

-   Text: *transformationPoint* is set relative to the text field (0,0 is the upper left corner of the text field).

-   Bitmaps/videos: *transformationPoint* is set relative to the bitmap/video (0,0 is the upper left corner of the bitmap or video).

-   Drawing objects, primitive ovals and rectangles, and groups: *transformationPoint* is set relative to the document (0,0 is the upper left corner of the Stage). To set *transformationPoint* relative to the center point of the object, primitive, or group, use [element.setTransformationPoint()](../Element_object/elemen19.md).

#### Returns

Nothing.

#### Description

Method; sets the position of the current selection’s transformation point.

#### Example

The following example sets the transformation point of the current selection to 100, 200:

```javascript
fl.getDocumentDOM().setTransformationPoint({x:100, y:200});

```
#### See also

[document.getTransformationPoint()](../Document_object/docume89.md), [element.setTransformationPoint()](../Element_object/elemen19.md)


---

<!-- Source: docu9971.md -->

## document.silent

#### Availability

Flash MX 2004.

#### Usage

document.silent

#### Description

Property; a Boolean value that specifies whether the object is accessible. This is equivalent to the inverse logic of the Make Movie Accessible setting in the Accessibility panel. That is, if document.silent is true, it is the same as the Make Movie Accessible option being unchecked. If it is false, it is the same as the Make Movie Accessible option being checked.

#### Example

```javascript
The following example sets the isSilent variable to the value of the silent property:
var isSilent = fl.getDocumentDOM().silent;

The following example sets the silent property to false, indicating that the document is accessible:
fl.getDocumentDOM().silent = false;

```

---

<!-- Source: docum100.md -->

## document.livePreview

#### Availability

Flash MX 2004.

#### Usage

document.livePreview

#### Description

Property; a Boolean value that specifies whether Live Preview is enabled. If set to true, components appear on the Stage as they will appear in the published Flash content, including their approximate size. If set to false, components appear only as outlines. The default value is true.

#### Example


The following example sets Live Preview to false: 
```javascript
fl.getDocumentDOM().livePreview = false;

```

---

<!-- Source: docum110.md -->

## document.loadCuepointXML() - dropped

#### Availability

Flash Professional CS5. Dropped in Adobe Animate.

#### Usage

document.loadCuepointXML(String URI)

#### Parameters

**URI** String; the absolute path to the cue point XML file.

#### Description

Dropped in Adobe Animate.
Method; loads a cue point XML file. The format and DTD of the XML file is the same as the one imported and exported by the Cue Points Property inspector. The return value is the same as the string serialized in the Cue Point property of the object containing the instance of an FLVPlayback Component.

#### Example


The following example the cue points XML file located at C:\\testCuePoints.xml:
```javascript

var cuePoints = fl.getDocumentDOM().LoadCuepointXML("c:\\testCuePoints.xml");

```

---

<!-- Source: docum114.md -->

## document.swapElement()

#### Availability

Flash MX 2004.

#### Usage

document.swapElement(name)

#### Parameters

**name** A string that specifies the name of the library item to use.

#### Returns

Nothing.

#### Description

Method; swaps the current selection with the specified one. The selection must contain a graphic, button, movie clip, video, or bitmap. This method displays an error message if no object is selected or the given object could not be found.

#### Example


The following example swaps the current selection with Symbol 1 from the library:
```javascript

fl.getDocumentDOM().swapElement('Symbol 1');

```

---

<!-- Source: docum120.md -->

## document.match()

#### Availability

Flash MX 2004.

#### Usage

document.match(bWidth, bHeight [, bUseDocumentBounds])

#### Parameters

**bWidth** A Boolean value that, when set to true, causes the method to make the widths of the selected items the same.
**bHeight** A Boolean value that, when set to true, causes the method to make the heights of the selected items the same.
**bUseDocumentBounds** A Boolean value that, when set to true, causes the method to match the size of the objects to the bounds of the document. Otherwise, the method uses the bounds of the largest object. The default is false. This parameter is optional.

#### Returns

Nothing.

#### Description

Method; makes the size of the selected objects the same.

#### Example

```javascript
The following example matches the width of the selected objects only:

fl.getDocumentDOM().match(true,false); 

The following example matches the height only: fl.getDocumentDOM().match(false,true);

The following example matches the width only to the bounds of the document:
fl.getDocumentDOM().match(true,false,true);

```
#### See also

[document.getAlignToDocument()](../Document_object/docume72.md) [document.setAlignToDocument()](../Document_object/docum450.md)


---

<!-- Source: docum130.md -->

## document.mouseClick()

#### Availability

Flash MX 2004.

#### Usage

document.mouseClick(position, bToggleSel, bShiftSel)

#### Parameters

**position** A pair of floating-point values that specify the *x* and *y* coordinates of the click in pixels.
**bToggleSel** A Boolean value that specifies the state of the Shift key: true for pressed; false for not pressed.
**bShiftSel** A Boolean value that specifies the state of the application preference Shift select: true for on; false for off.

#### Returns

Nothing.

#### Description

Method; performs a mouse click from the Selection tool.

#### Example


The following example performs a mouse click at the specified location:
```javascript
fl.getDocumentDOM().mouseClick({x:300, y:200}, false, false);

```
#### See also

[document.mouseDblClk()](../Document_object/docum140.md)

<span id="document.mouseDblClk()" class="anchor"></span>


---

<!-- Source: docum140.md -->

## document.mouseDblClk()

#### Availability

Flash MX 2004.

#### Usage

document.mouseDblClk(position, bAltDown, bShiftDown, bShiftSelect)

#### Parameters

**position** A pair of floating-point values that specify the *x* and *y* coordinates of the click in pixels.
**bAltdown** A Boolean value that records whether the Alt key is down at the time of the event: true for pressed; false
for not pressed.
**bShiftDown** A Boolean value that records whether the Shift key was down when the event occurred: true for pressed;
false for not pressed.
**bShiftSelect** A Boolean value that indicates the state of the application preference Shift select: true for on; false for off.

#### Returns

Nothing.

#### Description

Method; performs a double mouse click from the Selection tool.

#### Example


The following example performs a double mouse click at the specified location:

```javascript
fl.getDocumentDOM().mouseDblClk({x:392.9, y:73}, false, false, true);

```
#### See also

[document.mouseClick()](../Document_object/docum130.md)


---

<!-- Source: docum150.md -->

## document.moveSelectedBezierPointsBy()

#### Availability

Flash MX 2004.

#### Usage

document.moveSelectedBezierPointsBy(delta)

#### Parameters

**delta** A pair of floating-point values that specify the *x* and *y* coordinates in pixels by which the selected Bézier points are moved. For example, passing ({x:1,y:2}) specifies a location that is to the right by one pixel and down by two pixels from the current location.

#### Returns

Nothing.

#### Description

Method; if the selection contains at least one path with at least one Bézier point selected, moves all selected Bézier points on all selected paths by the specified amount.

#### Example

The following example moves the selected Bézier points 10 pixels to the right and 5 pixels down:


```javascript
fl.getDocumentDOM().moveSelectedBezierPointsBy({x:10, y:5});

```

---

<!-- Source: docum160.md -->

## document.moveSelectionBy()

#### Availability

Flash MX 2004.

#### Usage

document.moveSelectionBy(distanceToMove)

#### Parameters

**distanceToMove** A pair of floating-point values that specify the *x* and *y* coordinate values by which the method moves the selection. For example, passing ({x:1,y:2}) specifies a location one pixel to the right and two pixels down from the current location.

#### Returns

Nothing.

#### Description

Method; moves selected objects by a specified distance.

***Note:** When the user uses the arrow keys to move the item, the History panel combines all presses of the arrow key as one move step. When the user presses the arrow keys repeatedly, rather than taking multiple steps in the History panel, the method performs one step, and the arguments are updated to reflect the repeated arrow keys.*

For information on making a selection, see [document.setSelectionRect()](../Document_object/docu9689.md), [document.mouseClick()](../Document_object/docum130.md), [document.mouseDblClk()](../Document_object/docum140.md), and the [Element object](../Element_object/element_summary.md).

#### Example


The following example moves the selected item 62 pixels to the right and 84 pixels down:

```javascript
fl.getDocumentDOM().moveSelectionBy({x:62, y:84});

```

---

<!-- Source: docum170.md -->

## document.name

#### Availability

Flash MX 2004.

#### Usage

document.name

#### Description

Read-only property; a string that represents the name of a document (FLA file).

#### Example

```javascript
The following example sets the variable fileName to the filename of the first document in the documents array:
var fileName = flash.documents[0].name;

The following example displays the names of all the open documents in the Output panel:
var openDocs = fl.documents;
for(var i=0;i < openDocs.length; i++){ 
    fl.trace(i + " " + openDocs[i].name +"\n");
}

```

---

<!-- Source: docum180.md -->

## document.optimizeCurves()

#### Availability

Flash MX 2004.

#### Usage

document.optimizeCurves(smoothing, bUseMultiplePasses)

#### Parameters

**smoothing** An integer in the range from 0 to 100, with 0 specifying no smoothing and 100 specifying maximum smoothing.
**bUseMultiplePasses** A Boolean value that, when set to true, indicates that the method should use multiple passes, which is slower but produces a better result. This parameter has the same effect as clicking the Use Multiple Passes button in the Optimize Curves dialog box.

#### Returns

Nothing.

#### Description

Method; optimizes smoothing for the current selection, allowing multiple passes, if specified, for optimal smoothing. This method is equivalent to selecting Modify >Shape >Optimize.

#### Example


The following example optimizes the curve of the current selection to 50º of smoothing with multiple passes:
```javascript
fl.getDocumentDOM().optimizeCurves(50, true);

```

---

<!-- Source: docum190.md -->

## document.path

#### Availability

Flash MX 2004.

#### Usage

document.path

#### Description

Read-only property; a string that represents the path of the document in a platform-specific format. If the document has never been saved, this property is undefined.

#### Example

```javascript
The following example displays the path of the first document in the documents array in the Output panel. You must save the document before running this script. In the example, the file is named test.fla and is saved in the My Documents folder on a Windows computer.

var filePath = flash.documents[0].path;
fl.trace(filePath);
// displays
 C:\Documents and Settings\<user name>\My Documents\test.fla

```
#### See also

[document.pathURI](../Document_object/docum200.md)

<span id="document.pathURI" class="anchor"></span>


---

<!-- Source: docum200.md -->

## document.pathURI

#### Availability

Flash CS4 Professional.

#### Usage

document.pathURI

#### Description

Read-only property; a string that represents the path of the document, expressed as a file:/// URI. If the document has never been saved, this property is undefined.

#### Example


The following example displays the path of the first document in the documents array as a file:/// URI string in the Output panel. You must save the document before running this script. In the example,the file is named test.fla and is saved in the My Documents folder on a Windows computer.

```javascript
var filePathURI = flash.documents[0].pathURI; 
fl.trace(filePathURI);
 
//display file: ///C|\documents%20and%20Settings/<userName>/My%20Documents/test.fla

```
#### See also

[document.path](../Document_object/docum190.md)


---

<!-- Source: docum21.md -->

## document.smoothSelection()

#### Availability

Flash MX 2004.

#### Usage

document.smoothSelection()

#### Parameters

None.

#### Returns

Nothing.

#### Description

Method; smooths the curve of each selected fill outline or curved line. This method performs the same action as the Smooth button in the Tools panel.

#### Example

```javascript
The following example smooths the curve of the current selection:
fl.getDocumentDOM().smoothSelection();

```

---

<!-- Source: docum210.md -->

## document.publish()

#### Availability

Flash MX 2004.

#### Usage

document.publish()

#### Parameters

None.

#### Returns

Nothing.

#### Description

Method; publishes the document according to the active publish settings (File >Publish Settings). This method is equivalent to selecting File >Publish.

#### Example
The following example publishes the current document:

```javascript
fl.getDocumentDOM().publish();

```

---

<!-- Source: docum220.md -->

## document.publishProfiles

#### Availability

Flash MX 2004.

#### Usage

document.publishProfiles

#### Description

Read-only property; an array of the publish profile names for the document.

#### Example


The following example displays the names of the publish profiles for the document:

```javascript
var myPubProfiles = fl.getDocumentDOM().publishProfiles; 
for (var i=0; i < myPubProfiles.length; i++){
    fl.trace(myPubProfiles[i]);
}

```

---

<!-- Source: docum230.md -->

## document.punch()

#### Availability

Flash 8.

#### Usage

document.punch()

#### Parameters

None.

#### Returns

None.

#### Description

Method; uses the top selected drawing object to punch through all selected drawing objects underneath it. If no objects are selected, calling this method results in an error and the script breaks at that point.

#### Example


The following example punches through drawing objects underneath the selected drawing object:
```javascript

fl.getDocumentDOM().punch();

```
#### See also

[document.crop()](../Document_object/docume37.md), [document.deleteEnvelope()](../Document_object/docume41.md), [document.intersect()](../Document_object/docume97.md), [document.union()](../Document_object/docu6120.md), [shape.isDrawingObject](../Shape_object/shape6.md)


---

<!-- Source: docum240.md -->

## document.removeAllFilters()

#### Availability

Flash 8.

#### Usage

document.removeAllFilters()

#### Parameters

None.

#### Returns

Nothing.

#### Description

Method; removes all filters from the selected objects.

#### Example

The following example removes all filters from the selected objects:
```javascript
fl.getDocumentDOM().removeAllFilters();

```
#### See also

[document.addFilter()](../Document_object/documen3.md), [document.changeFilterOrder()](../Document_object/docume29.md), [document.disableAllFilters()](../Document_object/docume46.md), [document.getFilters()](../Document_object/docume79.md), [document.removeFilter()](../Document_object/docum270.md), [Filter object](../Filter_object/filter_summary.md)


---

<!-- Source: docum250.md -->

## document.removeDataFromDocument()

#### Availability

Flash MX 2004.

#### Usage

document.removeDataFromDocument(name)

#### Parameters

**name** A string that specifies the name of the data to remove.

#### Returns

Nothing.

#### Description

Method; removes persistent data with the specified name that has been attached to the document.

#### Example

The following example removes from the document the persistent data named "myData": 

```javascript
fl.getDocumentDOM().removeDataFromDocument("myData");

```
#### See also

[document.addDataToDocument()](../Document_object/documen1.md), [document.documentHasData()](../Document_object/docume53.md), [document.getDataFromDocument()](../Document_object/docume76.md)


---

<!-- Source: docum260.md -->

## document.removeDataFromSelection()

#### Availability

Flash MX 2004.

#### Usage

document.removeDataFromSelection(name)

#### Parameters

**name** A string that specifies the name of the persistent data to remove.

#### Returns

Nothing.

#### Description

Method; removes persistent data with the specified name that has been attached to the selection.

#### Example

The following example removes from the selection the persistent data named "myData": 

```javascript
fl.getDocumentDOM().removeDataFromSelection("myData");

```
#### See also

[document.addDataToSelection()](../Document_object/documen2.md)


---

<!-- Source: docum270.md -->

## document.removeFilter()

#### Availability

Flash 8.

#### Usage

document.removeFilter(filterIndex)

#### Parameters

**filterIndex** An integer specifying the zero-based index of the filter to remove from the selected objects.

#### Returns

Nothing.

#### Description

Method; removes the specified filter from the Filters list of the selected objects.

#### Example

The following example removes the first filter (index value 0) from the Filters list of the selected objects:

```javascript

fl.getDocumentDOM().removeFilter(0);

```
#### See also

[document.addFilter()](../Document_object/documen3.md), [document.changeFilterOrder()](../Document_object/docume29.md), [document.disableFilter()](../Document_object/docume47.md), [document.getFilters()](../Document_object/docume79.md), [document.removeAllFilters()](../Document_object/docum240.md), [Filter object](../Filter_object/filter_summary.md)


---

<!-- Source: docum280.md -->

## document.renamePublishProfile()

#### Availability

Flash MX 2004.

#### Usage

document.renamePublishProfile([profileNewName])

#### Parameters

**profileNewName** An optional parameter that specifies the new name for the profile. The new name must be unique. If the name is not specified, a default name is provided.

#### Returns

A Boolean value: true if the name is changed successfully; false otherwise.

#### Description

Method; renames the current profile.

#### Example

The following example renames the current profile to a default name and displays it:
```javascript
alert(fl.getDocumentDOM().renamePublishProfile());

```

---

<!-- Source: docum290.md -->

## document.renameScene()

#### Availability

Flash MX 2004.

#### Usage

document.renameScene(name)

#### Parameters

**name** A string that specifies the new name of the scene.

#### Returns

A Boolean value: true if the name is changed successfully; false otherwise. If the new name is not unique, for example, the method returns false.

#### Description

Method; renames the currently selected scene in the Scenes panel. The new name for the selected scene must be unique.

#### Example

The following example renames the current scene to "new name":

```javascript

var success = fl.getDocumentDOM().renameScene("new name");

```

---

<!-- Source: docum300.md -->

## document.reorderScene()

#### Availability

Flash MX 2004.

#### Usage

document.reorderScene(sceneToMove, sceneToPutItBefore)

#### Parameters

**sceneToMove** An integer that specifies which scene to move, with 0 (zero) being the first scene.
**sceneToPutItBefore** An integer that specifies the scene before which you want to move the scene specified by *sceneToMove*. Specify 0 (zero) for the first scene. For example, if you specify 1 for *sceneToMove* and 0 for *sceneToPutItBefore*, the second scene is placed before the first scene. Specify -1 to move the scene to the end.

#### Returns

Nothing.

#### Description

Method; moves the specified scene before another specified scene.

#### Example

The following example moves the second scene to before the first scene:

```javascript

fl.getDocumentDOM().reorderScene(1, 0);

```

---

<!-- Source: docum310.md -->

## document.resetOvalObject()

#### Availability

Flash CS3 Professional.

#### Usage

document.resetOvalObject()

#### Parameters

None.

#### Returns

Nothing.

#### Description

Method; sets all values in the Property inspector to default Oval object settings. If any Oval objects are selected, their properties are reset to default values as well.

#### Example

The following example resets Oval object properties in the current document to default values:

```javascript

fl.getDocumentDOM().resetOvalObject();

```
#### See also

[document.resetRectangleObject()](../Document_object/docum320.md).

<span id="document.resetRectangleObject()" class="anchor"></span>


---

<!-- Source: docum320.md -->

## document.resetRectangleObject()

#### Availability

Flash CS3 Professional.

#### Usage

document.resetRectangleObject()

#### Parameters

None.

#### Returns

Nothing.

#### Description

Method; sets all values in the Property inspector to default Rectangle object settings. If any Rectangle objects are selected, their properties are reset to default values as well.

#### Example

The following example resets Rectangle object properties in the current document to default values:

```javascript
fl.getDocumentDOM().resetRectangleObject();

```
#### See also

[document.resetOvalObject()](../Document_object/docum310.md)


---

<!-- Source: docum330.md -->

## document.resetTransformation()

#### Availability

Flash MX 2004.

#### Usage

document.resetTransformation()

#### Parameters

None.

#### Returns

Nothing.

#### Description

Method; resets the transformation matrix. This method is equivalent to selecting Modify>Transform >Remove Transform.

#### Example

The following example resets the transformation matrix for the current selection:

```javascript
fl.getDocumentDOM().resetTransformation();

```

---

<!-- Source: docum340.md -->

## document.revert()

#### Availability

Flash MX 2004.

#### Usage

document.revert()

#### Parameters

None.

#### Returns

Nothing.

#### Description

Method; reverts the specified document to its previously saved version. This method is equivalent to selecting File >Revert.

#### Example

```javascript
The following example reverts the current document to the previously saved version:
fl.getDocumentDOM().revert();

```
#### See also

[document.canRevert()](../Document_object/docume26.md), [fl.revertDocument()](../flash_object_(fl)/fl61.md).


---

<!-- Source: docum350.md -->

## document.rotate3DSelection()

#### Availability

Flash CS4 Professional.

#### Usage

document.rotate3DSelection(xyzCoordinate, bGlobalTransform)

#### Parameters

**xyzCoordinate** An XYZ coordinate point that specifies the axes for 3D rotation.
**bGlobalTransform** A Boolean value that specifies whether the transformation mode should be global (true) or local (false).

#### Returns

Nothing.

#### Description

Method: applies a 3D rotation to the selection. This method is available only for movie clips.

#### Example

```javascript
In the following example, the selection is first rotated relative to the stage (globally) and then relative to itself (locally).

var myDocument = fl.getDocumentDOM(); myDocument.rotate3DSelection({x:52.0, y:0, z:0}, true); 
myDocument.rotate3DSelection({x:52.0, y:0, z:-55.2},false);

```

---

<!-- Source: docum36.md -->

## document.sourcePath

#### Availability

Flash CS4 Professional.

#### Usage

document.sourcePath

#### Description

Property; a string that contains a list of items in the document’s ActionScript 3.0 Source path, which specifies the location of ActionScript class files. Items in the string are delimited by semi-colons. In the authoring tool, the items are specified by choosing File >Publish Settings and then choosing ActionScript 3.0 Script Settings on the Flash tab.

#### Example

```javascript
The following example adds the ./Class files folder to the document’s Source path:
var myDoc = fl.getDocumentDOM(); 
fl.trace(myDoc.sourcePath);
myDoc.sourcePath = "./Class files;" + myDoc.sourcePath; 
fl.trace(myDoc.sourcePath);

```
#### See also

[document.externalLibraryPath](../Document_object/docume69.md), [document.libraryPath](../Document_object/docume99.md), [fl.sourcePath](../flash_object_(fl)/fl72.md)


---

<!-- Source: docum360.md -->

## document.rotateSelection()

#### Availability

Flash MX 2004.

#### Usage

document.rotateSelection(angle [, rotationPoint])

#### Parameters

**angle** A floating-point value that specifies the angle of the rotation.
**rotationPoint** A string that specifies which side of the bounding box to rotate. Acceptable values are "top right", "top left", "bottom right", "bottom left", "top center", "right center", "bottom center", and "left center". If unspecified, the method uses the transformation point. This parameter is optional.

#### Returns

Nothing.

#### Description

Method; rotates the selection by a specified number of degrees. The effect is the same as using the Free Transform tool to rotate the object.

#### Example

```javascript
The following example rotates the selection by 45º around the transformation point:
fl.getDocumentDOM().rotateSelection(45);

The following example rotates the selection by 45º around the lower-left corner:
fl.getDocumentDOM().rotateSelection(45, "bottom left");

```

---

<!-- Source: docum370.md -->

## document.save()

#### Availability

Flash MX 2004.

#### Usage

document.save([bOkToSaveAs])

#### Parameters

**bOkToSaveAs** An optional parameter that, if true or omitted, and the file was never saved, opens the Save As dialog box. If false and the file was never saved, the file is not saved.

#### Returns

A Boolean value: true if the save operation completes successfully; false otherwise.

#### Description

Method; saves the document in its default location. This method is equivalent to selecting File>Save. To specify a name for the file (instead of saving it with the same name), use [fl.saveDocument()](../flash_object_(fl)/fl64.md).

***Note:** If the file is new and has not been modified or saved, or if the file has not been modified since the last time it was saved, this method has no effect and false is returned. To allow an unsaved or unmodified file to be saved, use [fl.saveDocumentAs()](../flash_object_(fl)/fl65.md).*

#### Example

The following example saves the current document in its default location:

```javascript
fl.getDocumentDOM().save();

```
#### See also

[fl.saveAll()](../flash_object_(fl)/fl63.md), [fl.saveDocument()](../flash_object_(fl)/fl64.md), [fl.saveDocumentAs()](../flash_object_(fl)/fl65.md).


---

<!-- Source: docum380.md -->

## document.saveAndCompact() - dropped

#### Availability

Flash MX 2004. *Dropped in Flash Professional CS6.*

#### Usage

document.saveAndCompact([bOkToSaveAs])

#### Parameters

**bOkToSaveAs** An optional parameter that, if true or omitted and the file was never saved, opens the Save As dialog box. If false and the file was never saved, the file is not saved. The default value is true.

#### Returns

A Boolean value: true if the save-and-compact operation completes successfully; false otherwise.

#### Description

*Dropped in Flash Professional CS6.*

#### Example

```javascript
The following example saves and compacts the current document:
fl.getDocumentDOM().saveAndCompact();

```
#### See also

[document.save()](../Document_object/docum370.md), [fl.saveDocumentAs()](../flash_object_(fl)/fl65.md), [fl.saveDocument()](../flash_object_(fl)/fl64.md), [fl.saveAll()](../flash_object_(fl)/fl63.md).


---

<!-- Source: docum390.md -->

## document.saveAsCopy()

#### Availability

Flash CS6.

#### Usage

document.saveAsCopy(URI [, selectionOnly])

#### Parameters

**URI** String: The URI to export the new FLA file to. This URI must reference a local file. Example: file:///c\|/tests/myTest.fla.
**selectionOnly** Optional. A boolean indicating whether only the current Stage selection should be saved to the new FLA file.

#### Returns

Boolean.

#### Description

Method; Saves a new FLA file based on the existing document object, with an option to save only the current selection on Stage.

#### Example

```javascript
The following example exports the current selection to a new FLA file at the URI specified by the user:
var uri = fl.browseForFileURL("save"); 
var selectionOnly = true;
fl.getDocumentDOM().saveAsCopy(uri, selectionOnly);

```

---

<!-- Source: docum400.md -->

## document.scaleSelection()

#### Availability

Flash MX 2004.

#### Usage

document.scaleSelection(xScale, yScale [, whichCorner])

#### Parameters

**xScale** A floating-point value that specifies the amount of *x* by which to scale.
**yScale** A floating-point value that specifies the amount of *y* by which to scale.
**whichCorner** A string value that specifies the edge about which the transformation occurs. If omitted, scaling occurs about the transformation point. Acceptable values are: "bottom left", "bottom right", "top right", "top left", "top center", "right center", "bottom center", and "left center". This parameter is optional.

#### Returns

Nothing.

#### Description

Method; scales the selection by a specified amount. This method is equivalent to using the Free Transform tool to scale the object.

#### Example

```javascript
The following example expands the width of the current selection to double the original width and shrinks the height to half:
fl.getDocumentDOM().scaleSelection(2.0, 0.5); The following example flips the selection vertically: 
fl.getDocumentDOM().scaleSelection(1, -1);

The following example flips the selection horizontally:
fl.getDocumentDOM().scaleSelection(-1, 1);

The following example scales the selection vertically by 1.9 from the top center:
fl.getDocumentDOM().scaleSelection(1, 1.90, 'top center');

```

---

<!-- Source: docum410.md -->

## document.screenOutline - dropped

#### Availability

Flash MX 2004. *Dropped in Adobe Animate.*

#### Usage

document.screenOutline

#### Description

*Dropped in Adobe Animate.*

#### Example

The following example displays the array of values in the screenOutline property:

```javascript

var myArray = new Array();
for(var i in fl.getDocumentDOM().screenOutline) {
    myArray.push(" "+i+" : "+fl.getDocumentDOM().screenOutline[i]) ;
}
fl.trace("Here is the property dump for screenOutline: "+myArray);

```
#### See also

[document.allowScreens() - dropped](../Document_object/docume14.md)


---

<!-- Source: docum420.md -->

## document.selectAll()

#### Availability

Flash MX 2004.

#### Usage

document.selectAll()

#### Parameters

None.

#### Returns

Nothing.

#### Description

Method; selects all items on the Stage. This method is equivalent to pressing Control+A (Windows) or Command+A (Macintosh) or selecting Edit >Select All.

#### Example

```javascript
The following example selects everything that is currently visible to the user:

fl.getDocumentDOM().selectAll();

```
#### See also

[document.selection](../Document_object/docum430.md), [document.selectNone()](../Document_object/docum440.md)

<span id="document.selection" class="anchor"></span>


---

<!-- Source: docum430.md -->

## document.selection

#### Availability

Flash MX 2004.

#### Usage

document.selection

#### Description

Property; an array of the selected objects in the document. If nothing is selected, returns an array of length zero. If no document is open, returns null.
To add objects to the array, you must first select them in one of the following ways:

-   Manually select objects on the Stage.

-   Use one of the selection methods, such as [document.setSelectionRect()](../Document_object/docu9689.md), [document.setSelectionBounds()](../Document_object/docu9658.md), [document.mouseClick()](../Document_object/docum130.md), [document.mouseDblClk()](../Document_object/docum140.md), or [document.selectAll()](../Document_object/docum420.md).

-   Manually select a frame or frames.

-   Use one of the methods of the [Timeline object](../Timeline_object/timeline_summary.md) to select a frame or frames, such as

[timeline.getSelectedFrames()](../Timeline_object/timeli25.md), [timeline.setSelectedFrames()](../Timeline_object/timeli46.md), or [timeline.selectAllFrames()](../Timeline_object/timeli42.md).

-   Specify all the elements in a particular frame (see [Element object](../Element_object/element_summary.md)). See the first example below.

-   Create an array of one or more elements and then assign that array to the document.selection array. See the third example below.

#### Example

```javascript
The following example assigns all elements on Frame 11 to the current selection (remember that index values are different from frame number values):
fl.getDocumentDOM().getTimeline().currentFrame = 10; fl.getDocumentDOM().selection = fl.getDocumentDOM().getTimeline().layers[0].frames[10].elements;

The following example creates a rectangle in the upper left corner of the Stage and a text string underneath the rectangle. Then it selects both objects using [document.setSelectionRect()](../Document_object/docu9689.md) and adds them to the document.selection array. Finally, it displays the contents of document.selection in the Output panel.
fl.getDocumentDOM().addNewRectangle({left:0, top:0, right:99, bottom:99}, 0); 
fl.getDocumentDOM().addNewText({left:-1, top:117.3, right:9.2, bottom:134.6}); fl.getDocumentDOM().setTextString('Hello World'); 
fl.getDocumentDOM().setSelectionRect({left:-28, top:-22, right:156.0, bottom:163});
var theSelectionArray = fl.getDocumentDOM().selection; 
for(var i=0;i<theSelectionArray.length;i++){
fl.trace("fl.getDocumentDOM().selection["+i+"] = " + theSelectionArray[i]);
}

The following example is an advanced example. It shows how to loop through the layer array and elements array to locate instances of a particular symbol and select them. You could extend this example to include loops for multiple frames or scenes. This example assigns all instances of the movie clip myMovieClip in the first frame to the current selection:

// Assigns the layers array to the variable "theLayers". 
var theLayers = fl.getDocumentDOM().getTimeline().layers;
// Creates an array to hold all the elements that are instances of "myMovieClip". 
var myArray = new Array();
// Counter variable 
var x = 0;
// Begin loop through all the layers.
for (var i = 0; i < theLayers.length; i++) {
// Gets the array of elements in Frame 1
// and assigns it to the array "theElems".
var theElems = theLayers[i].frames[0].elements;
// Begin loop through the elements on a layer. 
for (var c = 0; c < theElems.length; c++) {
// Checks to see if the element is of type "instance".
 if (theElems[c].elementType == "instance") {
// If the element is an instance, it checks
// if it is an instance of "myMovieClip".
if (theElems[c].libraryItem.name == "myMovieClip") {
// Assigns elements that are instances of "myMovieClip" to "myArray".
 myArray[x] = theElems[c];
// Increments counter variable.
 x++;
}
}
}
}
// Now that you have assigned all the instances of "myMovieClip" to "myArray", you then set the document.selection array equal to myArray. This selects the objects on the Stage.

 fl.getDocumentDOM().selection = myArray;

```

---

<!-- Source: docum440.md -->

## document.selectNone()

#### Availability

Flash MX 2004.

#### Usage

document.selectNone()

#### Parameters

None.

#### Returns

Nothing.

#### Description

Method; deselects any selected items.

#### Example

The following example deselects any items that are selected:

```javascript
fl.getDocumentDOM().selectNone();

```
#### See also

[document.selectAll()](../Document_object/docum420.md), [document.selection](../Document_object/docum430.md)


---

<!-- Source: docum450.md -->

## document.setAlignToDocument()

#### Availability

Flash MX 2004.

#### Usage

document.setAlignToDocument(bToStage)

#### Parameters

**bToStage** A Boolean value that, if set to true, aligns objects to the Stage. If set to false, it does not.

#### Returns

Nothing.

#### Description

Method; sets the preferences for [document.align()](../Document_object/docume13.md), [document.distribute()](../Document_object/docume49.md), [document.match()](../Document_object/docum120.md), and [document.space()](../Document_object/docum67.md) to act on the document. This method is equivalent to enabling the To Stage button in the Align panel.

#### Example

The following example enables the To Stage button in the Align panel to align objects with the Stage:

```javascript
fl.getDocumentDOM().setAlignToDocument(true);

```
#### See also

[document.getAlignToDocument()](../Document_object/docume72.md)


---

<!-- Source: docum460.md -->

## document.setBlendMode()

#### Availability

Flash 8.

#### Usage

document.setBlendMode(mode)

#### Parameters

**mode** A string that represents the desired blending mode for the selected objects. Acceptable values are "normal", "layer", "multiply", "screen", "overlay", "hardlight", "lighten", "darken", "difference", "add", "subtract", "invert", "alpha", and "erase".

#### Returns

Nothing.

#### Description

Method; sets the blending mode for the selected objects.

#### Example

The following example sets the blending mode for the selected object to "add". 

```javascript
fl.getDocumentDOM().setBlendMode("add");

```
#### See also

[document.addFilter()](../Document_object/documen3.md), [document.setFilterProperty()](../Document_object/docum520.md), [symbolInstance.blendMode](../SymbolInstance_object/symbolInstanc4.md)


---

<!-- Source: docum470.md -->

## document.setCustomFill()

#### Availability

Flash MX 2004.

#### Usage

document.setCustomFill(fill)

#### Parameters

**fill** A Fill object that specifies the fill settings to be used. See [Fill object](../Fill_object/fill_summary.md).

#### Returns

Nothing.

#### Description

Method; sets the fill settings for the Tools panel, Property inspector, and any selected shapes. This allows a script to set the fill settings before drawing the object, rather than drawing the object, selecting it, and changing the fill settings. It also lets a script change the Tools panel and Property inspector fill settings.

#### Example

The following example changes the color of the fill color swatch in the Tools panel, Property inspector, and any selected shapes to white:

```javascript
var fill = fl.getDocumentDOM().getCustomFill(); fill.color = '#FFFFFF';
fill.style = "solid"; 
fl.getDocumentDOM().setCustomFill(fill);

```
#### See also

[document.getCustomFill()](../Document_object/docume74.md)


---

<!-- Source: docum480.md -->

## document.setCustomStroke()

#### Availability

Flash MX 2004.

#### Usage

document.setCustomStroke(stroke)

#### Parameters

**stroke** A [Stroke object](../Stroke_object/stroke_summary.md).

#### Returns

Nothing.

#### Description

Method; sets the stroke settings for the Tools panel, Property inspector, and any selected shapes. This allows a script to set the stroke settings before drawing the object, rather than drawing the object, selecting it, and changing the stroke settings. It also lets a script change the Tools panel and Property inspector stroke settings.

#### Example

The following example changes the stroke thickness setting in the Tools panel, Property inspector, and any selected shapes:

```javascript

var stroke = fl.getDocumentDOM().getCustomStroke(); stroke.thickness += 2; 
fl.getDocumentDOM().setCustomStroke(stroke);

```
#### See also

[document.getCustomStroke()](../Document_object/docume75.md)


---

<!-- Source: docum490.md -->

## document.setElementProperty()

#### Availability

Flash MX 2004.

#### Usage

document.setElementProperty(property, value)

#### Parameters

**property** A string that specifies the name of the Element property to set. For a complete list of properties and values, see the Property summary table for the [Element object](../Element_object/element_summary.md).
You can’t use this method to set values for read-only properties, such as [element.elementType](../Element_object/element1.md), [element.top](../Element_object/elemen22.md), or
[element.left](../Element_object/element8.md).
**value** An integer that specifies the value to set in the specified Element property.

#### Returns

Nothing.

#### Description

Method; sets the specified Element property on selected objects in the document. This method does nothing if there is no selection.

#### Example

The following example sets the width of all selected objects to 100 and the height to 50:

```javascript
fl.getDocumentDOM().setElementProperty("width", 100);
fl.getDocumentDOM().setElementProperty("height", 50);

```

---

<!-- Source: docum5.md -->

## document.skewSelection()

#### Availability

Flash MX 2004.

#### Usage

document.skewSelection(xSkew, ySkew [, whichEdge])

#### Parameters

**xSkew** A floating-point number that specifies the amount of *x* by which to skew, measured in degrees.
**ySkew** A floating-point number that specifies the amount of *y* by which to skew, measured in degrees.
**whichEdge** A string that specifies the edge where the transformation occurs; if omitted, skew occurs at the transformation point. Acceptable values are "top center", "right center", "bottom center", and "left center". This parameter is optional.

#### Returns

Nothing.

#### Description

Method; skews the selection by a specified amount. The effect is the same as using the Free Transform tool to skew the object.

#### Example

```javascript
The following examples skew the selected object by 2.0 vertically and 1.5 horizontally. The second example transforms the object at the top center edge:
fl.getDocumentDOM().skewSelection(2.0, 1.5); fl.getDocumentDOM().skewSelection(2.0, 1.5, "top center");

```

---

<!-- Source: docum500.md -->

## document.setElementTextAttr()

#### Availability

Flash MX 2004.

#### Usage

document.setElementTextAttr(attrName, attrValue [, startIndex [, endIndex]])

#### Parameters

**attrName** A string that specifies the name of the TextAttrs property to change.
**attrValue** The value to which to set the TextAttrs property. For a list of property names and expected values, see the Property summary table for the [TextAttrs object](../TextAttrs_object/textAttrs_summary.md).
**startIndex** An integer value that specifies the index of the first character that is affected. This parameter is optional.
**endIndex** An integer value that specifies the index of the last character that is affected. This parameter is optional.

#### Returns

A Boolean value: true if at least one text attribute property is changed; false otherwise.

#### Description

Method; sets the specified textAttrs property of the selected text items to the specified value. For a list of property names and allowable values, see the Property summary table for the [TextAttrs object](../TextAttrs_object/textAttrs_summary.md). If the optional parameters are not passed, the method sets the style of the currently selected text range, or the whole text field if no text is selected. If only *startIndex* is passed, the method sets that character’s attributes. If *startIndex* and *endIndex* are passed, the method sets the attributes on the characters starting from *startIndex* up to, but not including, *endIndex*. If paragraph styles are specified, all the paragraphs that fall within the range are affected.

#### Example

The following examples set the fillColor, italic, and bold text attributes for the selected text items:

```javascript
var success = fl.getDocumentDOM().setElementTextAttr("fillColor", "#00ff00"); 
var pass = fl.getDocumentDOM().setElementTextAttr("italic", true, 10);
var ok = fl.getDocumentDOM().setElementTextAttr("bold", true, 5, 15);

```

---

<!-- Source: docum510.md -->

## document.setFillColor()

#### Availability

Flash MX 2004.

#### Usage

document.setFillColor(color)

#### Parameters

**color** The color of the fill, in one of the following formats:

-   A string in the format "#RRGGBB" or "#RRGGBBAA"

-   A hexadecimal number in the format 0xRRGGBB

-   An integer that represents the decimal equivalent of a hexadecimal number

If set to null, no fill color is set, which is the same as setting the Fill color swatch in the user interface to no fill.

#### Returns

Nothing.

#### Description

Method; changes the selection and the tools panel to the specified fill color. For additional information on changing the fill color in the Tools panel and Property inspector, see [document.setCustomFill()](../Document_object/docum470.md).

#### Example

The first three statements in the following example set the fill color using each of the different formats for specifying color. The fourth statement sets the fill to no fill.

```javascript
fl.getDocumentDOM().setFillColor("#cc00cc"); fl.getDocumentDOM().setFillColor(0xcc00cc); 
fl.getDocumentDOM().setFillColor(120000); 
fl.getDocumentDOM().setFillColor(null);

```

---

<!-- Source: docum520.md -->

## document.setFilterProperty()

#### Availability

Flash 8.

#### Usage

document.setFilterProperty(property, filterIndex, value)

#### Parameters

**property** A string specifying the property to be set. Acceptable values are "blurX", "blurY", "quality", angle", "distance", "strength", "knockout", "inner", "bevelType", "color", "shadowColor", and
"highlightColor".

**filterIndex** An integer specifying the zero-based index of the filter in the Filters list.

**value** A number or string specifying the value to be set for the specified filter property. Acceptable values depend on the property and the filter being set.

#### Returns

Nothing.

#### Description

Method; sets a specified filter property for the currently selected objects (assuming that the object supports the specified filter).

#### Example

The following example sets the quality property to 2 for the second filter (index value of 1) in the Filters list of the selected objects and then sets the shadowColor property of the first filter in the Filters list on the selected objects:

```javascript
fl.getDocumentDOM().setFilterProperty("quality", 1, 2);
fl.getDocumentDOM().setFilterProperty("shadowColor", 0, "#FF00FF");

```
#### See also

[document.addFilter()](../Document_object/documen3.md), [document.getFilters()](../Document_object/docume79.md), [document.setBlendMode()](../Document_object/docum460.md), [document.setFilters()](../Document_object/docum530.md),[Filter object](../Filter_object/filter_summary.md)

<span id="document.setFilters()" class="anchor"></span>


---

<!-- Source: docum530.md -->

## document.setFilters()

#### Availability

Flash 8.

#### Usage

document.setFilters(filterArray)

#### Parameters

**filterArray** The array of filters currently specified.

#### Returns

Nothing.

#### Description

Method; applies filters to the selected objects. Use this method after calling document.getFilters() and making any desired changes to the filters.

#### Example

The following example gets the filters on the selected object and sets the blurX property for all Blur filters to 50:

```javascript
var myFilters = fl.getDocumentDOM().getFilters();
for (i=0; i < myFilters.length; i++) {
if (myFilters[i].name == "blurFilter")
{
     myFilters[i].blurX = 50;
}
}
fl.getDocumentDOM().setFilters(myFilters);

```
#### See also

[document.addFilter()](../Document_object/documen3.md), [document.getFilters()](../Document_object/docume79.md), [document.setFilterProperty()](../Document_object/docum520.md), [Filter object](../Filter_object/filter_summary.md)


---

<!-- Source: docum540.md -->

## document.setInstanceAlpha()

#### Availability

Flash MX 2004.

#### Usage

document.setInstanceAlpha(opacity)

#### Parameters

**opacity** An integer between 0 (transparent) and 100 (completely saturated) that adjusts the transparency of the instance.

#### Returns

Nothing.

#### Description

Methods; sets the opacity of the instance.

#### Example

The following example sets the opacity of the tint to a value of 50:

```javascript
fl.getDocumentDOM().setInstanceAlpha(50);

```

---

<!-- Source: docum550.md -->

## document.setInstanceBrightness()

#### Availability

Flash MX 2004.

#### Usage

document.setInstanceBrightness(brightness)

#### Parameters

**brightness** An integer that specifies brightness as a value from -100 (black) to 100 (white).

#### Returns

Nothing.

#### Description

Method; sets the brightness for the instance.

#### Example

The following example sets the brightness for the instance to a value of 50:

```javascript
fl.getDocumentDOM().setInstanceBrightness(50);

```

---

<!-- Source: docum560.md -->

## document.setInstanceTint()

#### Availability

Flash MX 2004.

#### Usage

document.setInstanceTint( color, strength )

#### Parameters

**color** The color of the tint, in one of the following formats:

-   A string in the format "#RRGGBB" or "#RRGGBBAA"

-   A hexadecimal number in the format 0xRRGGBB

-   An integer that represents the decimal equivalent of a hexadecimal number

**strength** An integer between 0 and 100 that specifies the opacity of the tint.

#### Returns

Nothing.

#### Description

Method; sets the tint for the instance.

#### Example

The following example sets the tint for the selected instance to red with an opacity value of 50:

```javascript
fl.getDocumentDOM().setInstanceTint(0xff0000, 50);

```

---

<!-- Source: docum570.md -->

## document.setMetadata()

#### Availability

Flash 8.

#### Usage

document.setMetadata(strMetadata)

#### Parameters

**strMetadata** A string containing the XML metadata to be associated with the document. For more information, see the following description.

#### Returns

A Boolean value: true if successful; false otherwise.

#### Description

Method; sets the XML metadata for the specified document, overwriting any existing metadata. The XML passed as *strMetadata* is validated and may be rewritten before being stored. If it cannot be validated as legal XML or violates specific rules, then the XML metadata is not set and false is returned. (If false is returned, there is no way to get more detailed error information.)
***Note:** Even if true is returned, the XML that is set may not be exactly the same string that you passed in. To get the exact value to which the XML was set, use [document.getMetadata()](../Document_object/docume80.md).*
The format of the metadata is RDF that is compliant with the XMP specification. For more information about RDF and XMP, see the following sources:

-   The RDF Primer at [www.w3.org/TR/rdf-primer/](http://www.w3.org/TR/rdf-primer/)

-   The RDF specification at [www.w3.org/TR/1999/REC-rdf-syntax-19990222/](http://www.w3.org/TR/1999/REC-rdf-syntax-19990222/)

-   The XMP home page at [www.adobe.com/products/xmp/](http://www.adobe.com/products/xmp/)

#### Example


The following examples show several different legal ways to represent the same data. In all of these cases but the second one, if the data were sent to Document.setMetadata(), it would not be rewritten (aside from removing line breaks).
In the first example, metadata is in tags, with different schemas placed in separate rdf:Description tags:
```xml
<rdf:RDF xmlns:rdf='http://www.w3.org/1999/02/22-rdf-syntax-ns#'>
<rdf:Description rdf:about='' xmlns:dc='http://purl.org/dc/1.1'>
<dc:title>Simple title</dc:title>
<dc:description>Simple description</dc:description>
</rdf:Description>
<rdf:Description rdf:about='' xmlns:xmp='http://ns.adobe.com/xap/1.0/'>
<xmp:CreateDate>2004-10-12T10:29-07:00</xmp:CreateDate>
<xmp:CreatorTool>Flash Authoring WIN 8,0,0,215</xmp:CreatorTool>
</rdf:Description>
</rdf:RDF>
In the second example, metadata is in tags, but with different schemas all in one rdf:Description tag. 
This example also includes comments, which will be ignored and discarded by the Document.setMetadata():
<rdf:RDF xmlns:rdf='http://www.w3.org/1999/02/22-rdf-syntax-ns#'>

<!-- This is before the first rdf:Description tag--> <rdf:Description rdf:about='' xmlns:dc='http://purl.org/dc/1.1/'>
<dc:title>Simple title</dc:title>
<dc:description>Simple description</dc:description>
</rdf:Description>
<!-- This is between the two rdf:Description tags-->
<rdf:Description rdf:about='' xmlns:xmp='http://ns.adobe.com/xap/1.0/'>
<xmp:CreateDate>2004-10-12T10:29-07:00</xmp:CreateDate>
<xmp:CreatorTool>Flash Authoring WIN 8,0,0,215
</xmp:CreatorTool>
</rdf:Description>
<!-- This is after the second rdf:Description tag -->
</rdf:RDF>
In the third example, metadata is in attributes, and different schemas are all in one rdf:Description tag:
<rdf:RDF xmlns:rdf='http://www.w3.org/1999/02/22-rdf-syntax-ns\#'>
<rdf:Description rdf:about='' xmlns:dc='http://purl.org/dc/1.1/' dc:title='Simple title' dc:description='Simple description' />
<rdf:Description rdf:about='' xmlns:xmp='http://ns.adobe.com/xap/1.0/' xmp:CreateDate='2004-10-12T10:29-07:00' xmp:CreatorTool='Flash Authoring WIN 8,0,0,215' />
</rdf:RDF>
```
#### See also

[document.getMetadata()](../Document_object/docume80.md)


---

<!-- Source: docum580.md -->

## document.setMobileSettings()

#### Availability

Flash CS3 Professional.

#### Usage

document.setMobileSettings(xmlString)

#### Parameters

**xmlString** A string that describes the XML settings in a mobile FLA file.

#### Returns

A value of true if the settings were successfully set; false otherwise.

#### Description

Method; sets the value of an XML settings string in a mobile FLA file. (Most mobile FLA files have an XML string that describes the settings within the document.)

#### Example

The following example sets the XML settings string for a mobile FLA file. Note that the example below represents a single line of code.

```javascript

fl.getDocumentDOM().setMobileSettings("<? xml version="1.0" encoding="UTF-16" standalone="no"
?><mobileSettings><contentType id="standalonePlayer" name="Standalone Player"/><testDevices><testDevice id="1170" name="Generic Phone" selected="yes"/></testDevices><outputMsgFiltering info="no" trace="yes" warning="yes"/><testWindowState height="496" splitterClosed="No" splitterXPos="400" width="907"/></mobileSettings>");

```
#### See also

[document.getMobileSettings()](../Document_object/docume81.md)


---

<!-- Source: docum590.md -->

## document.setOvalObjectProperty()

#### Availability

Flash CS3 Professional.

#### Usage

document.setOvalObjectProperty(propertyName, value)

#### Parameters

**propertyName** A string that specifies the property to be set. For acceptable values, see the Property summary table for the [Oval object](../Oval_object/OvalObject_summary.md).
**value** The value to be assigned to the property. Acceptable values vary depending on the property you specify in
*propertyName*.

#### Returns

Nothing.

#### Description

Method; specifies a value for a specified property of primitive Oval objects.

#### Example


See individual properties in [Oval object](../Oval_object/OvalObject_summary.md) for examples.


#### See also

[Oval object](../Oval_object/OvalObject_summary.md), [shape.isOvalObject](../Shape_object/shape9.md)


---

<!-- Source: docum600.md -->

## document.setPlayerVersion()

#### Availability

Flash CS3 Professional.

#### Usage

document.setPlayerVersion(version)

#### Parameters

**version** A string that represents the version of Flash Player targeted by the specified document. Acceptable values are "FlashLite", "FlashLite11", "FlashLite20" , "FlashLite30", "1", "2", "3", "4", "5", "6", "7", "8", "9", "FlashPlayer10", "FlashPlayer10.3", "FlashPlayer11.1", "FlashPlayer11.2", "FlashPlayer11.3","FlashPlayer11.4", "FlashPlayer11.5", "FlashPlayer11.6", "FlashPlayer11.7", "AdobeAIR1_1", "AdobeAIR1_1", "AdobeAIR2_5", "AdobeAIR3_6", "android3_6", and "PF13_6".

#### Returns

A value of true if the player version was successfully set; false otherwise.

#### Description

Method; sets the version of the Flash Player targeted by the specified document. This is the same value as that set in the Publish Settings dialog box.

#### Example

The following example targets Flash Player 6 as the player version for the current document:

```javascript
fl.getDocumentDOM().setPlayerVersion("6");

```
#### See also

[document.getPlayerVersion()](../Document_object/docume82.md)


---

<!-- Source: docum67.md -->

## document.space()

#### Availability

Flash MX 2004.

#### Usage

document.space(direction [, bUseDocumentBounds])

#### Parameters

**direction** A string that specifies the direction in which to space the objects in the selection. Acceptable values are
"horizontal" or "vertical".
**bUseDocumentBounds** A Boolean value that, when set to true*,* spaces the objects to the document bounds. Otherwise, the method uses the bounds of the selected objects. The default is false. This parameter is optional.

#### Returns

Nothing.

#### Description

Method; spaces the objects in the selection evenly.

#### Example

```javascript
The following example spaces the objects horizontally, relative to the Stage:
fl.getDocumentDOM().space("horizontal",true);
The following example spaces the objects horizontally, relative to each other:
fl.getDocumentDOM().space("horizontal");
The following example spaces the objects horizontally, relative to each other, with *bUseDcoumentBounds* expressly set to false:
fl.getDocumentDOM().space("horizontal",false);

```
#### See also

[document.getAlignToDocument()](../Document_object/docume72.md), [document.setAlignToDocument()](../Document_object/docum450.md)


---

<!-- Source: docum83.md -->

## document.straightenSelection()

#### Availability

Flash MX 2004.

#### Usage

document.straightenSelection()

#### Parameters

None.

#### Returns

Nothing.

#### Description

Method; straightens the currently selected strokes. This method is equivalent to using the Straighten button in the Tools panel.

#### Example

```javascript
The following example straightens the curve of the current selection:
fl.getDocumentDOM().straightenSelection();

```

---

<!-- Source: docume10.md -->

## document.addNewRectangle()

#### Availability

Flash MX 2004.

#### Usage

document.addNewRectangle(boundingRectangle, roundness [, bSuppressFill [, bSuppressStroke]])

#### Parameters

**boundingRectangle** A rectangle that specifies the bounds within which the new rectangle is added, in the format
{left:value1,top:value2,right:value3,bottom:value4}. The left and top values specify the location of the upper left corner (e.g., left:0,top:0 represents the upper left corner of the Stage) and the right and bottom values specify the location of the lower-right corner. Therefore, the width of the rectangle is the difference in value between left and right, and the height of the rectangle is the difference in value between top and bottom.
In other words, the rectangle bounds do not all correspond to the values shown in the Property inspector. The left and top values correspond to the X and Y values in the Property inspector, respectively. However, the right and bottom values don’t correspond to the W and H values in the Property inspector. For example, consider a rectangle with the following bounds:
{left:10,top:10,right:50,bottom:100}
This rectangle would display the following values in the Property inspector:
X = 10, Y = 10, W = 40, H = 90
**roundness** An integer value from 0 to 999 that specifies the roundness to use for the corners. The value is specified as number of points. The greater the value, the greater the roundness.
**bSuppressFill** A Boolean value that, if set to true, causes the method to create the shape without a fill. The default value is false. This parameter is optional.
**bSuppressStroke** A Boolean value that, if set to true, causes the method to create the rectangle without a stroke**.** The default value is false. This parameter is optional.

#### Returns

Nothing.

#### Description

Method; adds a new rectangle or rounded rectangle, fitting it into the specified bounds. This method performs the same operation as the Rectangle tool. The method uses the document’s current default stroke and fill attributes and adds the rectangle on the current frame and layer. If both *bSuppressFill* and *bSuppressStroke* are set to true, the method has no effect.

#### Example

```javascript
The following example adds a new rectangle with no rounding on the corners within the specified coordinates; it is 100 pixels in width and in height:

fl.getDocumentDOM().addNewRectangle({left:0,top:0,right:100,bottom:100},0);

The following example adds a new rectangle with no rounding on the corners and without a fill; it is 100 pixels in width and 200 in height:

fl.getDocumentDOM().addNewRectangle({left:10,top:10,right:110,bottom:210},0, true);

The following example adds a new rectangle with no rounding on the corners and without a stroke; it is 200 pixels in width and 100 in height:

fl.getDocumentDOM().addNewRectangle({left:20,top:20,right:220,bottom:120},0, false, true);

```
#### See also

[document.addNewPrimitiveRectangle()](../Document_object/documen8.md)


---

<!-- Source: docume11.md -->

## document.addNewScene()

#### Availability

Flash MX 2004.

#### Usage

document.addNewScene([name])

#### Parameters

**name** Specifies the name of the scene. If you do not specify a name, a new scene name is generated.

#### Returns

A Boolean value: true if the scene is added successfully; false otherwise.

#### Description

Method; adds a new scene ([Timeline object](../Timeline_object/timeline_summary.md)) as the next scene after the currently selected scene and makes the new scene the currently selected scene. If the specified scene name already exists, the scene is not added and the method returns an error.

#### Example

```javascript
The following example adds a new scene named myScene after the current scene in the current document. The variable success will be true when the new scene is created; false otherwise.

var success = fl.getDocumentDOM().addNewScene("myScene");

The following example adds a new scene using the default naming convention. If only one scene exists, the newly created scene is named "Scene 2".

fl.getDocumentDOM().addNewScene();

```

---

<!-- Source: docume12.md -->

## document.addNewText()

#### Availability

Flash MX 2004; optional *text* parameter added in Flash CS3 Professional.

#### Usage

document.addNewText(boundingRectangle [, text ])

#### Parameters

**boundingRectangle** Specifies the size and location of the text field. For information on the format of *boundingRectangle*, see [document.addNewRectangle()](../Document_object/docume10.md).

**text** An optional string that specifies the text to place in the field. If you omit this parameter, the selection in the Tools panel switches to the Text tool. Therefore, if you don’t want the selected tool to change, pass a value for *text*.

#### Returns

Nothing.

#### Description

Method; inserts a new text field and optionally places text into the field. If you omit the *text* parameter, you can call
[document.setTextString()](../Document_object/docu9908.md) to populate the text field.

#### Example


The following example creates a new text field in the upper left corner of the Stage and sets the text string to "Hello World":

```javascript
fl.getDocumentDOM().addNewText({left:0, top:0, right:100, bottom:100} , "Hello World!" );
fl.getDocumentDOM().setTextString('Hello World!');

```
#### See also

[document.setTextString()](../Document_object/docu9908.md)


---

<!-- Source: docume13.md -->

## document.align()

#### Availability

Flash MX 2004.

#### Usage

document.align(alignmode [, bUseDocumentBounds])

#### Parameters

**alignmode** A string that specifies how to align the selection. Acceptable values are "left", "right", "top", "bottom", "vertical center", and "horizontal center".
**bUseDocumentBounds** A Boolean value that, if set to true, causes the method to align to the bounds of the document. Otherwise, the method uses the bounds of the selected objects. The default is false. This parameter is optional.

#### Returns

Nothing.

#### Description

Method; aligns the selection.

#### Example


The following example aligns objects to the left and to the Stage. This is equivalent to turning on the To Stage setting in the Align panel and clicking the Align to Left button:

```javascript
fl.getDocumentDOM().align("left", true);
```
#### See also

[document.distribute()](../Document_object/docume49.md), [document.getAlignToDocument()](../Document_object/docume72.md), [document.setAlignToDocument()](../Document_object/docum450.md)


---

<!-- Source: docume14.md -->

## document.allowScreens() - dropped

#### Availability

Flash MX 2004. *Dropped in Adobe Animate.*

#### Usage

document.allowScreens()

#### Parameters

None.

#### Returns

A Boolean value: true if document.screenOutline can be used safely; false otherwise.

#### Description

*Dropped in Adobe Animate.*

#### Example


The following example determines whether screens methods can be used in the current document:

```javascript
if(fl.getDocumentDOM().allowScreens()) { 
    fl.trace("screen outline is available.");
}
else {
    fl.trace("whoops, no screens.");
    }

```
#### See also

[document.screenOutline - dropped](../Document_object/docum410.md)


---

<!-- Source: docume15.md -->

## document.arrange()

#### Availability

Flash MX 2004.

#### Usage

document.arrange(arrangeMode)

#### Parameters

**arrangeMode** Specifies the direction in which to move the selection. Acceptable values are "back", "backward", "forward", and "front". It provides the same capabilities as these options provide on the Modify >Arrange menu.

#### Returns

Nothing.

#### Description

Method; arranges the selection on the Stage. This method applies only to non-shape objects.

#### Example


The following example moves the current selection to the front:
```javascript

fl.getDocumentDOM().arrange("front");

```

---

<!-- Source: docume16.md -->

## document.as3AutoDeclare

#### Availability

Flash CS3 Professional.

#### Usage

document.as3AutoDeclare

#### Description

Property; a Boolean value that describes whether the instances placed on the Stage are automatically added to user- defined timeline classes. The default value is true.

#### Example


The following example specifies that instances placed on the Stage in the current document must be manually added to user-defined timeline classes.
```javascript

fl.getDocumentDOM().as3AutoDeclare=false;

```

---

<!-- Source: docume17.md -->

## document.as3Dialect

#### Availability

Flash CS3 Professional.

#### Usage

document.as3Dialect

#### Description

Property; a string that describes the ActionScript 3.0 "dialect" being used in the specified document. The default value is "AS3". If you wish to allow prototype classes, as permitted in earlier ECMAScript specifications, set this value to "ES".

#### Example


The following example specifies that the dialect being used in the current document is ECMAScript:

```javascript

fl.getDocumentDOM().as3Dialect="ES";

```
#### See also

[document.asVersion](../Document_object/docume21.md)


---

<!-- Source: docume18.md -->

## document.as3ExportFrame

#### Availability

Flash CS3 Professional.

#### Usage

document.as3ExportFrame

#### Description

Property; an integer that specifies in which frame to export ActionScript 3.0 classes. By default, classes are exported in Frame 1.

#### Example


The following example changes the frame in which classes are exported from 1 (the default) to 5.
```javascript
var myDocument = fl.getDocumentDOM();
fl.outputPanel.trace("'Export classes in frame:' value before modification is " + myDocument.as3ExportFrame);
myDocument.as3ExportFrame = 5;
fl.outputPanel.trace("'Export classes in frame:' value after modification is " + myDocument.as3ExportFrame);

```

---

<!-- Source: docume19.md -->

## document.as3StrictMode

#### Availability

Flash CS3 Professional.

#### Usage

document.as3StrictMode

#### Description

Property; a Boolean value that specifies whether the ActionScript 3.0 compiler should compile with the Strict Mode option turned on (true) or off (false). Strict Mode causes warnings to be reported as errors, which means that compilation will not succeed if those errors exist. The default value is true.

#### Example


The following example turns off the Strict Mode compiler option.
```javascript
var myDocument = fl.getDocumentDOM();
fl.outputPanel.trace("Strict Mode value before modification is " + myDocument.as3StrictMode); myDocument.as3StrictMode = false;
fl.outputPanel.trace("Strict Mode value after modification is " + myDocument.as3StrictMode);

```
#### See also

[document.as3WarningsMode](../Document_object/docume20.md)

<span id="document.as3WarningsMode" class="anchor"></span>


---

<!-- Source: docume20.md -->

## document.as3WarningsMode

#### Availability

Flash CS3 Professional.

#### Usage

document.as3WarningsMode

#### Description

Property; a Boolean value that specifies whether the ActionScript 3.0 compiler should compile with the Warnings Mode option turned on (true) or off (false). Warnings Mode causes extra warnings to be reported that are useful for discovering incompatibilities when updating ActionScript 2.0 code to ActionScript 3.0. The default value is true.

#### Example


The following example turns off the Warnings Mode compiler option.
```javascript
var myDocument = fl.getDocumentDOM();
fl.outputPanel.trace("Warnings Mode value before modification is " + myDocument.as3WarningsMode);
myDocument.as3WarningsMode = false;
fl.outputPanel.trace("Warnings Mode value after modification is " + myDocument.as3WarningsMode);

```
#### See also

[document.as3StrictMode](../Document_object/docume19.md)


---

<!-- Source: docume21.md -->

## document.asVersion

#### Availability

Flash CS3 Professional.

#### Usage

document.asVersion

#### Description

Property; an integer that specifies which version of ActionScript is being used in the specified document. Acceptable values are 1, 2, and 3.
To determine the targeted player version for the specified document, use [document.getPlayerVersion()](../Document_object/docume82.md); this method returns a string, so it can be used by Flash® Lite™ players.

#### Example


The following example sets the version of ActionScript in the current document to ActionScript 2.0 if it is currently set as ActionScript 1.0.
```javascript
if(fl.getDocumentDOM().asVersion == 1){
    fl.getDocumentDOM().asVersion = 2;
}

```
#### See also

[document.as3Dialect](../Document_object/docume17.md), [document.getPlayerVersion()](../Document_object/docume82.md)


---

<!-- Source: docume22.md -->

## document.autoLabel

#### Availability

Flash MX 2004.

#### Usage

document.autoLabel

#### Description

Property; a Boolean value that is equivalent to the Auto Label check box in the Accessibility panel. You can use this property to tell Flash to automatically label objects on the Stage with the text associated with them.

#### Example

```javascript
The following example gets the value of the autoLabel property and displays the result in the Output panel:

var isAutoLabel = fl.getDocumentDOM().autoLabel; 
fl.trace(isAutoLabel);

The following example sets the autoLabel property to true, telling Flash to automatically label objects on the Stage:

fl.getDocumentDOM().autoLabel = true;

```

---

<!-- Source: docume23.md -->

## document.backgroundColor

#### Availability

Flash MX 2004.

#### Usage

document.backgroundColor

#### Description

Property; the color of the background, in one of the following formats:

-   A string in the format "#RRGGBB" or "#RRGGBBAA"

-   A hexadecimal number in the format 0xRRGGBB

-   An integer that represents the decimal equivalent of a hexadecimal number

#### Example

The following example sets the background color to black:

```javascript
fl.getDocumentDOM().backgroundColor = '#000000';

```

---

<!-- Source: docume24.md -->

## document.breakApart()

#### Availability

Flash MX 2004.

#### Usage

document.breakApart()

#### Parameters

None.

#### Returns

Nothing.

#### Description

Method; performs a break-apart operation on the current selection.

#### Example

The following example breaks apart the current selection:
```javascript
fl.getDocumentDOM().breakApart();

```

---

<!-- Source: docume25.md -->

## document.canEditSymbol()

#### Availability

Flash MX 2004.

#### Usage

document.canEditSymbol()

#### Parameters

None.

#### Returns

A Boolean value: true if the Edit Symbols menu and functionality are available for use; false otherwise.

#### Description

Method; indicates whether the Edit Symbols menu and functionality are enabled. This is not related to whether the selection can be edited. This method should not be used to test whether fl.getDocumentDOM().enterEditMode() is allowed.

#### Example


The following example displays in the Output panel the state of the Edit Symbols menu and functionality:

```javascript
fl.trace("fl.getDocumentDOM().canEditSymbol() returns: " + fl.getDocumentDOM().canEditSymbol());

```

---

<!-- Source: docume26.md -->

## document.canRevert()

#### Availability

Flash MX 2004.

#### Usage

document.canRevert()

#### Parameters

None.

#### Returns

A Boolean value: true if you can use the document.revert() or fl.revertDocument() methods successfully;
false otherwise.

#### Description

Method; determines whether you can use the [document.revert()](../Document_object/docum340.md) or [fl.revertDocument()](../flash_object_(fl)/fl61.md) method successfully.

#### Example

The following example checks whether the current document can revert to the previously saved version. If so,fl.getDocumentDOM().revert() restores the previously saved version.

```javascript
if(fl.getDocumentDOM().canRevert()){ 
    fl.getDocumentDOM().revert();
}

```

---

<!-- Source: docume27.md -->

## document.canTestMovie()

#### Availability

Flash MX 2004.

#### Usage

document.canTestMovie()

#### Parameters

None.

#### Returns

A Boolean value: true if you can use the [document.testMovie()](../Document_object/docu5948.md) method successfully: false otherwise.

#### Description

Method; determines whether you can use the [document.testMovie()](../Document_object/docu5948.md) method successfully.

#### Example

```javascript
The following example tests whether fl.getDocumentDOM().testMovie() can be used. If so, it calls the method.

if(fl.getDocumentDOM().canTestMovie())
{ 
    fl.getDocumentDOM().testMovie();
}

```
#### See also

[document.canTestScene()](../Document_object/docume28.md), [document.testScene()](../Document_object/docu5979.md)

<span id="document.canTestScene()" class="anchor"></span>


---

<!-- Source: docume28.md -->

## document.canTestScene()

#### Availability

Flash MX 2004.

#### Usage

document.canTestScene()

#### Parameters

None.

#### Returns

A Boolean value: true if you can use the document.testScene() method successfully; false otherwise.

#### Description

Method; determines whether you can use the [document.testScene()](../Document_object/docu5979.md) method successfully.

#### Example

```javascript
The following example first tests whether fl.getDocumentDOM().testScene() can be used successfully. If so, it calls the method.

if(fl.getDocumentDOM().canTestScene()){ 
    fl.getDocumentDOM().testScene();
}

```
#### See also

[document.canTestMovie()](../Document_object/docume27.md), [document.testMovie()](../Document_object/docu5948.md)


---

<!-- Source: docume29.md -->

## document.changeFilterOrder()

#### Availability

Flash 8.

#### Usage

document.changeFilterOrder(oldIndex, newIndex)

#### Parameters

**oldIndex** An integer that represents the current zero-based index position of the filter you want to reposition in the Filters list.
**newIndex** An integer that represents the new index position of the filter in the list.

#### Returns

Nothing.

#### Description

Method; changes the index of the filter in the Filters list. Any filters above or below *newIndex* are shifted up or down accordingly. For example, using the filters shown below, if you issue the command fl.getDocumentDOM().changeFilterOrder(3, 0), the filters are rearranged as follows:

| **Before**                                               | **After**                                                |
|----------------------------------------------------------|----------------------------------------------------------|
| blurFilterdropShadowFilterglowFiltergradien tBevelFilter | gradientBevelFilterblurFilterdropShadowFilterglo wFilter |

If you then issue the command fl.getDocumentDOM().changeFilterOrder(0, 2), the filters are rearranged as follows:

| **Before**                                               | **After**                                                |
|----------------------------------------------------------|----------------------------------------------------------|
| gradientBevelFilterblurFilterdropShadowFilt erglowFilter | blurFilterdropShadowFiltergradientBevelFilterglo wFilter |

#### Example

```javascript
The following example moves the filter that is currently in the second position in the Filters list to the first position:

fl.getDocumentDOM().changeFilterOrder(1,0);

```
#### See also

[document.addFilter()](../Document_object/documen3.md), [document.disableFilter()](../Document_object/docume47.md), [document.enableFilter()](../Document_object/docume59.md), [document.getFilters()](../Document_object/docume79.md), [document.removeFilter()](../Document_object/docum270.md), [Filter object](../Filter_object/filter_summary.md)


---

<!-- Source: docume30.md -->

## document.clipCopy()

#### Availability

Flash MX 2004.

#### Usage

document.clipCopy()

#### Parameters

None.

#### Returns

Nothing.

#### Description

Method; copies the current selection from the document to the Clipboard. To copy a string to the Clipboard, use [fl.clipCopyString()](../flash_object_(fl)/fl6.md).

#### Example

```javascript
The following example copies the current selection from the document to the Clipboard:

fl.getDocumentDOM().clipCopy();

```
#### See also

[document.clipCut()](../Document_object/docume31.md), [document.clipPaste()](../Document_object/docume32.md)

<span id="document.clipCut()" class="anchor"></span>


---

<!-- Source: docume31.md -->

## document.clipCut()

#### Availability

Flash MX 2004.

#### Usage

document.clipCut()

#### Parameters

None.

#### Returns

Nothing.

#### Description

Method; cuts the current selection from the document and writes it to the Clipboard.

#### Example

```javascript
The following example cuts the current selection from the document and writes it to the Clipboard:
fl.getDocumentDOM().clipCut();

```
#### See also

[document.clipCopy()](../Document_object/docume30.md), [document.clipPaste()](../Document_object/docume32.md), [fl.clipCopyString()](../flash_object_(fl)/fl6.md).

<span id="document.clipPaste()" class="anchor"></span>


---

<!-- Source: docume32.md -->

## document.clipPaste()

#### Availability

Flash MX 2004.

#### Usage

document.clipPaste([bInPlace])

#### Parameters

**bInPlace** A Boolean value that, when set to true, causes the method to perform a paste-in-place operation. The default value is false, which causes the method to perform a paste operation to the center of the document. This parameter is optional.

#### Returns

Nothing.

#### Description

Method; pastes the contents of the Clipboard into the document.

#### Example

```javascript
The following example pastes the Clipboard contents to the center of the document:
fl.getDocumentDOM().clipPaste();

The following example pastes the Clipboard contents in place in the current document:
fl.getDocumentDOM().clipPaste(true);

```
#### See also

[document.clipCopy()](../Document_object/docume30.md), [document.clipCut()](../Document_object/docume31.md), [fl.clipCopyString()](../flash_object_(fl)/fl6.md).


---

<!-- Source: docume33.md -->

## document.close()

#### Availability

Flash MX 2004.

#### Usage

document.close([bPromptToSaveChanges])

#### Parameters

**bPromptToSaveChanges** A Boolean value that, when set to true, causes the method to prompt the user with a dialog box if there are unsaved changes in the document. If *bPromptToSaveChanges* is set to false, the user is not prompted to save any changed documents. The default value is true. This parameter is optional.

#### Returns

Nothing.

#### Description

Method; closes the specified document.

#### Example

```javascript
The following example closes the current document and prompts the user with a dialog box to save changes:
fl.getDocumentDOM().close();

The following example closes the current document without saving changes:
fl.getDocumentDOM().close(false);

```

---

<!-- Source: docume34.md -->

## document.convertLinesToFills()

#### Availability

Flash MX 2004.

#### Usage

document.convertLinesToFills()

#### Parameters

None.

#### Returns

Nothing.

#### Description

Method; converts lines to fills on the selected objects.

#### Example

```javascript
The following example converts the current selected lines to fills:

fl.getDocumentDOM().convertLinesToFills();

```

---

<!-- Source: docume35.md -->

## document.convertSelectionToBitmap()

#### Availability

Adobe Animate.

#### Usage

document.convertSelectionToBitmap()

#### Parameters

None

#### Returns

Boolean.

#### Description

Method; converts selected objects in the current frame to a bitmap and inserts the bitmap into the library.

#### Example

```javascript
The following example illustrates use of this method:
fl.getDocumentDOM().convertSelectionToBitmap();

```

---

<!-- Source: docume36.md -->

## document.convertToSymbol()

#### Availability

Flash MX 2004.

#### Usage

document.convertToSymbol(type, name, registrationPoint)

#### Parameters

**type** A string that specifies the type of symbol to create. Acceptable values are "movie clip", "button", and "graphic".

**name** A string that specifies the name for the new symbol, which must be unique. You can submit an empty string to have this method create a unique symbol name for you.

**registration point** Specifies the point that represents the 0,0 location for the symbol. Acceptable values are: "top left", "top center", "top right", "center left", "center", "center right", "bottom left", "bottom center", and "bottom right".

#### Returns

An object for the newly created symbol, or null if it cannot create the symbol.

#### Description

Method; converts the selected Stage item(s) to a new symbol. For information on defining linkage and shared asset properties for a symbol, see [Item object](../Item_object/item_summary.md).

#### Example

```javascript
The following examples create a movie clip symbol with a specified name, a button symbol with a specified name, and a movie clip symbol with a default name:

newMc = fl.getDocumentDOM().convertToSymbol("movie clip", "mcSymbolName", "top left"); 
newButton = fl.getDocumentDOM().convertToSymbol("button", "btnSymbolName", "bottom right"); 
newClipWithDefaultName = fl.getDocumentDOM().convertToSymbol("movie clip", "", "top left");

```

---

<!-- Source: docume37.md -->

## document.crop()

#### Availability

Flash 8.

#### Usage

document.crop()

#### Parameters

None.

#### Returns

None.

#### Description

Method; uses the top selected drawing object to crop all selected drawing objects underneath it. If no objects are selected, calling this method results in an error and the script breaks at that point.

#### Example

```javascript
The following example crops the currently selected objects:
fl.getDocumentDOM().crop();

```
#### See also

[document.deleteEnvelope()](../Document_object/docume41.md), [document.intersect()](../Document_object/docume97.md), [document.punch()](../Document_object/docum230.md), [document.union()](../Document_object/docu6120.md), [shape.isDrawingObject](../Shape_object/shape6.md)


---

<!-- Source: docume38.md -->

## document.currentPublishProfile

#### Availability

Flash MX 2004.

#### Usage

document.currentPublishProfile

#### Description

Property; a string that specifies the name of the active publish profile for the specified document.

#### Example

```javascript
The following example adds a new publish profile with the default name and then displays the name of the profile in the Output panel:
fl.getDocumentDOM().addNewPublishProfile(); 
fl.outputPanel.trace(fl.getDocumentDOM().currentPublishProfile);

The following example changes the selected publish profile to "Default": 
fl.getDocumentDOM().currentPublishProfile = "Default";

```

---

<!-- Source: docume39.md -->

## document.currentTimeline

#### Availability

Flash MX 2004.

#### Usage

document.currentTimeline

#### Description

Property; an integer that specifies the index of the active timeline. You can set the active timeline by changing the value of this property; the effect is almost equivalent to calling [document.editScene()](../Document_object/docume57.md). The only difference is that you don’t get an error message if the index of the timeline is not valid; the property is simply not set, which causes silent failure.

#### Example

```javascript
The following example displays the index of the current timeline:

var myCurrentTL = fl.getDocumentDOM().currentTimeline; 
fl.trace("The index of the current timeline is: "+ myCurrentTL);

The following example changes the active timeline from the main timeline to a scene named "myScene": var i = 0;
var curTimelines = fl.getDocumentDOM().timelines; 
while(i < fl.getDocumentDOM().timelines.length){
    if(curTimelines[i].name == "myScene"){ 
        fl.getDocumentDOM().currentTimeline = i;
    }
++i;
}

```
#### See also

[document.getTimeline()](../Document_object/docume88.md)


---

<!-- Source: docume40.md -->

## document.debugMovie()

#### Availability

Flash Professional CS5.

#### Usage

document.DebugMovie([Boolean abortIfErrorsExist])

#### Description

Method; Invokes the Debug Movie command on the document.

#### Parameters

**abortIfErrorsExist** Boolean; the default value is false. If set to true, the debug session will not start and the .swf window will not open if there are compiler errors. Compiler warnings will not abort the command.

#### Example

```javascript
The following example opens the current document in debug mode, but aborts the operation if compiler errors exist:
fl.getDocumentDOM().debugMovie(1);

```

---

<!-- Source: docume41.md -->

## document.deleteEnvelope()

#### Availability

Flash 8.

#### Usage

document.deleteEnvelope()

#### Parameters

None.

#### Returns

None.

#### Description

Method; deletes the envelope (bounding box that contains one or more objects) from the selected objects. If no objects are selected, calling this method results in an error and the script breaks at that point.

#### Example

```javascript
The following example deletes the envelope from the selected objects:
fl.getDocumentDOM().deleteEnvelope();

```
#### See also

[document.crop()](../Document_object/docume37.md), [document.intersect()](../Document_object/docume97.md), [document.punch()](../Document_object/docum230.md), [document.union()](../Document_object/docu6120.md), [shape.isDrawingObject](../Shape_object/shape6.md)


---

<!-- Source: docume42.md -->

## document.deletePublishProfile()

#### Availability

Flash MX 2004.

#### Usage

document.deletePublishProfile()

#### Parameters

None.

#### Returns

An integer that is the index of the new current profile. If a new profile is not available, the method leaves the current profile unchanged and returns its index.

#### Description

Method; deletes the currently active profile, if there is more than one. There must be at least one profile left.

#### Example

```javascript
The following example deletes the currently active profile, if there is more than one, and displays the index of the new currently active profile:
alert(fl.getDocumentDOM().deletePublishProfile());

```
#### See also

[document.addNewPublishProfile()](../Document_object/documen9.md)


---

<!-- Source: docume43.md -->

## document.deleteScene()

#### Availability

Flash MX 2004.

#### Usage

document.deleteScene()

#### Parameters

None.

#### Returns

A Boolean value: true if the scene is successfully deleted; false otherwise.

#### Description

Method; deletes the current scene ([Timeline object](../Timeline_object/timeline_summary.md)) and, if the deleted scene was not the last one, sets the next scene as the current Timeline object. If the deleted scene was the last one, it sets the first object as the current Timeline object. If only one Timeline object (scene) exists, it returns the value false.

#### Example

```javascript
Assuming there are three scenes (Scene0, Scene1, and Scene2) in the current document, the following example makes Scene2 the current scene and then deletes it:

fl.getDocumentDOM().editScene(2);
var success = fl.getDocumentDOM().deleteScene();

```

---

<!-- Source: docume44.md -->

## document.deleteSelection()

#### Availability

Flash MX 2004.

#### Usage

document.deleteSelection()

#### Parameters

None.

#### Returns

Nothing.

#### Description

Method; deletes the current selection on the Stage. Displays an error message if there is no selection.

#### Example

```javascript
The following example deletes the current selection in the document:
fl.getDocumentDOM().deleteSelection();

```

---

<!-- Source: docume45.md -->

## document.description

#### Availability

Flash MX 2004.

#### Usage

document.description

#### Description

Property; a string that is equivalent to the Description field in the Accessibility panel. The description is read by the screen reader.

#### Example

```javascript
The following example sets the description of the document:
fl.getDocumentDOM().description= "This is the main movie";

The following example gets the description of the document and displays it in the Output panel:
fl.trace(fl.getDocumentDOM().description);

```

---

<!-- Source: docume46.md -->

## document.disableAllFilters()

#### Availability

Flash 8.

#### Usage

document.disableAllFilters()

#### Parameters

None.

#### Returns

Nothing.

#### Description

Method; disables all filters on the selected objects.

#### Example

```javascript
The following example disables all filters on the selected objects:
fl.getDocumentDOM().disableAllFilters();

```
#### See also

[document.addFilter()](../Document_object/documen3.md), [document.changeFilterOrder()](../Document_object/docume29.md), [document.disableFilter()](../Document_object/docume47.md), [document.disableOtherFilters()](../Document_object/docume48.md), [document.enableAllFilters()](../Document_object/docume58.md), [document.getFilters()](../Document_object/docume79.md), [document.removeAllFilters()](../Document_object/docum240.md), [Filter object](../Filter_object/filter_summary.md)

<span id="document.disableFilter()" class="anchor"></span>


---

<!-- Source: docume47.md -->

## document.disableFilter()

#### Availability

Flash 8.

#### Usage

document.disableFilter(filterIndex)

#### Parameters

**filterIndex** An integer representing the zero-based index of the filter in the Filters list.

#### Returns

Nothing.

#### Description

Method; disables the specified filter in the Filters list.

#### Example

```javascript
The following example disables the first and third filters (index values of 0 and 2) in the Filters list from the selected objects:
fl.getDocumentDOM().disableFilter(0); 
fl.getDocumentDOM().disableFilter(2);

```
#### See also

[document.addFilter()](../Document_object/documen3.md), [document.changeFilterOrder()](../Document_object/docume29.md), [document.disableAllFilters()](../Document_object/docume46.md), [document.disableOtherFilters()](../Document_object/docume48.md), [document.enableFilter()](../Document_object/docume59.md), [document.getFilters()](../Document_object/docume79.md), [document.removeFilter()](../Document_object/docum270.md), [Filter object](../Filter_object/filter_summary.md)

<span id="document.disableOtherFilters()" class="anchor"></span>


---

<!-- Source: docume48.md -->

## document.disableOtherFilters()

#### Availability

Flash 8.

#### Usage

document.disableOtherFilters(enabledFilterIndex)

#### Parameters

**enabledFilterIndex** An integer representing the zero-based index of the filter that should remain enabled after other filters are disabled.

#### Returns

Nothing.

#### Description

Method; disables all filters except the one at the specified position in the Filters list.

#### Example

```javascript
The following example disables all filters except the second filter in the list (index value of 1):
fl.getDocumentDom().disableOtherFilters(1);

```
#### See also

[document.addFilter()](../Document_object/documen3.md), [document.changeFilterOrder()](../Document_object/docume29.md), [document.disableAllFilters()](../Document_object/docume46.md), [document.disableFilter()](../Document_object/docume47.md), [document.enableFilter()](../Document_object/docume59.md), [document.getFilters()](../Document_object/docume79.md), [document.removeFilter()](../Document_object/docum270.md), [Filter object](../Filter_object/filter_summary.md)


---

<!-- Source: docume49.md -->

## document.distribute()

#### Availability

Flash MX 2004.

#### Usage

document.distribute(distributemode [, bUseDocumentBounds])

#### Parameters

**distributemode** A string that specifies where to distribute the selected objects. Acceptable values are "left edge", "horizontal center", "right edge", "top edge", "vertical center", and "bottom edge".
**bUseDocumentBounds** A Boolean value that, when set to true, distributes the selected objects using the bounds of the document. Otherwise, the method uses the bounds of the selected objects. The default is false.

#### Returns

Nothing.

#### Description

Method; distributes the selection.

#### Example

```javascript
The following example distributes the selected objects by their top edges:
fl.getDocumentDOM().distribute("top edge");

The following example distributes the selected objects by their top edges and expressly sets the *bUseDcoumentBounds*
parameter:
fl.getDocumentDOM().distribute("top edge", false);

The following example distributes the selected objects by their top edges, using the bounds of the document:
fl.getDocumentDOM().distribute("top edge", true);

```
#### See also

[document.getAlignToDocument()](../Document_object/docume72.md), [document.setAlignToDocument()](../Document_object/docum450.md)


---

<!-- Source: docume50.md -->

## document.distributeToKeyframes()

#### Availability

Adobe Animate.

#### Usage

document.distributeToKeyframes()

#### Parameters

None.

#### Returns

Nothing.

#### Description

Method; performs a distribute-to-keyframes operation on the current selection—equivalent to selecting Distribute to KeyFrames. A new keyframe is created for every object. New keyframes are created on the active layer immediately after the active frame

#### Example

```javascript
The following example distributes the current selection to keyframes:
if(fl.getDocumentDOM().canDistributeToKeyframes()) fl.getDocumentDOM().distributeToKeyframes();

```

---

<!-- Source: docume51.md -->

## document.distributeToLayers()

#### Availability

Flash MX 2004.

#### Usage

document.distributeToLayers()

#### Parameters

None.

#### Returns

Nothing.

#### Description

Method; performs a distribute-to-layers operation on the current selection—equivalent to selecting Distribute to Layers. This method displays an error if there is no selection.

#### Example

```javascript
The following example distributes the current selection to layers:
fl.getDocumentDOM().distributeToLayers();

```

---

<!-- Source: docume52.md -->

## document.docClass

#### Availability

Flash CS3 Professional.

#### Usage

document.docClass

#### Description

Property; a string that specifies the top-level ActionScript 3.0 class associated with the document. If the document isn’t configured to use ActionScript 3.0, this property is ignored.

#### Example

```javascript
The following example specifies that the ActionScript 3.0 class associated with the document is com.mycompany.ManagerClass, which is defined in com/mycompany/ManagerClass.as:

var myDocument = fl.getDocumentDOM();
// set the property
myDocument.docClass = "com.mycompany.ManagerClass";
// get the property
fl.outputPanel.trace("document.docClass has been set to " + myDocument.docClass);

```
#### See also

[item.linkageBaseClass](../Item_object/item5.md)


---

<!-- Source: docume53.md -->

## document.documentHasData()

#### Availability

Flash MX 2004.

#### Usage

document.documentHasData(name)

#### Parameters

**name** A string that specifies the name of the data to check.

#### Returns

A Boolean value: true if the document has persistent data; false otherwise.

#### Description

Method; checks the document for persistent data with the specified name.

#### Example

```javascript
The following example checks the document for persistent data with the name "myData": 
var hasData = fl.getDocumentDOM().documentHasData("myData");

```
#### See also

[document.addDataToDocument()](../Document_object/documen1.md), [document.getDataFromDocument()](../Document_object/docume76.md), [document.removeDataFromDocument()](../Document_object/docum250.md)


---

<!-- Source: docume54.md -->

## document.duplicatePublishProfile()

#### Availability

Flash MX 2004.

#### Usage

document.duplicatePublishProfile([profileName])

#### Parameters

**profileName** A string that specifies the unique name of the duplicated profile. If you do not specify a name, the method uses the default name. This parameter is optional.

#### Returns

An integer that is the index of the new profile in the profile list. Returns -1 if the profile cannot be duplicated.

#### Description

Method; duplicates the currently active profile and gives the duplicate version focus.

#### Example

```javascript
The following example duplicates the currently active profile and displays the index of the new profile in the Output panel:

fl.trace(fl.getDocumentDOM().duplicatePublishProfile("dup profile"));

```

---

<!-- Source: docume55.md -->

## document.duplicateScene()

#### Availability

Flash MX 2004.

#### Usage

document.duplicateScene()

#### Parameters

None.

#### Returns

A Boolean value: true if the scene is duplicated successfully; false otherwise.

#### Description

Method; makes a copy of the currently selected scene, giving the new scene a unique name and making it the current scene.

#### Example

```javascript
The following example duplicates the second scene in the current document:

fl.getDocumentDOM().editScene(1); //Set the middle scene to current scene.
 var success = fl.getDocumentDOM().duplicateScene();

```

---

<!-- Source: docume56.md -->

## document.duplicateSelection()

#### Availability

Flash MX 2004.

#### Usage

document.duplicateSelection()

#### Parameters

None.

#### Returns

Nothing.

#### Description

Method; duplicates the selection on the Stage.

#### Example

```javascript
The following example duplicates the current selection, which is similar to Alt-clicking and then dragging an item:
fl.getDocumentDOM().duplicateSelection();

```

---

<!-- Source: docume57.md -->

## document.editScene()

#### Availability

Flash MX 2004.

#### Usage

document.editScene(index)

#### Parameters

**index** A zero-based integer that specifies which scene to edit.

#### Returns

Nothing.

#### Description

Method; makes the specified scene the currently selected scene for editing.

#### Example

Assuming that there are three scenes (Scene0, Scene1, and Scene2) in the current document, the following example makes Scene2 the current scene and then deletes it:

```javascript
fl.getDocumentDOM().editScene(2);
fl.getDocumentDOM().deleteScene();

```

---

<!-- Source: docume58.md -->

## document.enableAllFilters()

#### Availability

Flash 8.

#### Usage

document.enableAllFilters()

#### Parameters

None.

#### Returns

Nothing.

#### Description

Method; enables all the filters on the Filters list for the selected objects.

#### Example


The following example enables all the filters on the Filters list for the selected objects:
```javascript
fl.getDocumentDOM().enableAllFilters();

```
#### See also

[document.addFilter()](../Document_object/documen3.md), [document.changeFilterOrder()](../Document_object/docume29.md), [document.disableAllFilters()](../Document_object/docume46.md), [document.enableFilter()](../Document_object/docume59.md), [document.getFilters()](../Document_object/docume79.md), [document.removeAllFilters()](../Document_object/docum240.md), [Filter object](../Filter_object/filter_summary.md)

<span id="document.enableFilter()" class="anchor"></span>


---

<!-- Source: docume59.md -->

## document.enableFilter()

#### Availability

Flash 8.

#### Usage

document.enableFilter(filterIndex)

#### Parameters

**filterIndex** An integer specifying the zero-based index of the filter in the Filters list to enable.

#### Returns

Nothing.

#### Description

Method; enables the specified filter for the selected objects.

#### Example


The following example enables the second filter of the selected objects:
```javascript
fl.getDocumentDOM().enableFilter(1);

```
#### See also

[document.addFilter()](../Document_object/documen3.md), [document.changeFilterOrder()](../Document_object/docume29.md), [document.disableFilter()](../Document_object/docume47.md), [document.enableAllFilters()](../Document_object/docume58.md), [document.getFilters()](../Document_object/docume79.md), [document.removeFilter()](../Document_object/docum270.md), [Filter object](../Filter_object/filter_summary.md)


---

<!-- Source: docume60.md -->

## document.enterEditMode()

#### Availability

Flash MX 2004.

#### Usage

document.enterEditMode([editMode])

#### Parameters

**editMode** A string that specifies the editing mode. Acceptable values are "inPlace" or "newWindow". If no parameter is specified, the default is symbol-editing mode. This parameter is optional.

#### Returns

Nothing.

#### Description

Method; switches the authoring tool into the editing mode specified by the parameter. If no parameter is specified, the method defaults to symbol-editing mode, which has the same result as right-clicking the symbol to invoke the context menu and selecting Edit.

#### Example
```javascript

The following example puts Flash in edit-in-place mode for the currently selected symbol:
fl.getDocumentDOM().enterEditMode('inPlace');

The following example puts Flash in edit-in-new-window mode for the currently selected symbol:
fl.getDocumentDOM().enterEditMode('newWindow');

```
#### See also

[document.exitEditMode()](../Document_object/docume61.md)

<span id="document.exitEditMode()" class="anchor"></span>


---

<!-- Source: docume61.md -->

## document.exitEditMode()

#### Availability

Flash MX 2004.

#### Usage

document.exitEditMode()

#### Parameters

None.

#### Returns

Nothing.

#### Description

Method; exits from symbol-editing mode and returns focus to the next level up from the editing mode. For example, if you are editing a symbol inside another symbol, this method takes you up a level from the symbol you are editing, into the parent symbol.

#### Example


The following example exits symbol-editing mode:
```javascript
fl.getDocumentDOM().exitEditMode();

```
#### See also

[document.enterEditMode()](../Document_object/docume60.md)


---

<!-- Source: docume62.md -->

## document.exportInstanceToLibrary()

#### Availability

Flash CS6.

#### Usage

document.exportInstanceToLibrary(frameNumber, bitmapName)

#### Parameters

**frameNumber** Integer indicating the frame to be exported.
**bitmapName** A string representing the name of the bitmap to be added to the Library.

#### Returns

Nothing.

#### Description

Method; Exports a selected instance of a movie clip, graphic, or button symbol on the Stage to a bitmap in Library.

#### Example


The following example exports the selected item on frame 1 to the library and assigns the new bitmap the name "myTestBitmap":
```javascript
fl.getDocumentDOM().exportInstanceToLibrary(1, "myTestBitmap");

```

---

<!-- Source: docume63.md -->

## document.exportInstanceToPNGSequence()

#### Availability

Flash CS6.

#### Usage

document.exportInstanceToPNGSequence(outputURI, startFrameNum, endFrameNum, matrix)

#### Parameters

**outputURI** String: The URI to export the PNG Sequence files to. This URI must reference a local file. Example: file:///c\|/tests/mytest.png.

**startFrameNum** Optional. An integer indicating the first frame to be exported. The default is 1.

**endFrameNum** Optional. An Integer indicating the last frame to be exported. The default is 99999.

**matrix** Optional. A matrix to be appended to the exported PNG sequence.

#### Returns

Nothing.

#### Description

Method; Exports a selected instance of a movie clip, graphic, or button symbol on the Stage to a series of PNG files on disk. If no startFrameNum or endFrameNum is given, the output includes all frames in the Timeline.

#### Example


The following example exports the entire Timeline to a numbered PNG sequence starting with the file name "myTest.png":
```javascript
fl.getDocumentDOM().exportInstanceToPNGSequence("file:///c\|/tests/mytest.png");

```

---

<!-- Source: docume64.md -->

## document.exportPNG()

#### Availability

Flash 8.

#### Usage

document.exportPNG([fileURI [, bCurrentPNGSettings [, bCurrentFrame]]])

#### Parameters

**fileURI** A string, expressed as a file:/// URI, that specifies the filename for the exported file. If *fileURI* is an empty string or is not specified, Flash displays the Export Movie dialog box.

**bCurrentPNGSettings** A Boolean value that specifies whether to use the current PNG publish settings (true) or to display the Export PNG dialog box (false). This parameter is optional. The default value is false.

**bCurrentFrame** A Boolean value that specifies whether to export only the current frame (true) or to export all frames, with each frame as a separate PNG file (false). This parameter is optional. The default value is false.

#### Returns

A Boolean value of true if the file is successfully exported as a PNG file; false otherwise.

#### Description

Method; exports the document as one or more PNG files. If *fileURI* is specified and the file already exists, it is overwritten without warning.

***Note:** If fileURI is empty and bCurrentFrame is true , the Export Movie dialog box does not display and Flash saves the exported PNG file in the same location as the .fla file.*

***Note:** If bCurrentPNGSettings is false and bCurrentFrame is true, the Export PNG dialog box does not display and Flash uses the current PNG publish settings.*

#### Example


The following example exports the current frame in the current document to myFile.png, using the current PNG publish settings:

```javascript
fl.getDocumentDOM().exportPNG("file:///C\|/myProject/myFile.png", true, true);

```

---

<!-- Source: docume65.md -->

## document.exportPublishProfile()

#### Availability

Flash MX 2004.

#### Usage

document.exportPublishProfile(fileURI)

#### Parameters

**fileURI** A string, expressed as a file:/// URI, that specifies the path of the XML file to which the profile is exported.

#### Returns

Nothing.

#### Description

Method; exports the currently active profile to an XML file.

#### Example

The following example exports the currently active profile to the file named profile.xml in the
folder /Documents and Settings/username/Desktop on the C drive:


```javascript
fl.getDocumentDOM().exportPublishProfile('file:///C\|/Documents and Settings/username/Desktop/profile.xml');

```
#### See also

[document.exportPublishProfileString()](../Document_object/docume66.md), [document.importPublishProfile()](../Document_object/docume94.md)

<span id="document.exportPublishProfileString()" class="anchor"></span>


---

<!-- Source: docume66.md -->

## document.exportPublishProfileString()

#### Availability

Flash CS4 Professional.

#### Usage

document.exportPublishProfileString( [profileName] )

#### Parameters

**profileName** A string that specifies the name of the profile to export to an XML string. This parameter is optional.

#### Returns

An XML string.

#### Description

Method: returns a string that specifies, in XML format, the specified profile. If you don’t pass a value for *profileName*, the current profile is exported.

#### Example


The following example stores an XML string that represents the current profile in a variable named profileXML and then displays it in the Output panel:

```javascript
var profileXML=fl.getDocumentDOM().exportPublishProfileString(); 
fl.trace(profileXML);

```
#### See also

[document.exportPublishProfile()](../Document_object/docume65.md), [document.importPublishProfileString()](../Document_object/docume95.md)


---

<!-- Source: docume67.md -->

## document.exportSWF()

#### Availability

Flash MX 2004.

#### Usage

document.exportSWF([fileURI [, bCurrentSettings]])

#### Parameters

**fileURI** A string, expressed as a file:/// URI, that specifies the name of the exported file. If *fileURI* is empty or not specified, Flash displays the Export Movie dialog box. This parameter is optional.
**bCurrentSettings** A Boolean value that, when set to true, causes Flash to use current SWF publish settings. Otherwise, Flash displays the Export Flash Player dialog box. The default is false. This parameter is optional.

#### Returns

Nothing.

#### Description

Method; exports the document in the Flash SWF format.

#### Example

```javascript
The following example exports the document to the specified file location with the current publish settings:
fl.getDocumentDOM().exportSWF("file:///C\|/Documents and Settings/joe\_user/Desktop/qwerty.swf", true);

The following example displays the Export Movie dialog box and the Export Flash Player dialog box and then exports the document based on the specified settings:
fl.getDocumentDOM().exportSWF("", false);

The following example displays the Export Movie dialog box and the Export Flash Player dialog box and then exports the document based on the specified settings:
fl.getDocumentDOM().exportSWF();

```

---

<!-- Source: docume68.md -->

## <img src="/media/image1.png" style="width:0.25005in;height:0.25005in" />document.exportVideo()

#### Availability

Adobe Animate.

#### Usage

exportVideo( fileURI [, convertInAdobeMediaEncoder] [, transparent] [, stopAtFrame] [, stopAtFrameOrTime] )

#### Parameters

**fileURI** A string, expressed as a file:/// URI, that specifies the fully qualified path to which the video is saved.
**convertInAdobeMediaEncoder** A boolen value that specifies whether or not to send the recorded video to Adobe Media Encoder. The default value is true, which sends the video to Adobe Media Encoder. This parameter is optional.
**transparent** A boolean value that specifies whether or not the background should be included in the video. The default value is false, which includes the movie background in the video. This parameter is optional.
**stopAtFrame** A boolean value that specifies whether the video should be recorded until it reaches a certain frame or a specific time. The default value is true, stop when a certain frame is reached. This parameter is optional.
**stopAtFrameOrTime** If stopAtFrame is true, this is an int specifying the number of frames to record. If stopAtFrame is false, this is the number of milliseconds to record. The default value is 0 which, if stopAtFrame is true, will record all the frames in the main timeline. This parameter is optional.

#### Returns

Nothing.

#### Description

Method; exports a video from the document and optionally sends it to Adobe Media Encoder to convert the video.

#### Example


The following example illustrates the use of this method:

```javascript
fl.getDocumentDOM().exportVideo("file:///C\|/myProject/myVideo.mov");

```

---

<!-- Source: docume69.md -->

## document.externalLibraryPath

#### Availability

Flash CS4 Professional.

#### Usage

document.externalLibraryPath

#### Description

Property; a string that contains a list of items in the document’s ActionScript 3.0 External library path, which specifies the location of SWC files used as runtime shared libraries. Items in the string are delimited by semi-colons. In the authoring tool, the items are specified by choosing File >Publish Settings and then choosing ActionScript 3.0 Script Settings on the Flash tab.

#### Example


The following example sets the document’s External library path to "." and "../mySWCLibrary":

```javascript
var myDocument = fl.getDocumentDOM(); 
myDocument.externalLibraryPath = ".;../mySWCLibrary"; 
fl.trace(myDocument.externalLibraryPath);

```
#### See also

[document.libraryPath](../Document_object/docume99.md), [document.sourcePath](../Document_object/docum36.md),[fl.externalLibraryPath](../flash_object_(fl)/fl23.md).


---

<!-- Source: docume70.md -->

## document.forceSimple

#### Availability

Flash MX 2004.

#### Usage

document.forceSimple

#### Description

Property; a Boolean value that specifies whether the children of the specified object are accessible. This is equivalent to the inverse logic of the Make Child Objects Accessible setting in the Accessibility panel. That is, if forceSimple is true, it is the same as the Make Child Object Accessible option being unchecked. If forceSimple is false, it is the same as the Make Child Object Accessible option being checked.

#### Example

```javascript
The following example sets the areChildrenAccessible variable to the value of the forceSimple property. A value of false means the children are accessible.
var areChildrenAccessible = fl.getDocumentDOM().forceSimple;

The following example sets the forceSimple property to allow the children of the document to be accessible:
fl.getDocumentDOM().forceSimple = false;

```

---

<!-- Source: docume71.md -->

## document.frameRate

#### Availability

Flash MX 2004.

#### Usage

document.frameRate

#### Description

Property; a float value that specifies the number of frames displayed per second when the SWF file plays; the default is 12. Setting this property is the same as setting the default frame rate in the Document Properties dialog box (Modify>Document) in the FLA file.

#### Example


The following example sets the frame rate to 25.5 frames per second:
```javascript
fl.getDocumentDOM().frameRate = 25.5;

```

---

<!-- Source: docume72.md -->

## document.getAlignToDocument()

#### Availability

Flash MX 2004.

#### Usage

document.getAlignToDocument()

#### Parameters

None.

#### Returns

A Boolean value: true if the preference is set to align the objects to the Stage; false otherwise.

#### Description

Method; identical to retrieving the value of the To Stage button in the Align panel. Gets the preference that can be used for [document.align()](../Document_object/docume13.md), [document.distribute()](../Document_object/docume49.md), [document.match()](../Document_object/docum120.md), and [document.space()](../Document_object/docum67.md) methods on the document.

#### Example


The following example retrieves the value of the To Stage button in the Align panel. If the return value is true, the To Stage button is active; otherwise, it is not.

```javascript
var isAlignToDoc = fl.getDocumentDOM().getAlignToDocument(); 
fl.getDocumentDOM().align("left", isAlignToDoc);

```
#### See also

[document.setAlignToDocument()](../Document_object/docum450.md)


---

<!-- Source: docume73.md -->

## document.getBlendMode()

#### Availability

Flash 8.

#### Usage

document.getBlendMode()

#### Parameters

None.

#### Returns

A string that specifies the blending mode for the selected objects. If more than one object is selected and they have different blending modes, the string reflects the blending mode of the object with the highest depth.
***Note:** The return value is unpredictable if the selection contains objects that don’t support blending modes, or that have a blending mode value of "normal".*

#### Description

Method; returns a string that specifies the blending mode for the selected objects.

#### Example


The following example displays the name of the blending mode in the Output panel:

```javascript
fl.trace(fl.getDocumentDom().getBlendMode());

```

---

<!-- Source: docume74.md -->

## document.getCustomFill()

#### Availability

Flash MX 2004.

#### Usage

document.getCustomFill([objectToFill])

#### Parameters

**objectToFill** A string that specifies the location of the fill object. The following values are valid:

-   "toolbar" returns the fill object of the Tools panel and Property inspector.

-   "selection" returns the fill object of the selection.

If you omit this parameter, the default value is "selection". If there is no selection, the method returns
undefined. This parameter is optional.

#### Returns

The [Fill object](../Fill_object/fill_summary.md) specified by the *objectToFill* parameter, if successful; otherwise, it returns undefined.

#### Description

Method; retrieves the fill object of the selected shape or, if specified, of the Tools panel and Property inspector.

#### Example

```javascript
The following example gets the fill object of the selection and then changes the selection’s color to white:
var fill = fl.getDocumentDOM().getCustomFill(); 
fill.color = '#FFFFFF';
fill.style = "solid"; 
fl.getDocumentDOM().setCustomFill(fill);

The following example returns the fill object of the Tools panel and Property inspector and then changes the color swatch to a linear gradient:
var fill = fl.getDocumentDOM().getCustomFill("toolbar"); 
fill.style = "linearGradient";
fill.colorArray = [ 0x00ff00, 0xff0000, 0x0000ff ]; 
fill.posArray = [0, 100, 200]; 
fl.getDocumentDOM().setCustomFill( fill );

```
#### See also

[document.setCustomFill()](../Document_object/docum470.md)


---

<!-- Source: docume75.md -->

## document.getCustomStroke()

#### Availability

Flash MX 2004.

#### Usage

document.getCustomStroke([locationOfStroke])

#### Parameters

**locationOfStroke** A string that specifies the location of the stroke object. The following values are valid:

-   "toolbar", if set, returns the stroke object of the Tools panel and Property inspector.

-   "selection", if set, returns the stroke object of the selection.

If you omit this parameter, it defaults to "selection". If there is no selection, it returns undefined. This parameter is optional.

#### Returns

The [Stroke object](../Stroke_object/stroke_summary.md) specified by the *locationOfStroke* parameter, if successful; otherwise, it returns undefined.

#### Description

Returns the stroke object of the selected shape or, if specified, of the Tools panel and Property inspector.

#### Example

```javascript
The following example returns the current stroke settings of the selection and changes the stroke thickness to 2:
var stroke = fl.getDocumentDOM().getCustomStroke("selection"); 
stroke.thickness = 2; 
fl.getDocumentDOM().setCustomStroke(stroke);

The following example returns the current stroke settings of the Tools panel and Property inspector and sets the stroke color to red:
var stroke = fl.getDocumentDOM().getCustomStroke("toolbar"); 
stroke.color = "#FF0000"; 
fl.getDocumentDOM().setCustomStroke(stroke);

```
#### See also

[document.setCustomStroke()](../Document_object/docum480.md)


---

<!-- Source: docume76.md -->

## document.getDataFromDocument()

#### Availability

Flash MX 2004.

#### Usage

document.getDataFromDocument(name)

#### Parameters

**name** A string that specifies the name of the data to return.

#### Returns

The specified data.

#### Description

Method; retrieves the value of the specified data. The type returned depends on the type of data that was stored.

#### Example


The following example adds an integer value of 12 to the current document and uses this method to display the value in the Output panel:

```javascript
fl.getDocumentDOM().addDataToDocument("myData", "integer", 12); 
fl.trace(fl.getDocumentDOM().getDataFromDocument("myData"));

```
#### See also

[document.addDataToDocument()](../Document_object/documen1.md), [document.documentHasData()](../Document_object/docume53.md), [document.removeDataFromDocument()](../Document_object/docum250.md)


---

<!-- Source: docume77.md -->

## document.getElementProperty()

#### Availability

Flash MX 2004.

#### Usage

document.getElementProperty(propertyName)

#### Parameters

**propertyName** A string that specifies the name of the Element property for which to retrieve the value.

#### Returns

The value of the specified property. Returns null if the property is an indeterminate state, as when multiple elements are selected with different property values. Returns undefined if the property is not a valid property of the selected element.

#### Description

Method; gets the specified Element property for the current selection. For a list of acceptable values, see the Property summary table for the [Element object](../Element_object/element_summary.md).

#### Example

```javascript
The following example gets the name of the Element property for the current selection:

// elementName = the instance name of the selected object.
var elementName = fl.getDocumentDOM().getElementProperty("name");

```
#### See also

[document.setElementProperty()](../Document_object/docum490.md)


---

<!-- Source: docume78.md -->

## document.getElementTextAttr()

#### Availability

Flash MX 2004.

#### Usage

document.getElementTextAttr(attrName [, startIndex [, endIndex]])

#### Parameters

**attrName** A string that specifies the name of the TextAttrs property to be returned. For a list of property names and expected values, see the Property summary table for the [TextAttrs object](../TextAttrs_object/textAttrs_summary.md).
**startIndex** An integer that specifies the index of first character, with 0 (zero) specifying the first position. This parameter is optional.
**endIndex** An integer that specifies the index of last character. This parameter is optional.

#### Returns

If one text field is selected, the property is returned if there is only one value used within the text. Returns undefined if there are several values used inside the text field. If several text fields are selected, and all the text alignment values are equal, the method returns this value. If several text fields are selected, but all the text alignment values are not equal, the method returns undefined. If the optional arguments are not passed, these rules apply to the range of text currently selected or the whole text field if the text is not currently being edited. If only *startIndex* is passed, the property of the character to the right of the index is returned, if all the selected Text objects match values. If *startIndex* and *endIndex* are passed, the value returned reflects the entire range of characters from *startIndex* up to, but not including, *endIndex*.

#### Description

Method; gets a specific TextAttrs property of the selected Text objects. Selected objects that are not text fields are ignored. For a list of property names and expected values, see the Property summary table for the [TextAttrs object](../TextAttrs_object/textAttrs_summary.md). See also [document.setElementTextAttr()](../Document_object/docum500.md).

#### Example

```javascript
The following example gets the size of the selected text fields:
fl.getDocumentDOM().getElementTextAttr("size");

The following example gets the color of the character at index 3 in the selected text fields:
fl.getDocumentDOM().getElementTextAttr("fillColor", 3);

The following example gets the font name of the text from index 2 up to, but not including, index 10 of the selected text fields:
fl.getDocumentDOM().getElementTextAttr("face", 2, 10);

```

---

<!-- Source: docume79.md -->

## document.getFilters()

#### Availability

Flash 8.

#### Usage

document.getFilters()

#### Parameters

None.

#### Returns

An array that contains a list of filters applied to the currently selected objects.

#### Description

Method; returns an array that contains the list of filters applied to the currently selected objects. If multiple objects are selected and they don’t have identical filters, this method returns the list of filters applied to the first selected object.

#### Example


See  [document.setFilters()](../Document_object/docum530.md).

#### See also

[document.addFilter()](../Document_object/documen3.md), [document.changeFilterOrder()](../Document_object/docume29.md), [document.setFilters()](../Document_object/docum530.md), [Filter object](../Filter_object/filter_summary.md)


---

<!-- Source: docume80.md -->

## document.getMetadata()

#### Availability

Flash 8.

#### Usage

document.getMetadata()

#### Parameters

None.

#### Returns

A string containing the XML metadata associated with the document or an empty string if there is no metadata.

#### Description

Method; returns a string containing the XML metadata associated with the document, or an empty string if there is no metadata.

#### Example


The following example displays XML metadata from the current document in the Output panel:
```javascript

fl.trace("XML Metadata is :" + fl.getDocumentDOM().getMetadata());

```
#### See also

[document.setMetadata()](../Document_object/docum570.md)


---

<!-- Source: docume81.md -->

## document.getMobileSettings()

#### Availability

Flash CS3 Professional.

#### Usage

document.getMobileSettings()

#### Parameters

None.

#### Returns

A string that represents the XML settings for the document. If no value has been set, returns an empty string.

#### Description

Method; returns the mobile XML settings for the document.

#### Example

```javascript
The following example displays the XML settings string for the current document:

fl.trace(fl.getDocumentDOM().getMobileSettings());
//traces a string like the following

"<? xml version="1.0" encoding="UTF-16" standalone="no"
?><mobileSettings><contentType id="standalonePlayer" name="Standalone Player"/><testDevices><testDevice id="1170" name="Generic Phone" selected="yes"/></testDevices><outputMsgFiltering info="no" trace="yes" warning="yes"/><testWindowState height="496" splitterClosed="No" splitterXPos="400" width="907"/></mobileSettings>"

```
#### See also

[document.setMobileSettings()](../Document_object/docum580.md)


---

<!-- Source: docume82.md -->

## document.getPlayerVersion()

#### Availability

Flash CS3 Professional.

#### Usage

document.getPlayerVersion()

#### Parameters

None.

#### Returns

A string that represents the Flash Player version specified by using document.setPlayerVersion(). If no value has been set, returns the value specified in the Publish Settings dialog box.

#### Description

Method; returns a string that represents the targeted player version for the specified document. For a list of values that this method can return, see [document.setPlayerVersion()](../Document_object/docum600.md).
To determine which version of ActionScript is being targeted in the specified file, use [document.asVersion](../Document_object/docume21.md).

#### Example


The following example illustrates targeting specified player versions for the current document and then retrieving those values:

```javascript
fl.getDocumentDOM().setPlayerVersion("6");
var version = fl.getDocumentDOM().getPlayerVersion(); 
fl.trace(version) // displays "6" 
fl.getDocumentDOM().setPlayerVersion("FlashPlayer10"); 
var version = fl.getDocumentDOM().getPlayerVersion(); 
fl.trace(version) // displays ""FlashPlayer10""

```
#### See also

[document.setPlayerVersion()](../Document_object/docum600.md)


---

<!-- Source: docume83.md -->

## document.getPublishDocumentData()

#### Availability

Adobe Animate.

#### Usage

document.getPublishDocumentData(format)

#### Parameters

**format** A string that specifies the publishing format.
***Note:** _EMBED_SWF\_ is a special built-in publishing format for persistent data. If set, the persistent data will be embedded in the SWF file every time a document is published. The persistent data can then be accessed via ActionScript with the .metaData property. This requires SWF version 19 (Flash Player 11.6) and above and is only for symbol instances onstage. Other custom publishing formats may be specified for custom JSFL scripts if this method is called with the same format.*

#### Returns

Boolean; True if publishing of the specified persistent data is enabled for the specified format in this document. Otherwise False.

#### Description

Method; Indicates whether publishing of the specified persistent data is enabled for the specified format in this document.

#### Example

```javascript
The following example illustrates the use of this method:
var doc = fl.getDocumentDOM();
// set the data 
if (doc) {
// get the first selected element
var elem = fl.getDocumentDOM().getTimeline().layers[0].frames[0].elements[0]; 
if (elem) {
// add persistent data "myAlign" of "left" 
elem.setPersistentData( "myAlign", "string", "left" );
// enable publishing of persistent data to SWF for the element
 elem.setPublishPersistentData("myAlign", "_EMBED_SWF_", true);
// enable publishing to SWF for entire document
 doc.setPublishDocumentData("_EMBED_SWF_", true);
}
}
// example getting data
if (doc && doc.getPublishDocumentData("_EMBED_SWF_")) {
// get the first selected element
var elem = fl.getDocumentDOM().getTimeline().layers[0].frames[0].elements[0];
if (elem && elem.hasPersistentData("myAlign") && elem.getPublishPersistentData("myAlign", "_EMBED_SWF_")) {
alert("elem.metaData.myAlign = '" + elem.getPersistentData("myAlign") + "' will be embedded in SWF when published.");
}
}

```
#### See also

[document.setPublishDocumentData()](../Document_object/docu9627.md)


---

<!-- Source: docume84.md -->

## document.getSelectionRect()

#### Availability

Flash MX 2004.

#### Usage

document.getSelectionRect()

#### Parameters

None.

#### Returns

The bounding rectangle of the current selection, or 0 if nothing is selected. For information on the format of the return value, see [document.addNewRectangle()](../Document_object/docume10.md).

#### Description

Method; gets the bounding rectangle of the current selection. If a selection is non-rectangular, the smallest rectangle encompassing the entire selection is returned. The rectangle is based on the document space or, when in edit mode, the registration point (also *origin point* or *zero point*) of the symbol being edited.

#### Example


The following example gets the bounding rectangle for the current selection and then displays its properties:

```javascript
var newRect = fl.getDocumentDOM().getSelectionRect();
var outputStr = "left: " + newRect.left + " top: " + newRect.top + " right: " + newRect.right
+ " bottom: " + newRect.bottom; 
alert(outputStr);

```
#### See also

[document.selection](../Document_object/docum430.md), [document.setSelectionRect()](../Document_object/docu9689.md)


---

<!-- Source: docume85.md -->

## document.getSWFPathFromProfile()

#### Availability

Flash Professional CS6.

#### Usage

document.getSWFPathFromProfile()

#### Parameters

None.

#### Returns

The full path to the SWF file that is set in the current Publish profile.

#### Description

Method; gets the path to the SWF file that is set in the current Publish profile.

#### Example


The following example displays the full path to the SWF file as defined in the Publish profile:
```javascript
fl.trace("the current Publish Setting's SWF file path is: " + fl.getDocumentDOM().getSWFPathFromProfile());

```

---

<!-- Source: docume86.md -->

## document.getTelemetryForSwf()

#### Availability

Adobe Animate.

#### Usage

document.getTelemetryForSwf( )

#### Parameters

None.

#### Returns

Returns boolean. Returns true if the "Enable detailed telemetry" checkbox is selected; otherwise false.

#### Description

Method; Indicates whether if the "Enable detailed telemetry" checkbox is selected in the Publish Settings dialog.

#### Example


The following example calls getTelemetryFromSwf():
```javascript
fl.trace("is detailed telemetry enabled for this doc: " + fl.getDocumentDOM().getTelemetryForSwf());

```

---

<!-- Source: docume87.md -->

## document.getTextString()

#### Availability

Flash MX 2004.

#### Usage

document.getTextString([startIndex [, endIndex]])

#### Parameters

**startIndex** An integer that is an index of first character to get. This parameter is optional.
**endIndex** An integer that is an index of last character to get. This parameter is optional.

#### Returns

A string that contains the selected text.

#### Description

Method; gets the currently selected text. If the optional parameters are not passed, the current text selection is used. If text is not currently opened for editing, the whole text string is returned. If only *startIndex* is passed, the string starting at that index and ending at the end of the field is returned. If *startIndex* and *endIndex* are passed, the string starting from *startIndex* up to, but not including, *endIndex* is returned.
If there are several text fields selected, the concatenation of all the strings is returned.

#### Example

```javascript
The following example gets the string in the selected text fields:
fl.getDocumentDOM().getTextString();

The following example gets the string at character index 5 in the selected text fields:
fl.getDocumentDOM().getTextString(5);

The following example gets the string from character index 2 up to, but not including, character index 10:
fl.getDocumentDOM().getTextString(2, 10);

```
#### See also

[document.setTextString()](../Document_object/docu9908.md)


---

<!-- Source: docume88.md -->

## document.getTimeline()

#### Availability

Flash MX 2004.

#### Usage

document.getTimeline()

#### Parameters

None.

#### Returns

The current Timeline object.

#### Description

Method; retrieves the current [Timeline object](../Timeline_object/timeline_summary.md) in the document. The current timeline can be the current scene, the current symbol being edited, or the current screen.

#### Example

```javascript
The following example gets the Timeline object and returns the number of frames in the longest layer:

var longestLayer = fl.getDocumentDOM().getTimeline().frameCount; 
fl.trace("The longest layer has" + longestLayer + "frames");

The following example enters edit-in-place mode for the selected symbol on the Stage and inserts a frame on the symbol’s timeline.
fl.getDocumentDOM().enterEditMode("inPlace"); 
fl.getDocumentDOM().getTimeline().insertFrames();

The following example gets the Timeline object and displays its name:
var timeline = fl.getDocumentDOM().getTimeline(); 
alert(timeline.name);

```
#### See also

[document.currentTimeline](../Document_object/docume39.md), [document.timelines](../Document_object/docu5995.md), [symbolItem.timeline](../SymbolItem_object/symbolIt12.md)


---

<!-- Source: docume89.md -->

## document.getTransformationPoint()

#### Availability

Flash MX 2004.

#### Usage

document.getTransformationPoint()

#### Parameters

None.

#### Returns

A point (for example, {x:10, y:20}, where x and y are floating-point numbers) that specifies the position of the transformation point (also *origin point* or *zero point*) within the selected element’s coordinate system.

#### Description

Method; gets the location of the transformation point of the current selection. You can use the transformation point for commutations such as rotate and skew.
***Note:** Transformation points are relative to different locations, depending on the type of item selected. For more information, see [document.setTransformationPoint()](../Document_object/docu9939.md).*

#### Example

The following example gets the transformation point for the current selection. The transPoint.x property gives the *x* coordinate of the transformation point. The transPoint.y property gives the *y* coordinate of the transformation point.

```javascript
var transPoint = fl.getDocumentDOM().getTransformationPoint();

```
#### See also

[document.setTransformationPoint()](../Document_object/docu9939.md), [element.getTransformationPoint()](../Element_object/element4.md)


---

<!-- Source: docume90.md -->

## document.group()

#### Availability

Flash MX 2004.

#### Usage

document.group()

#### Parameters

None.

#### Returns

Nothing.

#### Description

Method; converts the current selection to a group.

#### Example

The following example converts the objects in the current selection to a group:

```javascript
fl.getDocumentDOM().group();

```
#### See also

[document.unGroup()](../Document_object/docu6104.md)


---

<!-- Source: docume91.md -->

## document.height

#### Availability

Flash MX 2004.

#### Usage

document.height

#### Description

Property; an integer that specifies the height of the document (Stage) in pixels.

#### Example


The following example sets the height of the Stage to 400 pixels:
```javascript
fl.getDocumentDOM().height = 400;

```
#### See also

[document.width](../Document_object/docu6182.md)


---

<!-- Source: docume92.md -->

## document.id

#### Availability

Flash CS3 Professional.

#### Usage

document.id

#### Description

Read-only property; a unique integer (assigned automatically) that identifies a document during a Flash session. Use this property in conjunction with [fl.findDocumentDOM()](../flash_object_(fl)/fl25.md) to specify a particular document for an action.

#### Example


The following example displays the document ID for the current document:
```javascript
fl.trace("Current doc's internal ID is: " + fl.getDocumentDOM().id);

```
#### See also

[fl.findDocumentDOM()](../flash_object_(fl)/fl25.md).


---

<!-- Source: docume93.md -->

## document.importFile()

#### Availability

Flash 8. The showDialog and showImporterUI parameters are new in Adobe Animate.

#### Usage

document.importFile(fileURI [, importToLibrary [, showDialog [, showImporterUI ]]])

#### Parameters

**fileURI** A string, expressed as a file:/// URI, that specifies the path of the file to import.
**importToLibrary** A Boolean value that specifies whether to import the file only into the document’s library (true) or to also place a copy on the Stage (false). The default value is false.
**showDialog** A Boolean value that specifies whether to display the Import dialog box. Specifying true displays the import dialog. If you specify false, the function imports the file using specifications set in the Preferences dialog. The default is true.
**showImporterUI** A Boolean value that specifies whether to display errors visually (for example, using the Library Conflict dialog box). The default is false.

#### Returns

Nothing.

#### Description

Method; imports a file into a document. This method performs the same operation as the Import To Library or Import To Stage menu command. To import a publish profile, use [document.importPublishProfile()](../Document_object/docume94.md).

#### Example


The following example lets the user browse for a file to import onto the Stage:
```javascript
var dom = fl.getDocumentDOM();
var URI = fl.browseForFileURL("select", "Import File"); 
dom.importFile(URI);

```
#### See also

[fl.browseForFileURL()](../flash_object_(fl)/fl3.md).

<span id="document.importPublishProfile()" class="anchor"></span>


---

<!-- Source: docume94.md -->

## document.importPublishProfile()

#### Availability

Flash MX 2004.

#### Usage

document.importPublishProfile( fileURI )

#### Parameters

**fileURI** A string, expressed as a file:/// URI, that specifies the path of the XML file defining the profile to import.

#### Returns

An integer that is the index of the imported profile in the profiles list. Returns -1 if the profile cannot be imported.

#### Description

Method; imports a profile from a file.

#### Example

The following example imports the profile contained in the profile.xml file and displays its index in the profiles list:

```javascript
alert(fl.getDocumentDOM().importPublishProfile('file:///C\|/Documents and Settings/janeUser/Desktop/profile.xml'));

```

---

<!-- Source: docume95.md -->

## document.importPublishProfileString()

#### Availability

Flash CS4 Professional.

#### Usage

document.importPublishProfileString(xmlString)

#### Parameters

**xmlString** A string that contains the XML data to be imported as the current profile.

#### Returns

A Boolean value of true if the string was successfully imported; false otherwise.

#### Description

Method: imports an XML string that represents a publish profile and sets it as the current profile. To generate an XML string to import, use [document.exportPublishProfileString()](../Document_object/docume66.md) before using this method.

#### Example

In the following example, the default profile is exported as an XML string. The standard JavaScript replace command is used to modify the XML string. The string is then imported, and the default ActionScript 3 output setting is set to ActionScript 1.

```javascript

var profileXML=fl.getDocumentDOM().exportPublishProfileString('Default'); 
fl.trace(profileXML);
var newProfileXML = profileXML.replace("<ActionScriptVersion>3</ActionScriptVersion>", "<ActionScriptVersion>1</ActionScriptVersion>"); fl.getDocumentDOM().importPublishProfileString(newProfileXML);

```

---

<!-- Source: docume96.md -->

## document.importSWF() - dropped

#### Availability

Flash MX 2004. *Dropped in Adobe Animate.*

#### Usage

document.importSWF(fileURI)

#### Parameters

**fileURI** A string, expressed as a file:/// URI, that specifies the file for the SWF file to import.

#### Returns

Nothing.

#### Description

*Dropped in Adobe Animate.*

#### Example


The following example imports the "mySwf.swf" file from the Flash Configuration folder:
```javascript
fl.getDocumentDOM().importSWF(fl.configURI+"mySwf.swf");

```
#### See also

[document.importFile()](../Document_object/docume93.md)


---

<!-- Source: docume97.md -->

## document.intersect()

#### Availability

Flash 8.

#### Usage

document.intersect()

#### Parameters

None.

#### Returns

None.

#### Description

Method; creates an intersection drawing object from all selected drawing objects. If no objects are selected, calling this method results in an error and the script breaks at that point.

#### Example


The following example creates an intersection drawing object from all selected drawing objects:
```javascript
fl.getDocumentDOM().intersect();

```
#### See also

[document.crop()](../Document_object/docume37.md), [document.deleteEnvelope()](../Document_object/docume41.md), [document.punch()](../Document_object/docum230.md), [document.union()](../Document_object/docu6120.md), [shape.isDrawingObject](../Shape_object/shape6.md)


---

<!-- Source: docume98.md -->

## document.library

#### Availability

Flash MX 2004.

#### Usage

document.library

#### Description

Read-only property; the [library object](../library_object/library_summary.md) for a document.

#### Example

```javascript
The following example gets the library for the currently focused document:
var myCurrentLib = fl.getDocumentDOM().library;

Assuming the currently focused document is not fl.documents[1], the following example gets the library for a nonfocused library or for a library you opened using File >Open as external library:

var externalLib = fl.documents[1].library;

```

---

<!-- Source: docume99.md -->

## document.libraryPath

#### Availability

Flash CS4 Professional.

#### Usage

document.libraryPath

#### Description

Property; a string that contains a list of items in the document’s ActionScript 3.0 Library path, which specifies the location of SWC files or folders containing SWC files. Items in the string are delimited by semi-colons. In the authoring tool, the items are specified by choosing File >Publish Settings and then choosing ActionScript 3.0 Script Settings on the Flash tab.

#### Example


The following adds the ../Files folder to the document’s Library path and then displays the path Library path in the Output panel:
```javascript

var myDoc = fl.getDocumentDOM() 
fl.trace(myDoc.libraryPath);
myDoc.libraryPath = "../Files;" + myDoc.libraryPath;
fl.trace(myDoc.libraryPath);

```
#### See also

[document.externalLibraryPath](../Document_object/docume69.md),[document.sourcePath](../Document_object/docum36.md), [fl.libraryPath](../flash_object_(fl)/fl39.md).


---

<!-- Source: documen1.md -->

## document.addDataToDocument()

#### Availability

Flash MX 2004.

#### Usage

document.addDataToDocument(name, type, data)

#### Parameters

**name** A string that specifies the name of the data to add.
**type** A string that defines the type of data to add. Acceptable values are "integer", "integerArray", "double", "doubleArray", "string", and "byteArray".
**data** The value to add. Valid types depend on the *type* parameter.

#### Returns

Nothing.

#### Description

Method; stores specified data with a document. Data is written to the FLA file and is available to JavaScript when the file reopens.

#### Example

```javascript

The following example adds an integer value of 12 to the current document:
fl.getDocumentDOM().addDataToDocument("myData", "integer", 12);

The following example returns the value of the data named "myData" and displays the result in the Output panel:

fl.trace(fl.getDocumentDOM().getDataFromDocument("myData"));

```
#### See also

[document.getDataFromDocument()](../Document_object/docume76.md), [document.removeDataFromDocument()](../Document_object/docum250.md)


---

<!-- Source: documen2.md -->

## document.addDataToSelection()

#### Availability

Flash MX 2004.

#### Usage

document.addDataToSelection(name, type, data)

#### Parameters

**name** A string that specifies the name of the persistent data.
**type** Defines the type of data. Acceptable values are "integer", "integerArray", "double", "doubleArray", "string", and "byteArray".
**data** The value to add. Valid types depend on the *type* parameter.

#### Returns

Nothing.

#### Description

Method; stores specified data with the selected objects. Data is written to the FLA file and is available to JavaScript when the file reopens. Only symbols and bitmaps support persistent data.

#### Example

```javascript
The following example adds an integer value of 12 to the selected object:
fl.getDocumentDOM().addDataToSelection("myData", "integer", 12);

```
#### See also

[document.removeDataFromSelection()](../Document_object/docum260.md)


---

<!-- Source: documen3.md -->

## document.addFilter()

#### Availability
Flash 8.

#### Usage

document.addFilter(filterName)

#### Parameters

**filterName** A string specifying the filter to be added to the Filters list and enabled for the selected objects. Acceptable values are "adjustColorFilter", "bevelFilter", "blurFilter", "dropShadowFilter", "glowFilter", "gradientBevelFilter", and "gradientGlowFilter".

#### Returns

Nothing.

#### Description

Method; applies a filter to the selected objects and places the filter at the end of the Filters list.

#### Example

```javascript
The following example applies a glow filter to the selected objects:
fl.getDocumentDOM().addFilter("glowFilter");

```
#### See also

[document.changeFilterOrder()](../Document_object/docume29.md), [document.disableFilter()](../Document_object/docume47.md), [document.enableFilter()](../Document_object/docume59.md), [document.getFilters()](../Document_object/docume79.md), [document.removeFilter()](../Document_object/docum270.md), [document.setBlendMode()](../Document_object/docum460.md), [document.setFilterProperty()](../Document_object/docum520.md)


---

<!-- Source: documen4.md -->

## document.addItem()

#### Availability

Flash MX 2004.

#### Usage

document.addItem(position, item)

#### Parameters

**position** A point that specifies the *x* and *y* coordinates of the location at which to add the item. It uses the center of a symbol or the upper left corner of a bitmap or video.
**item** An Item object that specifies the item to add and the library from which to add it (see [Item object](../Item_object/item_summary.md)).

#### Returns

A Boolean value: true if successful; false otherwise.

#### Description

Method; adds an item from any open document or library to the specified Document object.

#### Example

```javascript
The following example adds the first item from the library to the first document at the specified location for the selected symbol, bitmap, or video:

var item = fl.documents[0].library.items[0]; 
fl.documents[0].addItem({x:0,y:0}, item);

The following example adds the symbol myMovieClip from the current document’s library to the current document:

var itemIndex = fl.getDocumentDOM().library.findItemIndex("myMovieClip"); 
var theItem = fl.getDocumentDOM().library.items[itemIndex]; fl.getDocumentDOM().addItem({x:0,y:0}, theItem);

The following example adds the symbol myMovieClip from the second document in the documents array to the third document in the documents array:

var itemIndex = fl.documents[1].library.findItemIndex("myMovieClip"); 
var theItem = fl.documents[1].library.items[itemIndex]; fl.documents[2].addItem({x:0,y:0}, theItem);

```

---

<!-- Source: documen5.md -->

## document.addNewLine()

#### Availability

Flash MX 2004.

#### Usage

document.addNewLine(startPoint, endpoint)

#### Parameters

**startpoint** A pair of floating-point numbers that specify the *x* and *y* coordinates where the line starts.
**endpoint** A pair of floating-point numbers that specify the *x* and *y* coordinates where the line ends.

#### Returns

Nothing.

#### Description

Method; adds a new path between two points. The method uses the document’s current stroke attributes and adds the path on the current frame and current layer. This method works in the same way as clicking on the line tool and drawing a line.

#### Example

```javascript
The following example adds a line between the specified starting point and ending point:

fl.getDocumentDOM().addNewLine({x:216.7, y:122.3}, {x:366.8, y:165.8});

```

---

<!-- Source: documen6.md -->

## document.addNewOval()

#### Availability

Flash MX 2004.

#### Usage

document.addNewOval(boundingRectangle [, bSuppressFill [, bSuppressStroke ]])

#### Parameters

**boundingRectangle** A rectangle that specifies the bounds of the oval to be added. For information on the format of
*boundingRectangle*, see [document.addNewRectangle()](../Document_object/docume10.md).
**bSuppressFill** A Boolean value that, if set to true, causes the method to create the shape without a fill. The default value is false. This parameter is optional.
**bSuppressStroke** A Boolean value that, if set to true, causes the method to create the shape without a stroke. The default value is false. This parameter is optional.

#### Returns

Nothing.

#### Description

Method; adds a new Oval object in the specified bounding rectangle. This method performs the same operation as the Oval tool. The method uses the document’s current default stroke and fill attributes and adds the oval on the current frame and layer. If both *bSuppressFill* and *bSuppressStroke* are set to true, the method has no effect.

#### Example

```javascript
The following example adds a new oval within the specified coordinates; it is 164 pixels in width and 178 pixels in height:

fl.getDocumentDOM().addNewOval({left:72,top:50,right:236,bottom:228});

The following example draws the oval without a fill:

fl.getDocumentDOM().addNewOval({left:72,top:50,right:236,bottom:228}, true); 

The following example draws the oval without a stroke:

fl.getDocumentDOM().addNewOval({left:72,top:50,right:236,bottom:228}, false, true);

```
#### See also

[document.addNewPrimitiveOval()](../Document_object/documen7.md)

<span id="document.addNewPrimitiveOval()" class="anchor"></span>


---

<!-- Source: documen7.md -->

## document.addNewPrimitiveOval()

#### Availability

Flash CS4 Professional.

#### Usage

document.addNewPrimitiveOval( boundingRectangle [, bSpupressFill [, bSuppressStroke ]] ))

#### Parameters

**boundingRectangle** A rectangle that specifies the bounds within which the new oval primitive is added. For information on the format of *boundingRectangle*, see [document.addNewRectangle()](../Document_object/docume10.md).
**bSuppressFill** A Boolean value that, if set to true, causes the method to create the oval without a fill. The default value is false. This parameter is optional.
**bSuppressStroke** A Boolean value that, if set to true, causes the method to create the oval without a stroke**.** The default value is false. This parameter is optional.

#### Returns

Nothing.

#### Description

Method; adds a new oval primitive fitting into the specified bounds. This method performs the same operation as the Oval Primitive tool. The oval primitive uses the document's current default stroke and fill attributes and is added on the current frame and layer. If both *bSuppressFill* and *bSuppressStroke* are set to true, the method has no effect.

#### Example


The following example adds oval primitives within the specified coordinates, with and without fill and stroke:

```javascript
// Add an oval primitive with fill and stroke 
fl.getDocumentDOM().addNewPrimitiveOval({left:0,top:0,right:100,bottom:100});
// Add an oval primitive without a fill 
fl.getDocumentDOM().addNewPrimitiveOval({left:100,top:100,right:200,bottom:200}, true);
// Add an oval primitive without a stroke
 fl.getDocumentDOM().addNewPrimitiveOval({left:200,top:200,right:300,bottom:300},false,true);

```
#### See also

[document.addNewOval()](../Document_object/documen6.md)


---

<!-- Source: documen8.md -->

## document.addNewPrimitiveRectangle()

#### Availability

Flash CS4 Professional.

#### Usage

document.addNewPrimitiveRectangle( boundingRectangle, roundness, [, bSuppressFill [, bSuppressStroke ]]))

#### Parameters

**rect** A rectangle that specifies the bounds within which the new rectangle primitive is added. For information on the format of *boundingRectangle*, see [document.addNewRectangle()](../Document_object/docume10.md).
**roundness** An integer between 0 and 999 that represents the number of points used to specify how much the corners should be rounded.
**bSuppressFill** A Boolean value that, if set to true, causes the method to create the rectangle without a fill. The default value is false. This parameter is optional.
**bSuppressStroke** A Boolean value that, if set to true, causes the method to create the rectangle without a stroke**.** The default value is false. This parameter is optional.

#### Returns

Nothing.

#### Description

Method; adds a new rectangle primitive fitting into the specified bounds. This method performs the same operation as the Rectangle Primitive tool. The rectangle primitive uses the document's current default stroke and fill attributes and is added on the current frame and layer. If both *bSuppressFill* and *bSuppressStroke* are set to true, the method has no effect.

#### Example


The following example adds rectangle primitives within the specified coordinates, with and without fill and stroke, and with different amounts of roundness:

```javascript
// Add a rectangle primitive with fill and stroke 
fl.getDocumentDOM().addNewPrimitiveRectangle({left:0,top:0,right:100,bottom:100}, 0);
// Add a rectangle primitive without a fill 
fl.getDocumentDOM().addNewPrimitiveRectangle({left:100,top:100,right:200,bottom:200}, 20, true);
// Add a rectangle primitive without a stroke 
fl.getDocumentDOM().addNewPrimitiveRectangle({left:200,top:200,right:300,bottom:300}, 50,false,true);

```
#### See also

[document.addNewRectangle()](../Document_object/docume10.md)


---

<!-- Source: documen9.md -->

## document.addNewPublishProfile()

#### Availability

Flash MX 2004.

#### Usage

document.addNewPublishProfile([profileName])

#### Parameters

**profileName** The unique name of the new profile. If you do not specify a name, a default name is provided. This parameter is optional.

#### Returns

An integer that is the index of the new profile in the profiles list. Returns -1 if a new profile cannot be created.

#### Description

Method; adds a new publish profile and makes it the current one.

#### Example


The following example adds a new publish profile with a default name and then displays the name of the profile in the Output panel:
```javascript
fl.getDocumentDOM().addNewPublishProfile();
fl.outputPanel.trace(fl.getDocumentDOM().currentPublishProfile);
```
The following example adds a new publish profile with the name "my profile":  

```javascript
fl.getDocumentDOM().addNewPublishProfile("my profile");

```
#### See also

[document.deletePublishProfile()](../Document_object/docume42.md)


---

<!-- Source: document.md -->

## document.accName

#### Availability

Flash MX 2004.

#### Usage

document.accName

#### Description

Property; a string that is equivalent to the Name field in the Accessibility panel. Screen readers identify objects by reading the name aloud.

#### Example

```javascript
The following example sets the accessibility name of the document to "Main Movie": 
fl.getDocumentDOM().accName = "Main Movie";

The following example gets the accessibility name of the document:
fl.trace(fl.getDocumentDOM().accName);

```

---

<!-- Source: document_summary.md -->

## document summary

#### Availability

Flash MX 2004.

#### Description

The Document object represents the Stage. That is, only FLA files are considered documents. To return the Document object for the current document, use [fl.getDocumentDOM()](../flash_object_(fl)/fl31.md)

#### Method summary

You can use the following methods with the Document object:

<table><thead><tr class="header"><th><strong>Method</strong></th><th><strong>Description</strong></th></tr></thead><tbody><tr class="odd"><td><a href="../Document_object/documen1.md">document.addDataToDocument()</a></td><td>Stores specified data with a document.</td></tr><tr class="even"><td><a href="../Document_object/documen2.md">document.addDataToSelection()</a></td><td>Stores specified data with the selected objects.</td></tr><tr class="odd"><td><a href="../Document_object/documen3.md">document.addFilter()</a></td><td>Applies a filter to the selected objects.</td></tr><tr class="even"><td><a href="../Document_object/documen4.md">document.addItem()</a></td><td>Adds an item from any open document or library to the specified Document object.</td></tr><tr class="odd"><td><a href="../Document_object/documen5.md">document.addNewLine()</a></td><td>Adds a new path between two points.</td></tr><tr class="even"><td><a href="../Document_object/documen6.md">document.addNewOval()</a></td><td>Adds a new Oval object in the specified bounding rectangle.</td></tr><tr class="odd"><td><a href="../Document_object/documen7.md">document.addNewPrimitiveOval()</a></td><td>Adds a new oval primitive fitting into the specified bounds.</td></tr><tr class="even"><td><a href="../Document_object/documen8.md">document.addNewPrimitiveRectangle()</a></td><td>Adds a new rectangle primitive fitting into the specified bounds.</td></tr><tr class="odd"><td><a href="../Document_object/documen9.md">document.addNewPublishProfile()</a></td><td>Adds a new publish profile and makes it the current one.</td></tr><tr class="even"><td><a href="../Document_object/docume10.md">document.addNewRectangle()</a></td><td>Adds a new rectangle or rounded rectangle, fitting it into the specified bounds.</td></tr><tr class="odd"><td><a href="../Document_object/docume11.md">document.addNewScene()</a></td><td>Adds a new scene (<a href="../Timeline_object/timeline_summary.md">Timeline object</a>) as the next scene after the currently selected scene and makes the new scene the currently selected scene.</td></tr><tr class="even"><td><a href="../Document_object/docume12.md">document.addNewText()</a></td><td>Inserts a new empty text field.</td></tr><tr class="even"><td><a href="../Document_object/docu6058.md">document.addTaggedSwatch()</a></td><td>To add new tagged swatch.</td></tr><tr class="odd"><td><a href="../Document_object/docu6059.md">document.addTaggedSwatchWithColor()</a></td><td>To add new tagged swatch with the given color string.</td></tr><tr class="odd"><td><a href="../Document_object/docume13.md">document.align()</a></td><td>Aligns the selection.</td></tr><tr class="even"><td><a href="../Document_object/docume14.md">document.allowScreens() - dropped</a></td><td>Dropped in Adobe Animate.</td></tr><tr class="odd"><td><a href="../Document_object/docume15.md">document.arrange()</a></td><td>Arranges the selection on the Stage.</td></tr><tr class="even"><td><a href="../Document_object/docume24.md">document.breakApart()</a></td><td>Performs a break-apart operation on the current selection.</td></tr><tr class="odd"><td><a href="../Document_object/docume25.md">document.canEditSymbol()</a></td><td>Indicates whether the Edit Symbols menu and functionality are enabled.</td></tr><tr class="even"><td><a href="../Document_object/docume26.md">document.canRevert()</a></td><td><p>Determines whether you can use the <a href="../Document_object/docum340.md">document.revert()</aor</p><p><a href="../flash_object_(fl)/fl61.md">fl.revertDocument()</amethod successfully.</p></td></tr></tbody></table>

<table><thead><tr class="header"><th><strong>Method</strong></th><th><strong>Description</strong></th></tr></thead><tbody><tr class="odd"><td><a href="../Document_object/docume27.md">document.canTestMovie()</a></td><td><p>Determines whether you can use the</p><p><a href="../Document_object/docu5948.md">document.testMovie()</amethod successfully.</p></td></tr><tr class="even"><td><a href="../Document_object/docume28.md">document.canTestScene()</a></td><td><p>Determines whether you can use the</p><p><a href="../Document_object/docu5979.md">document.testScene()</amethod successfully.</p></td></tr><tr class="odd"><td><a href="../Document_object/docume29.md">document.changeFilterOrder()</a></td><td>Changes the index of the filter in the Filters list.</td></tr><tr class="even"><td><a href="../Document_object/docume30.md">document.clipCopy()</a></td><td>Copies the current selection from the document to the Clipboard.</td></tr><tr class="odd"><td><a href="../Document_object/docume31.md">document.clipCut()</a></td><td>Cuts the current selection from the document and writes it to the Clipboard.</td></tr><tr class="even"><td><a href="../Document_object/docume32.md">document.clipPaste()</a></td><td>Pastes the contents of the Clipboard into the document.</td></tr><tr class="odd"><td><a href="../Document_object/docume33.md">document.close()</a></td><td>Closes the specified document.</td></tr><tr class="even"><td><a href="../Document_object/docume34.md">document.convertLinesToFills()</a></td><td>Converts lines to fills on the selected objects.</td></tr><tr class="odd"><td><a href="../Document_object/docume35.md">document.convertSelectionToBitmap()</a></td><td>Converts selected objects in the current frame to a bitmap and inserts the bitmap into the library.</td></tr><tr class="odd"><td><a href="../Document_object/docu6069.md">document.convertToDoc()</a></td><td>Converts a document to expected document type.</td></tr><tr class="even"><td><a href="../Document_object/docume36.md">document.convertToSymbol()</a></td><td>Converts the selected Stage items to a new symbol.</td></tr><tr class="odd"><td><a href="../Document_object/docume37.md">document.crop()</a></td><td>Uses the top selected drawing object to crop all selected drawing objects underneath it.</td></tr><tr class="even"><td><a href="../Document_object/docume40.md">document.debugMovie()</a></td><td>Initiates a debug session with the document.</td></tr><tr class="odd"><td><a href="../Document_object/docume41.md">document.deleteEnvelope()</a></td><td>Deletes the envelope (bounding box that contains one or more objects) from the selected object.</td></tr><tr class="even"><td><a href="../Document_object/docume42.md">document.deletePublishProfile()</a></td><td>Deletes the currently active profile, if there is more than one.</td></tr><tr class="odd"><td><a href="../Document_object/docume43.md">document.deleteScene()</a></td><td>Deletes the current scene (<a href="../Timeline_object/timeline_summary.md">Timeline object</a>), and if the deleted scene was not the last one, sets the next scene as the current Timeline object.</td></tr><tr class="even"><td><a href="../Document_object/docume44.md">document.deleteSelection()</a></td><td>Deletes the current selection on the Stage.</td></tr><tr class="odd"><td><a href="../Document_object/docu6065.md">document.deleteTaggedSwatchAtIndex()</a></td><td>Deletes tagged swatch with given index.</td></tr><tr class="even"><td><a href="../Document_object/docu6066.md">document.deleteTaggedSwatchByName()</a></td><td>Deletes tagged swatch with given name.</td></tr><tr class="odd"><td><a href="../Document_object/docume46.md">document.disableAllFilters()</a></td><td>Disables all filters on the selected objects.</td></tr><tr class="even"><td><a href="../Document_object/docume47.md">document.disableFilter()</a></td><td>Disables the specified filter in the Filters list.</td></tr><tr class="odd"><td><a href="../Document_object/docume48.md">document.disableOtherFilters()</a></td><td>Disables all filters except the one at the specified position in the Filters list.</td></tr><tr class="even"><td><a href="../Document_object/docume49.md">document.distribute()</a></td><td>Distributes the selection.</td></tr><tr class="odd"><td><a href="../Document_object/docume50.md">document.distributeToKeyframes()</a></td><td>Performs a distribute-to-keyframes operation on the current selection; equivalent to selecting Distriute to Keyframes.</td></tr><tr class="even"><td><a href="../Document_object/docume51.md">document.distributeToLayers()</a></td><td>Performs a distribute-to-layers operation on the current selection; equivalent to selecting Distribute to Layers.</td></tr><tr class="odd"><td><a href="../Document_object/docume53.md">document.documentHasData()</a></td><td>Checks the document for persistent data with the specified name.</td></tr><tr class="even"><td><a href="../Document_object/docume54.md">document.duplicatePublishProfile()</a></td><td>Duplicates the currently active profile and gives the duplicate version focus.</td></tr><tr class="odd"><td><a href="../Document_object/docume55.md">document.duplicateScene()</a></td><td>Makes a copy of the currently selected scene, giving the new scene a unique name and making it the current scene.</td></tr><tr class="even"><td><a href="../Document_object/docume56.md">document.duplicateSelection()</a></td><td>Duplicates the selection on the Stage.</td></tr></tbody></table>

<table><thead><tr class="header"><th><strong>Method</strong></th><th><strong>Description</strong></th></tr></thead><tbody><tr class="odd"><td><a href="../Document_object/docume57.md">document.editScene()</a></td><td>Makes the specified scene the currently selected scene for editing.</td></tr><tr class="even"><td><a href="../Document_object/docume58.md">document.enableAllFilters()</a></td><td>Enables all the filters on the Filters list for the selected objects.</td></tr><tr class="odd"><td><a href="../Document_object/docume59.md">document.enableFilter()</a></td><td>Enables the specified filter for the selected objects.</td></tr><tr class="even"><td><a href="../Document_object/docume60.md">document.enterEditMode()</a></td><td>Switches the authoring tool into the editing mode specified by the parameter.</td></tr><tr class="odd"><td><a href="../Document_object/docume61.md">document.exitEditMode()</a></td><td>Exits from symbol-editing mode and returns focus to the next level up from the editing mode.</td></tr><tr class="even"><td><a href="../Document_object/docu6070.md">document.exportCanvasPublishTemplate()</a></td><td>Exports the HTML5 Canvas Publishing Template for given document,at the specified location.</td></tr><tr class="even"><td><a href="../Document_object/docume62.md">document.exportInstanceToLibrary()</a></td><td>Export a selected movie clip, graphic, or button instance on the Stage to a new bitmap in the Library.</td></tr><tr class="odd"><td><p><a href="../Document_object/docume63.md">document.exportInstanceToPNGSequence(</a></p><p><a href="../Document_object/docume63.md">)</a></p></td><td>Export a selected movie clip, graphic, or button instance on the Stage to a series of PNG files on disk.</td></tr><tr class="even"><td><a href="../Document_object/docu6072.md">document.exportMedia()</a></td><td>Generates the required media from the document.</td></tr><tr class="even"><td><a href="../Document_object/docume64.md">document.exportPNG()</a></td><td>Exports the document as one or more PNG files.</td></tr><tr class="odd"><td><a href="../Document_object/docume65.md">document.exportPublishProfile()</a></td><td>Exports the currently active profile to an XML file.</td></tr><tr class="even"><td><a href="../Document_object/docume66.md">document.exportPublishProfileString()</a></td><td>Returns a string that specifies, in XML format, the specified profile.</td></tr><tr class="even"><td><a href="../Document_object/docu6074.md">document.exportSVG()</a></td><td>Exports the document in SVG format.</td></tr><tr class="odd"><td><a href="../Document_object/docume67.md">document.exportSWF()</a></td><td>Exports the document in the Flash SWF format.</td></tr><tr class="even"><td><a href="../Document_object/docume68.md">document.exportVideo()</a></td><td>Exports a video from the document and optionally sends it to Adobe Media Encoder to convert the video.</td></tr><tr class="odd"><td><a href="../Document_object/docume72.md">document.getAlignToDocument()</a></td><td>Identical to retrieving the value of the To Stage button in the Align panel.</td></tr><tr class="even"><td><a href="../Document_object/docume73.md">document.getBlendMode()</a></td><td>Returns a string that specifies the blending mode for the selected objects.</td></tr><tr class="odd"><td><a href="../Document_object/docume74.md">document.getCustomFill()</a></td><td>Retrieves the fill object of the selected shape, or the Tools panel and Property inspector if specified.</td></tr><tr class="even"><td><a href="../Document_object/docume75.md">document.getCustomStroke()</a></td><td>Returns the stroke object of the selected shape, or the Tools panel and Property inspector if specified.</td></tr><tr class="odd"><td><a href="../Document_object/docume76.md">document.getDataFromDocument()</a></td><td>Retrieves the value of the specified data.</td></tr><tr class="even"><td><a href="../Document_object/docume77.md">document.getElementProperty()</a></td><td>Gets the specified Element property for the current selection.</td></tr><tr class="odd"><td><a href="../Document_object/docume78.md">document.getElementTextAttr()</a></td><td>Gets a specified TextAttrs property of the selected Text objects.</td></tr><tr class="even"><td><a href="../Document_object/docume79.md">document.getFilters()</a></td><td>Returns an array that contains the list of filters applied to the currently selected objects.</td></tr><tr class="even"><td><a href="../Document_object/docu6060.md">document.getIndexForTaggedSwatchesPalette()</a></td><td>To get the Tagged Swatches palette index for given palette name.</td></tr><tr class="odd"><td><a href="../Document_object/docume80.md">document.getMetadata()</a></td><td>Returns a string containing the XML metadata associated with the document.</td></tr><tr class="even"><td><a href="../Document_object/docume81.md">document.getMobileSettings()</a></td><td><p>Returns the string passed to</p><p>document.setMobileSettings().</p></td></tr><tr class="odd"><td><a href="../Document_object/docume82.md">document.getPlayerVersion()</a></td><td>Returns a string that represents the targeted player version for the specified document.</td></tr><tr class="even"><td><a href="../Document_object/docume83.md">document.getPublishDocumentData()</a></td><td>Indicates whether publishing of the specified persistent data is enabled for the specified format in the document.</td></tr><tr class="odd"><td><a href="../Document_object/docume84.md">document.getSelectionRect()</a></td><td>Gets the bounding rectangle of the current selection.</td></tr></tbody></table>

| **Method**                                             | **Description**                                                                                                                                                                  |
|--------------------------------------------------------|----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------|
| [document.getSWFPathFromProfile()](../Document_object/docume85.md)      | Gets the full path to the SWF file that is set in the current Publish profile.      
| [document.getTaggedSwatchAtIndex()](../Document_object/docu6061.md)      | Returns the Tagged Swatch with the given index.                                                                            |
| [document.getTaggedSwatchByName()](../Document_object/docu6062.md)      | Returns the Tagged Swatch with the given name.                                                                  |
| [document.getTaggedSwatches()](../Document_object/docu6064.md)      | Returns array of tagged swatch objects.                                                             |
| [document.getTaggedSwatchesPaletteList()](../Document_object/docu6063.md)      | To get the array of Tagged Swatches palette name list.                                                     |
| [document.getTelemetryForSwf()](../Document_object/docume86.md)         | Indicates whether the "Enable detailed telemetry" checkbox is selected in the Publish Settings dialog.                                                                           |
| [document.getTextString()](../Document_object/docume87.md)              | Gets the currently selected text.                                                                                                                                                |
| [document.getTimeline()](../Document_object/docume88.md)                | Retrieves the current [Timeline object](../Timeline_object/timeline_summary.md) in the document.                                                                                                         |
| [document.getTransformationPoint()](../Document_object/docume89.md)     | Gets the location of the transformation point of the current selection.                                                                                                          |
| [document.group()](../Document_object/docume90.md)                      | Converts the current selection to a group.     
 |
| [document.importCanvasPublishTemplate()](../Document_object/docu6071.md)                      | Imports and sets the HTML5 Canvas Publishing Template for given document, from the specified location pathURI.                                                                                                                                 |
| [document.importFile()](../Document_object/docume93.md)                 | Imports a file into the document.                                                                                                                                                |
| [document.importPublishProfile()](../Document_object/docume94.md)       | Imports a profile from a file.                                                                                                                                                   |
| [document.importPublishProfileString()](../Document_object/docume95.md) | Imports an XML string that represents a publish profile and sets it as the current profile.                                                                                      |
| [document.importSWF() - dropped](../Document_object/docume96.md)        | Dropped in Adobe Animate.                                                                                                                                                 |
| [document.intersect()](../Document_object/docume97.md)                  | Creates an intersection drawing object from all selected drawing objects.                                                                                                        |
| [document.loadCuepointXML() - dropped](../Document_object/docum110.md)  | Dropped in Adobe Animate.                                                                                                                                                        |
| [document.match()](../Document_object/docum120.md)                      | Makes the size of the selected objects the same.                                                                                                                                 |
| [document.mouseClick()](../Document_object/docum130.md)                 | Performs a mouse click from the Selection tool.                                                                                                                                  |
| [document.mouseDblClk()](../Document_object/docum140.md)                | Performs a double mouse click from the Selection tool.                                                                                                                           |
| [document.moveSelectedBezierPointsBy()](../Document_object/docum150.md) | If the selection contains at least one path with at least one Bézier point selected, this method moves all selected Bézier points on all selected paths by the specified amount. |
| [document.moveSelectionBy()](../Document_object/docum160.md)            | Moves selected objects by a specified distance.                                                                                                                                  |
| [document.optimizeCurves()](../Document_object/docum180.md)             | Optimizes smoothing for the current selection, allowing multiple passes, if specified, for optimal smoothing; equivalent to selecting Modify >Shape >Optimize.               |
| [document.publish()](../Document_object/docum210.md)                    | Publishes the document according to the active publish settings (File >Publish Settings); equivalent to selecting File >Publish.                                             |
| [document.punch()](../Document_object/docum230.md)                      | Uses the top selected drawing object to punch through all selected drawing objects underneath it.                                                                                |
| [document.removeAllFilters()](../Document_object/docum240.md)           | Removes all filters from the selected objects.                                                                                                                                   |
| [document.removeDataFromDocument()](../Document_object/docum250.md)     | Removes persistent data with the specified name that has been attached to the document.                                                                                          |
| [document.removeDataFromSelection()](../Document_object/docum260.md)    | Removes persistent data with the specified name that has been attached to the selection.                                                                                         |
| [document.removeFilter()](../Document_object/docum270.md)               | Removes the specified filter from the Filters list of the selected objects.                                                                                                      |
| [document.renamePublishProfile()](../Document_object/docum280.md)       | Renames the current profile.                                                                                                                                                     |
| [document.renameScene()](../Document_object/docum290.md)                | Renames the currently selected scene in the Scenes panel.                                                                                                                        |

| **Method**                                           | **Description**                                                                                                                                                                                                                                                     |
|------------------------------------------------------|---------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------|
| [document.reorderScene()](../Document_object/docum300.md)             | Moves the specified scene before another specified scene.                                                                                                                                                                                                           |
| [document.resetOvalObject()](../Document_object/docum310.md)          | Sets all values in the Property inspector to default Oval object settings.                                                                                                                                                                                          |
| [document.resetRectangleObject()](../Document_object/docum320.md)     | Sets all values in the Property inspector to default Rectangle object settings.                                                                                                                                                                                     |
| [document.resetTransformation()](../Document_object/docum330.md)      | Resets the transformation matrix; equivalent to selecting Modify >Transform >Remove Transform.                                                                                                                                                                  |
| [document.revert()](../Document_object/docum340.md)                   | Reverts the specified document to its previously saved version; equivalent to selecting File >Revert.                                                                                                                                                             |
| [document.rotate3DSelection()](../Document_object/docum350.md)        | Applies a 3D rotation to the selection.                                                                                                                                                                                                                             |
| [document.rotateSelection()](../Document_object/docum360.md)          | Rotates the selection by a specified number of degrees.                                                                                                                                                                                                             |
| [document.save()](../Document_object/docum370.md)                     | Saves the document in its default location; equivalent to selecting File >Save.                                                                                                                                                                                   |
| [document.saveAsCopy()](../Document_object/docum390.md)               | Saves a copy of the document to a specified location.                                                                                                                                                                                                               |
| [document.saveAndCompact() - dropped](../Document_object/docum380.md) | Dropped in Adobe Animate.                                                                                                                                                                                                     |
| [document.scaleSelection()](../Document_object/docum400.md)           | Scales the selection by a specified amount; equivalent to using the Free Transform tool to scale the object.                                                                                                                                                        |
| [document.selectAll()](../Document_object/docum420.md)                | Selects all items on the Stage; equivalent to pressing Control+A (Windows) or Command+A (Macintosh) or selecting Edit >Select All.                                                                                                                                |
| [document.selectNone()](../Document_object/docum440.md)               | Deselects any selected items.                                                                                                                                                                                                                                       |
| [document.setAlignToDocument()](../Document_object/docum450.md)       | Sets the preferences for [document.align()](../Document_object/docume13.md), [document.distribute()](../Document_object/docume49.md), [document.match()](../Document_object/docum120.md), and [document.space()](../Document_object/docum67.md) to act on the document; equivalent to enabling the To Stage button in the Align panel. |
| [document.setBlendMode()](../Document_object/docum460.md)             | Sets the blending mode for the selected objects.                                                                                                                                                                                                                    |
| [document.setCustomFill()](../Document_object/docum470.md)            | Sets the fill settings for the Tools panel, Property inspector, and any selected shapes.                                                                                                                                                                            |
| [document.setCustomStroke()](../Document_object/docum480.md)          | Sets the stroke settings for the Tools panel, Property inspector, and any selected shapes.                                                                                                                                                                          |
| [document.setElementProperty()](../Document_object/docum490.md)       | Sets the specified Element property on selected objects in the document.                                                                                                                                                                                            |
| [document.setElementTextAttr()](../Document_object/docum500.md)       | Sets the specified TextAttrs property of the selected text items to the specified value.                                                                                                                                                                            |
| [document.setFillColor()](../Document_object/docum510.md)             | Changes the selection and the tools panel to the specified color.                                                                                                                                                                                                   |
| [document.setFilterProperty()](../Document_object/docum520.md)        | Sets a specified filter property for the currently selected objects.                                                                                                                                                                                                |
| [document.setFilters()](../Document_object/docum530.md)               | Applies filters to the selected objects.                                                                                                                                                                                                                            |
| [document.setInstanceAlpha()](../Document_object/docum540.md)         | Sets the opacity of the instance.                                                                                                                                                                                                                                   |
| [document.setInstanceBrightness()](../Document_object/docum550.md)    | Sets the brightness for the instance.                                                                                                                                                                                                                               |
| [document.setInstanceTint()](../Document_object/docum560.md)          | Sets the tint for the instance.                                                                                                                                                                                                                                     |

| **Method**                                             | **Description**                                                                                                                         |
|--------------------------------------------------------|-----------------------------------------------------------------------------------------------------------------------------------------|
| [document.setMetadata()](../Document_object/docum570.md)                | Sets the XML metadata for the specified document, overwriting any existing metadata.                                                    |
| [document.setMobileSettings()](../Document_object/docum580.md)          | Sets the value of an XML settings string in a mobile FLA file.                                                             |
| [document.setOvalObjectProperty()](../Document_object/docum590.md)      | Specifies a value for a specified property of primitive Oval objects.                                                                   |
| [document.setPlayerVersion()](../Document_object/docum600.md)           | Sets the version of the Flash Player targeted by the specified document.                                                                |
| [document.setRectangleObjectProperty()](../Document_object/docu9643.md) | Specifies a value for a specified property of primitive Rectangle objects.                                                              |
| [document.setSelectionBounds()](../Document_object/docu9658.md)         | Moves and resizes the selection in a single operation.                                                                                  |
| [document.setSelectionRect()](../Document_object/docu9689.md)           | Draws a rectangular selection marquee relative to the Stage, using the specified coordinates.                                           |
| [document.setStageVanishingPoint()](../Document_object/docu9705.md)     | Specifies the vanishing point for viewing 3D objects.                                                                                   |
| [document.setStageViewAngle()](../Document_object/docu9721.md)          | Specifies the perspective angle for viewing 3D objects.                                                                                 |
| [document.setStroke()](../Document_object/docu9752.md)                  | Sets the color, width, and style of the selected strokes.                                                                               |
| [document.setStrokeColor()](../Document_object/docu9768.md)             | Changes the stroke color of the selection to the specified color.                                                                       |
| [document.setStrokeSize()](../Document_object/docu9799.md)              | Changes the stroke size of the selection to the specified size.                                                                         |
| [document.setStrokeStyle()](../Document_object/docu9814.md)             | Changes the stroke style of the selection to the specified style. 
|
| [document.setTaggedSwatchAtIndex()](../Document_object/docu6067.md)             | Replace the tagged swatch with the given index to the given new swatch object.  
|
| [document.setTaggedSwatchByName()](../Document_object/docu6068.md)             | Replace the tagged swatch with the given name to the given new swatch object                                                                                    |
| [document.setTextRectangle()](../Document_object/docu9846.md)           | Changes the bounding rectangle for the selected text item to the specified size.                                                        |
| [document.setTextSelection()](../Document_object/docu9861.md)           | Sets the text selection of the currently selected text field to the values specified by the ***startIndex*** and ***endIndex*** values. |
| [document.setTextString()](../Document_object/docu9908.md)              | Inserts a string of text.                                                                                                               |
| [document.setTransformationPoint()](../Document_object/docu9939.md)     | Moves the transformation point of the current selection.                                                                                |
| [document.skewSelection()](../Document_object/docum5.md)              | Skews the selection by a specified amount.                                                                                              |
| [document.smoothSelection()](../Document_object/docum21.md)            | Smooths the curve of each selected fill outline or curved line.                                                                         |
| [document.space()](../Document_object/docum67.md)                      | Spaces the objects in the selection evenly.                                                                                             |
| [document.straightenSelection()](../Document_object/docum83.md)        | Straightens the currently selected strokes; equivalent to using the Straighten button in the Tools panel.                               |
| [document.swapElement()](../Document_object/docum114.md)                | Swaps the current selection with the specified one.                                                                                     |
| [document.swapStrokeAndFill()](../Document_object/docu5901.md)          | Swaps the Stroke and Fill colors.                                                                                                       |
| [document.testMovie()](../Document_object/docu5948.md)                  | Executes a Test Movie operation on the document.                                                                                        |
| [document.testScene()](../Document_object/docu5979.md)                  | Executes a Test Scene operation on the current scene of the document.                                                                   |
| [document.traceBitmap()](../Document_object/docu6010.md)                | Performs a trace bitmap on the current selection; equivalent to selecting Modify>Bitmap>Trace Bitmap.                             |
| [document.transformSelection()](../Document_object/docu6073.md)         | Performs a general transformation on the current selection by applying the matrix specified in the arguments.                           |
| [document.translate3DCenter()](../Document_object/docu6042.md)          | Sets the XYZ position around which the selection is translated or rotated.                                                              |

| **Method**                                       | **Description**                                              |
|--------------------------------------------------|--------------------------------------------------------------|
| [document.translate3DSelection()](../Document_object/docu6057.md) | Applies a 3D translation to the selection.                   |
| [document.unGroup()](../Document_object/docu6104.md)              | Ungroups the current selection.                              |
| [document.union()](../Document_object/docu6120.md)                | Combines all selected shapes into a drawing object.          |
| [document.unlockAllElements()](../Document_object/docu6135.md)    | Unlocks all locked elements on the currently selected frame. |
| [document.xmlPanel()](../Document_object/docu6198.md)             | Posts a XMLUI dialog box.                                    |

    
#### Property summary

You can use the following properties with the Document object.

| **Property**                                    | **Description**                                                                                                                                                              |
|-------------------------------------------------|------------------------------------------------------------------------------------------------------------------------------------------------------------------------------|
| [document.accName](../Document_object/document.md)           | A string that is equivalent to the Name field in the Accessibility panel.                                                                                                    |
| [document.as3AutoDeclare](../Document_object/docume16.md)        | A Boolean value that describes whether the instances placed on the Stage are automatically added to user-defined timeline classes.                                           |
| [document.as3Dialect](../Document_object/docume17.md)            | A string that describes the ActionScript 3.0 "dialect" being used in the specified document.                                                                                 |
| [document.as3ExportFrame](../Document_object/docume18.md)        | An integer that specifies in which frame to export ActionScript 3.0 classes.                                                                                                 |
| [document.as3StrictMode](../Document_object/docume19.md)         | A Boolean value that specifies whether the ActionScript 3.0 compiler should compile with the Strict Mode option turned on or off.                                            |
| [document.as3WarningsMode](../Document_object/docume20.md)       | A Boolean value that specifies whether the ActionScript 3.0 compiler should compile with the Warnings Mode option turned on or off.                                          |
| [document.asVersion](../Document_object/docume21.md)             | An integer that specifies which version of ActionScript is being used in the specified file.                                                                                 |
| [document.autoLabel](../Document_object/docume22.md)             | A Boolean value that is equivalent to the Auto Label check box in the Accessibility panel.                                                                                   |
| [document.backgroundColor](../Document_object/docume23.md)       | A string, hexadecimal value, or integer that represents the background color.                                                                                                |
| [document.currentPublishProfile](../Document_object/docume38.md) | A string that specifies the name of the active publish profile for the specified document.                                                                                   |
| [document.currentTimeline](../Document_object/docume39.md)       | An integer that specifies the index of the active timeline.                                                                                                                  |
| [document.description](../Document_object/docume45.md)           | A string that is equivalent to the Description field in the Accessibility panel.                                                                                             |
| [document.docClass](../Document_object/docume52.md)              | Specifies the top-level ActionScript 3.0 class associated with the document.                                                                                                 |
| [document.externalLibraryPath](../Document_object/docume69.md)   | A string that contains a list of items in the document’s ActionScript 3.0 External library path, which specifies the location of SWC files used as runtime shared libraries. |
| [document.forceSimple](../Document_object/docume70.md)           | A Boolean value that specifies whether the children of the specified object are accessible.                                                                                  |
| [document.frameRate](../Document_object/docume71.md)             | A float value that specifies the number of frames displayed per second when the SWF file plays; the default is 12.                                                           |
| [document.height](../Document_object/docume91.md)                | An integer that specifies the height of the document (Stage) in pixels.                                                                                                      |

| **Property**                                      | **Description**                                                                                                                                                    |
|---------------------------------------------------|--------------------------------------------------------------------------------------------------------------------------------------------------------------------|
| [document.id](../Document_object/docume92.md)                      | A unique integer (assigned automatically) that identifies a document during a Flash session.                                                                       |
| [document.library](../Document_object/docume98.md)                 | Read-only; the [library object](../library_object/library_summary.md) for a document.                                                                                                     |
| [document.libraryPath](../Document_object/docume99.md)             | A string that contains a list of items in the document’s ActionScript 3.0 Library path, which specifies the location of SWC files or folders containing SWC files. |
| [document.livePreview](../Document_object/docum100.md)             | A Boolean value that specifies whether Live Preview is enabled.                                                                                                    |
| [document.name](../Document_object/docum170.md)                    | Read-only; a string that represents the name of a document (FLA file).                                                                                             |
| [document.path](../Document_object/docum190.md)                    | Read-only; a string that represents the path of the document, in a platform-specific format.                                                                       |
| [document.pathURI](../Document_object/docum200.md)                 | Read-only; a string that represents the path of the document, expressed as a file:/// URI.                                                                         |
| [document.publishProfiles](../Document_object/docum220.md)         | Read-only; an array of the publish profile names for the document.                                                                                                 |
| [document.screenOutline - dropped](../Document_object/docum410.md) | Dropped in Adobe Animate.                                                                                                                                          |
| [document.selection](../Document_object/docum430.md)               | An array of the selected objects in the document.                                                                                                                  |
| [document.silent](../Document_object/docu9971.md)                  | A Boolean value that specifies whether the object is accessible.                                                                                                   |
| [document.sourcePath](../Document_object/docum36.md)              | A string that contains a list of items in the document’s ActionScript 3.0 Source path, which specifies the location of ActionScript class files.                   |
| [document.swfJPEGQuality](../Document_object/docu5932.md)          | An integer that returns the JPEG Quality setting from the current Publish Profile in the document.                                                                 |
| [document.timelines](../Document_object/docu5995.md)               | Read-only; an array of Timeline objects (see [Timeline object](../Timeline_object/timeline_summary.md)).                                                                                   |
| [document.viewMatrix](../Document_object/docu6167.md)              | Read-only; a [Matrix object](../Matrix_object/matrix_summary.md).                                                                                                                       |
| [document.width](../Document_object/docu6182.md)                   | An integer that specifies the width of the document (Stage) in pixels.                                                                                             |
| [document.zoomFactor](../Document_object/docu6229.md)              | Specifies the zoom percent of the Stage at authoring time.                                                                                                         |

<span id="document.accName" class="anchor"></span>

