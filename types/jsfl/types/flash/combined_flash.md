<!-- Source: fl.md -->

## fl.actionsPanel

#### Availability

Flash CS3 Professional.

#### Usage

fl.actionsPanel

#### Description

Read-only property; an actionsPanel object, which represents the currently displayed Actions panel. For information on
using this property, see [actionsPanel object](../actionsPanel_object/actionsPanel_summary.md).



---

<!-- Source: fl1.md -->

## fl.addEventListener()

#### Availability

Flash CS3 Professional. The prePublish, postPublish, selectionChanged, and dpiChanged events are new in Adobe Animate.

#### Usage

fl.addEventListener(eventType, callbackFunction)

#### Parameters

**eventType** A string that specifies the event type to pass to this callback function. Acceptable values are "
documentNew", "documentOpened", "documentClosed", "mouseMove", "documentChanged", "layerChanged""timelineChanged", "
frameChanged", "prePublish", "postPublish", "selectionChanged", and dpiChanged.

The documentChanged value doesn’t mean that the content of a document has changed; it means that a different document is
now in the foreground. That is, fl.getDocumentDOM() will return a different value than it did before this event
occurred.

**callbackFunction** The name of the function you want to execute every time the event occurs.

#### Returns

An integer that identifies the event listener. Use this identifier when calling fl.removeEventListener().

#### Description

Method; registers a function to be called when a specific event occurs. Note that you can define multiple listeners for
the same event.

When using this method, be aware that if the event occurs frequently (as might be the case with mouseMove) and the
function takes a long time to run, your application might hang or otherwise enter an error state. Additionally, the
prePublish and postPublish events should have minimal code and execute quickly.

#### Example

The following example displays a message in the Output panel when a document is closed:

```javascript
myFunction = function () {
    fl.trace('document was closed');
}
var eventID = fl.addEventListener("documentClosed", myFunction);

```

#### See also

[fl.removeEventListener()](../flash_object_(fl)/fl58.md)


---

<!-- Source: fl10.md -->

## fl.compilerErrors

#### Availability

Flash CS3 Professional.

#### Usage

fl.compilerErrors

#### Description

Read-only property; a compilerErrors object, which represents the Errors panel. For information on using this property,
see [compilerErrors object](../compilerErrors_object/compilerErrors_summary.md).



---

<!-- Source: fl11.md -->

## fl.componentsPanel

#### Availability

Flash MX 2004.

#### Usage

fl.componentsPanel

#### Description

Read-only property; a [componentsPanel object](../componentsPanel_object/componentsPanel_summary.md), which represents
the Components panel.

#### Example

The following example stores a componentsPanel object in the comPanel variable:

```javascript
var comPanel = fl.componentsPanel;

```

---

<!-- Source: fl12.md -->

## fl.configDirectory

#### Availability

Flash MX 2004.

#### Usage

fl.configDirectory

#### Description

Read-only property; a string that specifies the full path for the local user’s Configuration directory in a platform-
specific format. To specify this path as a file:/// URI, which is not platform-specific,
use [fl.configURI](../flash_object_(fl)/fl13.md).

#### Example

The following example displays the Configuration directory in the Output panel:

```javascript
fl.trace("My local configuration directory is " + fl.configDirectory);
```

---

<!-- Source: fl13.md -->

## fl.configURI

#### Availability

Flash MX 2004.

#### Usage

fl.configURI

#### Description

Read-only property; a string that specifies the full path for the local user’s Configuration directory as a file:///
URI. See also [fl.configDirectory](../flash_object_(fl)/fl12.md).

#### Example

The following example runs a specified script. Using fl.configURI lets you specify the location of the script without
knowing which platform the script is running on.

```javascript
// To run a command in your commands menu, change "Test.Jsfl"
// to the command you want to run in the line below.
fl.runScript(fl.configURI + "Commands/Test.jsfl");

```

---

<!-- Source: fl14.md -->

## fl.contactSensitiveSelection

#### Availability

Flash 8.

#### Usage

fl.contactSensitiveSelection

#### Description

A Boolean value that specifies whether Contact Sensitive selection mode is enabled (true) or not (false).

#### Example

The following example shows how to disable Contact Sensitive selection mode before making a selection and then how to
reset it to its original value after making the selection:

```javascript
var contact = fl.contactSensitiveSelection;
fl.contactSensitiveSelection = false;
// Insert selection code here.
fl.contactSensitiveSelection = contact;

```

---

<!-- Source: fl15.md -->

## fl.copyLibraryItem()

#### Availability

Flash Professional CS5.

#### Usage

fl.copyLibraryItem(fileURI, libraryItemPath)

#### Parameters

**fileURI** A string, expressed as a file:/// URI, that contains the path to the FLA or XFL file.

**libraryItemPath** A string, that specifies the path to the library item to be copied.

#### Returns

A Boolean value: true if the copy succeeds; false otherwise.

#### Description

Method; silently copies a library item from a document without exposing the item in the Flash Pro user interface. Call
the [document.clipPaste()](../Document_object/docume32.md) method to paste the item into the new document.

#### Example

The following example illustrates use of the fl.copyLibraryItem() method to copy the armjoint-l1 library item.:

```javascript
fl.copyLibraryItem("file:///c:/users/userid/Desktop/Robot.fla", "armjoint-l1");
fl.getDocumentDOM().clipPaste(true);

```

---

<!-- Source: fl16.md -->

## fl.createDocument()

#### Availability

Flash MX 2004.

#### Usage

fl.createDocument([docType])

#### Parameters

**docType** A string that specifies the type of document to create. docType values are "timeline" , "htmlcanvas", "
vrPanoDoc","vr360Doc"  for AS3, HTML5 canvas , VR Panorama and VR 360 document respectively. To find document type, you
can use document.type property. For example, ```fl.trace(fl.getDocumentDOM().type)```. The default value is "timeline",
which has the same effect as choosing File > New > Advanced > ActionScript 3.0 document. This parameter is optional.

#### Returns

The Document object for the newly created document, if the method is successful. If an error occurs, the value is
undefined.

#### Description

Method; opens a new document and selects it. Values for size, resolution, and color are the same as the current
defaults.

#### Example

The following example creates two timeline-based documents:

```javascript
// Create two AS3.0 documents and one HTML5 canvas document.
fl.createDocument();
fl.createDocument("timeline");
fl.createDocument("htmlcanvas");

```

---

<!-- Source: fl17.md -->

## fl.createNewDocList

#### Availability

Flash MX 2004.

#### Usage

fl.createNewDocList

#### Description

Read-only property; an array of strings that represent the various types of documents that can be created.

#### Example

The following example displays the types of documents that can be created, in the Output panel:

```javascript
fl.trace("Number of choices " + fl.createNewDocList.length);
for (i = 0; i < fl.createNewDocList.length; i++)
    fl.trace("choice: " + fl.createNewDocList[i]);

```

---

<!-- Source: fl18.md -->

## fl.createNewDocListType

#### Availability

Flash MX 2004.

#### Usage

fl.createNewDocListType

#### Description

Read-only property; an array of strings that represent the file extensions of the types of documents that can be
created. The entries in the array correspond directly (by index) to the entries in
the [fl.createNewDocList](../flash_object_(fl)/fl17.md) array.

#### Example

The following example displays the extensions of the types of documents that can be created, in the Output panel:

```javascript
fl.trace("Number of types " + fl.createNewDocListType.length);
for (i = 0; i < fl.createNewDocListType.length; i++) fl.trace("type: " +
    fl.createNewDocListType[i]);

```

---

<!-- Source: fl19.md -->

## fl.createNewTemplateList

#### Availability

Flash MX 2004.

#### Usage

fl.createNewTemplateList

#### Description

Read-only property; an array of strings that represent the various types of templates that can be created.

#### Example

The following example displays the types of templates that can be created, in the Output panel:

```javascript
fl.trace("Number of template types: " + fl.createNewTemplateList.length);
for (i = 0; i <
fl.createNewTemplateList.length; i++) fl.trace("type: " + fl.createNewTemplateList[i]);

```

---

<!-- Source: fl2.md -->

## fl.as3PackagePaths

#### Availability

Flash CS3 Professional.

#### Usage

fl.as3PackagePaths

#### Description

Property; a string that corresponds to the global Classpath setting in the ActionScript 3.0 Settings dialog box. Items
in the string are delimited by semi-colons. To view or change ActionScript 2.0 Classpath settings,
use [fl.packagePaths - dropped](../flash_object_(fl)/fl48.md).

#### Example

The following example illustrates changing the ActionScript 3.0 Classpath settings.

```javascript
fl.trace(fl.as3PackagePaths);
// Output (assuming started with default value)
// .;$(AppConfig)/ActionScript 3.0/Classes
fl.as3PackagePaths = "buying;selling";
fl.trace(fl.as3PackagePaths);
// Output
// buying; selling 

```

#### See also

[fl.resetAS3PackagePaths()](../flash_object_(fl)/fl59.md)


---

<!-- Source: fl20.md -->

## fl.documents

#### Availability

Flash MX 2004.

#### Usage

fl.documents

#### Description

Read-only property; an array of Document objects (see [Document object](../Document_object/document_summary.md)) that
represent the documents (FLA files) that are currently open for editing.

#### Example

The following example stores an array of open documents in the docs variable:

```javascript
var docs = fl.documents;
```

The following example displays the names of currently open documents, in the Output panel:

```javascript
for (doc in fl.documents) {
    fl.trace(fl.documents[doc].name);
}

```

---

<!-- Source: fl21.md -->

## fl.drawingLayer

#### Availability

Flash MX 2004.

#### Usage

fl.drawingLayer

#### Description

Read-only property; the [drawingLayer object](../drawingLayer_object/drawingLayersummary.md) that an extensible tool
should use when the user wants to temporarily draw while dragging (for example, when creating a selection marquee).

#### Example

See [drawingLayer.setColor()](../drawingLayer_object/drawingLay10.md).



---

<!-- Source: fl22.md -->

## fl.exportPublishProfileString()

#### Availability

Flash Professional CS5.

#### Usage

fl.exportPublishProfileString( ucfURI [, profileName] )

#### Parameters

**ucfURI** A string that specifies the file Uniform Resource Identifier (URI) from which to export the publish settings.

**profileName** A string that specifies the profile name to export. This parameter is optional.

#### Returns

String.

#### Description

Returns a specific document’s publishing profile without having to open the file. The publish profile can also be
specified, but this is optional.

#### Example

The following example reads the publishing profile string:

```javascript
var ppXML = "";
var ucfURI = fl.browseForFileURL("open", "select a FLA");
if (ucfURI && ucfURI.length > 0)
    ppXML = fl.exportPublishProfileString(ucfURI);
fl.trace(ppXML);

```

---

<!-- Source: fl23.md -->

## fl.externalLibraryPath

#### Availability

Flash CS4 Professional.

#### Usage

fl.externalLibraryPath

#### Description

Property; a string that contains a list of items in the global ActionScript 3.0 External library path, which specifies
the location of SWC files used as runtime shared libraries. Items in the string are delimited by semi-colons. In the
authoring tool, the items are specified by choosing Edit > Preferences > ActionScript > ActionScript 3.0 Settings.

#### Example

The following example adds the /SWC_runtime folder to the global ActionScript 3.0 External library path:

```javascript
fl.trace(fl.externalLibraryPath);
fl.externalLibraryPath = "/SWC_runtime;" + fl.externalLibraryPath;
fl.trace(fl.externalLibraryPath);

```

#### See also

[fl.flexSDKPath](../flash_object_(fl)/fl29.md), [fl.libraryPath](../flash_object_(fl)/fl39.md), [fl.sourcePath](../flash_object_(fl)/fl72.md), [document.externalLibraryPath](../Document_object/docume69.md)


---

<!-- Source: fl24.md -->

## fl.fileExists()

#### Availability

Flash MX 2004.

#### Usage

fl.fileExists(fileURI)

#### Parameters

**fileURI** A string, expressed as a file:/// URI, that contains the path to the file.

#### Returns

A Boolean value: true if the file exists on disk; false otherwise.

#### Description

Method; checks whether a file already exists on disk.

#### Example

The following example displays true or false in the Output panel for each specified file, depending on whether the file
exists.

```javascript
alert(fl.fileExists("file:///C|/example.fla"));
alert(fl.fileExists("file:///C|/example.jsfl"));
alert(fl.fileExists(""));
```

---

<!-- Source: fl25.md -->

## fl.findDocumentDOM()

#### Availability

Flash CS3 Professional.

#### Usage

fl.findDocumentDOM(id)

#### Parameters

**id** An integer that represents a unique identifier for a document.

#### Returns

A Document object, or null if no document exists with the specified *id*.

#### Description

Method; lets you target a specific file by using its unique identifier (instead of its index value, for example). Use
this method in conjunction with [document.id](../Document_object/docume92.md).

#### Example

The following example illustrates reading a document’s ID and then using it to target that document:

```javascript
var originalDocID = fl.getDocumentDOM().id;
// other code here, maybe working in different files
var targetDoc = fl.findDocumentDOM(originalDocID);
// Set the height of the Stage in the original document to 400 pixels.
targetDoc.height = 400;

```

#### See also

[fl.findDocumentIndex()](../flash_object_(fl)/fl26.md)

<span id="fl.findDocumentIndex()" class="anchor"></span>


---

<!-- Source: fl26.md -->

## fl.findDocumentIndex()

#### Availability

Flash MX 2004.

#### Usage

fl.findDocumentIndex(name)

#### Parameters

**name** The document name for which you want to find the index. The document must be open.

#### Returns

An array of integers that represent the position of the document *name* in the fl.documents array.

#### Description

Method; returns an array of integers that represent the position of the document *name* in the fl.documents array. More
than one document with the same name can be open (if the documents are located in different folders).

#### Example

The following example displays information about the index position of any open files named test.fla in the Output
panel:

```javascript
var filename = "test.fla"
var docIndex = fl.findDocumentIndex(filename);
for (var index in docIndex)
    fl.trace(filename + " is open at index " + docIndex[index]);

```

#### See also

[fl.documents](../flash_object_(fl)/fl20.md), [fl.findDocumentDOM()](../flash_object_(fl)/fl25.md)


---

<!-- Source: fl27.md -->

## fl.findObjectInDocByName()

#### Availability

Flash CS3 Professional.

#### Usage

fl.findObjectInDocByName(instanceName, document)

#### Parameters

**instanceName** A string that specifies the instance name of an item in the specified document.
**document** The [Document object](../Document_object/document_summary.md) in which to search for the specified item.

#### Returns

An array of generic objects. Use the .obj property of each item in the array to get the object. The object has the
following properties: keyframe, layer, timeline, and parent. You can use these properties to access the hierarchy of the
object. For more information on these properties and how to access them,
see [fl.findObjectInDocByType()](../flash_object_(fl)/fl28.md).

You can also access methods and properties for the layer and timeline values; they are equivalent to
the [Layer object](../Layer_object/layer_summary.md) and the [Timeline object](../Timeline_object/timeline_summary.md),
respectively.

#### Description

Method; exposes elements in a document with instance names that match the specified text.

***Note:** In some cases, this method works only when run as a command from within a FLA file, not when you are
currently viewing or editing the JSFL file.*

#### Example

The following example searches the current document for elements named "instance01" .

```javascript
var nameToSearchFor = "instance01";
var doc = fl.getDocumentDOM();
var results = fl.findObjectInDocByName(nameToSearchFor, doc);
if (results.length > 0) {
    alert("success, found " + results.length + " objects");
} else {
    alert("failed, no objects named " + nameToSearchFor + " found");
}

```

#### See also

[fl.findObjectInDocByType()](../flash_object_(fl)/fl28.md)

<span id="fl.findObjectInDocByType()" class="anchor"></span>


---

<!-- Source: fl28.md -->

## fl.findObjectInDocByType()

#### Availability

Flash CS3 Professional.

#### Usage

fl.findObjectInDocByType(elementType, document)

#### Parameters

**elementType** A string that represents the type of element to search for. For acceptable values, see
[element.elementType](../Element_object/element1.md).

**document** The [Document object](../Document_object/document_summary.md) in which to search for the specified item.

#### Returns

An array of generic objects. Use the .obj property of each item in the array to get the element object. Each object has
the following properties: keyframe, layer, timeline, and parent. You can use these properties to access the hierarchy of
the object.

You can also access methods and properties for the layer and timeline values; they are equivalent to
the [Layer object](../Layer_object/layer_summary.md) and the [Timeline object](../Timeline_object/timeline_summary.md),
respectively.

The second and third examples in the Examples section show how to access these properties.

#### Description

Method; exposes elements of a specified element type in a document.

***Note:** In some cases, this method works only when run as a command from within a FLA file, not when you are
currently viewing or editing the JSFL file.*

#### Example

The following example searches the current document for text fields and then changes their contents:

```javascript
var doc = fl.getDocumentDOM();
var typeToSearchFor = "text";
var results = fl.findObjectInDocByType(typeToSearchFor, doc);
if (results.length > 0) {
    for (var i = 0; i < results.length; i++) {
        results[i].obj.setTextString("new text");
    }
    alert("success, found " + results.length + " objects");
} else {
    alert("failed, no objects of type " + typeToSearchFor + " found");
}
```

The following example shows how to access the special properties of the object returned by this method:

```javascript
var doc = fl.getDocumentDOM();
var resultsArray = findObjectInDocByType("text", doc);
if (resultsArray.length > 0) {
    var firstItem = resultsArray[0];
// firstItem.obj- This is the element object that was found.
// You can access the following properties of this object:
// firstItem.keyframe- The keyframe that the element is on.
// firstItem.layer- The layer that the keyframe is on.
// firstItem.timeline- The timeline that the layer is on.
// firstItem.parent- The parent of the timeline. For example,
// the timeline might be in a symbol instance.
}
```

The following example shows how to back up the DOM to find the name of a layer on which a text field was found, using
the resultArray.obj object:

```javascript
var doc = fl.getDocumentDOM();
var typeToSearchFor = "text";
var resultsArray = fl.findObjectInDocByType(typeToSearchFor, doc);
if (resultsArray.length > 0) {
    for (var i = 0; i < resultsArray.length; i++) {
        resultsArray[i].obj.setTextString("new text");
        var firstItem = resultsArray[0];
        firstItemObj = firstItem.obj;
        fl.trace(firstItemObj.layer.name + "layerName");
    }
} else {
    alert("failed, no objects of type " + typeToSearchFor + " found");
}

```

#### See also

[fl.findObjectInDocByName()](../flash_object_(fl)/fl27.md)


---

<!-- Source: fl29.md -->

## fl.flexSDKPath

#### Availability

Flash CS4 Professional.

#### Usage

fl.flexSDKPath

#### Description

Property; a string that specifies the path to the Flex SDK folder, which contains bin, frameworks, lib, and other
folders. In the authoring tool, the items are specified by choosing Edit > Preferences > ActionScript > ActionScript 3.0
Settings.

#### Example

The following code displays the Flex SDK path in the Output panel:

```javascript
fl.trace(fl.flexSDKPath);

```

#### See also

[fl.externalLibraryPath](../flash_object_(fl)/fl23.md), [fl.libraryPath](../flash_object_(fl)/fl39.md),  [fl.sourcePath](../flash_object_(fl)/fl72.md)


---

<!-- Source: fl3.md -->

## fl.browseForFileURL()

#### Availability

Flash MX 2004.

#### Usage

fl.browseForFileURL(browseType [, title [, fileDescription [, fileFilter]]])

#### Parameters

**browseType** A string that specifies the type of file browse operation. Valid values are "open", "select" or "save".
The values "open" and "select" open the system File Open dialog box. Each value is provided for compatibility with
Dreamweaver. The value "save" opens a system File Save dialog box.

**title** An optional string that specifies the title for the File Open or File Save dialog box. If this parameter is
omitted, a default value is used. This parameter is optional.

**fileDescription** An optional string that specifies a file description, for example:

FLA Document (*.fla)
ActionScript File (*.as)

**fileFilter** An optional string that specifies a filter, such that only files that match the filters are displayed in
the dialog, for example:

"fla"
"fla;as"
"jsfl;fla;as"

#### Returns

The URL of the file, expressed as a file:/// URI; returns null if the user cancels out of the dialog box.

#### Description

Method; opens a File Open or File Save system dialog box and lets the user specify a file to be opened or saved.

#### Example

The following examples illustrate various options of the fl.browseForFileURL() method:

```javascript

//CC
var uri = fl.browseForFileURL("open", "Select a FLA", "FLA Document (*.fla)", "fla");
or
var fileDescription = "FLA document (*.fla);Actionscript File (*.as)";
var fileFilter = "fla;as";
var uri = fl.browseForFileURL("open", "Select a FLA or AS file", fileDescription, fileFilter);

//The following are for CS4 through CS6. They do not work in CC.
var fileURL = fl.browseForFileURL("open", "Select file");

var doc = fl.openDocument(fileURL);
// The macFormat and winFormat parameters are supported in Flash CS4 through CS6.
// To enable only FLA files in the open file dialog
var macFormat = "Flash Document|SPA||";
var winFormat = "Flash Document|*.fla||";
var previewArea = {};
var uri = fl.browseForFileURL("open", "Select a FLA file", previewArea, macFormat, winFormat);

// To enable only AS files in the open file dialog
var macFormat = "ActionScript File|TEXT[*.as||";
var winFormat = "ActionScript File|*.as||";
var previewArea = {};
var uri = fl.browseForFileURL("open", "Select a FLA file", previewArea, macFormat, winFormat);

// To enable only FLA and AS files in the open file dialog
var macFormat = "Flash Document|SPA[*.fla|ActionScript File|TEXT[*.as||";
var winFormat = "Flash Document|*.fla|ActionScript File|*.as||";
var previewArea = {};
var uri = fl.browseForFileURL("open", "Select a FLA or AS file", previewArea, macFormat,
    winFormat);

```

#### See also

[fl.browseForFolderURL()](#fl.browseForFolderURL())

<span id="fl.browseForFolderURL()" class="anchor"></span>


---

<!-- Source: fl30.md -->

## fl.getAppMemoryInfo()

#### Availability

Flash 8 (Windows only).

#### Usage

fl.getAppMemoryInfo(memType)

#### Parameters

**memType** An integer that specifies the memory utilization area to be queried. For a list of acceptable values, see
the following description.

#### Returns

An integer that represents the number of bytes being used in a specified area of Flash.exe memory.

#### Description

Method (Windows only); returns an integer that represents the number of bytes being used in a specified area of
Flash.exe memory. Use the following table to determine which value you want to pass as *memType*:

| **memType** | **Resource data**  |
|-------------|--------------------|
| 0           | PAGEFAULTCOUNT     |
| 1           | PEAKWORKINGSETSIZE |
| 2           | WORKINGSETSIZE     |

| **memType** | **Resource data**          |
|-------------|----------------------------|
| 3           | QUOTAPEAKPAGEDPOOLUSAGE    |
| 4           | QUOTAPAGEDPOOLUSAGE        |
| 5           | QUOTAPEAKNONPAGEDPOOLUSAGE |
| 6           | QUOTANONPAGEDPOOLUSAGE     |
| 7           | PAGEFILEUSAGE              |
| 8           | PEAKPAGEFILEUSAGE          |

#### Example

The following example displays the current working memory consumption:

```javascript
var memsize = fl.getAppMemoryInfo(2);
fl.trace("Flash current memory consumption is " + memsize + " bytes or " + memsize / 1024 + "
KB
"); 

```

---

<!-- Source: fl31.md -->

## fl.getDocumentDOM()

#### Availability

Flash MX 2004.

#### Usage

fl.getDocumentDOM()

#### Parameters

None.

#### Returns

A Document object, or null if no documents are open.

#### Description

Method; retrieves the DOM ([Document object](../Document_object/document_summary.md)) of the currently active document (
FLA file). If one or more documents are open but a document does not currently have focus (for example, if a JSFL file
has focus), retrieves the DOM of the most recently active document.

#### Example

The following example displays the name of the current or most recently active document in the Output panel:

```javascript
var currentDoc = fl.getDocumentDOM();
fl.trace(currentDoc.name);

```

---

<!-- Source: fl32.md -->

## fl.getThemeColor()

#### Availability

Adobe Animate.

#### Usage

fl.getThemeColor(themeParamName)

#### Parameters

**themeParamName** A string that contains a theme parameter from the list returned by the fl.getThemeColorParameters()
method. If the theme parameter is themeUseGradients, this method returns either "true" or "false".

#### Returns

A String containing a theme color (in #rrggbb or #rrggbbaa format) that matches the passed parameter. If the theme
parameter is themeUseGradients, this method returns either "true" or "false".

#### Description

Method; returns the theme color that matches the passed theme parameter. Adobe Animate introduced 2 UI themes: Dark and
Light UI, and this method retrieves the current theme color to help you render your custom content.

#### Example

The following example returns the theme colors that corresponds to themeAppBackgroundColor and
themeStaticTextNormalColor:

```javascript
var colorValue = fl.getThemeColor("themeAppBackgroundColor");
fl.trace("app background color " + colorValue);
var staticColor = fl.getThemeColor("themeStaticTextNormalColor");
fl.trace("staticColor " + staticColor);

```

---

<!-- Source: fl33.md -->

## fl.getThemeColorParameters()

#### Availability

Adobe Animate.

#### Usage

fl.getThemeColorParameters()

#### Parameters

None.

#### Returns

An Array of strings that contain the theme color parameters.

#### Description

Method; returns an Array of strings that contain the theme color parameters. The available theme color parameters are as
follows:

- themeAppBackgroundColor

- themeItemSelectedColor

- themeItemHighlightedColor

- themeHotTextNormalColor

- themeHotTextRolloverColor

- themeHotTextDisableColor

- themeStaticTextNormalColor

- themeStaticTextDisableColor

- themeTextEditNormalBackgroundColor

- themeTextEditDisableBackgroundColor

- themeUseGradients

- themeEnableShading

- themeDividerLine

- themeDividerLineBevel

- themeControlFocus

- themeControlBorderNormal

- themeControlBorderDisabled

- themeControlFillNormal

- themeControlFillTopNormal

- themeControlFillBottomNormal

- themeControlFillOver

- themeControlFillTopOver

- themeControlFillBottomOver

- themeControlFillDown

- themeControlFillTopDown

- themeControlFillBottomDown

- themeControlFillDisabled

- themeControlFillTopDisabled

- themeControlFillBottomDisabled

- themeControlFillSelectedOver

- themeControlFillTopSelectedOver

- themeControlFillBottomSelectedOver

- themeGenericIconNormal

- themeGenericIconShadowNormal

- themeGenericIconDisabled

- themeGenericIconShadowDisabled

Adobe Animate introduced 2 UI themes: Dark and Light UI, and this method retrieves the current theme color parameters to
help you render your custom content.

***Note:** The "top" and "bottom" colors are for drawing controls when shading is enabled. When shading is disabled,
use*
*themeControlFillNormal, themeControlFillOver without the "top" and "bottom" in the names*

#### Example

The following example lists the theme color parameters:

```javascript
var params = fl.getThemeColorParameters();
for (x = 0; x < params.length; x++) {
    fl.trace("params: " + params[x]);
}

```

---

<!-- Source: fl34.md -->

## fl.getThemeFontInfo()

#### Availability

Adobe Animate.

#### Usage

fl.getThemeFontInfo(infoType, size)

#### Parameters

**infoType** A string that contains one of the following:

- fontStyle - Return the font style for the size specified by the *size* parameter.

- fontSize - Return the font size for the size specified by the *size* parameter.

**size** A string that specifies either "large" or "small".

#### Returns

A String containing either the font style or the font size for the specifie size.

#### Description

Method; returns either the font Style or the font Size that is used to draw the UI of the specified size.

#### Example

The following example illustrates the use of this method:

```javascript
fl.getThemeFontInfo('fontStyle', 'large'); // Return the fontStyle for large size
fl.getThemeFontInfo('fontStyle', 'small'); // Return the fontStyle for small size
fl.getThemeFontInfo('fontSize', 'large'); // Return the fontSize for large size
fl.getThemeFontInfo('fontSize', 'small'); // Return the fontSize for small size

```

---

<!-- Source: fl35.md -->

## fl.getSwfPanel()

#### Availability

Flash CS5.5 Professional.

#### Usage

fl.getSwfPanel(panelName, [useLocalizedPanelName])

#### Parameters

**panelName** The localized panel name or the root filename of the panel's SWF file. Pass in false as the second
parameter if using the latter.

**useLocalizedPanelName** Optional. Defaults to true. If false, the panelName parameter is assumed to be the English (
unlocalized) name of the panel, which corresponds to the SWF filename without the file extension.

#### Returns

SWFPanel object.

#### Description

Method; returns the SWFPanel object based on the panel's localized name or its SWF filename (without the filename
extension).

#### Example

The following example displays the name of the panel referenced as ‘Project’ in the Output panel:

```javascript
fl.trace('name of panel is: ' + fl.getSwfPanel('Project').name);

```

---

<!-- Source: fl36.md -->

## fl.installedPlayers

#### Availability

Flash CS5.5 Professional.

#### Usage

fl.installedPlayers()

#### Parameters

None.

#### Returns

An array of generic objects corresponding to the list of installed Flash Players in the document PI.

#### Description

Read-only property; The array of generic objects corresponding to the list of installed Flash Players in the document
PI. Each object in the array contains the following properties:

**name** The string name of the document.

**version** Can be used to set the current player for a document, using the Document.setPlayerVersion() function.

**minASVersion** The minimum ActionScript version required by the document. An integer between the minASVersion and the
maxASVersion (inclusive) can be used to set the ActionScript version of the document, using the Document.asVersion
property.

**maxASVersion** The maximum ActionScript version supported by the document.

**stageWidth** The default Stage width in pixels for the given target. For example, for iPhone the default size is 320 x
480 pixels. For Android, the default size is 480 x 800.

**stageHeight** The default Stage height in pixels for the given target. For example, for iPhone the default size is 320
x 480 pixels. For Android, the default size is 480 x 800.

#### Example

The following example traces the properties of all objects in the installedPlayers array to the output window:

```javascript
var arr = fl.installedPlayers;
for (var i in arr) fl.trace("name: " + arr[i].name + " version: " + arr[i].version + "
minASVersion: " + arr[i].minASVersion + "
maxASVersion: " + arr[i].maxASVersion + "
stageWidth:
    " + arr[i].stageWidth + "
stageHeight: " + arr[i].stageHeight + "
");

```

---

<!-- Source: fl37.md -->

## fl.isFontInstalled()

#### Availability

Flash CS4 Professional.

#### Usage

fl.isFontInstalled(fontName)

#### Parameters

**fontName** A string that specifies the name of a device font.

#### Returns

A Boolean value of true if the specified font is installed; false otherwise.

#### Description

Method; determines whether a specified font is installed.

#### Example

The following code displays "true" in the Output panel if the Times font is installed.

```javascript
fl.trace(fl.isFontInstalled("Times"));

```

---

<!-- Source: fl38.md -->

## fl.languageCode

#### Availability

Flash CS5 Professional.

#### Usage

fl.languageCode

#### Description

Property; a string that returns the five character code identifying the locale of the application’s user interface.

#### Example

The following example returns the five character langauge code indicated by the Flash application’s localized user
interface:

```javascript
 locConfigURI = fl.applicationURI + fl.languageCode + "/Configuration";

```

---

<!-- Source: fl39.md -->

## fl.libraryPath

#### Availability

Flash CS4 Professional.

#### Usage

fl.libraryPath

#### Description

Property; a string that contains a list of items in the global ActionScript 3.0 Library path, which specifies the
location of SWC files or folders containing SWC files. Items in the string are delimited by semi-colons. In the
authoring tool, the items are specified by choosing Edit > Preferences > ActionScript > ActionScript 3.0 Settings.

#### Example

The following example adds the /SWC folder to the global ActionScript 3.0 Library path:

```javascript

fl.trace(fl.libraryPath);
fl.libraryPath = "/SWC;" + fl.libraryPath;
fl.trace(fl.libraryPath);

```

#### See also

[fl.externalLibraryPath](../flash_object_(fl)/fl23.md), [fl.flexSDKPath](../flash_object_(fl)/fl29.md),  [fl.sourcePath](../flash_object_(fl)/fl72.md),  [document.libraryPath](../Document_object/docume99.md)


---

<!-- Source: fl4.md -->

## fl.browseForFolderURL()

#### Availability

Flash 8.

#### Usage

fl.browseForFolderURL([description])

#### Parameters

**description** An optional string that specifies the description of the Browse For Folder dialog box. If this parameter
is omitted, the dialog box title is "Select Folder."

#### Returns

The URL of the folder, expressed as a file:/// URI; returns null if the user cancels out of the dialog box.

#### Description

Method; displays a Browse for Folder dialog box and lets the user select a folder.

#### Example

The following example lets the user select a folder and then displays a list of files in that folder:

```javascript
var folderURI = fl.browseForFolderURL("Select a folder.");
var folderContents = FLfile.listFolder(folderURI);
```

#### See also

[fl.browseForFileURL()](../flash_object_(fl)/fl3.md), [FLfile object](../FLfile_object/FLfile_summary.md)


---

<!-- Source: fl40.md -->

## fl.mapPlayerURL()

#### Availability

Flash MX 2004.

#### Usage

fl.mapPlayerURL(URI [, returnMBCS])

#### Parameters

**URI** A string that contains the escaped Unicode URL to map.

**returnMBCS** A Boolean value that you must set to true if you want an escaped MBCS path returned. Otherwise, the
method returns UTF-8. The default value is false. This parameter is optional.

#### Returns

A string that is the converted URL.

#### Description

Method; maps an escaped Unicode URL to a UTF-8 or MBCS URL. Use this method when the string will be used in ActionScript
to access an external resource. You must use this method if you need to handle multibyte characters.

#### Example

The following example converts a URL to UTF-8 so the player can load it:

```javascript
var url = MMExecute("fl.mapPlayerURL(" + myURL + ", false);");
mc.loadMovie(url);

```

---

<!-- Source: fl41.md -->

## fl.Math

#### Availability

Flash MX 2004.

#### Usage

fl.Math

#### Description

Read-only property; the [Math object](../Math_object/Math_summary.md) provides methods for matrix and point operations.

#### Example

The following example shows the transformation matrix of the selected object and its inverse:

```javascript
// Select an element on the Stage and then run this script.
var mat = fl.getDocumentDOM().selection[0].matrix;
for (var prop in mat) {
    fl.trace("mat." + prop + " = " + mat[prop]);
}
var invMat = fl.Math.invertMatrix(mat);
for (var prop in invMat) {
    fl.trace("invMat." + prop + " = " + invMat[prop]);
}

```

---

<!-- Source: fl42.md -->

## fl.mruRecentFileList

#### Availability

Flash MX 2004.

#### Usage

fl.mruRecentFileList

#### Description

Read-only property; an array of the complete filenames in the Most Recently Used (MRU) list that the Flash authoring
tool manages.

#### Example

The following example displays the number of recently opened files and the name of each file, in the Output panel:

```javascript
fl.trace("Number of recently opened files: " + fl.mruRecentFileList.length);
for (i = 0; i < fl.mruRecentFileList.length; i++) fl.trace("file: " + fl.mruRecentFileList[i]); 
```

---

<!-- Source: fl43.md -->

## fl.mruRecentFileListType

#### Availability

Flash MX 2004.

#### Usage

fl.mruRecentFileListType

#### Description

Read-only property; an array of the file types in the MRU list that the Flash authoring tool manages. This array
corresponds to the array in the [fl.mruRecentFileList](../flash_object_(fl)/fl42.md) property.

#### Example

The following example displays the number of recently opened files and the type of each file, in the Output panel:

```javascript
fl.trace("Number of recently opened files: " + fl.mruRecentFileListType.length);
for (i = 0; i < fl.mruRecentFileListType.length; i++) fl.trace("type: " +
    fl.mruRecentFileListType[i]);

```

---

<!-- Source: fl44.md -->

## fl.objectDrawingMode

#### Availability

Flash 8.

#### Usage

fl.objectDrawingMode

#### Description

Property; a Boolean value that specifies whether the object drawing mode is enabled (true) or the merge drawing mode is
enabled (false).

#### Example

The following example toggles the state of the object drawing mode:

```javascript
var toggleMode = fl.objectDrawingMode;
if (toggleMode) {
    fl.objectDrawingMode = false;
} else {
    fl.objectDrawingMode = true;
}

```

---

<!-- Source: fl45.md -->

## fl.openDocument()

#### Availability

Flash MX 2004.

#### Usage

fl.openDocument(fileURI)

#### Parameters

**fileURI** A string, expressed as a file:/// URI, that specifies the name of the file to be opened.

#### Returns

The [Document object](../Document_object/document_summary.md) for the newly opened document, if the method is
successful. If the file is not found or is not a valid FLA file, an error is reported and the script is cancelled.

#### Description

Method; opens a Flash document (FLA file) for editing in a new Flash Document window and gives it focus. For a user, the
effect is the same as selecting File > Open and then selecting a file. If the specified file is already open, the window
that contains the document comes to the front. The window that contains the specified file becomes the currently
selected document.

#### Example

The following example opens a file named Document.fla that is stored in the root directory on the C drive. The code
stores a Document object representing that document in the doc variable and sets the document to be the currently
selected document. That is, until focus is changed, fl.getDocumentDOM() refers to this document.

```javascript
var doc = fl.openDocument("file:///c|/Document.fla");

```

---

<!-- Source: fl46.md -->

## fl.openScript()

#### Availability

Flash MX 2004.

#### Usage

fl.openScript(fileURI )

#### Parameters

**fileURI** A string, expressed as a file:/// URI, that specifies the path of the JSFL, AS, ASC, XML, TXT, or other file
that should be loaded into Flash.

#### Returns

Nothing.

#### Description

Method; opens an existing file or creates a new script (JSFL, AS, ASC) or other file (XML, TXT) in Flash.

#### Example

The following example opens a file named my_test.jsfl that is stored in the temp directory on the C drive:

```javascript
fl.openScript("file:///c|/temp/my_test.jsfl");

```

---

<!-- Source: fl47.md -->

## fl.outputPanel

#### Availability

Flash MX 2004.

#### Usage

fl.outputPanel

#### Description

Read-only property; reference to the [outputPanel object](../outputPanel_object/outputPanel_summary.md).

#### Example

See [outputPanel object](../outputPanel_object/outputPanel_summary.md).


---

<!-- Source: fl48.md -->

## fl.packagePaths - dropped

#### Availability

Flash CS3 Professional. *Dropped in Adobe Animate*.

#### Usage

fl.packagePaths

#### Description

*Dropped in Adobe Animate.*
Property; a string that corresponds to the global Classpath setting in the ActionScript 2.0 Settings dialog box. Class
paths within the string are delimited with semi-colons (;). To view or change ActionScript 3.0 Classpath settings,
use [fl.as3PackagePaths](../flash_object_(fl)/fl2.md)).

#### Example

The following example illustrates changing the ActionScript 2.0 Classpath settings:

```javascript
fl.trace(fl.packagePaths);
// Output (assuming started with default value)
// .;$(LocalData)/Classes
fl.packagePaths = "buying;selling";
fl.trace(fl.packagePaths);
// Output
// buying; selling 

```

#### See also

[fl.resetPackagePaths() - dropped](../flash_object_(fl)/fl60.md)


---

<!-- Source: fl49.md -->

## fl.presetPanel

#### Availability

Flash CS4 Professional.

#### Usage

fl.presetPanel

#### Description

Read-only property: a [presetPanel object](../presetPanel_object/presetPanel_summary.md).



---

<!-- Source: fl5.md -->

## fl.clearPublishCache()

#### Availability

Flash CS5.5 Professional.

#### Usage

fl.clearPublishCache()

#### Parameters

None.

#### Returns

Nothing.

#### Description

Method; empties the publish cache.

#### Example

The following code empties the publish cache:

```javascript
fl.clearPublishCache()

```

#### See also

[fl.publishCacheDiskSizeMax](../flash_object_(fl)/fl50.md), [fl.publishCacheEnabled](../flash_object_(fl)/fl51.md), [fl.publishCacheMemoryEntrySizeLimit](../flash_object_(fl)/fl52.md), [fl.publishCacheMemorySizeMax](../flash_object_(fl)/fl53.md)


---

<!-- Source: fl50.md -->

## fl.publishCacheDiskSizeMax

#### Availability

Flash CS5.5 Professional.

#### Usage

fl.publishCacheDiskSizeMax

#### Description

Property: an integer that sets the maximum size, in megabytes, of the publish cache on disk.

#### Example

The following code sets the maximum publish cache size on disk to 1 megabyte:

```javascript
fl.publishCacheDiskSizeMax = 1

```

#### See also

[fl.clearPublishCache()](../flash_object_(fl)/fl5.md), [fl.publishCacheEnabled](../flash_object_(fl)/fl51.md),  [fl.publishCacheMemoryEntrySizeLimit](../flash_object_(fl)/fl52.md),  [fl.publishCacheMemorySizeMax](../flash_object_(fl)/fl53.md)

<span id="fl.publishCacheEnabled" class="anchor"></span>


---

<!-- Source: fl51.md -->

## fl.publishCacheEnabled

#### Availability

Flash CS5.5 Professional.

#### Usage

fl.publishCacheEnabled

#### Description

Property: a boolean value that sets whether the publish cache is enabled.

#### Example

The following code displays whether the published cache is enabled in the Output window.

```javascript
fl.trace(fl.publishCacheEnabled);

```

#### See also

[fl.publishCacheDiskSizeMax](../flash_object_(fl)/fl50.md),  [fl.clearPublishCache()](../flash_object_(fl)/fl5.md),  [fl.publishCacheMemoryEntrySizeLimit](../flash_object_(fl)/fl52.md),  [fl.publishCacheMemorySizeMax](../flash_object_(fl)/fl53.md)

<span id="fl.publishCacheMemoryEntrySizeLimit" class="anchor"></span>


---

<!-- Source: fl52.md -->

## fl.publishCacheMemoryEntrySizeLimit

#### Availability

Flash CS5.5 Professional.

#### Usage

fl.publishCacheMemoryEntrySizeLimit

#### Description

Property: an integer that sets the maximum size, in kilobytes, of entries that can be added to the publish cache in
memory. Anything at or below this size will be kept in memory; anything larger will be written to disk.

Users with a lot of memory might want to raise this value to increase performance, while a user with very little memory
might want to make it lower to keep the publish cache from consuming too much memory.

#### Example

The following code sets the maximum publish cache entry size that can be stored in memory to 100 kilobytes:

```javascript
fl.publishCacheMemoryEntrySizeLimit = 100

```

#### See also

[fl.publishCacheDiskSizeMax](../flash_object_(fl)/fl50.md),  [fl.publishCacheEnabled](../flash_object_(fl)/fl51.md),  [fl.clearPublishCache()](../flash_object_(fl)/fl5.md),  [fl.publishCacheMemorySizeMax](../flash_object_(fl)/fl53.md)

<span id="fl.publishCacheMemorySizeMax" class="anchor"></span>


---

<!-- Source: fl53.md -->

## fl.publishCacheMemorySizeMax

#### Availability

Flash CS5.5 Professional.

#### Usage

fl.publishCacheMemorySizeMax

#### Description

Property: an integer that sets the maximum size, in megabytes, of the publish cache in memory.

#### Example

The following code sets the maximum publish cache size in memory to 1 megabyte:

```javascript
fl.publishCacheMemorySizeMax = 1

```

#### See also

[fl.publishCacheDiskSizeMax](../flash_object_(fl)/fl50.md),  [fl.publishCacheEnabled](../flash_object_(fl)/fl51.md),  [fl.publishCacheMemoryEntrySizeLimit](../flash_object_(fl)/fl52.md),  [fl.clearPublishCache()](../flash_object_(fl)/fl5.md)


---

<!-- Source: fl54.md -->

## fl.publishDocument()

#### Availability

Flash CS5 Professional.

#### Usage

fl.publishDocument( flaURI [, publishProfile] )

#### Parameters

**flaURI** A string, expressed as a file:/// URI, that specifies the path of the FLA file that should be silently
published.

**publishProfile** A string that specifies the publish profile to use when publishing. If this parameter is omitted, the
default publish profile is used.

#### Returns

Boolean

#### Description

Method; publishes a FLA file without opening it. This API opens the FLA in a headless mode and publishes the SWF (or
whatever the profile is set to). The second parameter (publishProfile) is optional. The return value is a boolean
indicating if the profile was found or not. In the case where the second parameter is not supplied, the return value is
always true.

#### Example

The following example prompts the user to select a FLA file and silently publishes it using the "Default" publish
profile:

```javascript
var uri = fl.browseForFileURL("select", "select a FLA file to publish");
var publishProfileName = "Default";
fl.publishDocument(uri, publishProfileName);

```

---

<!-- Source: fl55.md -->

## fl.quit()

#### Availability

Flash MX 2004.

#### Usage

fl.quit([bPromptIfNeeded])

#### Parameters

**bPromptIfNeeded** A Boolean value that is true (default) if you want the user to be prompted to save any modified
documents. Set this parameter to false if you do not want the user to be prompted to save modified documents. In
the latter case, any modifications in open documents will be discarded and the application will exit immediately.
Although it is useful for batch processing, use this method with caution. This parameter is optional.

#### Returns

Nothing.

#### Description

Method; quits Flash, prompting the user to save any changed documents.

#### Example

The following example illustrates quitting with and without asking to save modified documents:

```javascript
// Quit with prompt to save any modified documents.
fl.quit();
fl.quit(true); // True is optional.
// Quit without saving any files.
fl.quit(false);

```

---

<!-- Source: fl56.md -->

## fl.reloadEffects() - dropped

#### Availability

Flash MX 2004. *Dropped in Adobe Animate*.

#### Usage

fl.reloadEffects()

#### Parameters

None.

#### Returns

Nothing.

#### Description

*Dropped in Adobe Animate.*

Method; reloads all effects descriptors defined in the user’s Configuration Effects folder. This permits you to rapidly
change the scripts during development, and it provides a mechanism to improve the effects without relaunching the
application. This method works best if used in a command placed in the Commands folder.

#### Example

The following example is a one-line script that you can place in the Commands folder. When you need to reload effects,
go to the Commands menu and execute the script.

```javascript
fl.reloadEffects();

```

---

<!-- Source: fl57.md -->

## fl.reloadTools()

#### Availability

Flash MX 2004.

#### Usage

fl.reloadTools()

#### Parameters

None.

#### Returns

Nothing.

#### Description

Method; rebuilds the Tools panel from the toolconfig.xml file. This method is used only when creating extensible tools.
Use this method when you need to reload the Tools panel, for example, after modifying the JSFL file that defines a tool
that is already present in the panel.

#### Example

The following example is a one-line script that you can place in the Commands folder. When you need to reload the Tools
panel, run the script from the Commands menu.

```javascript
fl.reloadTools();

```

---

<!-- Source: fl58.md -->

## fl.removeEventListener()

#### Availability

Flash CS3 Professional. The id parameter is new in CS4.

#### Usage

fl.removeEventListener(eventType, id)

#### Parameters

**eventType** A string that specifies the event type to remove from this callback function. Acceptable values are "
documentNew", "documentOpened", "documentClosed", "mouseMove", "documentChanged", "layerChanged", "timelineChanged",
and "frameChanged".

**id** An integer that specifies the listener ID returned from the corresponding fl.addEventListener() call.

#### Returns

A Boolean value of true if the event listener was successfully removed; false if the function was never added to the
list with the fl.addEventListener() method.

#### Description

Unregisters a function that was registered using [fl.addEventListener()](../flash_object_(fl)/fl1.md).

#### Example

The following example removes the event listener associated with the documentClosed event:

```javascript
fl.removeEventListener("documentClosed", eventID);

```

#### See also

[fl.addEventListener()](../flash_object_(fl)/fl1.md)


---

<!-- Source: fl59.md -->

## fl.resetAS3PackagePaths()

#### Availability

Flash CS3 Professional.

#### Usage

fl.resetAS3PackagePaths()

#### Parameters

None.

#### Description

Method; resets the global Classpath setting in the ActionScript 3.0 Settings dialog box to the default value. To reset
the ActionScript 2.0 global Classpath, use [fl.resetPackagePaths() - dropped](../flash_object_(fl)/fl60.md).

#### Example

The following example resets the ActionScript 3.0 Classpath setting to its default value.

```javascript
fl.resetAS3PackagePaths();

```

#### See also

[fl.as3PackagePaths](../flash_object_(fl)/fl2.md)

<span id="fl.resetPackagePaths()_-_dropped" class="anchor"></span>


---

<!-- Source: fl6.md -->

## fl.clipCopyString()

#### Availability

Flash CS3 Professional.

#### Usage

fl.clipCopyString(string)

#### Parameters

**string** A string to be copied to the Clipboard.

#### Returns

Nothing.

#### Description

Method; copies the specified string to the Clipboard.
To copy the current selection to the Clipboard, use [document.clipCopy()](../Document_object/docume30.md).

#### Example

The following example copies the path of the current document to the Clipboard:

```javascript
var documentPath = fl.getDocumentDOM().path;
fl.clipCopyString(documentPath);

```

---

<!-- Source: fl60.md -->

## fl.resetPackagePaths() - dropped

#### Availability

Flash CS3 Professional. *Dropped in Adobe Animate*.

#### Usage

fl.resetPackagePaths()

#### Parameters

None.

#### Description

*Dropped in Adobe Animate.*
Method; resets the global Classpath setting in the ActionScript 2.0 Settings dialog box to the default value. To reset
the ActionScript 3.0 global Classpath, use [fl.resetAS3PackagePaths()](../flash_object_(fl)/fl59.md).

#### Example

The following example resets the ActionScript 2.0 Classpath setting to its default value.

```javascript
fl.resetPackagePaths();

```

#### See also

[fl.packagePaths - dropped](../flash_object_(fl)/fl48.md)


---

<!-- Source: fl61.md -->

## fl.revertDocument()

#### Availability

Flash MX 2004.

#### Usage

fl.revertDocument(documentObject)

#### Parameters

**documentObject** A [Document object](../Document_object/document_summary.md). If *documentObject* refers to the active
document, the Document window might not revert until the script that calls this method finishes executing.

#### Returns

A Boolean value: true if the Revert operation completes successfully; false otherwise.

#### Description

Method; reverts the specified FLA document to its last saved version. Unlike the File \Revert menu option, this method
does not display a warning window that asks the user to confirm the operation. See
also [document.revert()](../Document_object/docum340.md) and [document.canRevert()](../Document_object/docume26.md).

#### Example

The following example reverts the current FLA document to its last saved version; any changes made since the last save
are lost.

```javascript
fl.revertDocument(fl.getDocumentDOM());

```

---

<!-- Source: fl62.md -->

## fl.runScript()

#### Availability

Flash MX 2004.

#### Usage

fl.runScript(fileURI [, funcName [, arg1, arg2, ...]])

#### Parameters

**fileURI** A string, expressed as a file:/// URI, that specifies the name of the script file to execute.

**funcName** A string that identifies a function to execute in the JSFL file that is specified in *fileURI*. This
parameter is optional.

**arg** An optional parameter that specifies one or more arguments to be passed to *funcname*.

#### Returns

The function's result as a string, if *funcName* is specified; otherwise, nothing.

#### Description

Method; executes a JavaScript file. If a function is specified as one of the arguments, it runs the function and also
any code in the script that is not within the function. The rest of the code in the script runs before the function is
run.

#### Example

Suppose there is a script file named testScript.jsfl in the root directory on the C drive and its contents are as
follows:

```javascript
function testFunct(num, minNum) {
    fl.trace("in testFunct: 1st arg: " + num + " 2nd arg: " + minNum);
}

for (i = 0; i < 2; i++) {
    fl.trace("in for loop i=" + i);
}
fl.trace("end of for loop");
// End of testScript.jsfl
```

If you issue the following command,

```javascript
fl.runScript("file:///C|/testScript.jsfl", "testFunct", 10, 1);
``` 

the following information appears in the Output panel:

```javascript
in for loop i=0
in for loop i=1
end of for loop
in testFunct: 1st arg: 10 2nd arg: 1
```

You can also just call testScript.jsfl without executing a function, as follows:

```javascript
fl.runScript("file:///C|/testScript.jsfl");
```

This produces the following in the Output panel:

```javascript
in for loop i=0
in for loop i=1
end of for loop

```

---

<!-- Source: fl63.md -->

## fl.saveAll()

#### Availability

Flash MX 2004.

#### Usage

fl.saveAll()

#### Parameters

None.

#### Returns

Nothing.

#### Description

Method; saves all open documents.
If a file has never been saved, the Save As dialog box displays. If a file has not been modified since the last time it
was saved, the file isn’t saved. To allow an unsaved or unmodified file to be saved,
use [fl.saveDocumentAs()](../flash_object_(fl)/fl65.md).

#### Example

The following example saves all open documents:

```javascript
fl.saveAll();

```

#### See also

[document.save()](../Document_object/docum370.md), [document.saveAndCompact() - dropped](../Document_object/docum380.md), [fl.saveDocument()](../flash_object_(fl)/fl64.md), [fl.saveDocumentAs()](../flash_object_(fl)/fl65.md)

<span id="fl.saveDocument()" class="anchor"></span>


---

<!-- Source: fl64.md -->

## fl.saveDocument()

#### Availability

Flash MX 2004.

#### Usage

fl.saveDocument(document \[, fileURI\])

#### Parameters

**document** A [Document object](../Document_object/document_summary.md) that specifies the document to be saved. If
*document* is null, the active document is saved.
**fileURI** A string, expressed as a file:/// URI, that specifies the name of the saved document. If the *fileURI*
parameter is null or omitted, the document is saved with its current name. This parameter is optional.

#### Returns

A Boolean value: true if the save operation completes successfully; false otherwise. This method save the file
regardless of whether it is new, modified, or unmodified.

#### Description

Method; saves the specified document as a FLA document.

#### Example

The following example saves the current document and two specified documents:

```javascript
// Save the current document.
alert(fl.saveDocument(fl.getDocumentDOM()));
// Save the specified documents.
alert(fl.saveDocument(fl.documents[0], "file:///C|/example1.fla"));
alert(fl.saveDocument(fl.documents[1], "file:///C|/example2.fla"));

```

#### See also

[document.save()](../Document_object/docum370.md), [document.saveAndCompact() - dropped](../Document_object/docum380.md), [fl.saveAll()](../flash_object_(fl)/fl63.md), [fl.saveDocumentAs()](../flash_object_(fl)/fl65.md)

<span id="fl.saveDocumentAs()" class="anchor"></span>


---

<!-- Source: fl65.md -->

## fl.saveDocumentAs()

#### Availability

Flash MX 2004.

#### Usage

fl.saveDocumentAs(document)

#### Parameters

**document** A [Document object](../Document_object/document_summary.md) that specifies the document to save. If
*document* is null, the active document is saved.

#### Returns

A Boolean value: true if the Save As operation completes successfully; false otherwise.

#### Description

Method; displays the Save As dialog box for the specified document.

#### Example

The following example prompts the user to save the specified document and then displays an alert message that indicates
whether the document was saved:

```javascript
alert(fl.saveDocumentAs(fl.documents[1]));

```

#### See also

[document.save()](../Document_object/docum370.md), [document.saveAndCompact() - dropped](../Document_object/docum380.md), [fl.saveAll()](../flash_object_(fl)/fl63.md), [fl.saveDocument()](../flash_object_(fl)/fl64.md)

---

<!-- Source: fl66.md -->

## fl.scriptURI

#### Availability

Flash CS3 Professional.

#### Usage

fl.scriptURI

#### Description

Read-only property; a string that represents the path of the currently running JSFL script, expressed as a file:/// URI.
If the script was called from [fl.runScript()](../flash_object_(fl)/fl62.md), this property represents the path of the
immediate parent script. That is, it doesn’t traverse multiple calls to [fl.runScript()](../flash_object_(fl)/fl62.md)
to find the path of the original calling script.

#### Example

The following example displays the path of the currently running JSFL script in the Output panel:

```javascript
fl.trace(fl.scriptURI);

```

#### See also

[fl.runScript()](../flash_object_(fl)/fl62.md)


---

<!-- Source: fl67.md -->

## fl.selectElement()

#### Availability

Flash CS3 Professional.

#### Usage

fl.selectElement(elementObject, editMode)

#### Parameters

**elementObject** The [Element object](../Element_object/element_summary.md) you want to select.
**editMode** A Boolean value that specifies whether you want to edit the element (true) or want only to select it (
false).

#### Returns

A Boolean value of true if the element was successfully selected; false otherwise.

#### Description

Method; enables selection or editing of an element. Generally, you will use this method on objects returned by
[fl.findObjectInDocByName()](../flash_object_(fl)/fl27.md)
or [fl.findObjectInDocByType()](../flash_object_(fl)/fl28.md).

#### Example

The following example selects an element named "second text field" if one is found in the document:

```javascript
var nameToSearchFor = "second text field";
var doc = fl.getDocumentDOM();
// Start by viewing Scene 1 (index value of 0).
document.editScene(0);
// Search for element by name.
var results = fl.findObjectInDocByName(nameToSearchFor, doc);
if (results.length > 0) {
// Select the first element found.
// Pass false, so the symbolInstance you are searching for is selected.
// If you pass true, the symbol instance will switch to edit mode.
    fl.selectElement(results[0], false);
    alert("success, found " + results.length + " objects")
} else {
    alert("failed, no objects with name "
    " + nameToSearchFor + "
    " found"
)
    ;
}

```

#### See also

[fl.findObjectInDocByName()](../flash_object_(fl)/fl27.md), [fl.findObjectInDocByType()](../flash_object_(fl)/fl28.md)


---

<!-- Source: fl68.md -->

## fl.selectTool()

#### Availability

Flash CS3 Professional.

#### Usage

fl.selectTool(toolName)

#### Parameters

**toolName** A string that specifies the name of the tool to select. See "Description" below for information on
acceptable values for this parameter.

#### Description

Method; selects the specified tool in the Tools panel. The acceptable values for *toolName* are "arrow", "
bezierSelect", "freeXform", "fillXform", "lasso", "pen", "penplus", "penminus", "penmodify", "text", "line", "rect", "
oval", "rectPrimitive", "ovalPrimitive", "polystar", "pencil", "brush", "inkBottle", "bucket", "eyeDropper", "eraser", "
hand", "magnifier", "GPUBrush", "ThreeDRotate", "ThreeDXform", "lassoPoly", "magicWand", "paintBrush", "camera", "
width", "stageRotation", "timeScrub" and "puppet".
If you or a user creates custom tools, the names of those tools can also be passed as the *toolName* parameter.

#### Example

The following example selects the Pen tool.

```javascript
fl.selectTool("pen");

```

#### See also

[Tools object](../Tools_object/tools_summary.md), [ToolObj object](../ToolObj_object/toolObj_summary.md)


---

<!-- Source: fl69.md -->

## fl.setActiveWindow()

#### Availability

Flash MX 2004.

#### Usage

fl.setActiveWindow(document [, bActivateFrame])

#### Parameters

**document** A [Document object](../Document_object/document_summary.md) that specifies the document to select as the
active window.
**bActivateFrame** An optional parameter that is ignored by Flash and Fireworks and is present only for compatibility
with Dreamweaver.

#### Returns

Nothing.

#### Description

Method; sets the active window to be the specified document. This method is also supported by Dreamweaver and Fireworks.
If the document has multiple views (created by Window > Duplicate Window), the most recently active view is selected.

#### Example

The following example shows two ways to activate a specified document:

```javascript
fl.setActiveWindow(fl.documents[0]);

var theIndex = fl.findDocumentIndex("myFile.fla");
fl.setActiveWindow(fl.documents[theIndex]);

```

---

<!-- Source: fl7.md -->

## fl.closeAll()

#### Availability

Flash MX 2004.

#### Usage

fl.closeAll([bPromptToSave])

#### Parameters

**bPromptToSave** An optional Boolean value that specifies whether to display the Save dialog box for any files that
have been changed since they were previously saved, or the Save As dialog box for files that have never been saved. The
default value is true.

#### Returns

Nothing.

#### Description

Method; closes all open files (FLA files, SWF files, JSFL files, and so on). If you want to close all open files without
saving changes to any of them, pass false for *bPromptToSave*. This method does not terminate the application.

#### Example

The following code closes all open files, prompting the user to save any new or changed files.

```javascript
fl.closeAll();
```

#### See also

[fl.closeAllPlayerDocuments()](../flash_object_(fl)/fl8.md), [fl.closeDocument()](../flash_object_(fl)/fl9.md)

<span id="fl.closeAllPlayerDocuments()" class="anchor"></span>


---

<!-- Source: fl70.md -->

## fl.showIdleMessage()

#### Availability

Flash 8.

#### Usage

fl.showIdleMessage(show)

#### Parameters

**show** A Boolean value specifying whether to enable or disable the warning about a script running too long.

#### Returns

Nothing.

#### Description

Method; lets you disable the warning about a script running too long (pass false for *show*). You might want to do this
when processing batch operations that take a long time to complete. To re-enable the alert, issue the command again,
this time passing true for *show*.

#### Example

The following example illustrates how to disable and re-enable the warning about a script running too long:

```javascript
fl.showIdleMessage(false);
var result = timeConsumingFunction();
fl.showIdleMessage(true);
;
var result = timeConsumingFunction();

```

---

<!-- Source: fl71.md -->

## fl.setPrefBoolean()

#### Availability

Adobe Animate.

#### Usage

fl.setPrefBoolean(keySection, keyName, keyValue)

#### Parameters

**keySection** A string that contains the preferences section that contains keyName. (usually this is "Settings").

**keyName** A string that contains the name of the boolean preference setting to be set.

**keyValue** A string that contains the value to be set (true ohr false).

#### Returns

None.

#### Description

Method; sets a boolean preference value.

#### Example

The following example calls the fl.setPrefBoolean() method:

```javascript
fl.setPrefBoolean("BridgeTalk", "LogIncoming", true);

```

---

<!-- Source: fl72.md -->

## fl.sourcePath

#### Availability

Flash CS4 Professional.

#### Usage

fl.sourcePath

#### Description

Property; a string that contains a list of items in the global ActionScript 3.0 Source path, which specifies the
location of ActionScript class files. Items in the string are delimited by semi-colons. In the authoring tool, the items
are specified by choosing Edit > Preferences > ActionScript > ActionScript 3.0 Settings.

#### Example

The following example adds the /Classes folder to the global ActionScript 3.0 Source path:

```javascript
fl.trace(fl.sourcePath);
fl.sourcePath = "/Classes;" + fl.sourcePath;
fl.trace(fl.sourcePath);

```

#### See also

[fl.flexSDKPath](../flash_object_(fl)/fl29.md), [fl.externalLibraryPath](../flash_object_(fl)/fl23.md), [fl.libraryPath](../flash_object_(fl)/fl39.md), [document.sourcePath](../Document_object/docum36.md)


---

<!-- Source: fl73.md -->

## fl.spriteSheetExporter

#### Availability

Flash Pro CS6.

#### Usage

fl.spriteSheetExporter

#### Description

Property; returns an instance of the SpriteSheetExporter object.

#### Example

The following example returns a reference to the SpriteSheetExporter object:

```javascript
fl.trace(fl.spriteSheetExporter);

```

---

<!-- Source: fl74.md -->

## fl.swfPanels

#### Availability

Flash CS4 Professional.

#### Usage

fl.swfPanels

#### Description

Read-only property; an array of registered swfPanel objects (
see [swfPanel object](../swfPanel_object/swfPanel_summary.md)). A swfPanel object is registered if it has been opened at
least once.

A panel’s position in the array represents the order in which it was opened. If the first panel opened is named
TraceBitmap and the second panel opened is named AnotherFunction, then fl.swfPanels[0] is the TraceBitmap swfPanel
object, fl.swfPanels[1] is the AnotherFunction swfPanel object, and so on.

This property is undefined if none of panels have been opened (this behavior is new in Adobe Animate).

#### Example

The following code displays the name and path of any registered Window SWF panels in the Output panel:

```javascript
if (fl.swfPanels.length > 0) {
    for (x = 0; x < fl.swfPanels.length; x++) {
        fl.trace("Panel: " + fl.swfPanels[x].name + " -- Path: " + fl.swfPanels[x].path);
    }
}

```

---

<!-- Source: fl75.md -->

## fl.toggleBreakpoint()

#### Availability

Adobe Animate.

#### Usage

fl.toggleBreakpoint(String fileURI, int line, Boolean enable)

#### Parameters

**fileURI** A string; the URI of the the AS file in which to toggle the breakpoint.

**line** An integer; the line number at which to toggle the breakpoint.

**enable** Boolean; if set to true, the breakpoint is enabled. If set to false, the breakpoint is disabled.

#### Description

Toggles a breakpoint for the given .as file at the given line. If enable is false, the breakpoint currently stored at
that line will be erased.

#### Example

The following example enables a breakppoint at line 10 of the AS file located at C:\AS\breakpointTest.as:

```javascript
fl.toggleBreakpoint("file:///C|/AS/breakpointTest.as", 10, 1);
```

---

<!-- Source: fl76.md -->

## fl.tools

#### Availability

Flash MX 2004.

#### Usage

fl.tools

#### Description

Read-only property; an array of Tools objects (see [Tools object](../Tools_object/tools_summary.md)). This property is
used only when creating extensible tools.



---

<!-- Source: fl77.md -->

## fl.trace()

#### Availability

Flash MX 2004.

#### Usage

fl.trace(message)

#### Parameters

**message** A string that appears in the Output panel.

#### Returns

Nothing.

#### Description

Method; sends a text string to the Output panel, terminated by a new line, and displays the Output panel if it is not
already visible. This method is identical to [outputPanel.trace()](../outputPanel_object/outputPane2.md) and works in
the same way as the trace() statement in ActionScript.
To send a blank line, use fl.trace("") or fl.trace("\\n"). You can use the latter command inline, making \\n a part of
the *message* string.

#### Example

The following example displays several lines of text in the Output panel:

```javascript
fl.outputPanel.clear();
fl.trace("Hello World!!!");
var myPet = "cat";
fl.trace("\nI have a " + myPet);
fl.trace("");
fl.trace("I love my " + myPet);
fl.trace("Do you have a " + myPet + "?");

```

---

<!-- Source: fl78.md -->

## fl.version

#### Availability

Flash MX 2004.

#### Usage

fl.version

#### Description

Read-only property; the long string version of the Flash authoring tool, including platform.

#### Example

The following example displays the version of the Flash authoring tool in the Output panel:

```javascript
alert(fl.version); // For example, WIN 10,0,0,540

```

---

<!-- Source: fl79.md -->

## fl.xmlPanel()

#### Availability

Adobe Animate.

#### Usage

fl.xmlPanel(xmlURI)

#### Parameters

**xmlURI** A URI specifying the XML file that defines the controls in the panel. You must specify the full path name.

#### Returns

XMLUI. The object returned contains properties for all controls defined in the XML file. All properties are returned as
strings. The returned object will have one predefined property named "dismiss," which will have a string value that is
either "accept" or "cancel".

#### Description

Method; Launches the XML To UI dialog from a URI that points to an XML-format file.

#### Example

The following example calls the xmlPanel method:

```javascript
var obj = fl.xmlPanel(fl.configURI + "Commands/Test.xml");
for (var prop in obj) {
    fl.trace("property " + prop + " = " + obj[prop]);
}

```

---

<!-- Source: fl8.md -->

## fl.closeAllPlayerDocuments()

#### Availability

Flash CS3 Professional.

#### Usage

fl.closeAllPlayerDocuments()

#### Parameters

None.

#### Returns

A Boolean value: true if one or more movie windows were open; false otherwise.

#### Description

Method; closes all the SWF files that were opened with Control > Test Movie.

#### Example

The following example closes all the SWF files that were opened with Control > Test Movie.

```javascript
fl.closeAllPlayerDocuments();

```

#### See also

[fl.closeAll()](../flash_object_(fl)/fl7.md) , [fl.closeDocument()](../flash_object_(fl)/fl9.md)

<span id="fl.closeDocument()" class="anchor"></span>


---

<!-- Source: fl80.md -->

## fl.xmlPanelFromString()

#### Availability

Adobe Animate.

#### Usage

fl.xmlPanelFromString(xmlString)

#### Parameters

**xmlString** A string containing XML that defines a dialog.

#### Returns

XMLUI.

#### Description

Method; Launches the XML To UI dialog from an XML-format string.

#### Example

The following example calls the xmlPanelFromString method:

```javascript
var str = "<?xml version=\"1.0\"?><dialog id=\"scale-dialog\" title=\"Scale Selection\"
buttons =\"accept, cancel\"><grid><columns><column/><column/></columns><rows><row
align =\"center\"><label value=\"Scale y:\" control=\"yScale\"/><textbox
id =\"yScale\"/></row></rows></grid></dialog>";
var theDialog = fl.xmlPanelFromString(str);

```

---

<!-- Source: fl81.md -->

## fl.xmlui

#### Availability

Flash MX 2004.

#### Usage

fl.xmlui

#### Description

Read-only property; an [XMLUI object](../XMLUI_object/xmlui_summary.md). This property lets you get and set XMLUI
properties in a XMLUI dialog box and lets you accept or cancel the dialog box programmatically.

#### Example

See [XMLUI object](../XMLUI_object/xmlui_summary.md).


---

<!-- Source: fl82.md -->

## fl.addToolInToolbar()

#### Availability

Animate 2020

#### Usage

fl.addToolInToolbar(toolName)

#### Parameters

**toolName** A string that specifies the name of the tool to select. Refer [fl.selectTool](../flash_object_(fl)/fl68.md)
description for the acceptable *toolName* values.

#### Returns

boolean : Returns true if the specified tool was added successfully in the Tools Panel.

#### Description

Method; Appends the specified tool in the Tools Panel from Toolbar Palette if it is not already present.
If you or a user creates custom tools, the names of those tools can also be passed as the *toolName* parameter.

#### Example

The following example selects the Oval tool.

```javascript
var success = fl.addToolInToolbar("oval");

```

---

<!-- Source: fl9.md -->

## fl.closeDocument()

#### Availability

Flash MX 2004.

#### Usage

fl.closeDocument(documentObject \[, bPromptToSaveChanges\])

#### Parameters

**documentObject** A [Document object](../Document_object/document_summary.md). If *documentObject* refers to the active
document, the Document window might not close until the script that calls this method finishes executing.

**bPromptToSaveChanges** A Boolean value. When *bPromptToSaveChanges* is false, the user is not prompted if the document
contains unsaved changes; that is, the file is closed and the changes are discarded. If *bPromptToSaveChanges* is true,
and if the document contains unsaved changes, the user is prompted with the standard yes-or-no dialog box. The default
value is true. This parameter is optional.

#### Returns

Nothing.

#### Description

Method; closes the specified document.

#### Example

The following example illustrates two ways of closing a document.

```javascript
// Closes the specified document and prompts to save changes.
fl.closeDocument(fl.documents[0]);
fl.closeDocument(fl.documents[0], true); // Use of true is optional.
// Closes the specified document without prompting to save changes.
fl.closeDocument(fl.documents[0], false);

```

#### See also

[fl.closeAll()](../flash_object_(fl)/fl7.md)


---

<!-- Source: fl_summary.md -->

## fl summary

#### Availability

Flash MX 2004.

#### Description

The flash object represents the Flash application. You can use flash or fl to refer to this object. This documentation
uses fl in code samples throughout.

#### Method summary

The following methods can be used with the flash object:

| **Method**                                                      | **Description**                                                                                                 |
|-----------------------------------------------------------------|-----------------------------------------------------------------------------------------------------------------|
| [fl.addEventListener()](../flash_object_(fl)/fl1.md)            | Registers a function to be called when a specific event is received.                                            |
| [fl.addToolInToolbar()](../flash_object_(fl)/fl1.md)            | Add the specified tool from master toolbar to main toolbar, appends in the last.                                |
| [fl.browseForFileURL()](../flash_object_(fl)/fl3.md)            | Opens a File Open or File Save system dialog box and lets the user specify a file to be opened or saved.        |
| [fl.browseForFolderURL()](../flash_object_(fl)/fl4.md)          | Displays a Browse for Folder dialog box and lets the user select a folder.                                      |
| [fl.clearPublishCache()](../flash_object_(fl)/fl5.md)           | Clears the publish cache.                                                                                       |
| [fl.clipCopyString()](../flash_object_(fl)/fl6.md)              | Copies the specified string to the Clipboard.                                                                   |
| [fl.closeAll()](../flash_object_(fl)/fl7.md)                    | Closes all open documents, displaying the Save As dialog box for any documents that were not previously saved.  |
| [fl.closeAllPlayerDocuments()](../flash_object_(fl)/fl8.md)     | Closes all the SWF files that were opened with Control > Test Movie.                                            |
| [fl.closeDocument()](../flash_object_(fl)/fl9.md)               | Closes the specified document.                                                                                  |
| [fl.copyLibraryItem()](../flash_object_(fl)/fl15.md)            | Silently copies a library item from a document without exposing the item in the Flash Pro user interface.       |
| [fl.createDocument()](../flash_object_(fl)/fl16.md)             | Opens a new document and selects it.                                                                            |
| [fl.exportPublishProfileString()](../flash_object_(fl)/fl22.md) | Uniform Resource Identifier (URI) from which to export publish settings.                                        |
| [fl.fileExists()](../flash_object_(fl)/fl24.md)                 | Checks whether a file already exists on disk.                                                                   |
| [fl.findDocumentDOM()](../flash_object_(fl)/fl25.md)            | Lets you target a specific file by using its unique identifier.                                                 |
| [fl.findDocumentIndex()](../flash_object_(fl)/fl26.md)          | Returns an array of integers that represent the position of a document in the fl.documents array.               |
| [fl.findObjectInDocByName()](../flash_object_(fl)/fl27.md)      | Exposes elements with instance names that match specified text.                                                 |
| [fl.findObjectInDocByType()](../flash_object_(fl)/fl28.md)      | Exposes elements of a specified element type in a document.                                                     |
| [fl.getAppMemoryInfo()](../flash_object_(fl)/fl30.md)           | Returns an integer that represents the number of bytes being used in a specified area of Flash.exe memory.      |
| [fl.getDocumentDOM()](../flash_object_(fl)/fl31.md)             | Retrieves the DOM ([Document object](../Document_object/document_summary.md)) of the currently active document. |

<table><thead><tr class="header"><th><strong>Method</strong></th><th><strong>Description</strong></th></tr></thead><tbody><tr class="odd"><td><a href="../flash_object_(fl)/fl35.md">fl.getSwfPanel()</a></td><td>Returns the SWFPanel object based on the panel's localized name or its SWF filename.</td></tr><tr class="even"><td><a href="../flash_object_(fl)/fl32.md">fl.getThemeColor()</a></td><td>Retrieves a theme color that matches the parameter specified theme parameter name.</td></tr><tr class="odd"><td><a href="../flash_object_(fl)/fl33.md">fl.getThemeColorParameters()</a></td><td>Retrieves an array of theme parameter names.</td></tr><tr class="even"><td><a href="../flash_object_(fl)/fl34.md">fl.getThemeFontInfo()</a></td><td>Return either the font style or the font size that is used to draw the UI of the specified size.</td></tr><tr class="odd"><td><a href="../flash_object_(fl)/fl37.md">fl.isFontInstalled()</a></td><td>Determines whether a specified font is installed.</td></tr><tr class="even"><td><a href="../flash_object_(fl)/fl40.md">fl.mapPlayerURL()</a></td><td>Maps an escaped Unicode URL to a UTF-8 or MBCS URL.</td></tr><tr class="odd"><td><a href="../flash_object_(fl)/fl45.md">fl.openDocument()</a></td><td>Opens a Flash (FLA) document for editing in a new Flash Document window and gives it focus.</td></tr><tr class="even"><td><a href="../flash_object_(fl)/fl46.md">fl.openScript()</a></td><td>Opens a script (JSFL, AS, ASC) or other file (XML, TXT) in the Flash text editor.</td></tr><tr class="odd"><td><a href="../flash_object_(fl)/fl55.md">fl.quit()</a></td><td>Quits Flash, prompting the user to save any changed documents.</td></tr><tr class="even"><td><a href="../flash_object_(fl)/fl56.md">fl.reloadEffects() - dropped</a></td><td>Dropped in Adobe Animate.</td></tr><tr class="odd"><td><a href="../flash_object_(fl)/fl57.md">fl.reloadTools()</a></td><td>Rebuilds the Tools panel from the toolconfig.xml file.</td></tr><tr class="even"><td><a href="../flash_object_(fl)/fl58.md">fl.removeEventListener()</a></td><td><p>Unregisters a function that was registered using</p><p>fl.addEventListener().</p></td></tr><tr class="odd"><td><a href="../flash_object_(fl)/fl59.md">fl.resetAS3PackagePaths()</a></td><td>Resets the global Classpath setting in the ActionScript 3.0 Settings dialog box to the default value.</td></tr><tr class="even"><td><a href="../flash_object_(fl)/fl60.md">fl.resetPackagePaths() - dropped</a></td><td>Dropped in Adobe Animate.</td></tr><tr class="odd"><td><a href="../flash_object_(fl)/fl62.md">fl.runScript()</a></td><td>Executes a JavaScript file.</td></tr><tr class="even"><td><a href="../flash_object_(fl)/fl63.md">fl.saveAll()</a></td><td>Saves all open documents, displaying the Save As dialog box for any documents that were not previously saved.</td></tr><tr class="odd"><td><a href="../flash_object_(fl)/fl64.md">fl.saveDocument()</a></td><td>Saves the specified document as a FLA document.</td></tr><tr class="even"><td><a href="../flash_object_(fl)/fl65.md">fl.saveDocumentAs()</a></td><td>Displays the Save As dialog box for the specified document.</td></tr><tr class="odd"><td><a href="../flash_object_(fl)/fl67.md">fl.selectElement()</a></td><td>Enables selection or editing of an element.</td></tr><tr class="even"><td><a href="../flash_object_(fl)/fl68.md">fl.selectTool()</a></td><td>Selects the specified tool in the Tools panel.</td></tr><tr class="odd"><td><a href="../flash_object_(fl)/fl69.md">fl.setActiveWindow()</a></td><td>Sets the active window to be the specified document.</td></tr><tr class="even"><td><a href="../flash_object_(fl)/fl71.md">fl.setPrefBoolean()</a></td><td>Sets a boolean preference value.</td></tr><tr class="odd"><td><a href="../flash_object_(fl)/fl70.md">fl.showIdleMessage()</a></td><td>Lets you disable the warning about a script running too long.</td></tr><tr class="even"><td><a href="../flash_object_(fl)/fl75.md">fl.toggleBreakpoint()</a></td><td>Toggles a breakpoint for the given .as file at the given line.</td></tr><tr class="odd"><td><a href="../flash_object_(fl)/fl77.md">fl.trace()</a></td><td>Sends a text string to the Output panel.</td></tr><tr class="even"><td><a href="../flash_object_(fl)/fl79.md">fl.xmlPanel()</a></td><td>Launches the XML To UI dialog from a URI that points to an XML-format file.</td></tr><tr class="odd"><td><a href="../flash_object_(fl)/fl80.md">fl.xmlPanelFromString()</a></td><td>Launches the XML To UI dialog from an XML-format string.</td></tr></tbody></table>

#### Property summary

The following properties can be used with the flash object.

| **Property**                                                        | **Description**                                                                                                                                                                       |
|---------------------------------------------------------------------|---------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------|
| [fl.actionsPanel](../flash_object_(fl)/fl.md)                       | Read-only; an [actionsPanel object](../actionsPanel_object/actionsPanel_summary.md).                                                                                                  |
| [fl.as3PackagePaths](../flash_object_(fl)/fl2.md)                   | A string that corresponds to the global Classpath setting in the ActionScript 3.0 Settings dialog box.                                                                                |
| [fl.compilerErrors](../flash_object_(fl)/fl10.md)                   | Read-only; a [compilerErrors object](../compilerErrors_object/compilerErrors_summary.md).                                                                                             |
| [fl.componentsPanel](../flash_object_(fl)/fl11.md)                  | Read-only; a [componentsPanel object](../componentsPanel_object/componentsPanel_summary.md), which represents the Components panel.                                                   |
| [fl.configDirectory](../flash_object_(fl)/fl12.md)                  | Read-only; a string that specifies the full path for the local user’s Configuration folder as a platform-specific path.                                                               |
| [fl.configURI](../flash_object_(fl)/fl13.md)                        | Read-only; a string that specifies the full path for the local user’s Configuration directory as a file:/// URI.                                                                      |
| [fl.contactSensitiveSelection](../flash_object_(fl)/fl14.md)        | A Boolean value that specifies whether Contact Sensitive selection mode is enabled.                                                                                                   |
| [fl.createNewDocList](../flash_object_(fl)/fl17.md)                 | Read-only; an array of strings that represent the various types of documents that can be created.                                                                                     |
| [fl.createNewDocListType](../flash_object_(fl)/fl18.md)             | Read-only; an array of strings that represent the file extensions of the types of documents that can be created.                                                                      |
| [fl.createNewTemplateList](../flash_object_(fl)/fl19.md)            | Read-only; an array of strings that represent the various types of templates that can be created.                                                                                     |
| [fl.documents](../flash_object_(fl)/fl20.md)                        | Read-only; an array of Document objects (see [Document object](../Document_object/document_summary.md)) that represent the documents (FLA files) that are currently open for editing. |
| [fl.drawingLayer](../flash_object_(fl)/fl21.md)                     | The drawingLayer object that an extensible tool should use when the user wants to temporarily draw while dragging.                                                                    |
| [fl.externalLibraryPath](../flash_object_(fl)/fl23.md)              | A string that contains a list of items in the global ActionScript 3.0 External library path, which specifies the location of SWC files used as runtime shared libraries.              |
| [fl.flexSDKPath](../flash_object_(fl)/fl29.md)                      | A string that specifies the path to the Flex SDK folder, which contains bin, frameworks, lib, and other folders.                                                                      |
| [fl.installedPlayers](../flash_object_(fl)/fl36.md)                 | Returns an array of generic objects corresponding to the list of installed Flash Players in the document Property inspector.                                                          |
| [fl.languageCode](../flash_object_(fl)/fl38.md)                     | Returns the five character code identifying the locale of the application’s user interface.                                                                                           |
| [fl.libraryPath](../flash_object_(fl)/fl39.md)                      | A string that contains a list of items in the global ActionScript 3.0 Library path, which specifies the location of SWC files or folders containing SWC files.                        |
| [fl.Math](../flash_object_(fl)/fl41.md)                             | Read-only; the [Math object](../Math_object/Math_summary.md), which provides methods for matrix and point operations.                                                                 |
| [fl.mruRecentFileList](../flash_object_(fl)/fl42.md)                | Read-only; an array of the complete filenames in the Most Recently Used (MRU) list that the Flash authoring tool manages.                                                             |
| [fl.mruRecentFileListType](../flash_object_(fl)/fl43.md)            | Read-only; an array of the file types in the MRU list that the Flash authoring tool manages.                                                                                          |
| [fl.packagePaths - dropped](../flash_object_(fl)/fl48.md)           | Dropped in Adobe Animate.                                                                                                                                                             |
| [fl.publishCacheDiskSizeMax](../flash_object_(fl)/fl50.md)          | An integer that sets the disk cache size limit preference.                                                                                                                            |
| [fl.publishCacheEnabled](../flash_object_(fl)/fl51.md)              | A boolean value that sets whether publish cache is enabled.                                                                                                                           |
| [fl.publishCacheMemoryEntrySizeLimit](../flash_object_(fl)/fl52.md) | An integer property that sets the maximum size for the memory cache entry preference.                                                                                                 |

| **Property**                                                 | **Description**                                                                                                                              |
|--------------------------------------------------------------|----------------------------------------------------------------------------------------------------------------------------------------------|
| [fl.publishCacheMemorySizeMax](../flash_object_(fl)/fl53.md) | An integer that sets the memory cache size limit preference.                                                                                 |
| [fl.objectDrawingMode](../flash_object_(fl)/fl44.md)         | An integer that represents the object drawing mode that is enabled.                                                                          |
| [fl.outputPanel](../flash_object_(fl)/fl47.md)               | Read-only; reference to the [outputPanel object](../outputPanel_object/outputPanel_summary.md).                                              |
| [fl.presetPanel](../flash_object_(fl)/fl49.md)               | Read-only; a [presetPanel object](../presetPanel_object/presetPanel_summary.md).                                                             |
| [fl.scriptURI](../flash_object_(fl)/fl66.md)                 | Read-only; a string that represents the path of the currently running JSFL script, expressed as a file:/// URI.                              |
| [fl.sourcePath](../flash_object_(fl)/fl72.md)                | A string that contains a list of items in the global ActionScript 3.0 Source path, which specifies the location of ActionScript class files. |
| [fl.spriteSheetExporter](../flash_object_(fl)/fl73.md)       | Returns an instance of SpriteSheetExporter object.                                                                                           |
| [fl.swfPanels](../flash_object_(fl)/fl74.md)                 | An array of registered swfPanel objects (see [swfPanel object](../swfPanel_object/swfPanel_summary.md)).                                     |
| [fl.tools](../flash_object_(fl)/fl76.md)                     | Read-only; an array of Tools objects.                                                                                                        |
| [fl.version](../flash_object_(fl)/fl78.md)                   | Read-only; the long string version of the Flash authoring tool, including platform.                                                          |
| [fl.xmlui](../flash_object_(fl)/fl81.md)                     | Read-only; an [XMLUI object](../XMLUI_object/xmlui_summary.md).                                                                              |

<span id="fl.actionsPanel" class="anchor"></span>

