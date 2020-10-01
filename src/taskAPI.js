export function addTask(description) {
  return fetch("http://localhost:5000/task", {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify({
      description: description,
    }),
  });
}

export function getTasks() {
  return fetch("http://localhost:5000/tasks");
}
