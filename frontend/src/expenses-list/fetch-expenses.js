export async function getExpensesData() {
  const response = await fetch("http://127.0.0.1:3000/expenses");

  if (!response.ok) {
    throw new Error("Failed to fetch expenses");
  }

  return response.json();
}
