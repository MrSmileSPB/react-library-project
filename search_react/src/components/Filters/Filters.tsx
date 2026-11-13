
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
                <input
                    type="text"
                    placeholder='Поиск'
                    value={query}
                    onChange={(e) => setQuery(e.target.value)}
                />
            </div>
            <div className="filters__genre">
                <label className="filters__label" htmlFor="genre">Жанр:</label>
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