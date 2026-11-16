
import './Filters.css'

type FiltersProps = {
    query: string;
    setQuery: (str: string) => void;
    genre: string;
    setGenre: (str: string) => void;
}

function Filters({ query, setQuery, genre, setGenre }: FiltersProps) {
    return (
        <div className="filters">
            <div className='filters__search'>
                <svg className="filters__icon-search" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="#888" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                    <circle cx="11" cy="11" r="8"></circle>
                    <line x1="21" y1="21" x2="16.65" y2="16.65"></line>
                </svg>
                <input
                    className='filters__input'
                    type="text"
                    placeholder='Поиск по названию или автору'
                    value={query}
                    onChange={(e) => setQuery(e.target.value)}
                />
            </div>
            <div className="filters__genre">
                <label className="filters__label" htmlFor="genre">
                    <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="#888" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                        <polygon points="22 3 2 3 10 12.46 10 19 14 21 14 12.46 22 3"></polygon>
                    </svg>
                    Жанр:  
                </label>
                <select id="genre" className="filters__select" onChange={(e) => setGenre(e.target.value)} value={genre}>
                    <option value="all">Все жанры</option>
                    <option value="роман">роман</option>
                    <option value="повесть">повесть</option>
                </select>
            </div>
        </div>

    )
}

export default Filters;