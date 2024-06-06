import React, { useState, useEffect } from "react";

function ApiToHome() {
    const [data, setData] = useState([]);
  
    const url = 'https://garden-api.p.rapidapi.com/plants';
    const options = {
      method: 'GET',
      headers: {
        'X-RapidAPI-Key': 'f01235c1cemshf201dccfcb7fb03p198dcbjsnabf2381e91c5',
        'X-RapidAPI-Host': 'garden-api.p.rapidapi.com'
      }
    };
  
    useEffect(() => {
      fetch(url, options)
        .then(response => {
          if (!response.ok) {
            throw new Error('Failed to fetch data');
          }
          return response.json();
        })
        .then(data => {
          setData(data);
        })
        .catch(error => {
          console.error('Error fetching data:', error);
        });
    }, []);
    return data;
}