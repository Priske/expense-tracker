function formatExpenses(expenses) {
  return expenses.map((expense) => ({
    ...expense,
    displayDate: new Date(expense.date).toLocaleDateString(),
  }));
}

export const __only_for_test = {
  formatExpenses,
};