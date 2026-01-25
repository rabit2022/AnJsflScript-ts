/**
 * @file: test_add.ts
 * @author: 穹的兔兔
 * @email: 3101829204@qq.com
 * @date: 2026/1/25 21:10
 * @project: AnJsflScript-ts
 * @description:
 */import { EventBus, MouseEvent } from "@xjsfl/Events";

// 注册监听
EventBus.add(
    MouseEvent.MOVE,
    (e: MouseEvent) => {
        if (e.ctrl) {
            console.log("✅ Ctrl+Mouse at", e.x, e.y);
        } else {
            console.log("🖱️ Mouse at", e.x, e.y);
        }
    },
    "test"
);
