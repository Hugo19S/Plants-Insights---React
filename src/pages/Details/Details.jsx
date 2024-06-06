import React from "react";
import "/src/styles/components/details.sass";

function Details() {
  return (
    <div className="detailsContainer">
      <h2>Detalhes</h2>
      <div className="detailsContent">
        <div className="image_div_details">
          <img src="src\images\1000_F.jpg" alt="" />
        </div>
        <div className="compartmentData">
          <table class="table">
            <tbody>
              <tr>
                <th scope="row">Nome:</th>
                <td>Borago</td>
              </tr>
              <tr>
                <th scope="row">Nome Ciêntifico:</th>
                <td>Borago officinalis</td>
              </tr>
              <tr>
                <th scope="row">Cor da flor:</th>
                <td>Azul</td>
              </tr>
              <tr>
                <th scope="row">Nutrientes alimentares:</th>
                <td>Polén</td>
              </tr>
              <tr>
                <th scope="row">Crescimento:</th>
                <td>Anual</td>
              </tr>
              <tr>
                <th scope="row">Necessidade de água:</th>
                <td>Pouco</td>
              </tr>
              <tr>
                <th scope="row">Região nativa:</th>
                <td>Mediterânio</td>
              </tr>
              <tr>
                <th scope="row">Plantas companheiras:</th>
                <td>Tomate</td>
              </tr>
              <tr>
                <th scope="row">Tempo de floração:</th>
                <td>Verão</td>
              </tr>
              <tr>
                <th scope="row">Altura da planta:</th>
                <td>"1 a 3 pés"</td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>

      <div class="mb-3">
            <label for="description" class="plant-description">Descrição</label>
            <textarea class="form-control textareaDetails" id="description" rows="3">A borragem é uma erva anual com folhas peludas e flores azuis em forma de estrela.</textarea>
        </div>
    </div>
  );
}

export default Details;
