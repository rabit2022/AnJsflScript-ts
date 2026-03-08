const open = require('open').default;
// import * as o from 'open';
// const open=o.default;

async function openFolder() {
    const folderPath = 'H:\\project\\js\\AnJsflScript-ts\\tools\\packAll\\dist';

    try {
        // open 默认打开文件，如果传入文件夹路径，它会在文件管理器中打开该文件夹
        await open(folderPath, { wait: false });
        console.log('文件夹已打开');
    } catch (error) {
        console.error('打开失败:', error);
    }
}

openFolder();