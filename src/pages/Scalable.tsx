import React, { useEffect, useState } from 'react';
import { useUsers } from '../hooks/useUsers';
import UserCard from '../components/UserCard';
import '../styles/Grid.css';

const PAGE_SIZE = 50;
const TOTAL_USERS = 500;

export default function Scalable() {
    const { users, loadPage } = useUsers({ pageSize: PAGE_SIZE });
    const [loadTime, setLoadTime] = useState<number | null>(null);
    const [loadingPage, setLoadingPage] = useState(false);

    const fetchMoreItems = async () => {
        if (users.length >= TOTAL_USERS || loadingPage) return;
        setLoadingPage(true);
        const start = performance.now();
        const nextPage = Math.floor(users.length / PAGE_SIZE) + 1;
        await loadPage(nextPage);
        setLoadTime(performance.now() - start);
        setLoadingPage(false);
    };

    useEffect(() => {
        // Intentionally not including fetchMoreItems in deps to prevent
        // re-loading all pages when users or loadingPage updates
        fetchMoreItems();
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, []);

    const handleScroll = (e: React.UIEvent<HTMLDivElement>) => {
        const { scrollTop, scrollHeight, clientHeight } = e.currentTarget;
        if (scrollTop + clientHeight >= scrollHeight - 150) {
            fetchMoreItems();
        }
    };

    return (
        <div>
            <h2 style={{ textAlign: 'center', color: '#007bff' }}>Scalable Users</h2>
            {loadTime && <p style={{ textAlign: 'center', color: '#555' }}>Time to fetch current batch: {loadTime.toFixed(2)} ms</p>}

            <div className="grid-container" onScroll={handleScroll}>
                {users.map(user => (
                    <UserCard key={user.id} user={user} />
                ))}
                {loadingPage &&
                    Array.from({ length: 6 }).map((_, idx) => <UserCard key={`loading-${idx}`} loading />)}
            </div>
        </div>
    );
}
