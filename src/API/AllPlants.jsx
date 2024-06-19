import React from "react";

async function AllPlants() {
  const urlApi = "https://garden-api.p.rapidapi.com/plants";
  const urlJsonServer = "http://localhost:3031/plants";

  const options = {
    method: "GET",
    headers: {
      "x-rapidapi-key": "f01235c1cemshf201dccfcb7fb03p198dcbjsnabf2381e91c5",
      "x-rapidapi-host": "garden-api.p.rapidapi.com",
    },
  };

  try {
    /* const responseApi = await fetch(urlApi, options); //resposta do API
    const resultAPi = await responseApi.json();
    return resultAPi; */

    const [responseApi, responseJsonServer] = await Promise.all([
      fetch(urlApi, options), // resposta do API
      fetch(urlJsonServer), // resposta do JSON Server
    ]);

    const [resultApi, resultJsonServer] = await Promise.all([
      responseApi.json(),
      responseJsonServer.json(),
    ]);

    // Transformar o campo `id` para `_id` em resultJsonServer
    const transformedJsonServer = resultJsonServer.map(item => {
      const { id, ...rest } = item;
      return { _id: id, ...rest };
    });

    // Transformar o campo `imageUrl` em resultApi
    const transformedApi = resultApi.map(item => {
      if (item.plantName) {
        item.imageUrl = "/images/" + item.plantName.trimEnd() + ".jpg";
      }
      return item;
    });

    // Combina as respostas conforme necessário
    var combinedResult = [...transformedApi, ...transformedJsonServer];

    return combinedResult;
  } 
  catch (error) {
    throw error;
  }
}

export default AllPlants;
