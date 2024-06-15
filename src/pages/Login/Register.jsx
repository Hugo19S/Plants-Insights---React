import { FaUser, FaLock } from "react-icons/fa";
import { MdEmail } from "react-icons/md";
import { useState } from "react";
import Swal from "sweetalert2";
import { useNavigate } from "react-router-dom";

function validateForm() {
  // Resetar estilos
  var formElements = document.querySelectorAll("#registerForm .form-control");

  formElements.forEach(function (element) {
    element.classList.remove("invalidForm");
  });

  // Adicione suas regras de validação aqui
  var formData = [
    document.getElementById("username"),
    document.getElementById("email"),
    document.getElementById("password"),
    document.getElementById("confirmpassword"), // Corrigir o erro de digitação aqui também
  ];

  for (let i = 0; i < formData.length; i++) {
    if (formData[i].value.trim() === "") {
      formData[i].classList.add("invalidForm");
    }
  }

  var invalidElements = document.querySelectorAll("#registerForm .invalidForm");
  if (invalidElements.length > 0) {
    return false;
  }

  return true;
}

function Register() {
  const [username, setUsername] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const navigate = useNavigate();

  const handleSubmit = (event) => {
    event.preventDefault();

    if (!validateForm()) {
      Swal.fire({
        title: "Erro!",
        text: "Por favor, preencha todos os campos obrigatórios.",
        icon: "error",
      });
    } else if (password !== confirmPassword) {
      Swal.fire({
        title: "Erro!",
        text: "As palavras-passe não coincidem.",
        icon: "error",
      });
    } else {
      fetch("http://localhost:3031/users", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          username: username,
          email: email,
          password: password,
        }),
      })
        .then((response) => response.json())
        .then(console.log("accc"));

      Swal.fire({
        title: "Sucesso",
        text: "A sua conta foi criado com sucesso!",
        icon: "success",
      });

      navigate("/login");
    }
  };

  return (
    <div className="loginPage">
      <div className="container-Login">
        <form onSubmit={(event) => handleSubmit(event)} id="registerForm">
          <h1>Crie a sua conta</h1>
          <div className="input-field">
            <input
              type="text"
              id="username"
              className="form-control"
              placeholder="Username"
              onChange={(e) => setUsername(e.target.value)}
            />
            <FaUser className="icon" />
          </div>
          <div className="input-field">
            <input
              type="email"
              id="email"
              className="form-control"
              placeholder="E-mail"
              onChange={(e) => setEmail(e.target.value)}
            />
            <MdEmail className="icon" />
          </div>
          <div className="input-field">
            <input
              type="password"
              id="password"
              className="form-control"
              placeholder="Senha"
              onChange={(e) => setPassword(e.target.value)}
            />
            <FaLock className="icon" />
          </div>
          <div className="input-field">
            <input
              type="password"
              id="confirmpassword"
              className="form-control"
              placeholder="Confirmar Senha"
              onChange={(e) => setConfirmPassword(e.target.value)}
            />
            <FaLock className="icon" />
          </div>
          <button type="submit">Confirmar</button>
        </form>
      </div>
    </div>
  );
}

export default Register;
