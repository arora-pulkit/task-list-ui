export function addTask(description) {
  return fetch("http://localhost:5000/task", {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify({
      description: description,
    }),
  }).then((res) => res.json());
}

export function getTasks() {
  return fetch("http://localhost:5000/tasks").then((res) => res.json());
}

export function deleteTask(id) {
  return fetch("http://localhost:5000/task?id=" + id, {
    method: "DELETE",
  });
}
