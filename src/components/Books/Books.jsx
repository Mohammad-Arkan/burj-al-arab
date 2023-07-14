import React, { useEffect, useState } from 'react';
import Book from '../../Book/Book';

const Books = () => {
    const [books, setBooks] = useState([])

    useEffect(()=> {
        fetch('http://localhost:5000/books')
        .then(res => res.json())
        .then(data => setBooks(data))
        .catch(error => console.error(error))
    },[])
    return (
        <div>
           <div className='grid gap-12 m-16 lg:grid-cols-3 sm:grid-cols-2 '>
            {
                books.map(book => <Book
                key={book.id}
                book={book}
                ></Book>
                  )
            }
           </div>
        </div>
    );
};

export default Books;