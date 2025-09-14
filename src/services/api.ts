// api.ts
export async function fetchUsers({ page = 1, limit = 10 }) {
  const res = await fetch('https://jsonplaceholder.typicode.com/users');
  if (!res.ok) throw new Error(`API error: ${res.status}`);
  const users = await res.json();

  // Simulate pagination & larger dataset for demo
  const totalUsers = 500; // arbitrary large number for scalable demo
  const repeatedUsers = Array.from({ length: totalUsers }, (_, i) => {
    const user = users[i % users.length];
    return { ...user, id: i + 1 }; // assign unique id
  });

  const start = (page - 1) * limit;
  const end = start + limit;
  return repeatedUsers.slice(start, end);
}
