import { describe, it, expect, vi } from "vitest";
import { __only_for_test } from "../../src/expenses-create/bind-form.js";
import * as postExpense from "../../src/expenses-create/post-expense.js";

const { submitExpense } = __only_for_test;

describe("submitExpense", () => {
    it("reads form data and creates an expense", async () => {
        vi.spyOn(postExpense, "createExpense").mockResolvedValue({
            id: 1,
            description: "Lunch",
            amount: 12,
            date: "2025-07-02",
        });

        const form = document.createElement("form");
        form.innerHTML = `
            <input name="description" value="Lunch">
            <input name="amount" value="12">
            <input name="date" value="2025-07-02">
        `;

        const result = await submitExpense(form);

        expect(postExpense.createExpense).toHaveBeenCalledWith({
            description: "Lunch",
            amount: 12,
            date: "2025-07-02",
        });

        expect(result.id).toBe(1);
    });
});