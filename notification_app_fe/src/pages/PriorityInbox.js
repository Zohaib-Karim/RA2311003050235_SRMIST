import { useEffect, useState } from "react";
import { fetchNotifications } from "../api/notifications";
import { getTopNotifications } from "../utils/priority";

export default function PriorityInbox() {
  const [data, setData] = useState([]);

  useEffect(() => {
    fetchNotifications().then(res => {
      const top = getTopNotifications(res.notifications || [], 10);
      setData(top);
    });
  }, []);

  return (
    <div>
      <h2>Priority Inbox (Top 10)</h2>
      {data.map(n => (
        <div key={n.ID} style={{ marginBottom: "10px", background: "#eee", padding: "5px" }}>
          <b>{n.Type}</b> - {n.Message}
        </div>
      ))}
    </div>
  );
}