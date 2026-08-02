const input = document.querySelector("input");
const ol = document.querySelector("ol");
const addButton = document.querySelector("button.button"); // Update selector if needed, or stick to classless if unique
// Better yet, let's select specific buttons to avoid confusion
const taskAddBtn = document.querySelector(".inputy button");
const themeToggleBtn = document.getElementById("theme-toggle");

// Initialize tasks and theme from localStorage
let todoList = JSON.parse(localStorage.getItem("todos")) || [];
const savedTheme = localStorage.getItem("theme") || "light";

// Apply saved theme
document.body.setAttribute("data-theme", savedTheme);
updateThemeIcon(savedTheme);

// Render existing tasks on load
renderTasks();

taskAddBtn.addEventListener("click", handleAddRequest);
themeToggleBtn.addEventListener("click", toggleTheme);

input.addEventListener("keydown", (e) => {
    if (e.key === "Enter") handleAddRequest();
});

function toggleTheme() {
    const currentTheme = document.body.getAttribute("data-theme");
    const newTheme = currentTheme === "light" ? "dark" : "light";

    document.body.setAttribute("data-theme", newTheme);
    localStorage.setItem("theme", newTheme);
    updateThemeIcon(newTheme);
}

function updateThemeIcon(theme) {
    themeToggleBtn.textContent = theme === "light" ? "🌙" : "☀️";
}

function handleAddRequest() {
    const text = input.value.trim();
    if (!text) {
        alert("Enter Value!");
        return;
    }
    addTask(text);
    input.value = "";
    input.focus();
}

function addTask(text) {
    todoList.unshift(text); // Add to beginning of array
    saveTasks();
    renderTasks();
}

function renderTasks() {
    ol.innerHTML = ""; // Clear current list
    todoList.forEach((task, index) => {
        const li = document.createElement("li");
        li.textContent = task + " "; // Add space for button

        const deleteBtn = document.createElement("button");
        deleteBtn.textContent = "Delete";
        deleteBtn.className = "del";
        deleteBtn.onclick = () => deleteTask(index);

        li.appendChild(deleteBtn);
        ol.appendChild(li);
    });
}

function deleteTask(index) {
    todoList.splice(index, 1);
    saveTasks();
    renderTasks();
}
function saveTasks() {
    localStorage.setItem("todos", JSON.stringify(todoList));
}