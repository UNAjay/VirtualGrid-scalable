export type User = {
  id: number;
  name: string;
  username: string;
  email: string;
  phone: string;
  website: string;
};

export async function fetchUsers({ page = 1, limit = 50 }): Promise<User[]> {
  const res = await fetch('https://jsonplaceholder.typicode.com/users');
  if (!res.ok) throw new Error(`API error: ${res.status}`);
  const users = await res.json() as User[];

  // Simulate larger dataset for scalable demo
  const totalUsers = 500;
  const repeatedUsers = Array.from({ length: totalUsers }, (_, i) => {
    const user = users[i % users.length];
    return { ...user, id: i + 1 };
  });

  const start = (page - 1) * limit;
  const end = start + limit;
  return repeatedUsers.slice(start, end);
}
