import { useState, useEffect, useContext } from "react";
import { DataContext } from "../context/DataGlobal";
import { Navbar } from "../components";

const Estudiante = () => {
  const { dataPersonas } = useContext(DataContext);

  console.log("dataPersonas ->", dataPersonas);

  const [persona, setPersona] = useState([]);

  const getPerson = () => {
    const id = parseInt(localStorage.getItem("persona"));

    const persona = dataPersonas.filter((persona) => persona.ID === id);

    setPersona(persona);
  };

  useEffect(() => {
    getPerson();
  }, []);

  console.log("persona", persona);

  return (
    <div>
      <Navbar />
      <div style={{ border: "1px solid black", marginTop: "20px" }}>
        {
          persona.map((p, index) => {
            <div key={index}>
                <p>
                  {p.Alias}
                </p>
                <p>
                  {p.Apellidos}
                </p>
            </div>
          })
        }
      </div>
    </div>
  );
};

export default Estudiante;
