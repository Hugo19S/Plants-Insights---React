import React from "react";
import '/src/styles/components/cabecalho.sass';
import imageLogo from '/src/images/imageLogo.png';

const Cabecalho = () => {
  return (
    <div className="Cabecalho">
      <a href="/" className="logo-header">
        <img src={imageLogo} alt="Logo ForSale" className="imageLogo" />
        <h1>Plants Insights</h1>
      </a>

      <div className="haderLink">
        <a href="/allPlants">Plantas</a>
        <a href="/addPlants">Adicionar planta</a>
        <a href="/login">Login</a>
      </div>
    </div>
  );
};

export default Cabecalho;
