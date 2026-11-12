import BookList from './components/BookList/BookList';
import { books } from './data/books';
import './App.css'
import { useState } from 'react';
import Filters from './components/Filters/Filters';


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
      <Filters query={searchQuery} setQuery={setSearchQuery} />
      <div className='catalog'>
        <BookList books={filteredBooks} />
      </div>
    </div>

  )
}

export default App
