/**
 * @file: CheckSelection.test.ts
 * @author: 穹的兔兔
 * @email: 3101829204@qq.com
 * @date: 2026/1/25 21:10
 * @project: AnJsflScript-ts
 * @description:
 */// src/__tests__/CheckSelection.test.ts

// Mock alert 全局函数
import { CheckCondition, CheckMode, CheckSelection } from "../../../src";
import { MESSAGES } from "../../../src/validation/base/check/selections/selectionUtils";

const originalAlert = global.alert;
beforeAll(() => {
    global.alert = jest.fn();
});
afterAll(() => {
    global.alert = originalAlert;
});
afterEach(() => {
    jest.clearAllMocks();
});

describe("CheckSelection", () => {
    const mockSelection = (length: number) => new Array(length).fill(null);

    describe("参数校验", () => {
        it("应拒绝 mode 为 null", () => {
            expect(CheckSelection([], null as any, CheckCondition.NoLimit)).toBe(false);
            expect(alert).toHaveBeenCalledWith("模式不能为 null，请指定一个有效的模式！");
        });

        it("应拒绝 condition 为 null", () => {
            expect(CheckSelection([], CheckMode.SelectElement, null as any)).toBe(false);
            expect(alert).toHaveBeenCalledWith("条件不能为 null，请指定一个有效的条件！");
        });
    });

    describe("无效模式或条件", () => {
        it("应拒绝无效模式", () => {
            expect(CheckSelection([], "invalidMode" as any, CheckCondition.NoLimit)).toBe(
                false
            );
            expect(alert).toHaveBeenCalledWith("无效的模式：invalidMode");
        });

        it("应拒绝无效条件字符串", () => {
            expect(CheckSelection([], CheckMode.SelectElement, "invalidCond")).toBe(
                false
            );
            expect(alert).toHaveBeenCalledWith("无效的条件：invalidCond");
        });
    });

    describe("正常通过的情况", () => {
        test.each([
            [CheckMode.SelectElement, CheckCondition.NoLimit, 0],
            [CheckMode.SelectElement, CheckCondition.NotZero, 1],
            [CheckMode.SelectElement, CheckCondition.OnlyOne, 1],
            [CheckMode.SelectElement, CheckCondition.OnlyTwo, 2],
            [CheckMode.SelectElement, CheckCondition.More, 3],
            [CheckMode.SelectFrame, CheckCondition.Zero, 0] // 注意：Zero 表示 length === 0
        ])(
            "mode=%s, condition=%s, selection.length=%i 应返回 true",
            (mode, condition, len) => {
                const selection = mockSelection(len);
                expect(CheckSelection(selection, mode, condition)).toBe(true);
                expect(alert).not.toHaveBeenCalled();
            }
        );
    });

    describe("条件不满足时应弹出默认提示", () => {
        const cases = [
            {
                mode: CheckMode.SelectElement,
                condition: CheckCondition.NotZero,
                selectionLen: 0,
                expectedMsg: "请选择一个元件。"
            },
            {
                mode: CheckMode.SelectFrame,
                condition: CheckCondition.OnlyOne,
                selectionLen: 2,
                expectedMsg: "请只选择一个帧。"
            },
            {
                mode: CheckMode.ElementOnFrame,
                condition: CheckCondition.More,
                selectionLen: 2, // More 要求 >2，2 不满足
                expectedMsg: "当前帧上需要多个元件。"
            },
            {
                mode: CheckMode.SelectedFrameDuration,
                condition: CheckCondition.OnlyTwo,
                selectionLen: 1,
                expectedMsg: "所选帧总时长 只能为 2 帧。"
            }
        ];

        test.each(cases)(
            "当条件不满足时应提示: $expectedMsg",
            ({ mode, condition, selectionLen, expectedMsg }) => {
                const selection = mockSelection(selectionLen);
                expect(CheckSelection(selection, mode, condition)).toBe(false);
                expect(alert).toHaveBeenCalledWith(expectedMsg);
            }
        );
    });

    describe("别名条件支持", () => {
        const aliasCases = [
            { alias: "=1", condition: CheckCondition.OnlyOne, passLen: 1, failLen: 2 },
            { alias: "=2", condition: CheckCondition.OnlyTwo, passLen: 2, failLen: 3 },
            { alias: ">0", condition: CheckCondition.NotZero, passLen: 1, failLen: 0 },
            { alias: "=0", condition: CheckCondition.Zero, passLen: 0, failLen: 1 },
            { alias: ">=2", condition: CheckCondition.More, passLen: 3, failLen: 2 } // 注意：More 是 >2
        ];

        test.each(aliasCases)(
            "别名 $alias 应映射到 $condition",
            ({ alias, condition, passLen, failLen }) => {
                // 通过的情况
                expect(
                    CheckSelection(mockSelection(passLen), CheckMode.SelectElement, alias)
                ).toBe(true);
                expect(alert).not.toHaveBeenCalled();

                // 失败的情况
                expect(
                    CheckSelection(mockSelection(failLen), CheckMode.SelectElement, alias)
                ).toBe(false);
                // const msg = [CheckMode.SelectElement][condition]; // 从原消息表取
                // console.log(msg);

                const expectedMsg = MESSAGES[CheckMode.SelectElement][condition];
                expect(alert).toHaveBeenCalledWith(expectedMsg);
            }
        );
    });

    describe("自定义提示优先级", () => {
        it("当 exTips 存在时，应使用自定义提示而非默认提示", () => {
            const customMsg = "请至少选一个！";
            const result = CheckSelection(
                [],
                CheckMode.SelectElement,
                CheckCondition.NotZero,
                customMsg
            );
            expect(result).toBe(false);
            expect(alert).toHaveBeenCalledWith(customMsg);
        });

        it("当 exTips 为 null 或 undefined 时，应使用默认提示", () => {
            CheckSelection([], CheckMode.SelectElement, CheckCondition.NotZero, null);
            expect(alert).toHaveBeenCalledWith("请选择一个元件。");

            (alert as jest.Mock).mockClear();

            CheckSelection(
                [],
                CheckMode.SelectElement,
                CheckCondition.NotZero,
                undefined
            );
            expect(alert).toHaveBeenCalledWith("请选择一个元件。");
        });
    });
});
