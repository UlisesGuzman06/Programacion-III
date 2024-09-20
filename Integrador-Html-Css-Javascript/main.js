import { rCategories } from "./src/services/categories";
import { handleSearchProductByName } from "./src/services/searchBar";
import { openModal } from "./src/views/modal";
import { handleGetProductsToStore } from "./src/views/store";
import "./style.css";

/*=======APLICACION=======*/
export let categoriaActiva = null;
/*Esto es poruqe nosotros tenemos que setear nuestra categoria activa cuando hagamos click
y a su vez escuchar la variable categoriaActiva*/
export const setCategoriaActiva = (categoriaIn) => {
  categoriaActiva = categoriaIn;
};

export let productoActivo = null;
export const setProductoActivo = (productoIn) => {
  productoActivo = productoIn;
};

handleGetProductsToStore();
rCategories();

/*=======HEADER=======*/
const buttonAdd = document.getElementById("buttonAddElement");
buttonAdd.addEventListener("click", () => {
  openModal();
});

//buttonSearch
const buttonSearch = document.getElementById("buttonSearch");
buttonSearch.addEventListener("click", () => {
  handleSearchProductByName();
});