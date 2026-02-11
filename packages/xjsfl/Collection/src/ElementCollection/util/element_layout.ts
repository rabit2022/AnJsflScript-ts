/**
 * @file: element_layout.ts
 * @author: 穹的兔兔
 * @email: 3101829204@qq.com
 * @date: 2026/2/8 23:32
 * @project: AnJsflScript-ts
 * @description:
 */

/**
 * Lays out the elements one by one in a grid pattern
 * This method positions elements in a grid layout with a specified number of columns.
 * The elements will be arranged with a specified gutter (horizontal spacing) and spacing (vertical spacing).
 * @param columns  Number of columns. Defaults to the number of elements if not provided
 * @param gutter   Horizontal spacing between columns (in pixels)
 * @param spacing  Vertical spacing between rows (in pixels)
 * @returns        The original ElementCollection object, enabling method chaining
 */
layout(
  columns: number = this.elements.length, // Number of columns (defaults to element count)
  gutter: number = 0,                     // Horizontal spacing between elements (default: 0)
  spacing: number = 0                     // Vertical spacing between rows (default: 0)
): this {
  if (!this.elements.length) {  // If there are no elements, do nothing
    return this;
  }

  const startX = this.elements[0].x; // Initial x-position based on the first element
  const startY = this.elements[0].y; // Initial y-position based on the first element

  for (let i = 0; i < this.elements.length; i++) { // Loop through all elements
    const element = this.elements[i];

    const col = i % columns; // Calculate column index (modulus operation)
    const row = Math.floor(i / columns); // Calculate row index using division

    const width = element.width * element.scaleX; // Element's width adjusted by scale
    const height = element.height * element.scaleY; // Element's height adjusted by scale

    // Update element's x and y positions
    element.x = startX + col * (width + gutter);  // Apply gutter for horizontal spacing
    element.y = startY + row * (height + spacing); // Apply spacing for vertical positioning
  }

  this.refresh(); // Refresh the layout to apply changes
  return this; // Return the current instance to allow method chaining
}

layoutGrid({
  columns: 4,
  gutter: 10,
  spacing: 20,
});