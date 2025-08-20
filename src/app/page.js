"use client";

import Card from 'react-bootstrap/Card';

import { useEffect, useState } from "react";
import { Container } from 'react-bootstrap';

export default function Home() {
  const [weather, setWeather] = useState(null);
  const [error, setError] = useState("");

  useEffect(() => {
    if (!navigator.geolocation) {
      setError("Geolocalização não é suportada pelo seu navegador");
      return;
    }

    navigator.geolocation.getCurrentPosition(
      async (position) => {
        const { latitude, longitude } = position.coords;

        try {
          const res = await fetch(`/api/weather?lat=${latitude}&lon=${longitude}`);
          const data = await res.json();
          setWeather(data);
        } catch (err) {
          setError("Erro ao obter dados do clima");
        }
      },
      (err) => {
        setError("Permissão de geolocalização negada");
      }
    );
  }, []);

  if (error) return <p>{error}</p>;
  if (!weather) return <p>Carregando clima...</p>;

  return (
    // <div style={{ padding: "2rem" }}>
    //   <h2>Clima em {weather.Cidade}</h2>
    //   <p>Temperatura: {weather.Temperatura}°C</p>
    //   <p>Umidade: {weather.Umidade}%</p>
    //   <p>Vento: {weather.VelocidadeDoVento} m/s</p>
    //   <p>Condição: {weather.Clima}</p>
    // </div>
    <Container className='w-75 m-4'>
      <Card style={{ width: '' }}>
        <Card.Body>
          <Card.Title>{weather.Cidade}</Card.Title>
          <Card.Subtitle className="mb-2 text-muted">Card Subtitle</Card.Subtitle>
          <Card.Text>
            Some quick example text to build on the card title and make up the
            bulk of the card's content.
          </Card.Text>
          <Card.Link href="#">Card Link</Card.Link>
          <Card.Link href="#">Another Link</Card.Link>
        </Card.Body>
      </Card>
    </Container>

  );
}
