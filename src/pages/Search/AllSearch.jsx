import React from 'react'
import PlantCard from "/src/components/Cards/PlantCard";
import result from "/src/API/simulacao";

function AllSearch() {
  return (
    <div>
        <div id="recipe-container" className="col-md-12">
        <h2>Nossas plantas</h2>
        <p className="sub">Veja as nossa plantas preferidas de hoje!</p>
       
        <div id="cards-container" className="plant_container">
          {
            result.map((planta) => {
              return <PlantCard key={planta._id} plant={planta} />;
            })
          }
        </div>
      </div>
    </div>
  )
}

export default AllSearch