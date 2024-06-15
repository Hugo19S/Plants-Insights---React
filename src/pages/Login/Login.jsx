import { FaUser, FaLock } from "react-icons/fa";
import { useState } from "react";
import { useNavigate } from "react-router-dom";

function validateForm(fillInFilds) {
  var formElements = document.querySelectorAll("#LoginForm .form-control");

  formElements.forEach(function (element) {
    element.classList.remove("invalidForm");
  });

  // Adicione suas regras de validação aqui
  var formData = [
    document.getElementById("username"),
    document.getElementById("password"),
  ];

  for (let i = 0; i < formData.length; i++) {
    if (formData[i].value.trim() === "") {
      formData[i].classList.add("invalidForm");
    }
  }

  var invalidElements = document.querySelectorAll("#LoginForm .invalidForm");
  if (invalidElements.length > 0) {
    fillInFilds.innerHTML = "Preencha todos os campos";
    return false;
  }

  return true;
}

const verifyCredential = async (username, password) => {
  try {
    const response = await fetch("http://localhost:3031/users");
    const data = await response.json();

    const user = data.find(
      (user) => user.username === username && user.password === password
    );
    return !!user;
  } catch (error) {
    console.error("Erro ao verificar credenciais:", error);
    return false;
  }
};

function Login() {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const navigate = useNavigate();

  const handleSubmit = (event) => {
    event.preventDefault();
    const fillInFilds = document.querySelector(".fill-in-fields");

    if (validateForm(fillInFilds)) {

      verifyCredential(username, password).then((isValid) => {
        if (isValid) {
          fillInFilds.innerHTML = "";
          localStorage.setItem('sessionUser', username);
          navigate("/");
        } else {
          fillInFilds.innerHTML = "Credenciais errados! Tenta novamente.";
        }
      });
    }
  };

  return (
    <div className="loginPage">
      <div className="container-Login">
        <form onSubmit={(event) => handleSubmit(event)} id="LoginForm">
          <h1>Acesse o sistema</h1>
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
              type="password"
              id="password"
              className="form-control"
              placeholder="Senha"
              onChange={(e) => setPassword(e.target.value)}
            />
            <FaLock className="icon" />
          </div>

          <div className="fill-in-fields"></div>

          <div className="recall-forget">
            <label>
              <input type="checkbox" />
              Lembre de mim
            </label>
            <a className="hrefColor" href="#">
              Esqueceu a senha?
            </a>
          </div>

          <button>Entrar</button>

          <div className="signup-link">
            <p>
              Não tem uma conta?{" "}
              <a className="hrefColor" href="/login/register">
                Registrar
              </a>
            </p>
          </div>
        </form>
      </div>
    </div>
  );
}

export default Login;
