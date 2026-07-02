import { describe, it, expect } from "vitest";
import { validateFormData } from "../../src/expenses-create/add-expense";

describe("validateFormData", () => {
    it("returns success for valid data", () => {
        const result = validateFormData({
            description: "Lunch",
            amount: "12",
            date: "2025-07-02",
        });

        expect(result).toEqual({ success: true });
    });

    it("fails when data is undefined", () => {
        const result = validateFormData();

        expect(result.success).toBe(false);
        expect(result.error.message).toBe("data undefined");
    });

    it("fails when description is missing", () => {
        const result = validateFormData({
            amount: "12",
            date: "2025-07-02",
        });

        expect(result.success).toBe(false);
        expect(result.error.message).toBe("description required");
    });

    it("fails when amount is missing", () => {
        const result = validateFormData({
            description: "Lunch",
            date: "2025-07-02",
        });

        expect(result.success).toBe(false);
        expect(result.error.message).toBe("amount required");
    });

    it("fails when date is missing", () => {
        const result = validateFormData({
            description: "Lunch",
            amount: "12",
        });

        expect(result.success).toBe(false);
        expect(result.error.message).toBe("date required");
    });

    it("fails when amount is negative", () => {
        const result = validateFormData({
            description: "Lunch",
            amount: "-5",
            date: "2025-07-02",
        });

        expect(result.success).toBe(false);
        expect(result.error.message).toBe(
            "Amount needs to be a positive number"
        );
    });

    it("fails when amount is not a number", () => {
        const result = validateFormData({
            description: "Lunch",
            amount: "abc",
            date: "2025-07-02",
        });

        expect(result.success).toBe(false);
        expect(result.error.message).toBe("Amount must be a number");
    });
});