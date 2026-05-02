# Stage 1: Priority Notification System

## Problem Statement
Users are overwhelmed with a large number of notifications. The goal is to display the top 10 most important unread notifications based on priority and recency.

---

## Approach

To solve this, we consider two main factors:

1. **Notification Priority**
2. **Recency (Timestamp)**

---

## Priority Weights

| Type       | Weight |
|------------|--------|
| Placement  | 3      |
| Result     | 2      |
| Event      | 1      |

---

## Scoring Formula

Each notification is assigned a score:

score = weight × 1e10 + timestamp

### Why this works:
- Weight ensures priority order (Placement > Result > Event)
- Timestamp ensures newer notifications rank higher within same type

---

## Algorithm

1. Fetch notifications from API
2. Assign score to each notification
3. Sort notifications based on score (descending)
4. Select top 10 notifications

---

## Efficiency Consideration

- Current approach: O(n log n) due to sorting
- Optimized approach:
  - Use **Min Heap of size 10**
  - Maintain top notifications dynamically
  - Time complexity: O(n log k), where k = 10

---

## Logging Integration

Logging middleware is used extensively:
- API fetch initiation
- Error handling
- Final computation

This ensures:
- Debugging capability
- System observability
- Production-level traceability

---

## Conclusion

This approach ensures efficient and scalable prioritization of notifications, improving user experience by highlighting the most critical updates.