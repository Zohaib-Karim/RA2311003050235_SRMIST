import { useEffect, useState } from "react";
import { fetchNotifications } from "../api/notifications";

export default function AllNotifications() {
  const [data, setData] = useState([]);
  const [filter, setFilter] = useState("All");

  useEffect(() => {
    fetchNotifications().then(res => {
      setData(res.notifications || []);
    });
  }, []);

  // filter logic
  const filteredData =
    filter === "All"
      ? data
      : data.filter(n => n.Type === filter);

  return (
    <div>
      <h2>All Notifications</h2>

      {/* 🔽 FILTER DROPDOWN */}
      <select
        value={filter}
        onChange={e => setFilter(e.target.value)}
        style={{ marginBottom: "15px", padding: "5px" }}
      >
        <option value="All">All</option>
        <option value="Placement">Placement</option>
        <option value="Result">Result</option>
        <option value="Event">Event</option>
      </select>

      {/* 🔽 LIST */}
      {filteredData.map(n => (
        <div
          key={n.ID}
          style={{
            padding: "10px",
            marginBottom: "8px",
            borderRadius: "6px",
            border: "1px solid #ddd"
          }}
        >
          <b>{n.Type}</b> — {n.Message}
        </div>
      ))}
    </div>
  );
}