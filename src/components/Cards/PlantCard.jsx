import React from "react";
import "/src/styles/components/homepage.sass";
import { Link } from 'react-router-dom';

function PlantCard(props) {

  return (
    <div className="card_plant">
      <img src={props.plant.imageUrl} alt={props.plant.plantName} />
      <div className="plant_info">
        <h5 className="card-name">{props.plant.plantName}</h5>
        <div className="card-infoPlant">Cor: {props.plant.flowerColor}</div>
        <span className="card-infoPlant">Nutrientes: {props.plant.foodNutrients}</span>
        <span className="card-infoPlant">Crescimento: {props.plant.growthHabits}</span>
        <span className="card-infoPlant">Rega: {props.plant.waterRequirements}</span>
        <Link
          to={`/${props.plant._id}`} state= { props.plant } // Passa todos os dados da planta via estado
          className="btn btn-primary moreInfo">
          Saber mais
      </Link>
      </div>
    </div>
  );
}

export default PlantCard;
