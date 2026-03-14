const groupStack: string[] = [];
const trace = fl.trace;

export function group(label: string = "default"): void {
    const indent = "  ".repeat(groupStack.length);
    const lineLength = Math.max(30 - label.length - groupStack.length * 2, 10);

    trace(`${indent}┌─ ${label} ${"─".repeat(lineLength)}┐`);
    groupStack.push(label);
}

export function groupEnd() {
    if (groupStack.length === 0) return;

    const label = groupStack.pop() || "";
    const indent = "  ".repeat(groupStack.length);
    const lineLength = Math.max(30 - label.length - groupStack.length * 2, 10);

    trace(`${indent}└─ ${label} ${"─".repeat(lineLength)}┘`);
}
