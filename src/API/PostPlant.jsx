import React from "react";

async function PostPlant(props) {

  await fetch("http://localhost:3031/plants", {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify({
      botanicalName: props.botanicalName,
      plantName: props.plantName,
      description: props.description,
      flowerColor: props.flowerColor,
      foodNutrients: props.foodNutrients,
      nativeRegion: props.nativeRegion,
      growthHabits: props.growthHabits,
      waterRequirements: props.waterRequirements,
      companionPlants: `[${props.companionPlants}]`,
      bloomingTimes: props.bloomingTimes,
      plantHeight: props.plantHeight,
      imageUrl: props.imageUrl,
    }),
  })
    .then((response) => response.json())
    .catch((error) => {
      throw error;
    });

  
}

export default PostPlant;
