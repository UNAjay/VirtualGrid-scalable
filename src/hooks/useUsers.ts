import { useState, useCallback } from 'react';
import type { User } from '../api/api';
import { fetchUsers } from '../api/api';

export function useUsers({ pageSize = 50 }) {
  const [users, setUsers] = useState<User[]>([]);

  const loadPage = useCallback(async (page: number) => {
    const newUsers = await fetchUsers({ page, limit: pageSize });
    setUsers(prev => {
      const updated = [...prev];
      updated.splice((page - 1) * pageSize, newUsers.length, ...newUsers);
      return updated;
    });
    return newUsers;
  }, [pageSize]);

  return { users, loadPage };
}
