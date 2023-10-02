import React from "react";

const Search = () => {
    return (
        <div className="header-dev">
            <input type="text" className="header-input" placeholder="enter the city please"/>
            <button className="header-button">Find Weather</button>
        </div>
    );
}
 
export default Search;