import React from 'react';

import styles from './Header.module.css';

function Header(props) {
    const handleSignOut = () => {
        localStorage.clear();
        props.setUser();
    }
    const user = JSON.parse(localStorage.getItem('user'));
    const userProfilePath = `/users/${user.id}`
    const display = props.user.isLoggedIn === false ? 
        <span><a href='/auth'>Login</a></span> 
        : 
        <span>
            <a className={styles.headerElement} href={userProfilePath}>Your Profile</a>
            <a href='/books' onClick={handleSignOut}>Sign Out</a>
        </span>;
    
    return (
        <div className={styles.header}>
            <div className={styles.headerList}>
                <p className={styles.headerElement}><a href='/'><strong>Book Trading</strong></a></p>
                <p className={styles.headerElement}><a href='/'>Books</a></p>
                <p className={styles.headerElement}><a href='/requests'>Requests</a></p>
                <p className={styles.headerElement}><a href='/trades'>Trades</a></p>
                <p className={styles.headerElement}><a href='/users'>Users</a></p>
                <p className={styles.headerElement && styles.headerMla}>{display}</p>
            </div>
        </div>
    )
}

export default Header;
