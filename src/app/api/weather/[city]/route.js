// src/app/api/weather/[city]/route.js

import { NextResponse } from "next/server";
import axios from "axios";

// Tradução completa dos códigos de clima
import { traducaoClima } from "@/utils/weatherTranslation";

// Chave api para fazer o consumo da api
const apiKey = process.env.WEATHER_API_KEY;

export async function GET(request, { params }) {
  const city = params.city;
  console.log("Cidade recebida:", city);

  try {
    const response = await axios.get(
      `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}&units=metric`
    );

    // Obtem o código do clima e traduz
    const weatherCode = response.data.weather[0].id;
    const clima = traducaoClima[weatherCode] || response.data.weather[0].description;

    const weatherData = {
      Temperatura: response.data.main.temp,
      Umidade: response.data.main.humidity,
      VelocidadeDoVento: response.data.wind.speed,
      Clima: clima,
    };

    return NextResponse.json(weatherData);
  } catch (error) {
    console.error("Erro ao obter dados do clima:", error);
    return NextResponse.json(
      { erro: "Erro ao processar a solicitação" },
      { status: 500 }
    );
  }
}
