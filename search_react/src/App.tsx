import BookList from './components/BookList/BookList';
import { books } from './data/books';
import './App.css'
import { useState } from 'react';


function App() {

const [searchQuery, setSearchQuery] = useState('');



  const filteredBooks = books.filter(
    book => {
      const searchStr = searchQuery.toLowerCase().trim();
      return (book.title.toLowerCase().includes(searchStr) || book.author.toLowerCase().includes(searchStr));
    }
  )


  return (
    <div className='content'>
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
      </div>
    </div>

  )
}

export default App
