import { Log } from "../logging middleware/logger.js";

// 🔑 Paste your actual token here
const TOKEN = "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJNYXBDbGFpbXMiOnsiYXVkIjoiaHR0cDovLzIwLjI0NC41Ni4xNDQvZXZhbHVhdGlvbi1zZXJ2aWNlIiwiZW1haWwiOiJzazA3MTFAc3JtaXN0LmVkdS5pbiIsImV4cCI6MTc3NzcwNDgyNCwiaWF0IjoxNzc3NzAzOTI0LCJpc3MiOiJBZmZvcmQgTWVkaWNhbCBUZWNobm9sb2dpZXMgUHJpdmF0ZSBMaW1pdGVkIiwianRpIjoiM2NiZDMyOTQtY2VkOC00N2MzLWFjMWEtOWE4NWFiZmIyNmIzIiwibG9jYWxlIjoiZW4tSU4iLCJuYW1lIjoic3llZCB6b2hhaWIga2FyaW0iLCJzdWIiOiIyNDdmYjJjOC04OGQ3LTQ2MDgtYTQ1OC1kM2VkNzRmYWU0YzAifSwiZW1haWwiOiJzazA3MTFAc3JtaXN0LmVkdS5pbiIsIm5hbWUiOiJzeWVkIHpvaGFpYiBrYXJpbSIsInJvbGxObyI6InJhMjMxMTAwMzA1MDIzNSIsImFjY2Vzc0NvZGUiOiJRa2JweEgiLCJjbGllbnRJRCI6IjI0N2ZiMmM4LTg4ZDctNDYwOC1hNDU4LWQzZWQ3NGZhZTRjMCIsImNsaWVudFNlY3JldCI6IkNzZlpkS0trRHZtTmZVa2YifQ.ma1323DSs9_0iNRf3wlAJInN4jIXn_jB5xe_9oHSegY";
// Priority weights
const weights = {
  Placement: 3,
  Result: 2,
  Event: 1
};

//  Fetch notifications from API
async function fetchNotifications() {
  await Log("frontend", "info", "api", "Fetching notifications");

  try {
    const res = await fetch("http://20.207.122.201/evaluation-service/notifications", {
      method: "GET",
      headers: {
        "Authorization": `Bearer ${TOKEN}`
      }
    });

    const data = await res.json();

    // Debug log (allowed during dev)
    console.log("API RESPONSE:", data);

    if (!data || !data.notifications) {
      await Log("frontend", "warn", "api", "No notifications received");
      return [];
    }

    return data.notifications;

  } catch (err) {
    await Log("frontend", "error", "api", "Failed to fetch notifications");
    console.error("Fetch Error:", err);
    return [];
  }
}

//  Compute top 10 notifications
function getTopNotifications(notifications) {
  if (!notifications || notifications.length === 0) {
    console.log("No notifications available");
    return [];
  }

  return notifications
    .map(n => ({
      ...n,
      score: weights[n.Type] * 1e10 + new Date(n.Timestamp).getTime()
    }))
    .sort((a, b) => b.score - a.score)
    .slice(0, 10);
}

//  Main execution
async function main() {
  await Log("frontend", "info", "service", "Starting Stage 1 computation");

  const notifications = await fetchNotifications();

  const topNotifications = getTopNotifications(notifications);

  await Log("frontend", "info", "service", "Computed top 10 notifications");

  console.log("\n===== TOP 10 PRIORITY NOTIFICATIONS =====\n");
  console.log(topNotifications);
}

main();