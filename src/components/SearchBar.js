import React from 'react';


function SearchBar(props){
    return(
        <div>
            <input
                //onChange={evt => handleSearchInput(evt)}
                //value={}
                className="input-group-field"
                type="search"
                placeholder="Search..."
                
            />
        </div>
    )
}
export default SearchBar;