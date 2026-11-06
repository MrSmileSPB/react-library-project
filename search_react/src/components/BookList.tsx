import type { Book } from '../data/books.ts';
import  BookCard  from './BookCard';

function BookList({ books }: { books : Book[]}) {
    return (
        books.map((book) => {
            return (
                <div>
                    <BookCard key={book.id} book={book} />
                </div>
            )
        })
    )
}

export default BookList;