import { describe, expect, it, vi } from "vitest";
import { __only_for_test } from "../../src/expenses-list/show-expenses.js";
import * as fetchExpenses from "../../src/expenses-list/fetch-expenses.js";
import { showExpenses } from "../../src/expenses-list/show-expenses.js";


describe("showLoading", () => {
    it("adds a paragraph with Loading text", () => {
        const element = document.createElement("div");

        __only_for_test.showLoading(element);

        expect(element.innerHTML).toBe("<p>Loading</p>");
    });
});



describe("showEmptyState", () => {
    it("adds a paragraph with No expenses found", () => {
        const element = document.createElement("div");

        __only_for_test.showEmptyState(element);

        expect(element.innerHTML).toBe("<p>No expenses found</p>");
    });
});


describe("renderExpenses", () => {
    it("RendersExpenses list", () => {
        const element = document.createElement("div");
        const expenses = [
            {
                id: 1,
                description: "Coffee",
                amount: 3.5,
                date: "2025-01-15",
            },
            {
                id: 2,
                description: "Thee",
                amount: 5,
                date: "2025-01-16",
            },
        ]
        __only_for_test.renderExpenses(element, expenses);

        expect(element.innerHTML).toBe('<ul><li>id: 1</li><li>description: Coffee</li><li>date: 2025-01-15</li><li>category: undefined</li><li>id: 2</li><li>description: Thee</li><li>date: 2025-01-16</li><li>category: undefined</li></ul>');
    });
});

describe("showExpenses", () => {
    it("shows loading, then renders expenses", async () => {
        vi.spyOn(fetchExpenses, "getExpensesData").mockResolvedValue([
            {
                id: 1,
                description: "Lunch",
                date: "2024-01-01",
                category: "Food",
            },
        ]);

        const element = document.createElement("div");

        await showExpenses(element);

        expect(element.innerHTML).not.toContain("Loading");
        expect(element.innerHTML).toContain("Lunch");
        expect(element.innerHTML).toContain("Food");
    });

    it("shows an error when fetching fails", async () => {
        vi.spyOn(fetchExpenses, "getExpensesData").mockRejectedValue(
            new Error("Fetch failed")
        );

        const element = document.createElement("div");

        await showExpenses(element);

        expect(element.innerHTML).not.toContain("Loading");
        expect(element.textContent).toContain("Fetch failed");
    });
});


