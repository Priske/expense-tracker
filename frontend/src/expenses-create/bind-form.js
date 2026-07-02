import { validateFormData } from "./add-expense.js";
import { createExpense } from "./post-expense.js";

async function submitExpense(form) {
    const formData = new FormData(form);

    const data = {
        description: formData.get("description"),
        amount: Number(formData.get("amount")),
        date: formData.get("date"),
    };

    const validation = validateFormData(data);

    if (!validation.success) {
        throw validation.error;
    }

    return await createExpense(data);
}

export const __only_for_test = {
    submitExpense,
};