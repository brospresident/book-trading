import React from 'react'


//styles
import styles from './Book.module.css'


function Book(props) {
    const { data } = props;
    return (
        <div className = {styles.book}>
            <p>Book Title: {data.name}</p>
            <p>Book Owner: {data.owner}</p>
        </div>
    )
}

export default Book
