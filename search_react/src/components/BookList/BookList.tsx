import type { Book } from '../../data/books';
import BookCard from '../BookCard/BookCard';
import './BookList.css'

function BookList({ books }: { books: Book[] }) {
    return (
        <div className='book-list'>
            {books.map((book) => {
                return (
                    <BookCard key={book.id} book={book} />
                )
            })}
        </div>
    )
}

export default BookList;