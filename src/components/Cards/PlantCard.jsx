import React from "react";
import "/src/styles/components/homepage.sass";

function PlantCard(props) {
  return (
    <div className="card_plant">
      <img src="src\images\1000_F.jpg" alt="Imagem da receita" />
      <div className="plant_info">
        <h5 className="card-title">{props.plant.plantName}</h5><br />
        <span className="card-date">Cor: {props.plant.flowerColor}</span><br />
        <span className="card-participants">Nutrientes: {props.plant.foodNutrients}</span><br />
        <span className="card-participants">Crescimento: {props.plant.growthHabits}</span><br />
        <span className="card-participants">Rega: {props.plant.waterRequirements}</span><br />
        <a href="/details" className="btn btn-primary">Saber mais</a>
      </div>
    </div>
  );
}

export default PlantCard;
