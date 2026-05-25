import React , {useRef}  from "react";

import '../../src/styles/mainStyles/Search.css'



const Search = ({ fullFilms, setFilms}) => {
    const searchField =  useRef(null)


    function getFilmFilter() {
            console.log(searchField)
        const text = searchField.current.value
        setFilms(fullFilms.filter((item) => item.header.toUpperCase().includes(text.toUpperCase())))

    }
    return (
        <div className="search">
            <input
                ref={searchField}
                onChange={getFilmFilter}
                type={'text'}
                placeholder={"Search..."}/>

        </div>
    )
}

export default Search;