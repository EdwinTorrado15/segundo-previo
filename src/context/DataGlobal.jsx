import { createContext, useState, useEffect } from "react";
import axios from "axios";

export const DataContext = createContext();

export const DataProvider = ({ children }) => {
  const [dataPersonas, setDataPersonas] = useState([]);
  const [dataCategories, setDataCategories] = useState([]);

  const getPersonas = async () => {
    try {
      const { data } = await axios.get(
        "https://johnfredyb.github.io/ApiPersonas/Persona.json?authuser=4"
      );
      setDataPersonas(data.Personas);
    } catch (error) {
      console.error(error);
    }
  };

  const getCategories = async () => {
    try {
      const { data } = await axios.get(
        "https://www.themealdb.com/api/json/v1/1/list.php?c=list"
      );
      setDataCategories(data.meals);
    } catch (error) {
      console.error(error);
    }
  };

  useEffect(() => {
    getPersonas();
    getCategories();
  }, []);

  return (
    <DataContext.Provider value={{ dataPersonas, dataCategories }}>
      {children}
    </DataContext.Provider>
  );
};
