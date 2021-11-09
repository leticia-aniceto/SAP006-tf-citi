import React from 'react';
// import { Icon } from '@iconify/react';
import '../style.css';
import './navbar.css'

function SearchBar() {
  return (
    <form className="searchBar-form"> 
        <input type="search" className="navbar navbar-expand-lg searchBar-input gray" placeholder="Busque pelo nome do ativo" />
        {/* <Icon icon="bytesize:search" color="#444" className="search" /> */}
    </form>
  );
};

export default SearchBar;