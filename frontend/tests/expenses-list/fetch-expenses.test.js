import { describe, expect, it } from "vitest";
import { __only_for_test } from "../../src/expenses-list/format-expenses.js";

const { formatExpenses } = __only_for_test;

describe("formatExpenses", () => {
  it("adds a displayDate property based on date", () => {
    const expenses = [
      {
        id: 1,
        description: "Coffee",
        amount: 3.5,
        date: "2025-01-15",
      },
    ];

    const result = formatExpenses(expenses);

    expect(result).toEqual([
      {
        id: 1,
        description: "Coffee",
        amount: 3.5,
        date: "2025-01-15",
        displayDate: new Date("2025-01-15").toLocaleDateString(),
      },
    ]);
  });
});