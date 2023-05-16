import { useState, useContext } from "react";
import { DataContext } from "../context/DataGlobal";
import { Link } from "react-router-dom";

const Home = () => {
  const { dataPersonas, dataCategories } = useContext(DataContext);
  const [persona, setPersona] = useState("");
  const [categoria, setCategoria] = useState("");

  /* Guardar la persona y la categoria en el localStorage para luego pedirlos y consultarlos */
  const sendData = () => {
    localStorage.setItem("persona", persona);
    localStorage.setItem("categoria", categoria);
  };

  return (
    <main>
      <div className="container-nav">
        <h1>Restaurante</h1>
        <p>Inicio</p>
      </div>

      <div className="containers-select">
        <div className="select">
          <h2>Cliente</h2>
          <select value={persona} onChange={(e) => setPersona(e.target.value)}>
            {dataPersonas.map((persona) => (
              <option key={persona.ID} value={persona.ID}>
                {persona.Nombre}
              </option>
            ))}
          </select>
        </div>
        <div className="select">
          <h2>Categorias</h2>
          <select
            value={categoria}
            onChange={(e) => setCategoria(e.target.value)}
          >
            {dataCategories.map((categoria, index) => (
              <option key={index} value={index}>
                {categoria.strCategory}
              </option>
            ))}
          </select>
        </div>
        <Link to="/estudiante">
          <button type="submit" className="btn" onClick={() => sendData()}>
            Enviar
          </button>
        </Link>
      </div>
    </main>
  );
};

export default Home;
