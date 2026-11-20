import BookList from './components/BookList/BookList';
import { books } from './data/books';
import './App.css'
import { useState } from 'react';
import Filters from './components/Filters/Filters';
import Header from './components/Header/Header';


function App() {

  const [searchQuery, setSearchQuery] = useState('');
  const [genre, setGenre] = useState('all');
  const [favoriteBooks, setFavoriteBooks] = useState<number[]>([]); /* Добавляем в массив выбранные книги */
  const [showOnlyFavorites, setShowOnlyFavorites] = useState(false); /* Выбираем фильтр по избранному */

  const toggleFavorite = (id: number) => {
    if (favoriteBooks.includes(id)) {
      setFavoriteBooks(favoriteBooks.filter((favId) => favId !== id));
    } else {
      setFavoriteBooks([...favoriteBooks, id]);
    }
  };

  const filteredBooks = books.filter(
    book => {
      const searchStr = searchQuery.toLowerCase().trim();

      const matchSearch = book.title.toLowerCase().includes(searchStr) ||
        book.author.toLowerCase().includes(searchStr);

      const matchGenre = genre === 'all' || book.genre === genre;

      const matchFavorite = (showOnlyFavorites) ? favoriteBooks.includes(book.id) : true;

      return matchSearch && matchGenre && matchFavorite;
    }
  )

  return (

    <div className='content'>
      <Header />
      <Filters query={searchQuery} setQuery={setSearchQuery} genre={genre} setGenre={setGenre} showOnlyFavorites={showOnlyFavorites} setShowOnlyFavorites={setShowOnlyFavorites} />
      <div className='wrapper'>
        <BookList books={filteredBooks} favoriteIds={favoriteBooks} onToggleFavorite={toggleFavorite} />
      </div>

    </div>

  )
}

export default App
