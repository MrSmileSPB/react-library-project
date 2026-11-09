export type Book = { 
    id: number; 
    title: string; 
    author: string; 
    genre: string; 
    year: number, 
    bg_image?: string, 
    book_image?: string
};
export const books: Book[] = [
    {
        id: 1,
        title: 'Мастер и Маргарита',
        author: 'Булгаков',
        genre: 'роман',
        year: 1967,
        bg_image: '../../img/book-background/05_moonlit_castle.png',
        book_image: '../../img/book-images/01_master_i_margarita.png'
    },
    {
        id: 2,
        title: 'Война и мир',
        author: 'Толстой',
        genre: 'роман-эпопея',
        year: 1869,
        bg_image: '../../img/book-background/01_city_skyline.png',
        book_image: '../../img/book-images/02_war_and_peace.png'
    },
    {
        id: 3,
        title: 'Отцы и дети',
        author: 'Тургенев',
        genre: 'роман',
        year: 1862,
        bg_image: '../../img/book-background/06_lavender_botanical.png',
        book_image: '../../img/book-images/03_fathers_and_sons.png'
    },
    {
        id: 4,
        title: 'Евгений Онегин',
        author: 'Пушкин',
        genre: 'роман в стихах',
        year: 1833
    },
    {
        id: 5,
        title: 'Собачье сердце',
        author: 'Булгаков',
        genre: 'повесть',
        year: 1925,
        bg_image: '../../img/book-background/03_blush_abstract.png',
        book_image: '../../img/book-images/05_heart_of_a_dog.png'
    },
    {
        id: 6,
        title: 'Преступление и наказание',
        author: 'Достоевский',
        genre: 'роман',
        year: 1866,
        bg_image: '../../img/book-background/02_forest_bird.png',
        book_image: '../../img/book-images/06_crime_and_punishment.png'
    }
];