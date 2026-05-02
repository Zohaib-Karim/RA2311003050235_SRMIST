const TOKEN = "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJNYXBDbGFpbXMiOnsiYXVkIjoiaHR0cDovLzIwLjI0NC41Ni4xNDQvZXZhbHVhdGlvbi1zZXJ2aWNlIiwiZW1haWwiOiJzazA3MTFAc3JtaXN0LmVkdS5pbiIsImV4cCI6MTc3NzcwNDgyNCwiaWF0IjoxNzc3NzAzOTI0LCJpc3MiOiJBZmZvcmQgTWVkaWNhbCBUZWNobm9sb2dpZXMgUHJpdmF0ZSBMaW1pdGVkIiwianRpIjoiM2NiZDMyOTQtY2VkOC00N2MzLWFjMWEtOWE4NWFiZmIyNmIzIiwibG9jYWxlIjoiZW4tSU4iLCJuYW1lIjoic3llZCB6b2hhaWIga2FyaW0iLCJzdWIiOiIyNDdmYjJjOC04OGQ3LTQ2MDgtYTQ1OC1kM2VkNzRmYWU0YzAifSwiZW1haWwiOiJzazA3MTFAc3JtaXN0LmVkdS5pbiIsIm5hbWUiOiJzeWVkIHpvaGFpYiBrYXJpbSIsInJvbGxObyI6InJhMjMxMTAwMzA1MDIzNSIsImFjY2Vzc0NvZGUiOiJRa2JweEgiLCJjbGllbnRJRCI6IjI0N2ZiMmM4LTg4ZDctNDYwOC1hNDU4LWQzZWQ3NGZhZTRjMCIsImNsaWVudFNlY3JldCI6IkNzZlpkS0trRHZtTmZVa2YifQ.ma1323DSs9_0iNRf3wlAJInN4jIXn_jB5xe_9oHSegY"; 

export async function Log(stack, level, pkg, message) {
  try {
    const response = await fetch("http://20.207.122.201/evaluation-service/logs", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        "Authorization": `Bearer ${TOKEN}`
      },
      body: JSON.stringify({
        stack: stack,
        level: level,
        package: pkg,
        message: message
      })
    });

    const data = await response.json();
    return data;
  } catch (error) {
    console.error("Logging failed:", error);
  }
}