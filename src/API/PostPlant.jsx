import React from "react";
import axios from "axios";

async function PostPlant(Plant) {
  
  const encodedParams = new URLSearchParams();
  encodedParams.append("botanicalName", Plant.botanicalName);
  encodedParams.append("plantName", Plant.plantName);
  encodedParams.append("description", Plant.description);
  encodedParams.append("flowerColor", Plant.flowerColor);
  encodedParams.append("foodNutrients", Plant.foodNutrients); //
  encodedParams.append("nativeRegion", Plant.nativeRegion);
  encodedParams.append("growthHabits", Plant.growthHabits); //
  encodedParams.append("waterRequirements", Plant.waterRequirements);
  encodedParams.append("companionPlants", Plant.companionPlants);
  encodedParams.append("bloomingTimes", Plant.bloomingTimes);
  encodedParams.append("plantHeight", Plant.plantHeight);
  encodedParams.append("imageUrl", Plant.imageUrl);

  // Loop through remaining data and append key-value pairs
  for (const [key, value] of Object.entries(otherData)) {
    if (Array.isArray(value)) {
      encodedParams.append(key, JSON.stringify(value)); // Handle arrays
    } else {
      encodedParams.append(key, value);
    }
  }

  const options = {
    method: "POST",
    url: "https://garden-api.p.rapidapi.com/plants",
    headers: {
      "content-type": "application/x-www-form-urlencoded",
      "X-RapidAPI-Key": "f01235c1cemshf201dccfcb7fb03p198dcbjsnabf2381e91c5", // Replace with your actual API key
      "X-RapidAPI-Host": "garden-api.p.rapidapi.com",
    },
    data: encodedParams,
  };

  try {
    const response = await axios.request(options);
    console.log("Plant added successfully:", response.data);
  } catch (error) {
    console.error("Error adding plant:", error);
  }
}

export default PostPlant;
