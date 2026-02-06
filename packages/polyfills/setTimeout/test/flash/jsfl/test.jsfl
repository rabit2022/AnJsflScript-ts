
require([], function () {
        function padZero(num) {
                return num < 10 ? '0' + num : '' + num;
        }
        function formatLocalDateTime(date) {
                var year = date.getFullYear();
                var month = padZero(date.getMonth() + 1);
                var day = padZero(date.getDate());
                var hours = padZero(date.getHours());
                var minutes = padZero(date.getMinutes());
                var seconds = padZero(date.getSeconds());
                return "".concat(year, "-").concat(month, "-").concat(day, " ").concat(hours, ":").concat(minutes, ":").concat(seconds);
        }


        const now = new Date(); // 当前本地时间
console.log(formatLocalDateTime(now)); // 例如：2026-02-06 20:43:57

// const f1=formatLocalDateTime(new Date(now))
// console.log(f1);
    });
