import { CheckVariableRedeclaration } from "CheckVariableRedeclaration";

describe("CheckVariableRedeclaration", () => {
    let originalWarn: typeof console.warn;
    let warnMock: jest.SpyInstance;

    beforeEach(() => {
        originalWarn = console.warn;
        warnMock = jest.spyOn(console, "warn").mockImplementation();
    });

    afterEach(() => {
        warnMock.mockRestore();
        console.warn = originalWarn;
    });

    describe("当提供 expectedValue 时", () => {
        it("should do nothing if variable matches expectedValue", () => {
            expect(() => {
                CheckVariableRedeclaration(42, "x", 42);
            }).not.toThrow();

            expect(warnMock).not.toHaveBeenCalled();
        });

        it("should throw an error if variable does not match expectedValue", () => {
            const errorMsg = '变量 "count" 的值被意外修改或遮蔽。期望: 10, 实际: 5';

            expect(() => {
                CheckVariableRedeclaration(5, "count", 10);
            }).toThrow(errorMsg);

            expect(warnMock).toHaveBeenCalledWith(expect.stringContaining(errorMsg));
        });
    });

    describe("当未提供 expectedValue 时", () => {
        it("should warn if variable is undefined", () => {
            const warnMsg =
                '变量 "data" 在作用域内被重新声明（如 var/let），导致其值为 undefined，可能遮蔽了外部变量。';

            expect(() => {
                CheckVariableRedeclaration(undefined, "data");
            }).not.toThrow(); // 当前实现不抛错

            expect(warnMock).toHaveBeenCalledWith(expect.stringContaining(warnMsg));
        });

        it("should do nothing if variable is not undefined", () => {
            expect(() => {
                CheckVariableRedeclaration(null, "x");
                CheckVariableRedeclaration(0, "x");
                CheckVariableRedeclaration("", "x");
                CheckVariableRedeclaration({} as any, "x");
            }).not.toThrow();

            expect(warnMock).not.toHaveBeenCalled();
        });
    });
});
