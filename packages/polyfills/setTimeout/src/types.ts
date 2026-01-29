export interface TimerTask {
    id: number;
    callback: (...args: any[]) => void; // 修改为支持任意参数的函数
    startTimeRecord: number;
    delay: number;
    args: any[]; // 👈 新增：用于存储传入的参数
}
