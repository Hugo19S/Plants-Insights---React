import React from "react";
import "/src/styles/components/details.sass";
import { useLocation, useParams } from "react-router-dom";

function removeCharacter(str, charToRemove) {
  const regex = new RegExp(charToRemove, 'g');
  return str.replace(regex, '');
}


function Details() {
  const location = useLocation(); // Obtém o estado da navegação
  const plant = location.state; // Acessa os dados da planta
  var name = removeCharacter(plant.companionPlants.substring(1, plant.companionPlants.length-1), "\"")
  //name = name

  return (
    <div className="detailsContainer">
      <h2>Detalhes</h2>
      <div className="detailsContent">
        <div className="image_div_details">
          <img src={plant.imageUrl} alt={plant.plantName} />
        </div>
        <div className="compartmentData">
          <table className="table">
            <tbody>
              <tr>
                <th scope="row">Nome:</th>
                <td>{plant.plantName}</td>
              </tr>
              <tr>
                <th scope="row">Nome botânico:</th>
                <td>{plant.botanicalName}</td>
              </tr>
              <tr>
                <th scope="row">Cor da flor:</th>
                <td>{plant.flowerColor}</td>
              </tr>
              <tr>
                <th scope="row">Nutrientes alimentares:</th>
                <td>{plant.foodNutrients}</td>
              </tr>
              <tr>
                <th scope="row">Crescimento:</th>
                <td>{plant.growthHabits}</td>
              </tr>
              <tr>
                <th scope="row">Necessidade de água:</th>
                <td>{plant.waterRequirements}</td>
              </tr>
              <tr>
                <th scope="row">Região nativa:</th>
                <td>{plant.nativeRegion}</td>
              </tr>
              <tr>
                <th scope="row">Plantas companheiras:</th>
                <td>{name}</td>
              </tr>
              <tr>
                <th scope="row">Tempo de floração:</th>
                <td>{plant.bloomingTimes}</td>
              </tr>
              <tr>
                <th scope="row">Altura da planta:</th>
                <td>{plant.plantHeight}</td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>

      <div>
        <label htmlFor="description" className="plant-description">
          Descrição
        </label>
        <textarea
          className="form-control textareaDetails"
          id="description"
          rows="3"
          defaultValue={plant.description}/>
      </div>
    </div>
  );
}

export default Details;
