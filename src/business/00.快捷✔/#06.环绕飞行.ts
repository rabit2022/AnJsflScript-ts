// path-to-uri.mjs (ESM) or .js (CommonJS)
import { fileURLToPath, pathToFileURL } from "url";


const path ="C:\\docs\\file.txt";
// const path ="file:///C|/docs/file.txt";
const uri = pathToFileURL(path);
console.log(uri.href);



const srcPath = fileURLToPath(uri);
console.log(srcPath);


