'use client'

import { Row, Col, Container, Card } from "react-bootstrap"
import { useState, useEffect } from "react";

export default function Temp() {

  const [data, setData] = useState(null);
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
          setData(data);
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
  if (!data) return <p>Carregando clima...</p>;

  return (
    <Container fluid className="bg-dark">

      <header className="text-center text-white">{data.name}</header>

      <Row>
        <Col md={4}>
          <Card className="bg-primary text-light mt-5 mb-3 p-3 text-center">
            <h1>16°C</h1>
            <h4>Storm with Rain</h4>
            {/* Ícone grande do clima */}
            <img src="/storm-icon.png" alt="storm" style={{ width: '150px' }} />
            <Row className="mt-3">
              <Col>Vento: {data.wind_speed_kmh}km/h</Col>
              <Col>Umidade: {data.humidity}%</Col>
            </Row>
          </Card>
        </Col>
        <Col md={4}>
          {/* Previsão semanal (Cards) */}
        </Col>
      </Row>


    </Container>
  )
}