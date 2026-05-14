function SearchBar({
  search,
  setSearch
}) {

  return (

    <div className="w-full">

      <input
        type="text"
        placeholder="Buscar productos..."
        value={search}
        onChange={(e) => setSearch(e.target.value)}
        className="
          w-full
          bg-white
          border
          border-gray-300
          rounded-2xl
          px-5
          py-4
          outline-none
          focus:ring-2
          focus:ring-[#8b5e3c]
          shadow-sm
        "
      />

    </div>
  );
}

export default SearchBar;