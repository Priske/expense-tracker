import { createExpense } from "./post-expense.js";

export function validateFormData(data) {
    if (!data) {
        return { success: false, error: new Error("data undefined") };
    }

    if (!Object.hasOwn(data, "description")) {
        return { success: false, error: new Error("description required") };
    }

    if (!Object.hasOwn(data, "amount")) {
        return { success: false, error: new Error("amount required") };
    }

    if (!Object.hasOwn(data, "date")) {
        return { success: false, error: new Error("date required") };
    }

    if (!data.description.trim()) {
        return { success: false, error: new Error("description required") };
    }

    if (!data.date.trim()) {
        return { success: false, error: new Error("date required") };
    }

    const amount = Number(data.amount);

    if (Number.isNaN(amount)) {
        return { success: false, error: new Error("Amount must be a number") };
    }

    if (amount < 0) {
        return { success: false, error: new Error("Amount needs to be a positive number") };
    }

    return { success: true };
}
export async function addExpense(data) {
    const validation = validateFormData(data);

    if (!validation.success) {
        throw validation.error;
    }

    return await createExpense(data);
}