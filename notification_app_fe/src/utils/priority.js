export function getTopNotifications(notifications, n = 10) {
  const weights = {
    Placement: 3,
    Result: 2,
    Event: 1
  };

  return notifications
    .map(n => ({
      ...n,
      score: weights[n.Type] * 1e10 + new Date(n.Timestamp).getTime()
    }))
    .sort((a, b) => b.score - a.score)
    .slice(0, n);
}