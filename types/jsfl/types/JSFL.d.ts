// * from "./Top-Level_Functions_and_Methods/Top-Level";


// import FLfile from "./FLfile/FLfile";


// flash = fl = App = app = animate = an = new Flash();
declare const fl: Flash;
// flash = fl = App = app = animate = an = new Flash();
declare const flash: Flash;
declare const App: Flash;
declare const app: Flash;
declare const animate: Flash;
declare const an: Flash;


/**
 * 文档对象。但是没有打开时，不会返回null，无法提前退出，不建议使用。
 * @deprecated 使用fl.getDocumentDOM()代替
 * @bug 如果第三方库，使用了html5的document，会出现跳进不正常的分支的情况,容易出现bug。
 */
declare const document: Document;