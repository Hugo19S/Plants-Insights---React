import React, { useEffect, useState } from "react";
import "./../../styles/components/addPlant.sass";
import Swal from "sweetalert2";
import axios from "axios";
import PostPlant from "../../API/PostPlant";

function validateForm() {
  //valida os campos do formulario
  // Resetar estilos
  var formElements = document.querySelectorAll(
    "#plantForm .form-control, #plantForm .form-control-file"
  );
  formElements.forEach(function (element) {
    element.classList.remove("invalidForm");
  });

  // Adicione suas regras de validação aqui
  var formElements = [
    document.getElementById("botanicalName"),
    document.getElementById("plantName"),
    document.getElementById("flowerColor"),
    document.getElementById("foodNutrients"),
    document.getElementById("nativeRegion"),
    document.getElementById("growthHabits"),
    document.getElementById("waterRequirements"),
    document.getElementById("companionPlants"),
    document.getElementById("bloomingTimes"),
    document.getElementById("plantHeight"),
    document.getElementById("description"),
    document.getElementById("imageUrl"),
  ];

  for (let i = 0; i < formElements.length; i++) {
    if (formElements[i].value.trim() === "") {
      formElements[i].classList.add("invalidForm");
    }
  }

  var invalidElements = document.querySelectorAll("#plantForm .invalidForm");
  if (invalidElements.length > 0) {
    return false;
  }

  return true;
}

async function submitForm(event) {
  event.preventDefault();

  const elements = event.target.elements;
  const formData = {};

  for (const element of elements) {
    if (element.tagName === "INPUT" || element.tagName === "TEXTAREA") {
      formData[element.id] = element.value; // Log element ID and value
    }
  }

  if (validateForm()) {
    Swal.fire({
      title: "Tens certeza que deseja gravar?",
      text: "Os dados não poderão ser alterados!",
      icon: "warning",
      showCancelButton: true,
      confirmButtonColor: "#3085d6",
      cancelButtonColor: "#d33",
      cancelButtonText: "Cancelar",
      confirmButtonText: "Sim, gravar!",
    }).then(async (result) => {
      if (result.isConfirmed) {

        const formDataImage = new FormData();
        formDataImage.append("image", event.target[11].files[0]);

        try {
          const response = await axios.post(
            "http://localhost:3032/image",
            formDataImage,
            {
              headers: {
                "Content-Type": "multipart/form-data",
              },
            }
          );

          formData["imageUrl"] = response.data.path;
          await PostPlant(formData);
        } 
        catch (error) {
          console.error("Erro ao fazer upload da imagem:", error);
        }
        Swal.fire({
          title: "Dados guardados!",
          text: "Dados guardados com sucesso!",
          icon: "success",
        }).then(() => {
          window.history.back();
        });
      }
    });
  } else {
    Swal.fire({
      title: "Erro!",
      text: "Por favor, preencha todos os campos obrigatórios.",
      icon: "error",
    });
  }
}

function AddPlant() {
  const [username, setUsername] = useState(null);

  useEffect(() => {
    // Verifica se há informações do usuário no localStorage
    const storedUser = localStorage.getItem("sessionUser");
    if (storedUser) {
      setUsername(storedUser);
    }
  }, []);

  return (
    <div className="AddPlantPage">
      {username ? (
        <div className="add-plant col-md-6">
          <h2 className="text-center">Adicionar planta</h2>

          <form onSubmit={(event) => submitForm(event)} id="plantForm">
            <div className="form-group mb-3">
              <label htmlFor="botanicalName">Nome botânico</label>
              <input type="text" className="form-control" id="botanicalName" />
            </div>

            <div className="form-group mb-3">
              <label htmlFor="plantName">Nome da planta</label>
              <input type="text" className="form-control" id="plantName" />
            </div>

            <div className="form-group mb-3">
              <label htmlFor="flowerColor">Cor da flor</label>
              <input type="text" className="form-control" id="flowerColor" />
            </div>

            <div className="form-group mb-3">
              <label htmlFor="foodNutrients">Nutrientes alimentares</label>
              <input type="text" className="form-control" id="foodNutrients" />
            </div>

            <div className="form-group mb-3">
              <label htmlFor="nativeRegion">Região nativa</label>
              <input type="text" className="form-control" id="nativeRegion" />
            </div>

            <div className="form-group mb-3">
              <label htmlFor="growthHabits">Crescimento</label>
              <input type="text" className="form-control" id="growthHabits" />
            </div>

            <div className="form-group mb-3">
              <label htmlFor="waterRequirements">Necessidades de água</label>
              <input
                type="text"
                className="form-control"
                id="waterRequirements"
              />
            </div>

            <div className="form-group mb-3">
              <label htmlFor="companionPlants">Plantas de companhia</label>
              <input
                type="text"
                className="form-control"
                id="companionPlants"
              />
            </div>

            <div className="form-group mb-3">
              <label htmlFor="bloomingTimes">Tempos de floração</label>
              <input type="text" className="form-control" id="bloomingTimes" />
            </div>

            <div className="form-group mb-3">
              <label htmlFor="plantHeight">Altura da planta</label>
              <input type="text" className="form-control" id="plantHeight" />
            </div>

            <div className="form-group mb-3">
              <label htmlFor="description">Descrição</label>
              <textarea rows="3" className="form-control" id="description" />
            </div>

            <div className="form-group mb-3">
              <label htmlFor="imageUrl">Imagem</label>
              <br />
              <input
                type="file"
                className="form-control-file"
                id="imageUrl"
                accept="image/*"
              />
            </div>

            <button type="submit" className="btn btn-primary">
              Submit
            </button>
          </form>
        </div>
      ) : (
        <div className="accessDeny">
          <h2>Não tem acesso a essa página!</h2>
          <p>
            Para aceder a essa pagina, por favor faça o{" "}
            <a href="/login">login</a>.
          </p>
        </div>
      )}
    </div>
  );
}

export default AddPlant;
