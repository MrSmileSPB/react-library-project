import BookList from './components/BookList/BookList';
import { books } from './data/books';
import './App.css'


function App() {
  return (
    <div className='catalog'>
      <BookList books={books} />
    </div>
  )
}

export default App
