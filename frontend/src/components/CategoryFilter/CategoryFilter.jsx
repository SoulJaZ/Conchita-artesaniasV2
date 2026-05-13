function CategoryFilter({categories, setCategories}){
    return(
        <select onChange={(e)=>setCategories(e.target.value)}>
            <option value="">
                Todas
            </option>
            {
                categories.map(category=>(
                    <option
                        key={category}
                        value={category}
                    >
                        {category}
                    </option>
                ))
            }
        </select>
    )
}
export default CategoryFilter;