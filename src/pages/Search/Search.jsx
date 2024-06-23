import React, { useState, useEffect } from "react";
import PlantCard from "/src/components/Cards/PlantCard";
import AllPlants from "../../API/AllPlants";
import { useLocation } from "react-router-dom";
import NotFound from "/src/pages/NotFound/Notfound";

function filteredPlants(valueSearch, result) {
  return result.filter((planta) =>
    planta.plantName.toLowerCase().includes(valueSearch.toLowerCase())
  );
}

function Search({ search }) {
  const [data, setData] = useState(null);
  const [error, setError] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const getPlants = async () => {
      try {
        const result = await AllPlants();
        setData(result);
      } catch (error) {
        setError(error);
      } finally {
        setLoading(false);
      }
    };

    getPlants();
  }, []);

  if (loading) {
    return (
      <div className="loading">
        <div className="loader-circle"></div>
      </div>
    );
  }

  if (error) {
    return <div>Error loading data: {error.message}</div>;
  }

  let content;

  if (search === "lastSixElements") {
    /* Devolve os 6 ultimos elementos */
    content = (
      <div id="recipe-container" className="col-md-12">
        <h2>Nossas plantas</h2>
        <p className="sub">Veja as nossa plantas preferidas de hoje!</p>
        <div id="cards-container" className="plant_container">
          {data.slice(-6).map((planta) => {
            return <PlantCard key={planta._id} plant={planta} />;
          })}
        </div>
      </div>
    );
  } else if (search === "allPlants") {
    /* Devolve todos os elementos */
    content = (
      <div id="recipe-container" className="col-md-12">
        <h2>Nossas plantas</h2>
        <p className="sub">Veja as nossa plantas preferidas de hoje!</p>
        <div id="cards-container" className="plant_container">
          {data.map((planta) => {
            return <PlantCard key={planta._id} plant={planta} />;
          })}
        </div>
      </div>
    );
  } else {
    const query = new URLSearchParams(useLocation().search);
    const searchValue = query.get("searchValue");
    const filteredPlant = filteredPlants(searchValue, data);
    content = (
      /* Devolve os resultados da pesquisa */
      <div id="recipe-container" className="col-md-12">
        <h2>Procurando por: {searchValue}</h2>
        <p className="sub">Esse é o resultado da sua pesquisa!</p>

        {filteredPlant.length > 0 ? (
          <div id="cards-container" className="plant_container">
            {filteredPlant.map((planta) => {
              return <PlantCard key={planta._id} plant={planta} />;
            })}
          </div>
        ) : (
          <NotFound />
        )}
      </div>
    );
  }
  return <div>{content}</div>
}

export default Search;
