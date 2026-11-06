import type { Book } from '../../data/books.ts';
import './BookCard.css'

function BookCard({ book }: { book: Book }) {
    return (
        <div className='book-card'>
            <h2 className='book-card__title'>
                {book.title}
            </h2>
            <p className='book-card__author'>
                {book.author}
            </p>
            <p className='book-card__genre'>
                {book.genre}
            </p>
            <p className='book-card__year'>
                {book.year}
            </p>
        </div>
    )
}

export default BookCard;