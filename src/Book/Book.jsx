import React from 'react';
import './Book.css'
const Book = ({book}) => {
    return (
        <div>
            <p className='avatar'>{book.avatar}</p>
              <img className='h-48 w-48' src={book.imgUrl} alt="" />
        </div>
    );
};

export default Book;