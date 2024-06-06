import React from 'react'
import result from "/src/API/simulacao"
import PlantCard from "/src/components/Cards/PlantCard";

function FirstFive() {
  return (
    <div>
        <div id="recipe-container" className="col-md-12">
        <h2>Nossas plantas</h2>
        <p className="sub">Veja as nossa plantas preferidas de hoje!</p>
       
        <div id="cards-container" className="plant_container">
          {
            result.slice(0, 5).map((planta) => {
              return <PlantCard key={planta._id} plant={planta} />;
            })
          }
        </div>
      </div>
    </div>
  )
}

export default FirstFive