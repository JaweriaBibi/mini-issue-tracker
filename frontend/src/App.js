import { useEffect, useState } from "react";
import {
  getIssues,
  createIssue,
  updateIssue,
  deleteIssue,
} from "./api";

function App() {
  const [issues, setIssues] = useState([]);
  const [title, setTitle] = useState("");
  const [priority, setPriority] = useState("Low");
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");

  const loadIssues = async () => {
    try {
      setLoading(true);
      const data = await getIssues();
      setIssues(data);
    } catch (err) {
      setError(err.message);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    loadIssues();
  }, []);

  const handleCreate = async () => {
    if (!title) return;
    await createIssue({
      title,
      priority,
      status: "Open",
    });
    setTitle("");
    loadIssues();
  };

  const handleStatusChange = async (id, status) => {
    await updateIssue(id, { status });
    loadIssues();
  };

  const handleDelete = async (id) => {
    await deleteIssue(id);
    loadIssues();
  };

  return (
    <div style={{ padding: "20px" }}>
      <h2>Mini Issue Tracker</h2>

      <div>
        <input
          placeholder="Issue title"
          value={title}
          onChange={(e) => setTitle(e.target.value)}
        />

        <select
          value={priority}
          onChange={(e) => setPriority(e.target.value)}
        >
          <option>Low</option>
          <option>Medium</option>
          <option>High</option>
        </select>

        <button onClick={handleCreate}>Add Issue</button>
      </div>

      {loading && <p>Loading...</p>}
      {error && <p style={{ color: "red" }}>{error}</p>}

      <ul>
        {issues.map((issue) => (
          <li key={issue.id}>
            <b>{issue.title}</b> [{issue.priority}] — {issue.status}

            <select
              value={issue.status}
              onChange={(e) =>
                handleStatusChange(issue.id, e.target.value)
              }
            >
              <option>Open</option>
              <option>In-Progress</option>
              <option>Done</option>
            </select>

            <button onClick={() => handleDelete(issue.id)}>
              Delete
            </button>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default App;
