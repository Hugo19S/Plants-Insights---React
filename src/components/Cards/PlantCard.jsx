import React from "react";
import "/src/styles/components/homepage.sass";
import { Link } from 'react-router-dom';

function PlantCard(props) {

  return (
    <div className="card_plant">
      <img src={props.plant.imageUrl} alt={props.plant.plantName} />
      <div className="plant_info">
        <h5 className="card-title">{props.plant.plantName}</h5>
        <span className="card-date">Cor: {props.plant.flowerColor}</span>
        <span className="card-participants">Nutrientes: {props.plant.foodNutrients}</span>
        <span className="card-participants">Crescimento: {props.plant.growthHabits}</span>
        <span className="card-participants">Rega: {props.plant.waterRequirements}</span>
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
