import { describe, it, expect, vi } from "vitest";
import { createExpense } from "../../src/expenses-create/post-expense";

describe("createExpense", () => {
    it("posts an expense and returns the created expense", async () => {
        const expense = {
            description: "Lunch",
            amount: 12,
            date: "2025-07-02",
            category: "Food",
        };

        const createdExpense = { id: 1, ...expense };

        globalThis.fetch = vi.fn().mockResolvedValue({
            ok: true,
            json: vi.fn().mockResolvedValue(createdExpense),
        });

        const result = await createExpense(expense);

        expect(fetch).toHaveBeenCalledWith("http://localhost:3000/expenses", {
            method: "POST",
            headers: {
                "Content-Type": "application/json",
            },
            body: JSON.stringify(expense),
        });

        expect(result).toEqual(createdExpense);
    });

    it("throws an error when the request fails", async () => {
        globalThis.fetch = vi.fn().mockResolvedValue({
            ok: false,
        });

        await expect(createExpense({ description: "Lunch" })).rejects.toThrow(
            "Failed to add expense"
        );
    });
});