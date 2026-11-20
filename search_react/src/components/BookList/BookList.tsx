import type { Book } from '../../data/books';
import BookCard from '../BookCard/BookCard';
import './BookList.css'

type BookListProps = {
    books: Book[];
    favoriteIds: number[];
    onToggleFavorite: (id: number) => void;
}

function BookList({ books, favoriteIds, onToggleFavorite }: BookListProps) {
    return (
            <div className='book-list'>
                {books.map((book) => {
                    return (
                        <BookCard key={book.id} book={book} isFavorite={favoriteIds.includes(book.id)} onToggleFavorite={onToggleFavorite}/>
                    )
                })}
            </div>
    )
}

export default BookList;