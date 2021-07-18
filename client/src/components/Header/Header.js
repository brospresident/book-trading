import React from 'react';

import styles from './Header.module.css';

function Header(props) {
    const display = props.isLoggedIn === false ? <p><a href='/auth'>Login</a></p> : <p><a href='/user/'>Your Profile</a></p>;
    return (
        <div className={styles.header}>
            <div className={styles.headerList}>
                <p className={styles.headerElement}><a href='/'><h1>Book Trading</h1></a></p>
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
