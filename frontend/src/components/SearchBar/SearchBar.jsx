import {

  useEffect,
  useState,
  useCallback

} from "react";

// BUSCADOR REUTILIZABLE

function SearchBar({

  search,
  setSearch

}){
  // ESTADO INPUT LOCAL

  const [inputValue,setInputValue] = useState(search);
  // DEBOUNCE

  useEffect(()=>{

    const delay = setTimeout(()=>{

      setSearch(inputValue);

    },300);


    return ()=>clearTimeout(delay);

  },[inputValue,setSearch]);
  // CAMBIO INPUT

  const handleChange = useCallback((e)=>{

    setInputValue(e.target.value);

  },[]);
  // LIMPIAR INPUT

  const clearSearch = ()=>{

    setInputValue("");

    setSearch("");
  }


  return(

    <div className="mb-8">

      <div className="relative">

        {/* Input */}

        <input

          type="text"

          placeholder="Buscar productos..."

          value={inputValue}

          onChange={handleChange}

          className="

            w-full
            border
            border-gray-300
            rounded-lg
            p-4
            pr-12
            focus:outline-none
            focus:ring-2
            focus:ring-black
          "
        />


        {/* Botón limpiar */}

        {

          inputValue && (

            <button

              onClick={clearSearch}

              className="

                absolute
                right-4
                top-1/2
                -translate-y-1/2
                text-gray-500
              "
            >

              ✕

            </button>
          )
        }

      </div>

    </div>
  )
}

export default SearchBar;