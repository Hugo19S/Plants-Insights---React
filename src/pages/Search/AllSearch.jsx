import React, { useState, useEffect } from "react";
import PlantCard from "/src/components/Cards/PlantCard";
import AllPlants from "../../API/AllPlants";

function AllSearch() {
  const [data, setData] = useState([]);
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

  return (
    <div>
      <div id="recipe-container" className="col-md-12">
        <h2>Nossas plantas</h2>
        <p className="sub">Veja as nossa plantas preferidas de hoje!</p>

        <div id="cards-container" className="plant_container">
          {data.map((planta) => {
            return <PlantCard key={planta._id} plant={planta} />;
          })}
        </div>
      </div>
    </div>
  );
}

export default AllSearch;
