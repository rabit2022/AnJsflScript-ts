// * from "./Top-Level_Functions_and_Methods/Top-Level";


// import FLfile from "./FLfile/FLfile";


// flash = fl = App = app = animate = an = new Flash();
declare const fl: FlashObject;
// flash = fl = App = app = animate = an = new Flash();
declare const flash: FlashObject;
declare const App: FlashObject;
declare const app: FlashObject;
declare const animate: FlashObject;
declare const an: FlashObject;


/**
 * 文档对象。但是没有打开时，不会返回null，无法提前退出，不建议使用。
 * @deprecated 使用fl.getDocumentDOM()代替
 * @bug 如果第三方库，使用了html5的document，会出现跳进不正常的分支的情况,容易出现bug。
 */
declare const document: FlashDocument;