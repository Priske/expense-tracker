import { describe, expect, it, vi } from "vitest";
import { showError } from "../src/ui-helpers";
describe("showError", () => {
    it("adds a paragraph with error message in red text", () => {
        const element = document.createElement("div");
        const error = new Error("test");
        showError(element, error);

        expect(element.innerHTML).toBe('<p style="color: rgb(255, 0, 0);">test</p>');
    });
});
