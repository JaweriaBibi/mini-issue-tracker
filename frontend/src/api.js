const BASE_URL = "http://127.0.0.1:8000";

export async function getIssues() {
  const res = await fetch(`${BASE_URL}/issues`);
  if (!res.ok) throw new Error("Failed to fetch issues");
  return res.json();
}

export async function createIssue(issue) {
  const res = await fetch(`${BASE_URL}/issues`, {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify(issue),
  });
  if (!res.ok) throw new Error("Failed to create issue");
  return res.json();
}

export async function updateIssue(id, data) {
  const res = await fetch(`${BASE_URL}/issues/${id}`, {
    method: "PUT",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify(data),
  });
  if (!res.ok) throw new Error("Failed to update issue");
  return res.json();
}

export async function deleteIssue(id) {
  const res = await fetch(`${BASE_URL}/issues/${id}`, {
    method: "DELETE",
  });
  if (!res.ok) throw new Error("Failed to delete issue");
}
