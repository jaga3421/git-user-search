import React, { Component } from 'react';

class SearchBox extends Component {
  render() {
    return (
        <div className="search-wrapper">
            <input placeholder="Type something to search"/>
            <div className="dropdown-result"></div>
        </div>
    );
  }
}

export default SearchBox;
