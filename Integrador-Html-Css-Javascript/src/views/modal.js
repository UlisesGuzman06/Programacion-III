import { productoActivo, setProductoActivo } from "../../main";
import { handleDeleteProduct } from "../services/products";

/*=======POPUP=======*/
//Evento para poder cerrar
const cancelButton = document.getElementById("cancelButton");
cancelButton.addEventListener("click", () => {
  closeModal();
});

//Funciones para abrir y cerrar modal
export const openModal = () => {
  const modal = document.getElementById("modalPopUp");
  modal.style.display = "flex";

  //Desactivamos el boton de eliminar en el modal si no hay un producto activo
  if (productoActivo) {
    deleteButton.style.display = "block";
  } else {
    deleteButton.style.display = "none";
  }

  //Mostramos los valores del producto activo
  if (productoActivo) {
    const nombre = document.getElementById("nombre");
    const imagen = document.getElementById("img");
    const precio = document.getElementById("precio");
    const categorias = document.getElementById("categoria");
    nombre.value = productoActivo.nombre;
    imagen.value = productoActivo.imagen;
    precio.value = productoActivo.precio;
    categorias.value = productoActivo.categorias;
  }
};

export const closeModal = () => {
  const modal = document.getElementById("modalPopUp");
  modal.style.display = "none";
  //Reseteamos el elemento activo cuando cerramos el Modal
  setProductoActivo(null);
  //Hay que llamarla cada vez que cerremos el Modal
  resetModal();
};

//Con esto reseteamos los valoers de los inputs
const resetModal = () => {
  const nombre = document.getElementById("nombre");
  const imagen = document.getElementById("img");
  const precio = document.getElementById("precio");
  const categorias = document.getElementById("categoria");
  nombre.value = "";
  imagen.value = "";
  precio.value = 0;
  categorias.value = "Seleccione una categoria";
};

const deleteButton = document.getElementById("deleteButton");
deleteButton.addEventListener("click", () => {
  handleButtonDelete();
});

const handleButtonDelete = () => {
  handleDeleteProduct();
};