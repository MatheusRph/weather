'use client'

import { Row, Col, Container, Card, ListGroup } from "react-bootstrap"
import { useState, useEffect } from "react";
import { BsWind, BsDroplet } from "react-icons/bs";

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

      <Row className="justify-content-between m-5">
        <Col md={4}>
          <Card className="p-3 bg-primary text-light text-start">

            <h1>16°C</h1>
            <h4>Storm with Rain</h4>
            {/* Ícone grande do clima */}
            <Row className="mt-3 text-start">
              <Col>
                <p className="fw-bold mb-1">
                  <BsWind className="me-1" /> Vento
                </p>
                <p>{data.wind_speed_kmh} km/h</p>
              </Col>
              <Col>
                <p className="fw-bold mb-1">
                  <BsDroplet className="me-1" /> Umidade
                </p>
                <p>{data.humidity}%</p>
              </Col>
            </Row>
          </Card>
        </Col>
        <Col className="justify-content-center p-3 align-items-center" md={4}>
          <Card className="">
            <Card.Header>Featured</Card.Header>
            <ListGroup variant="flush">
              <ListGroup.Item>
                <Row className="align-items-center">
                  {/* Ícone */}
                  <Col xs="auto">
                    <img src="/icons/cloud.png" alt="Clima" width={32} height={32} />
                  </Col>

                  {/* Dia e temperatura */}
                  <Col>
                    <div className="d-flex justify-content-between">
                      <span>Terça</span>
                      <span>30°</span>
                    </div>
                    <div className="text-muted" style={{ fontSize: "0.9rem" }}>Chuva</div>
                  </Col>
                </Row>
              </ListGroup.Item>

              <ListGroup.Item>
                <Row className="align-items-center">
                  {/* Ícone */}
                  <Col xs="auto">
                    <img src="/icons/cloud.png" alt="Clima" width={32} height={32} />
                  </Col>

                  {/* Dia e temperatura */}
                  <Col>
                    <div className="d-flex justify-content-between">
                      <span>Terça</span>
                      <span>30°</span>
                    </div>
                    <div className="text-muted" style={{ fontSize: "0.9rem" }}>Chuva</div>
                  </Col>
                </Row>
              </ListGroup.Item>
            </ListGroup>

          </Card>
        </Col>
      </Row>
    </Container>
  )
}