import React, { useState, useEffect } from "react";
import "/src/styles/components/homepage.sass";
import { Outlet } from "react-router-dom";

const Home = () => {
  const [searchValue, setSearchValue] = useState('');

  return (
    <div>
      <div id="search-container">
        <h1>Busque uma planta</h1>
        <form action="/search" >
          <input
            type="text"
            name="searchValue"
            id="formulario"
            className="form-control"
            placeholder="Procurar..."
            required
          />
        </form>
      </div>

      <div className="outlet_homePage">
        <Outlet />
      </div>
    </div>
  );
};

export default Home;
