import { categoriaActiva } from "../../main";
import { handleGetProductLocalStorage } from "../persistence/localstorage";
import { handleRenderList } from "../views/store";

/*=======CATEGORIA=======*/
const handleFilterProductsByCategory = (categoryIn) => {
  //Traemos los productos que tengamos
  const products = handleGetProductLocalStorage();

  switch (categoryIn) {
    case categoriaActiva: //Si la categoria entrante es igual a la categoria activa
      handleRenderList(products);
      break;
    case "todo":
      handleRenderList(products);
      break;
    case "hamburguesas":
    case "papas":
    case "gaseosas":
      const result = products.filter(
        (el) => el.categorias.toLowerCase() === categoryIn.toLowerCase()
      );
      //console.log("Productos filtrados:", result);
      handleRenderList(result);
      break;
    default:
      break;
    case "mayorPrecio":
      //sort() es un metodo que tiene dos parametros y nos permite ordenar
      const resultPrecioMayor = products.sort((a, b) => b.precio - a.precio);
      handleRenderList(resultPrecioMayor);
      break;
    case "menorPrecio":
      const resultPrecioMenor = products.sort((a, b) => a.precio - b.precio);
      handleRenderList(resultPrecioMenor);
      break;
  }
};

//Render de la vista categorias
/*Tenemos la funcion pero todavia no estamos viendola, por eso le ponenmos export
Con eso la podemos ocupar en cualquier lado de nuestra aplicacion*/
export const rCategories = () => {
  //Tomamos elementos de la lista
  const ulList = document.getElementById("listFilter");
  //Creamos el contenido de esos elementos dentro de la lista
  ulList.innerHTML = `
    <li id="todo">Todos los productos </li>
    <li id="hamburguesas">Hamburguesas</li>
    <li id="papas">Papas</li>
    <li id="gaseosas">Gaseosas</li>
    <li id="mayorPrecio">Mayor Precio</li>
    <li id="menorPrecio">Menor Precio</li>
    `;

  //Tomamos todos los li de ulList y le añadimos dinamicamente el elemento click
  const liElements = ulList.querySelectorAll("li");
  liElements.forEach((liElement) => {
    liElement.addEventListener("click", () => {
      //Aca activamos liActive
      handlerClick(liElement);
    });
  });

  //Verificamos y manejamos el estilo del elemento activo
  const handlerClick = (elemento) => {
    handleFilterProductsByCategory(elemento.id);
    liElements.forEach((el) => {
      if (el.classList.contains("liActive")) {
        //Si la contiene, hacemos click nuevamente y se la borra
        el.classList.remove("liActive");
      } else {
        //Elemento es el que nosotros hemos hecho click
        if (elemento === el) {
          //Si elemento es igual a unos de los elementos de la lista le activa la clase
          el.classList.add("liActive");
        }
      }
    });
  };
};