import BookList from './components/BookList/BookList';
import { books } from './data/books';
import './App.css'
import { useState } from 'react';
<<<<<<< HEAD
=======
import Filters from './components/Filters/Filters';
>>>>>>> d1816aa49874518cba267cbef3f011be1758dd72


function App() {

<<<<<<< HEAD
const [searchQuery, setSearchQuery] = useState('');
=======
  const [searchQuery, setSearchQuery] = useState('');
>>>>>>> d1816aa49874518cba267cbef3f011be1758dd72



  const filteredBooks = books.filter(
    book => {
      const searchStr = searchQuery.toLowerCase().trim();
      return (book.title.toLowerCase().includes(searchStr) || book.author.toLowerCase().includes(searchStr));
    }
  )


  return (
    <div className='content'>
<<<<<<< HEAD
      <div className='search'>
        <input
          type="text"
          placeholder='Поиск'
          value={searchQuery}
          onChange={(e) => setSearchQuery(e.target.value)}
        />
      </div>
      <div className='catalog'>
        <BookList books={(filteredBooks) ? filteredBooks : books} />
=======
      <Filters query={searchQuery} setQuery={setSearchQuery} />
      <div className='catalog'>
        <BookList books={filteredBooks} />
>>>>>>> d1816aa49874518cba267cbef3f011be1758dd72
      </div>
    </div>

  )
}

export default App
