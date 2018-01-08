import React from "react";

const Search = props => {

return (
    <form>
        <div className="form-group">
            <input
                onChange={props.handleInputChange}
                value={props.value}
                name="search"
                type="text"
                className="form-control"
                placeholder="Search for an article"
                id="search"
            /><br/>
            <input
                onChange={props.handleInputChange}
                value={props.value}
                name="startYear"
                type="text"
                className="form-control"
                placeholder="start year"
                id="startYear"
            /><br/>
            <input
                onChange={props.handleInputChange}
                value={props.value}
                name="endYear"
                type="text"
                className="form-control"
                placeholder="end year"
                id="endYear"
            />
            <br/>
            <button onClick={props.handleFormSubmit} className="btn btn-primary">
                Search
            </button>
        </div>
    </form>
)
};

export default Search;