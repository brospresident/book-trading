import React, { useEffect, useState } from 'react';
import { getAllTradeableBooks } from '../../requests';

// other components
import Book from '../Book/Book';

import styles from './Books.module.css';

function Books() {
    const [ books, setBooks ] = useState([]);

    const getBooksData = async () => {
        const data = await getAllTradeableBooks();
        setBooks(data);
    }
    const displayBooks = books.map((book, id) =>  <Book data = {book} key = {id}/>)

    useEffect(() => {
        async function fetchBooks() {
            await getBooksData();
        }
        fetchBooks();
    }, []);
    console.log(books);
    return (
        <div>
            <div className={styles.booksContainer}>
                <div className={styles.booksWrap}>
                    <div className={styles.booksHeader}>
                        <h1>Books </h1>
                        <span> available for trade</span>
                    </div>
                    <div className={styles.booksList}>
                        {displayBooks}
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Books;
