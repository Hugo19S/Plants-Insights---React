import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import "/src/styles/components/cabecalho.sass";
import imageLogo from "/src/images/imageLogo.png";

const Cabecalho = () => {
  const [username, setUsername] = useState(null);
  const navigate = useNavigate();

  useEffect(() => {
    // Verifica se há informações do usuário no localStorage
    const storedUser = localStorage.getItem("sessionUser");
    if (storedUser) {
      setUsername(storedUser);
    }
  }, []);

  const handleLogout = () => {
    // Remove as informações do usuário do localStorage
    localStorage.removeItem("sessionUser");
    setUsername(null);
    // Atualiza a página
    window.location.reload();
  };

  return (
    <div className="Cabecalho">
      <a href="/" className="logo-header">
        <img src={imageLogo} alt="Logo ForSale" className="imageLogo" />
        <h1>Plants Insights</h1>
      </a>

      <div className="haderLink">
        <a href="/allPlants">Plantas</a>
        {username ? (
          <>
            <a href="/addPlants">Adicionar planta</a>
            <a onClick={handleLogout} className="logoutLink">Logout</a>
          </>
        ) : (
          <a href="/login">Login</a>
        )}
      </div>
    </div>
  );
};

export default Cabecalho;
