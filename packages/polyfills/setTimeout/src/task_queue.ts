import {TimerTask} from "./types";

export class TaskQueue {
    private tasks: TimerTask[] = [];

    add(task: TimerTask): void {
        this.tasks.push(task);
    }

    remove(id: number): boolean {
        const index = this.tasks.findIndex(t => t.id === id);
        if (index !== -1) {
            this.tasks.splice(index, 1);
            return true;
        }
        return false;
    }

    // 核心方法：供全局执行器调用，返回到期的任务ID
    getDueTasks(): number[] {
        const now = Date.now();
        return this.tasks
            .filter(task => now - task.startTimeRecord >= task.delay)
            .map(task => task.id);
    }

    // 供管理器判断策略使用
    getMinRemainingTime(): number | null {
        if (this.tasks.length === 0) return null;
        const now = Date.now();
        return Math.min(...this.tasks.map(task => task.startTimeRecord + task.delay - now));
    }

    size(): number {
        return this.tasks.length;
    }
}
