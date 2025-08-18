import { NextResponse } from "next/server";
import axios from "axios";
import { traducaoClima } from "@/utils/weatherTranslation";

const apiKey = process.env.WEATHER_API_KEY;

export async function GET(request) {
  const { searchParams } = new URL(request.url);
  const lat = searchParams.get("lat");
  const lon = searchParams.get("lon");

  if (!lat || !lon) {
    return NextResponse.json(
      { erro: "É necessário enviar lat e lon" },
      { status: 400 }
    );
  }

  try {
    const response = await axios.get(
      `https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lon}&appid=${apiKey}&units=metric`
    );

    const weatherCode = response.data.weather[0].id;
    const clima = traducaoClima[weatherCode] || response.data.weather[0].description;

    const weatherData = {
      Temperatura: response.data.main.temp,
      Umidade: response.data.main.humidity,
      VelocidadeDoVento: response.data.wind.speed,
      Clima: clima,
      Cidade: response.data.name
    };

    return NextResponse.json(weatherData);
  } catch (error) {
    console.error("Erro ao obter dados do clima:", error);
    return NextResponse.json({ erro: "Erro ao processar a solicitação" }, { status: 500 });
  }
}
