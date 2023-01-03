import { useState } from 'react';
import './Search.css';

function Search() {
  const [userSearch, setUserSearch] = useState('');

  return (
    <input
      type="text" 
      value={userSearch}
      name="userSearch"
      placeholder="Search articles by title or author!"
      onChange={(event) => setUserSearch(event.target.value)}
    />
  );
}

export default Search;