import { handleGetProductLocalStorage } from "../persistence/localstorage";
import { handleRenderList } from "../views/store";

//Funcion para buscar un elemento por el nombre en la barra de busqueda
export const handleSearchProductByName = () => {
  const inputHeader = document.getElementById("inputHeader").value;

  const products = handleGetProductLocalStorage();

  const result = products.filter((el) =>
    el.nombre.toLowerCase().includes(inputHeader)
  );

  handleRenderList(result);
};