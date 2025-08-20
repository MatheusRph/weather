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
      name: response.data.name,
      country: response.data.sys.country,
      temp: response.data.main.temp,
      feels_like: response.data.main.feels_like,
      temp_min: response.data.main.temp_min,
      temp_max: response.data.main.temp_max,
      humidity: response.data.main.humidity,
      pressure: response.data.main.pressure,
      wind_speed_m_s: response.data.wind.speed,
      wind_speed_kmh: (response.data.wind.speed * 3.6).toFixed(1),
      wind_deg: response.data.wind.deg,
      weather_main: response.data.weather[0].main,
      weather_description: response.data.weather[0].description,
      weather_icon: response.data.weather[0].icon,
      clouds: response.data.clouds.all,
      visibility: response.data.visibility,
      sunrise: response.data.sys.sunrise,
      sunset: response.data.sys.sunset,
      timezone: response.data.timezone
    }

    return NextResponse.json(weatherData);
  } catch (error) {
    console.error("Erro ao obter dados do clima:", error);
    return NextResponse.json(
      { erro: "Erro ao processar a solicitação" },
      { status: 500 }
    );
  }
}
