
import { EventBus, MouseEvent } from '@xjsfl/Events';

// 注册监听
EventBus.add(MouseEvent.MOVE, (e: MouseEvent) => {
    if (e.ctrl) {
        console.log('✅ Ctrl+Mouse at', e.x, e.y);
    } else {
        console.log('🖱️ Mouse at', e.x, e.y);
    }
}, 'test');





