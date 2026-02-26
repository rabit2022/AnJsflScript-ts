require(["fs"], function (fs) {

    function getWindowsDrives() {
        const drives = [];

        for (var i = 65; i <= 90; i++) {
            const drive = String.fromCharCode(i) + ":";

            try {
                if (fs.existsSync(drive + "/")) {
                    drives.push(drive);
                }
            } catch (e) {
                // 某些盘可能无权限，直接跳过
            }
        }

        return drives;
    }

    const drivers = getWindowsDrives();
    console.log(drivers);
});
