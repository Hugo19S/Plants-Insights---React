import { FaUser, FaLock } from "react-icons/fa";
import { useState } from "react";
import axios from "axios";

function validateForm() {
  // Resetar estilos
  var formElements = document.querySelectorAll(
    "#plantForm .form-control, #plantForm .form-control-file"
  );
  formElements.forEach(function (element) {
    element.classList.remove("invalidForm");
  });

  // Adicione suas regras de validação aqui
  var formData = [
    document.getElementById("email"),
    document.getElementById("password"),
    document.getElementById("consfirmpassword"),
  ];

  for (let i = 0; i < formData.length; i++) {
    if (formData[i].value.trim() === "") {
      formData[i].classList.add("invalidForm");
    }
  }

  var invalidElements = document.querySelectorAll("#plantForm .invalidForm");
  if (invalidElements.length > 0) {
    return false;
  }

  return true;
}

function Register() {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  //const fs = require("fs");

  const handleSubmit = (event) => {
    event.preventDefault();

    const registerData = {
      username: username,
      password: password,
    };

    /*const jsonData = JSON.stringify(registerData, null, 2);
      fs.writeFile("../../assets/loginData.json", registerData, finished)*/

    axios.post("src/assets/loginData.json", registerData)
      .then((response) => {
        console.log(response.data);
        setData(registerData);
      })
      .catch((error) => {
        console.error("Erro ao salvar os dados:", error);
      });

    console.log(username);
    console.log(password);
    console.log(confirmPassword);
  };

  return (
    <div className="loginPage">
      <div className="container-Login">
        <form onSubmit={handleSubmit}>
          <h1>Crie a sua conta</h1>
          <div className="input-field">
            <input
              type="email"
              id="email"
              placeholder="E-mail"
              onChange={(e) => setUsername(e.target.value)}
            />
            <FaUser className="icon" />
          </div>

          <div className="input-field">
            <input
              type="password"
              id="password"
              placeholder="Senha"
              onChange={(e) => setPassword(e.target.value)}
            />
            <FaLock className="icon" />
          </div>

          <div className="input-field">
            <input
              type="password"
              id="consfirmpassword"
              placeholder="Confirmar Senha"
              onChange={(e) => setConfirmPassword(e.target.value)}
            />
            <FaLock className="icon" />
          </div>

          <button>Confirmar</button>
        </form>
      </div>
    </div>
  );
}

export default Register;
