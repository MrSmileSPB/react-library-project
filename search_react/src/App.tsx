import BookList from './components/BookList/BookList';
import { books } from './data/books';
import './App.css'
import { useState } from 'react';
import Filters from './components/Filters/Filters';


function App() {

  const [searchQuery, setSearchQuery] = useState('');
  const [genre, setGenre] = useState('all');



  const filteredBooks = books.filter(
    book => {
      const searchStr = searchQuery.toLowerCase().trim();

      const matchSearch = book.title.toLowerCase().includes(searchStr) ||
        book.author.toLowerCase().includes(searchStr);

      const matchGenre = genre === 'all' || book.genre === genre;

      return matchSearch && matchGenre;
    }
  )


  return (
    <div className='content'>
      <Filters query={searchQuery} setQuery={setSearchQuery} genre={genre} setGenre={setGenre} />
      <div className='catalog'>
        <BookList books={filteredBooks} />
      </div>
    </div>

  )
}

export default App
