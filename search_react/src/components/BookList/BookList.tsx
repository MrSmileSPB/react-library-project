import type { Book } from '../../data/books';
import BookCard from '../BookCard/BookCard';
import './BookList.css'

type BookListProps = {
    books: Book[];
    favoritebook: boolean;
    favoriteBooksHandler: (id: number) => void;
}

function BookList({ books, favoritebook, favoriteBooksHandler }: BookListProps) {
    return (
            <div className='book-list'>
                {books.map((book) => {
                    return (
                        <BookCard key={book.id} book={book} favoritebook={favoritebook} favoriteBooksHandler={favoriteBooksHandler}/>
                    )
                })}
            </div>
    )
}

export default BookList;