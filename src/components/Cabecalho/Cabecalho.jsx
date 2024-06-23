import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import "/src/styles/components/cabecalho.sass";
import imageLogo from "/src/images/imageLogo.png";
import { IoPersonCircleSharp } from "react-icons/io5";

const Cabecalho = () => {
  const [username, setUsername] = useState(null);
  const [email, setEmail] = useState(null);
  const [menuOpen, setMenuOpen] = useState(false);

  const toggleMenu = () => {
    setMenuOpen(!menuOpen);
  };

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
            <a href="/addPlants" className="inserirPlanta">Adicionar planta</a>
            <div className="menu" onClick={toggleMenu}>
              <IoPersonCircleSharp className="iconAccount" />
              <ul className={`list ${menuOpen ? "" : "hidden"}`}>
                <li className="memu-option">{username}</li>
                <li className="memu-option">
                  <a onClick={handleLogout} className="logoutLink">
                    Logout
                  </a>
                </li>
              </ul>
            </div>
          </>
        ) : (
          <a href="/login">Login</a>
        )}
      </div>
    </div>
  );
};

export default Cabecalho;
