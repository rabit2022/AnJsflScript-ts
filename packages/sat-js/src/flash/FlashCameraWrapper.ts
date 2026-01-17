import {Bounds} from "../core/Rectangle/Bounds";
import {Vector} from "../core/Vector";
import {FlashStageWrapper} from "./FlashStageWrapper";

export class FlashCameraWrapper {
    public doc: FlashDocument = fl.getDocumentDOM()!;

    public timeline: Timeline = this.doc.getTimeline();
    public frameIndex: number = 0;

    private stage :FlashStageWrapper = new FlashStageWrapper();

    constructor(timeline?: Timeline, frameIndex?: number){
        // this.timeline = timeline;
        // this.frameIndex = frameIndex;
        if(timeline){
            this.timeline = timeline;
        }
        if(frameIndex){
            this.frameIndex = frameIndex;
        }
    }

    /**
     * 获取摄像机矩形
     * @return {Bounds} 矩形对象
     */
    get bounds(): Bounds {
        const {width: stageWidth, height: stageHeight} = this.stage.size;

        let timeline = this.timeline;
        let frameIndex = this.frameIndex;

        var cameraPos = Vector.fromElement(timeline.camera.getPosition(frameIndex));
        var cameraZoomRatio = timeline.camera.getZoom(frameIndex) / 100;
        // var stageWidth = doc.width;
        // var stageHeight = doc.height;
        var cameraRect = new Bounds(-cameraPos.x, -cameraPos.y, -cameraPos.x + stageWidth / cameraZoomRatio, -cameraPos.y + stageHeight / cameraZoomRatio);
        return cameraRect;
    }


    /**
     * 获取摄像机中心点坐标
     * @return {Vector} 点
     */
    get center(): Vector {
        return this.bounds.center;
    }
}