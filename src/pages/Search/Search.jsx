import React, { useState, useEffect } from "react";
import PlantCard from "/src/components/Cards/PlantCard";
import AllPlants from "../../API/AllPlants";
import { useLocation } from "react-router-dom";
import NotFound from "/src/pages/NotFound/Notfound";

function useQuery() {
  return new URLSearchParams(useLocation().search);
}

function filteredPlants(valueSearch, result) {
  return result.filter((planta) =>
    planta.plantName.toLowerCase().includes(valueSearch.toLowerCase())
  );
}

function Search(props) {
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

  const query = useQuery();
  const searchValue = query.get("searchValue");
  const filteredPlant = filteredPlants(searchValue, data);

  return (
    <div>
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
    </div>
  );
}

export default Search;
