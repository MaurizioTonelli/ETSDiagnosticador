import React, { useState } from "react";
import styled from "styled-components";
import "../assets/styles/fonts.css";
import { FaSmileBeam, FaSmile, FaFrown, FaFrownOpen } from "react-icons/fa";
import { ImNeutral2 } from "react-icons/im";

const SintomaWrapper = styled.div`
  align-self: flex-start;
  & label {
    font-family: "Open Sans", sans-serif;
  }
  width: 100%;
  margin: 20px 0px;
  padding: 10px;
  border: 1px solid #eee;
  border-radius: 10px;
  box-shadow: 3px 5px 4px grey;
`;
const Input = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-around;
  align-items: space-around;
  & label {
    flex: 1;
    font-family: "Open Sans", sans-serif;
    font-weight: 800;
    text-transform: capitalize;
  }
  & input {
    flex: 4;
  }
`;
const Niveles = styled.div`
  margin-top: 20px;
  display: flex;
  flex-direction: row;
  justify-content: space-around;
`;
const Nivel = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  & svg {
    color: grey;
    font-size: 3em;
    transition: color 0.3s ease-in-out;

    &:hover {
      color: #035699;
      cursor: pointer;
    }
  }
`;
const NivelNinguno = styled(Nivel)`
  & svg {
    color: ${(props) => (props.value === "0" ? "#03c2fc" : "grey")};
  }
`;
const NivelLeve = styled(Nivel)`
  & svg {
    color: ${(props) => (props.value === "0.25" ? "#03c2cd" : "grey")};
  }
`;
const NivelModerado = styled(Nivel)`
  & svg {
    color: ${(props) => (props.value === "0.5" ? "#03c289" : "grey")};
  }
`;
const NivelAlto = styled(Nivel)`
  & svg {
    color: ${(props) => (props.value === "0.75" ? "#036767" : "grey")};
  }
`;
const NivelSevero = styled(Nivel)`
  & svg {
    color: ${(props) => (props.value === "1" ? "#033434" : "grey")};
  }
`;

const Sintoma = (props) => {
  let [valor, setValor] = useState("0");

  const handleActualizarSintoma = (newValue) => {
    props.actualizarSintomas(props.indice, newValue);
    setValor(newValue);
  };

  return (
    <SintomaWrapper>
      <Input>
        <label>{props.nombre}</label>
        <input
          type="range"
          min={0}
          max={1}
          step={0.25}
          value={valor}
          onChange={(e) => handleActualizarSintoma(e.target.value)}
        />
      </Input>
      <Niveles>
        <NivelNinguno
          value={valor}
          onClick={() => handleActualizarSintoma("0")}
        >
          <FaSmileBeam />
          <p>Ninguno</p>
        </NivelNinguno>
        <NivelLeve
          value={valor}
          onClick={() => handleActualizarSintoma("0.25")}
        >
          <FaSmile />
          <p>Leve</p>
        </NivelLeve>
        <NivelModerado
          value={valor}
          onClick={() => handleActualizarSintoma("0.5")}
        >
          <ImNeutral2 />
          <p>Moderado</p>
        </NivelModerado>
        <NivelAlto
          value={valor}
          onClick={() => handleActualizarSintoma("0.75")}
        >
          <FaFrownOpen />
          <p>Alto</p>
        </NivelAlto>
        <NivelSevero value={valor} onClick={() => handleActualizarSintoma("1")}>
          <FaFrown /> <p>Severo</p>
        </NivelSevero>
      </Niveles>
    </SintomaWrapper>
  );
};

export default Sintoma;
