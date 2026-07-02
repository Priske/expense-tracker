import { getExpensesData } from "./fetch-expenses.js";

export const __only_for_test = { showLoading, showError, showEmptyState, renderExpenses, showExpenses };

export function showLoading(element) {
    const p = document.createElement("p");
    p.textContent = "Loading";
    element.appendChild(p);
}

export function showError(element, error) {
    const p = document.createElement("p");
    p.textContent = error.message;
    p.style.color = "#FF0000";
    element.appendChild(p);

}

export function showEmptyState(element) {
    const p = document.createElement("p");
    p.textContent = "No expenses found";
    element.appendChild(p);
}
export function renderExpenses(element, expenses) {
    if (expenses === undefined || expenses.length < 1) {
        return showEmptyState(element);
    }

    const ul = document.createElement("ul");

    for (const expense of expenses) {
        appendLi(ul, "id: " + expense.id);
        appendLi(ul, "description: " + expense.description);
        appendLi(ul, "date: " + expense.date);
        appendLi(ul, "category: " + expense.category);
    }

    element.appendChild(ul);
    return element
}

function appendLi(ul, text) {
    const li = document.createElement("li");
    li.textContent = text;
    ul.appendChild(li);
}


export async function showExpenses(element) {
    showLoading(element);

    try {
        const expenses = await getExpensesData();

        element.removeChild(element.firstChild);
        renderExpenses(element, expenses);

    } catch (error) {
        element.removeChild(element.firstChild);
        showError(element, error);
    }
}