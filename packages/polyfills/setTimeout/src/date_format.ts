function padZero(num: number): string {
    return num < 10 ? '0' + num : '' + num;
}

export function formatLocalDateTime(date: Date): string {
    const year = date.getFullYear();
    const month = padZero(date.getMonth() + 1);
    const day = padZero(date.getDate());
    const hours = padZero(date.getHours());
    const minutes = padZero(date.getMinutes());
    const seconds = padZero(date.getSeconds());
    return `${year}-${month}-${day} ${hours}:${minutes}:${seconds}`;
}

// const now = new Date(); // 当前本地时间
// // console.log(formatLocalDateTime(now)); // 例如：2026-02-06 20:43:57
//
// const f1=formatLocalDateTime(new Date(now))
// console.log(f1);