import React from "react";
import PlantCard from "/src/components/Cards/PlantCard";
import result from "/src/API/simulacao";
import { useLocation } from "react-router-dom";
import NotFound from "/src/pages/NotFound/Notfound";

function useQuery() {
  return new URLSearchParams(useLocation().search);
}

function filteredPlants(valueSearch) {
  return result.filter((planta) =>
    planta.plantName.toLowerCase().includes(valueSearch.toLowerCase())
  );
}

function Search(props) {
  const query = useQuery();
  const searchValue = query.get("searchValue");
  const filteredPlant = filteredPlants(searchValue);

  return (
    <div>
      <div id="recipe-container" className="col-md-12">
        <h2>Procurando por: {searchValue}</h2>
        <p className="sub">Esse é o resultado da sua pesquisa!</p>

        {filteredPlant.length > 0 ? (
          <div id="cards-container" className="plant_container">
            {filteredPlant.map((planta) => (
            <PlantCard key={planta._id} plant={planta} />
            ))}
          </div>
        ) : (
          <NotFound />
        )}

        {/*result.length > 0 ? (
            result
              .filter((planta) =>
                planta.plantName
                  .toLowerCase()
                  .includes(searchValue.toLowerCase())
              )
              .map((planta) => <PlantCard key={planta._id} plant={planta} />)
          ) : (
            <NotFound />
          )*/}
      </div>
    </div>
  );
}

export default Search;
