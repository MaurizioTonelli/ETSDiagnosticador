import React from "react";
import enfermedades from "../assets/data/enfermedades";
import Enfermedad from "./Enfermedad";
import styled from "styled-components";

const ResultadosWrapper = styled.div`
  width: 50%;
  @media (max-width: 768px) {
    width: 90%;
  }
`;

const Resultados = (props) => {
  const calcularInterseccion = (enfermedad) => {
    return enfermedad.sintomas.map((enf, i) => {
      return Math.min(enf, props.sintomasValores[i]);
    });
  };

  const calcularUnion = (enfermedad) => {
    return enfermedad.sintomas.map((enf, i) => {
      return Math.max(enf, props.sintomasValores[i]);
    });
  };

  const sumaElementos = (arr) => {
    return arr.reduce((a, b) => a + b, 0);
  };

  const obtenerEnfermedadesProbables = () => {
    let maxValorDeInterseccion = 0;
    let enfermedadesProbables = [];
    enfermedades.forEach((enfermedad) => {
      let suma = sumaElementos(calcularInterseccion(enfermedad));
      if (suma > maxValorDeInterseccion) {
        enfermedadesProbables = [];
        enfermedadesProbables.push(enfermedad);
        maxValorDeInterseccion = suma;
      } else if (suma === maxValorDeInterseccion) {
        enfermedadesProbables.push(enfermedad);
      }
    });
    return enfermedadesProbables;
  };

  return (
    <ResultadosWrapper>
      {obtenerEnfermedadesProbables().map((enfermedad) => {
        return <Enfermedad enfermedad={enfermedad} />;
      })}
    </ResultadosWrapper>
  );
};

export default Resultados;
