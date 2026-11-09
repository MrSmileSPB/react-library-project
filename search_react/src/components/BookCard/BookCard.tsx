import type { Book } from '../../data/books.ts';
import './BookCard.css';

type BookCardProps = {
    book: Book;
    defaultBackground?: string;
    defaultImage?: string;
};

function BookCard({ book, defaultBackground = "../../img/book-background/04_desert_sunset.png", defaultImage = "../../img/book-images/noimage.png" }: BookCardProps) {

    const book_img = book.book_image || defaultImage;
    const background = book.bg_image || defaultBackground;

    return (
        <div className='book-card' style={{ "--bg-image": `url(${background})`, } as React.CSSProperties}>
            <div className='book-card__img'>
                <img src={book_img} alt="no picture" />
            </div>
            <div className='book-card__text'>
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
                    <span className='book-card__year--textcircle'>
                        {book.year}
                    </span>
                </p>
            </div>
        </div>
    )
}

export default BookCard;