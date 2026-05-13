import "./searchBar.css";

function SearchBar({ search, setSearch }) {
    return (
        <main>
            <input
                type="text"
                placeholder="Buscar productos..."
                value={search}
                onChange={(e) => setSearch(e.target.value)}
                className="search-input"
            />
           
        </main>
    )
}
export default SearchBar;