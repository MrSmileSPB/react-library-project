
type FiltersProps = {
    query: string;
    setQuery: (str: string) => void;
}

function Filters({ query, setQuery }: FiltersProps) {
    return (
        <div className='search'>
            <input
                type="text"
                placeholder='Поиск'
                value={query}
                onChange={(e) => setQuery(e.target.value)}
            />
        </div>
    )
}

export default Filters;