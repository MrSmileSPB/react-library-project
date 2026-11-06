export type Book = { id: number; title: string; author: string; genre: string; year: number };
export const books: Book[] = [
    {
        id: 1,
        title: 'Мастер и Маргарита',
        author: 'Булгаков',
        genre: 'роман',
        year: 1967
    },
    {
        id: 2,
        title: 'Война и мир',
        author: 'Толстой',
        genre: 'роман-эпопея',
        year: 1869
    },
    {
        id: 3,
        title: 'Отцы и дети',
        author: 'Тургенев',
        genre: 'роман',
        year: 1862
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
        year: 1925
    }
];