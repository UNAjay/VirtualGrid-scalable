import React, { useEffect, useState } from 'react';
import { fetchUsers, type User } from '../api/api';
import UserCard from '../components/UserCard';
import '../styles/Grid.css';

export default function NonScalable() {
    const [users, setUsers] = useState<User[]>([]);
    const [loading, setLoading] = useState(true);
    const [loadTime, setLoadTime] = useState<number | null>(null);

    useEffect(() => {
        const start = performance.now();
        fetchUsers({ page: 1, limit: 500 }).then(data => {
            setUsers(data);
            setLoading(false);
            setLoadTime(performance.now() - start);
        });
    }, []);

    return (
        <div>
            <h2 style={{ textAlign: 'center', color: '#007bff' }}>Non-Scalable Users</h2>
            {loadTime && <p style={{ textAlign: 'center', color: '#555' }}>Full dataset load time: {loadTime.toFixed(2)} ms</p>}

            <div className="grid-container">
                {loading &&
                    Array.from({ length: 12 }).map((_, idx) => (
                        <UserCard key={`loading-${idx}`} loading />
                    ))
                }
                {users.map(user => (
                    <UserCard key={user.id} user={user} />
                ))}
            </div>
        </div>
    );
}
