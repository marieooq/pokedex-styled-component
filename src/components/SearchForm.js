import React from 'react';

function SearchForm({ type, placeholder, handleChange }) {
  return (
    <div className="search-form-container">
      <input
        id="search"
        type={type}
        placeholder={placeholder}
        className="search-form"
        onChange={handleChange}
      />
    </div>
  );
}

export default SearchForm;
