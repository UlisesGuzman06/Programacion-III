import { setProductoActivo } from "../../main";
import { handleGetProductLocalStorage } from "../persistence/localstorage";
import { openModal } from "./modal";

/*=======STORE=======*/
//Funcion que se encarga de traer los elementos y llamar al render
export const handleGetProductsToStore = () => {
  //Esto nos trae a nosotros nuestros elementos
  const products = handleGetProductLocalStorage();
  handleRenderList(products);
};

//Se encarga de filtrar y renderizar la seccion con todos y sus respectivos elementos
export const handleRenderList = (productosIn) => {
  //Filtrado de los productos por categoria
  const burgers = productosIn.filter((el) => el.categorias === "Hamburguesas");
  const papas = productosIn.filter((el) => el.categorias === "Papas");
  const gaseosas = productosIn.filter((el) => el.categorias === "Gaseosas");

  //Esta funcion nos va a definir cada seccion de nuestra pagina(renderiza los elementos de la seccion)
  const renderProductGroup = (products, title) => {
    if (products.length > 0) {
      const productosHTML = products.map((product, index) => {
        return `<div class="containerTargetItem" id='product-${product.categorias}-${index}'>
            <div>
            <img src=${product.imagen}>
            <div>
                <h2>${product.nombre}</h2>
            </div>
            <div class="targetProps">
                <p><b>Precio:</b> $ ${product.precio}</p>
            </div>
            </div>
            </div>`;
      });

      //join() hace una cadena
      //Retorna la seccion con todos los elementos dentro
      return `
            <section class="sectionStore">
            <div class="containerTitleSection">
            <h3>${title}</h3>
            </div>
             <div class="containerProductStore">
                ${productosHTML.join("")}
             </div>
            </section> 
            `;
    } else {
      return "";
    }
  };

  //Renderizar cada uno de los productos dentro de su categoria
  const appContainer = document.getElementById("storeContainer");
  appContainer.innerHTML = `${renderProductGroup(burgers, "Hamburguesas")}
    ${renderProductGroup(papas, "Papas")}
    ${renderProductGroup(gaseosas, "Gaseosas")}`;

  //Se añaden los eventos de manera dinamica(porque no sabemos cuantos productos vamos a tener)
  const addEvents = (productsIn) => {
    productsIn.forEach((element, index) => {
      //Este id tiene que coincidir con el id de la caja que contiene nuestro elemento
      const productContainer = document.getElementById(
        `product-${element.categorias}-${index}`
      );
      productContainer.addEventListener("click", () => {
        setProductoActivo(element);
        openModal();
      });
    });
  };
  addEvents(burgers);
  addEvents(papas);
  addEvents(gaseosas);
};