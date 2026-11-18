import type { Book } from '../../data/books.ts';
import './BookCard.css';

type BookCardProps = {
    book: Book;
    defaultBackground?: string;
    defaultImage?: string;
    favoritebook: boolean;
    favoriteBooksHandler: (id: number) => void;
};

function BookCard({
    book,
    defaultBackground = "../../img/book-background/04_desert_sunset.png",
    defaultImage = "../../img/book-images/noimage.png",
    favoritebook = false,
    favoriteBooksHandler
}: BookCardProps) {

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
            <button className='book-card__favorites' onClick={() => { favoriteBooksHandler(book.id);  }}>
                <svg width="20" height="20" viewBox="0 0 24 24"
                    fill="var(--icon-fill)"
                    stroke="var(--icon-stroke)"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round">
                    <polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2"></polygon>
                </svg>
            </button>
        </div>
    )
}

export default BookCard;