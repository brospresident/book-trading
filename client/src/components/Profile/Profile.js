import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'
import { getUserById } from '../../requests';

// styles
import styles from './Profile.module.css'

function Profile() {
    let { id } = useParams();
    id = +id;

    const [ user, setUser ] = useState({});

    useEffect(() => {
        async function getUserData() {
            const response = await getUserById(id);
            setUser(response);
        }
        getUserData();
    }, [id]);
    
    const {
        username,
        city,
        state
    } = user;
    const userBooksPath = `/users/${id}/books`

    return (
        <div className = {styles.profileContainer}>
            <h1>{username}'s profile</h1>

            <p><strong>Username: </strong>{username}</p>
            <p><strong>City: </strong>{city}</p>
            <p><strong>State: </strong>{state}</p>
            <a href={userBooksPath}>{username}'s books</a>
        </div>
    )
}

export default Profile
