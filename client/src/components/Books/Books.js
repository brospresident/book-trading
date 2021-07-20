import React from 'react';

// other components

import styles from './Books.module.css';

function Books() {
    return (
        <div>
            <div className={styles.booksContainer}>
                <div className={styles.booksWrap}>
                    <div className={styles.booksHeader}>
                        <h1>Books </h1>
                        <span> available for trade</span>
                    </div>
                    <div className={styles.booksList}>

                    </div>
                </div>
            </div>
        </div>
    );
}

export default Books;
