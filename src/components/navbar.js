import React from 'react';
import '../style.css';
import './navbar.css';

function Navbar() {
  return (
    <nav className="navbar navbar-expand-lg gray navbar-light" aria-label="Twelfth navbar example">
      <div className="container-fluid">
        <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarsExample10" aria-controls="navbarsExample10" aria-expanded="false" aria-label="Toggle navigation">
          <span className="navbar-toggler-icon"></span>
        </button>

        <div className="collapse navbar-collapse justify-content-md-center" id="navbarsExample10">
          <ul className="navbar-nav">

            <li className="nav-item">
              <a className="nav-link active" aria-current="page" href="/">Compare ações</a>
            </li>
            <li className="nav-item">
              <a className="nav-link active" aria-current="page" href="/alltickers">Lista de ações</a>
            </li>
            <li className="nav-item">
              <a className="nav-link active" aria-current="page" href="/investing">Sobre investimentos</a>
            </li>
            <li className="nav-item">
              <a className="nav-link active" aria-current="page" href="/about">Desenvolvedoras</a>
            </li>
            <li className="nav-item">
              <a className="nav-link active" aria-current="page" target="_blank" rel="noopener noreferrer" href="https://corporateportal.brazil.citibank.com/quem-somos.htm">Sobre o Citi</a>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;