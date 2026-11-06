import type { Book } from '../data/books.ts';

function BookCard({ book }: { book: Book }) {
    return (
        <div>
            <h2>
                {book.title}
            </h2>
            <p>
                {book.author}
            </p>
            <p>
                {book.genre}
            </p>
            <p>
                {book.year}
            </p>
        </div>
    )
}

export default BookCard;