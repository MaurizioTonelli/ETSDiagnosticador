import React, { useState } from "react";
import styled from "styled-components";
import Sintoma from "./components/Sintoma";
import Resultados from "./components/Resultados";
import sintomas from "./assets/data/sintomas";
import "./assets/styles/reset.css";
import "./assets/styles/fonts.css";

const Header = styled.div`
  background-color: #03c2fc;
  padding: 20px;
  font-family: "Roboto Condensed", sans-serif;
  color: white;
  font-size: 2em;
  display: flex;
  justify-content: center;
`;
const WelcomeCard = styled.div`
  width: 50%;
  display: flex;
  flex-direction: column;
  align-items: center;
  & h1,
  h2 {
    font-family: "Montserrat", sans-serif;
    color: #36b6e3;
  }
  & p {
    font-family: "Open Sans", sans-serif;
    align-self: flex-start;
  }
  @media (max-width: 768px) {
    width: 90%;
  }
`;
const SintomasCard = styled.div`
  width: 50%;
  display: flex;
  flex-direction: column;
  align-items: center;
  & h1,
  h2 {
    font-family: "Montserrat", sans-serif;
    color: #36b6e3;
  }
  & p {
    font-family: "Open Sans", sans-serif;
  }
  @media (max-width: 768px) {
    width: 90%;
  }
`;

const BodyWrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
`;

const Button = styled.button`
  padding: 15px;
  border: none;
  background-color: #03c2fc;
  font-size: 1.5em;
  font-family: "Montserrat", sans-serif;
  color: white;
  border-radius: 4px;
  margin: 20px;
  transition: all 0.3s ease-in-out;
  &:hover {
    background-color: #036797;
    cursor: pointer;
  }
`;

const Footer = styled.div`
  background-color: #03c2fc;
  padding: 20px;
  font-family: "Roboto Condensed", sans-serif;
  color: white;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  margin-top: 40px;
  & h3 {
    font-size: 1.3em;
  }
`;
function App() {
  let [sintomasValores, setSintomasValores] = useState(
    new Array(sintomas.length).fill(0)
  );
  let [sintomasValoresElegidos, setSintomasValoresElegidos] = useState(
    new Array(sintomas.length).fill(0)
  );
  let [sintomasElegidos, setSintomasElegidos] = useState(false);

  let actualizarSintomas = (indice, valor) => {
    let sintomasCopy = [...sintomasValores];
    sintomasCopy[indice] = valor;
    setSintomasValores(sintomasCopy);
  };

  let handleElegirSintomas = () => {
    setSintomasValoresElegidos(sintomasValores);
    setSintomasElegidos(true);
  };

  return (
    <div>
      <Header>
        <h1>ETS Diagnosticador 3000</h1>
      </Header>
      <BodyWrapper>
        <WelcomeCard>
          <h1>Bienvenido al diagnosticador</h1>
          <h2>Instrucciones</h2>
          <p>
            En el cuestionario de abajo, selecciona el nivel de malestar en cada
            uno de los síntomas propuestos, cuando completes el cuestionario,
            selecciona "Calcular" para ver tus resultados.
          </p>
          <p>
            Si presentas malestar, acude a tu médico para obtener un diagnóstico
            de mayor certeza.
          </p>
        </WelcomeCard>
        <SintomasCard>
          {sintomas.map((sintoma, i) => (
            <Sintoma
              key={i}
              nombre={sintoma.nombre}
              indice={sintoma.indice}
              actualizarSintomas={actualizarSintomas}
            />
          ))}
        </SintomasCard>

        <Button onClick={handleElegirSintomas}>Calcular</Button>
        {sintomasElegidos && (
          <Resultados sintomasValores={sintomasValoresElegidos} />
        )}
      </BodyWrapper>
      <Footer>
        <h3>Copyright 2021 ETSDiagnosticador3000</h3>
        <p>
          Hecho por Maurizio Tonelli, Rafael Duarte, Daniel Rincón y Alejandro
          Salazar
        </p>
      </Footer>
    </div>
  );
}

export default App;
