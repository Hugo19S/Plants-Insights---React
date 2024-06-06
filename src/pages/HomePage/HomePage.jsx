import React, { useState, useEffect } from "react";
import "/src/styles/components/homepage.sass";
import { Outlet } from "react-router-dom";
import { useNavigate } from "react-router-dom";
import Search from "../Search/Search";

const Home = () => {
  //const navigate = useNavigate();
  const [searchValue, setSearchValue] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    //const formData = new FormData(e.currentTarget);
    //const valueForm = formData.get("searchValue");
    //navigate("/search", { state: { searchValue: valueForm } });
    //setSearchValue(valueForm);
  };

  return (
    <div>
      <div id="search-container" className="col-md-12">
        <h1>Busque uma planta</h1>
        <form action="/search" >
          <input
            type="text"
            name="searchValue"
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
