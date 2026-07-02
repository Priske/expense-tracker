export async function getExpensesData() {
  const response = await fetch("/expenses");

  if (!response.ok) {
    throw new Error("Failed to fetch expenses");
  }
  
  return response.json();
}