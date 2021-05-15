import React from "react";
import styled from "styled-components";

const EnfermedadCard = styled.div`
  display: flex;
  flex-direction: column;
  border: 1px solid #eee;
  border-radius: 10px;
  box-shadow: 4px 3px 4px grey;
  padding: 20px;
`;
const Header = styled.div`
  display: flex;
  justify-content: center;
  & h1 {
    font-family: "Montserrat", sans-serif;
    color: #36b6e3;
  }
  border-bottom: 2px solid #36b6e3;
`;
const Body = styled.div`
  display: flex;
  align-items: center;
  flex-direction: row;
  padding: 20px;
  border-bottom: 2px solid #36b6e3;
  margin-left: 15px;
`;
const Imagen = styled.img`
  max-width: 200px;
  min-width: 100px;
  border: 2px solid grey;
  border-radius: 50%;
  margin: 15px;
  flex: 1;
`;
const Info = styled.div`
  flex: 1;
  & h2 {
    font-family: "Montserrat", sans-serif;
    color: #36b6e3;
  }
  & p {
    font-family: "Open Sans", sans-serif;
    align-self: flex-start;
  }
`;
const Footer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  & h2 {
    font-family: "Montserrat", sans-serif;
    color: #36b6e3;
  }
  & a {
    font-family: "Open Sans", sans-serif;
    text-decoration: none;
  }
`;

const Enfermedad = ({ enfermedad }) => {
  return (
    <EnfermedadCard>
      <Header>
        <h1>{enfermedad.nombre}</h1>
      </Header>
      <Body>
        <Imagen src={enfermedad.imagen} />
        <Info>
          <h2>Origen</h2>
          <p>{enfermedad.origen}</p>
          <h2>Tratamiento</h2>
          <p>{enfermedad.tratamiento}</p>
        </Info>
      </Body>
      <Footer>
        <h2>Enlaces</h2>
        {enfermedad.enlaces.map((enlace) => (
          <a href={enlace}>{enlace}</a>
        ))}
      </Footer>
    </EnfermedadCard>
  );
};

export default Enfermedad;
