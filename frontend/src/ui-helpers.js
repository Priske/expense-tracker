export function showError(element, error) {
    const p = document.createElement("p");
    p.textContent = error.message;
    p.style.color = "#FF0000";
    element.appendChild(p);

}
