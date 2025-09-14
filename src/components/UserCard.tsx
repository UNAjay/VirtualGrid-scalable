import React from 'react';
import type { User } from '../api/api';
import '../styles/UserCard.css';

type UserCardProps = {
    user?: User;
    loading?: boolean;
};

function UserCardComponent({ user, loading }: UserCardProps) {
    if (loading) {
        return <div className="user-card loading">Loading...</div>;
    }
    return (
        <div className="user-card">
            <h3>{user?.name}</h3>
            <p><strong>Username:</strong> {user?.username}</p>
            <p><strong>Email:</strong> {user?.email}</p>
            <p><strong>Phone:</strong> {user?.phone}</p>
            <p><strong>Website:</strong> {user?.website}</p>
        </div>
    );
}

export default React.memo(UserCardComponent);
