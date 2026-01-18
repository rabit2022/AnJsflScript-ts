/**
 * Represents a frame in a Flash/Animate timeline layer.
 *
 * @note All examples from the original documentation are preserved as inline comments.
 */
interface Frame {
    /**
     * A string representing ActionScript code attached to this frame.
     * To insert a new line character, use "\n".
     *
     * @example
     * fl.getDocumentDOM().getTimeline().layers[0].frames[0].actionScript = 'stop();';
     */
    actionScript: string;

    /**
     * Read-only; an integer that represents the number of frames in a frame sequence.
     *
     * @example
     * var frameSpan = fl.getDocumentDOM().getTimeline().layers[0].frames[0].duration;
     */
    readonly duration: number;

    /**
     * Read-only; an array of Element objects.
     * The order of elements is the order in which they are stored in the FLA file.
     * If there are multiple shapes on the Stage, and each is ungrouped, Flash treats them as one element.
     *
     * @example
     * var myElements = fl.getDocumentDOM().getTimeline().layers[0].frames[0].elements;
     */
    readonly elements: Element[];

    /**
     * A Boolean value that specifies whether the frame gets its ease information from the custom ease curve.
     *
     * @example
     * var theFrame = fl.getDocumentDOM().getTimeline().layers[0].frames[0]
     * theFrame.hasCustomEase = false;
     *
     * @see frame.getCustomEase()
     * @see frame.setCustomEase()
     * @see frame.useSingleEaseCurve
     */
    hasCustomEase: boolean;

    /**
     * A string that specifies the type of Frame name.
     * Acceptable values are "none", "name", "comment", and "anchor".
     * Setting a label to "none" clears the frame.name property.
     *
     * @example
     * fl.getDocumentDOM().getTimeline().layers[0].frames[0].name = 'First Frame';
     * fl.getDocumentDOM().getTimeline().layers[0].frames[0].labelType = 'comment';
     */
    labelType: 'none' | 'name' | 'comment' | 'anchor';

    /**
     * A Boolean value that specifies whether the tweened element rotates the element as it moves along a path
     * to maintain its angle with respect to each point on the path (true) or whether it does not rotate (false).
     * If you want to specify a value for this property, you should set frame.motionTweenRotate to "none".
     */
    motionTweenOrientToPath: boolean;

    /**
     * A string that specifies how the tweened element rotates.
     * Acceptable values are "none", "auto", "clockwise", and "counter-clockwise".
     * A value of "auto" means the object will rotate in the direction requiring the least motion.
     * If you want to specify a value for frame.motionTweenOrientToPath, set this property to "none".
     *
     * @example
     * fl.getDocumentDOM().getTimeline().layers[0].frames[0].motionTweenRotate = "counter-clockwise";
     */
    motionTweenRotate: 'none' | 'auto' | 'clockwise' | 'counter-clockwise';

    /**
     * An integer that specifies the number of times the tweened element rotates between the starting keyframe and the next keyframe.
     *
     * @example
     * fl.getDocumentDOM().getTimeline().layers[0].frames[0].motionTweenRotate = "counter-clockwise";
     * fl.getDocumentDOM().getTimeline().layers[0].frames[0].motionTweenRotateTimes = 3;
     */
    motionTweenRotateTimes: number;

    /**
     * A Boolean value that specifies whether the tweened element scales to the size of the object in the following keyframe,
     * increasing its size with each frame in the tween (true), or doesn’t scale (false).
     *
     * @example
     * fl.getDocumentDOM().getTimeline().layers[0].frames[0].motionTweenScale = true;
     */
    motionTweenScale: boolean;

    /**
     * A Boolean value that specifies whether the tweened element automatically snaps to the nearest point on the motion guide layer
     * associated with this frame’s layer (true) or not (false).
     */
    motionTweenSnap: boolean;

    /**
     * A Boolean value that if set to true, synchronizes the animation of the tweened object with the main timeline.
     *
     * @example
     * fl.getDocumentDOM().getTimeline().layers[0].frames[0].motionTweenSync = true;
     */
    motionTweenSync: boolean;

    /**
     * A string that specifies the name of the frame.
     *
     * @example
     * fl.getDocumentDOM().getTimeline().layers[0].frames[0].name = 'First Frame';
     * var frameLabel = fl.getDocumentDOM().getTimeline().layers[0].frames[0].name;
     */
    name: string;

    /**
     * A string that specifies how a shape tween is blended between the shape in the keyframe at the start of the tween
     * and the shape in the following keyframe. Acceptable values are "distributive" and "angular".
     */
    shapeTweenBlend: 'distributive' | 'angular';

    /**
     * A string that specifies effects for a sound that is attached directly to a frame (frame.soundLibraryItem).
     * Acceptable values are "none", "left channel", "right channel", "fade left to right",
     * "fade right to left", "fade in", "fade out", and "custom".
     *
     * @example
     * fl.getDocumentDOM().getTimeline().layers[0].frames[0].soundEffect = "fade in";
     */
    soundEffect: 'none' | 'left channel' | 'right channel' | 'fade left to right' | 'fade right to left' | 'fade in' | 'fade out' | 'custom';

    /**
     * A library item (SoundItem object) used to create a sound. The sound is attached directly to the frame.
     *
     * @example
     * // The first item in the library must be a sound object.
     * fl.getDocumentDOM().getTimeline().layers[0].frames[0].soundLibraryItem = fl.getDocumentDOM().library.items[0];
     */
    soundLibraryItem: SoundItem;

    /**
     * An integer value that specifies the number of times a sound that is attached directly to a frame (frame.soundLibraryItem) plays.
     * If you want to specify a value for this property, set frame.soundLoopMode to "repeat".
     *
     * @example
     * fl.getDocumentDOM().getTimeline().layers[0].frames[0].soundLoopMode = "repeat";
     * fl.getDocumentDOM().getTimeline().layers[0].frames[0].soundLoop = 2;
     */
    soundLoop: number;

    /**
     * A string that specifies whether a sound that is attached directly to a frame (frame.soundLibraryItem)
     * should play a specific number of times or loop indefinitely.
     * Acceptable values are "repeat" and "loop".
     *
     * @example
     * fl.getDocumentDOM().getTimeline().layers[0].frames[0].soundLoopMode = "repeat";
     * fl.getDocumentDOM().getTimeline().layers[0].frames[0].soundLoop = 2;
     */
    soundLoopMode: 'repeat' | 'loop';

    /**
     * A string that specifies the name of a sound that is attached directly to a frame (frame.soundLibraryItem),
     * as stored in the library.
     *
     * @example
     * fl.getDocumentDOM().getTimeline().layers[0].frames[0].soundName = "song1.mp3";
     */
    soundName: string;

    /**
     * A string that specifies the sync behavior of a sound that is attached directly to a frame (frame.soundLibraryItem).
     * Acceptable values are "event", "stop", "start", and "stream".
     *
     * @example
     * fl.getDocumentDOM().getTimeline().layers[0].frames[0].soundSync = 'stream';
     */
    soundSync: 'event' | 'stop' | 'start' | 'stream';

    /**
     * Read-only; the index of the first frame in a sequence.
     *
     * @example
     * // A frame sequence spanning Frame 5 to Frame 10 (indices 4 to 9)
     * var stFrame = fl.getDocumentDOM().getTimeline().layers[0].frames[4].startFrame; // 4
     * var stFrame = fl.getDocumentDOM().getTimeline().layers[0].frames[9].startFrame; // 4
     */
    readonly startFrame: number;

    /**
     * An integer that specifies the amount of easing that should be applied to the tweened object.
     * Acceptable values are -100 to 100.
     * Negative: begin slowly, accelerate toward end.
     * Positive: begin rapidly, decelerate toward end.
     *
     * @example
     * fl.getDocumentDOM().getTimeline().layers[0].frames[0].tweenEasing = 50;
     */
    tweenEasing: number;

    /**
     * Assigns an instance name to the specified motion object.
     *
     * @example
     * theFrame.tweenInstanceName = "MyMotionTween";
     */
    tweenInstanceName: string;

    /**
     * A string that specifies the type of tween; acceptable values are "motion", "shape", or "none".
     * The value "none" removes the motion tween.
     * Use timeline.createMotionTween() to create a motion tween.
     * "motion": object must be symbol, text field, or grouped object.
     * "shape": object must be a shape.
     *
     * @example
     * fl.getDocumentDOM().getTimeline().layers[0].frames[0].tweenType = "motion";
     */
    tweenType: 'motion' | 'shape' | 'none';

    /**
     * A Boolean value. If true, a single custom ease curve is used for easing information for all properties.
     * If false, each property has its own ease curve.
     * This property is ignored if the frame doesn’t have custom easing applied.
     *
     * @example
     * var theFrame = fl.getDocumentDOM().getTimeline().layers[0].frames[0]
     * theFrame.useSingleEaseCurve = true;
     *
     * @see frame.getCustomEase()
     * @see frame.hasCustomEase
     * @see frame.setCustomEase()
     */
    useSingleEaseCurve: boolean;

    /**
     * Converts the selected motion object to a 2D motion object.
     *
     * @example
     * var doc = fl.getDocumentDOM();
     * var my_tl = doc.getTimeline();
     * this.getCurrentFrame = function(){
     *   var layer = my_tl.layers[my_tl.currentLayer];
     *   var frame = layer.frames[my_tl.currentFrame];
     *   return frame;
     * }
     * var theFrame = getCurrentFrame();
     * if(theFrame.isMotionObject() && /* condition missing in original * /){
     *   theFrame.convertMotionObjectTo2D();
     * }else{
     *   fl.trace("It isn't motion or it's already a 2D motion");
     * }
     */
    convertMotionObjectTo2D(): void;

    /**
     * Converts the selected motion object to a 3D motion object.
     *
     * @example
     * var doc = fl.getDocumentDOM();
     * var my_tl = doc.getTimeline();
     * this.getCurrentFrame = function() {
     *   var layer = my_tl.layers[my_tl.currentLayer];
     *   var frame = layer.frames[my_tl.currentFrame];
     *   return frame;
     * }
     * var theFrame = getCurrentFrame();
     * if(theFrame.isMotionObject() && !theFrame.is3DMotionObject()){
     *   theFrame.convertMotionObjectTo3D();
     * }else{
     *   fl.trace("It isn't motion or it's already a 3D motion");
     * }
     */
    convertMotionObjectTo3D(): void;

    /**
     * Converts the current frame to Frame-by-Frame Animation.
     * Returns true if the frame contains animation that can be converted (e.g., Motion Tween or Classic Tween);
     * returns false for other frame types such as static.
     *
     * @example
     * var result = fl.getDocumentDOM().getTimeline().layers[0].frames[0].convertToFrameByFrameAnimation();
     * fl.trace(result);
     */
    convertToFrameByFrameAnimation(): boolean;

    /**
     * Returns an array of JavaScript objects, each of which has an x and y property.
     * These represent control points for the cubic Bézier curve defining the ease curve.
     *
     * @param property Optional string specifying the property. Acceptable values:
     *                 "all", "position", "rotation", "scale", "color", "filters". Default is "all".
     * @returns Array of {x: number, y: number}
     *
     * @example
     * var theFrame = fl.getDocumentDOM().getTimeline().layers[0].frames[0]
     * var easeArray = theFrame.getCustomEase("position");
     *
     * @see frame.hasCustomEase
     * @see frame.setCustomEase()
     * @see frame.useSingleEaseCurve
     */
    getCustomEase(property?: 'all' | 'position' | 'rotation' | 'scale' | 'color' | 'filters'): {
        x: number;
        y: number
    }[];

    /**
     * Returns the motion XML from the selected motion object.
     *
     * @example
     * var doc = fl.getDocumentDOM();
     * var my_tl = doc.getTimeline();
     * this.getCurrentFrame = function(){
     *   var layer = my_tl.layers[my_tl.currentLayer];
     *   var frame = layer.frames[my_tl.currentFrame];
     *   return frame;
     * }
     * var theFrame = getCurrentFrame();
     * if(theFrame.isMotionObject()) {
     *   //fl.trace(theFrame.getMotionObjectXML());
     * } else {
     *   fl.trace("It is not motion.");
     * }
     */
    getMotionObjectXML(): string;

    /**
     * Gets the sound envelope data of any frame.
     *
     * @example
     * // Add a sound item to the first Frame
     * // Get the sound Envelope
     * var soundEnv = fl.getDocumentDOM().getTimeline().layers[0].frames[0].getSoundEnvelope();
     * //Assigning the sound 1 in the library to Frame 2
     * fl.getDocumentDOM().getTimeline().layers[0].frames[1].soundLibraryItem = fl.getDocumentDOM().library.items[1];
     * //Set the Sound Envelope
     * fl.getDocumentDOM().getTimeline().layers[0].frames[1].setSoundEnvelope(soundEnv);
     *
     * @see frame.setSoundEnvelope()
     */
    getSoundEnvelope(): { mark: number; leftChannel: number; rightChannel: number }[];

    /**
     * Gets the limits (start, end) for a custom Sound envelope that is applied to the frame sound.
     *
     * @example
     * var limits = fl.getDocumentDOM().getTimeline().layers[0].frames[0].getSoundEnvelopeLimits();
     * fl.trace(limits.start);
     * fl.trace(limits.end);
     *
     * @see frame.setSoundEnvelopeLimits()
     */
    getSoundEnvelopeLimits(): { start: number; end: number };

    /**
     * Informs you whether or not the current selection has a motion tween (i.e., includes a motion path).
     *
     * @example
     * var doc = fl.getDocumentDOM();
     * var my_tl = doc.getTimeline();
     * this.getCurrentFrame = function(){
     *   var layer = my_tl.layers[my_tl.currentLayer];
     *   var frame = layer.frames[my_tl.currentFrame];
     *   return frame;
     * }
     * var theFrame = getCurrentFrame();
     * if(theFrame.isMotionObject()){
     *   if (theFrame.hasMotionPath()){
     *     fl.trace("There is a motion path");
     *   } else {
     *     fl.trace("There is no motion path");
     *   }
     * }
     */
    hasMotionPath(): boolean;

    /**
     * Informs you whether or not the current selection is a 3D motion object.
     *
     * @example
     * var doc = fl.getDocumentDOM();
     * var my_tl = doc.getTimeline();
     * this.getCurrentFrame = function(){
     *   var layer = my_tl.layers[my_tl.currentLayer];
     *   var frame = layer.frames[my_tl.currentFrame];
     *   return frame;
     * }
     * var theFrame = getCurrentFrame();
     * if(theFrame.isMotionObject() && theFrame.is3DMotionObject()){
     *   fl.trace("This selection is 3D Motion");
     * } else {
     *   fl.trace("This selection is not 3D motion");
     * }
     */
    is3DMotionObject(): boolean;

    /**
     * Informs you whether the frame contains any elements.
     *
     * @example
     * var frame = fl.getDocumentDOM().getTimeline().layers[0].frames[0];
     * if (frame.isEmpty())
     *   fl.trace("first frame is empty");
     */
    isEmpty(): boolean;

    /**
     * Informs you whether or not the current selection is a motion object.
     *
     * @example
     * var my_tl = doc.getTimeline();
     * this.getCurrentFrame = function(){
     *   var layer = my_tl.layers[my_tl.currentLayer];
     *   var frame = layer.frames[my_tl.currentFrame];
     *   return frame;
     * }
     * var theFrame = getCurrentFrame();
     * if(theFrame.isMotionObject()) {
     *   fl.trace("This selection is motion.");
     * } else {
     *   fl.trace("This selection is not motion.");
     * }
     */
    isMotionObject(): boolean;

    /**
     * Selects (true) or deselects (false) the motion path of the current motion object.
     *
     * @example
     * var doc = fl.getDocumentDOM();
     * var my_tl = doc.getTimeline();
     * this.getCurrentFrame = function(){
     *   var layer = my_tl.layers[my_tl.currentLayer];
     *   var frame = layer.frames[my_tl.currentFrame];
     *   return frame;
     * }
     * var theFrame = getCurrentFrame();
     * if(theFrame.isMotionObject()){
     *   if (theFrame.hasMotionPath()){
     *     theFrame.selectMotionPath(true);
     *   } else {
     *     fl.trace("There is no motion path");
     *   }
     * } else {
     *   fl.trace("It is no motion");
     * }
     */
    selectMotionPath(select: boolean): void;

    /**
     * Specifies an array of control point and tangent endpoint coordinates that describe a cubic Bézier curve
     * to be used as a custom ease curve.
     *
     * @param property Specifies the property the ease curve should be used for.
     *                 Acceptable values: "all", "position", "rotation", "scale", "color", "filters".
     * @param easeCurve An array of objects with x and y properties defining the Bézier curve.
     *
     * @example
     * var theFrame = fl.getDocumentDOM().getTimeline().layers[0].frames[0];
     * var easeCurve = [ {x:0,y:0}, {x:.3,y:.3}, {x:.7,y:.7}, {x:1,y:1} ];
     * theFrame.setCustomEase( "all", easeCurve );
     *
     * @see frame.getCustomEase()
     * @see frame.hasCustomEase
     * @see frame.useSingleEaseCurve
     */
    setCustomEase(
        property: 'all' | 'position' | 'rotation' | 'scale' | 'color' | 'filters',
        easeCurve: { x: number; y: number }[]
    ): void;

    /**
     * Specifies the duration (the tween span length) of the currently selected motion object.
     *
     * @param duration Specifies the number of frames for the tween span.
     * @param stretchExistingKeyframes Determines whether the tween span is stretched, or if frames are added to the end.
     *
     * @example
     * var doc = fl.getDocumentDOM();
     * var my_tl = doc.getTimeline();
     * this.getCurrentFrame = function(){
     *   var layer = my_tl.layers[my_tl.currentLayer];
     *   var frame = layer.frames[my_tl.currentFrame];
     *   return frame;
     * }
     * var theFrame = getCurrentFrame();
     * if(theFrame.isMotionObject()){
     *   theFrame.setMotionObjectDuration(11);
     * } else {
     *   fl.trace("It isn't motion");
     * }
     */
    setMotionObjectDuration(duration: number, stretchExistingKeyframes?: boolean): void;

    /**
     * Applies the specified motion XML to the selected motion object.
     *
     * @param xmlstr A string value that specifies the XML string.
     * @param endAtCurrentLocation Determines whether the tween starts or ends at the current position.
     *
     * @example
     * var doc = fl.getDocumentDOM();
     * var my_tl = doc.getTimeline();
     * this.getCurrentFrame = function(){
     *   var layer = my_tl.layers[my_tl.currentLayer];
     *   var frame = layer.frames[my_tl.currentFrame];
     *   return frame;
     * }
     * var theFrame = getCurrentFrame();
     * theFrame.setMotionObjectXML(myMotionXML.toString(), false);
     */
    setMotionObjectXML(xmlstr: string, endAtCurrentLocation?: boolean): void;

    /**
     * Sets the sound envelope data of a frame.
     * The soundEnv object is an array where every element contains mark, leftChannel, and rightChannel properties.
     *
     * @param soundEnv A sound envelope array.
     *
     * @example
     * // Add a sound item to the first Frame
     * // Get the sound Envelope
     * var soundEnv = fl.getDocumentDOM().getTimeline().layers[0].frames[0].getSoundEnvelope();
     * //Assigning the sound 1 in the library to Frame 2
     * fl.getDocumentDOM().getTimeline().layers[0].frames[1].soundLibraryItem = fl.getDocumentDOM().library.items[1];
     * //Set the Sound Envelope
     * fl.getDocumentDOM().getTimeline().layers[0].frames[1].setSoundEnvelope(soundEnv);
     * for (int i=0; i<soundEnv.length; i++) {
     *   fl.trace(soundEnv[i].mark);
     *   fl.trace(soundEnv[i].leftChannel);
     *   fl.trace(soundEnv[i].rightChannel);
     * }
     *
     * @see frame.getSoundEnvelope()
     */
    setSoundEnvelope(soundEnv: { mark: number; leftChannel: number; rightChannel: number }[]): void;

    /**
     * Sets the sound envelope limits of any frame with a sound file.
     *
     * @param limits A structure that contains start and end fields.
     *
     * @example
     * var limits;
     * limits.start = 2000;
     * limits.end = 15000;
     * fl.getDocumentDOM().getTimeline().layers[0].frames[0].setSoundEnvelopeLimits(limits);
     *
     * @see frame.getSoundEnvelopeLimits()
     */
    setSoundEnvelopeLimits(limits: { start: number; end: number }): void;
}

