import Swal from "sweetalert2";
import { productoActivo } from "../../main";
import {
  handleGetProductLocalStorage,
  setInLocalStorage,
} from "../persistence/localstorage";
import { closeModal } from "../views/modal";
import { handleGetProductsToStore, handleRenderList } from "../views/store";

/*=======PRODUCT=======*/
//Guardar el producto
const acceptButton = document.getElementById("acceptButton");
acceptButton.addEventListener("click", () => {
  handleSaverOrModifyElements();
});

//Funcion de guardar
const handleSaverOrModifyElements = () => {
  const nombre = document.getElementById("nombre").value;
  const imagen = document.getElementById("img").value;
  const precio = document.getElementById("precio").value;
  const categorias = document.getElementById("categoria").value;
  let object = null;

  if (productoActivo) {
    //Vamos a ocupar un operador que itera un objeto
    object = {
      ...productoActivo,
      nombre,
      imagen,
      precio,
      categorias,
    };
  } else {
    object = {
      //Le ponemos un id al objeto para identificarlo
      //Esta funcion de js nos proporciona la fecha especifica en el momento en el cual nosotros estamos guardando
      id: new Date().toISOString(), //toISOString() lo parsea a String
      nombre,
      imagen,
      precio,
      categorias,
    };
  }

  Swal.fire({
    position: "top",
    icon: "success",
    title: "Correcto!",
    showConfirmButton: false,
    timer: 1500,
  });

  //Lo guardamos en el LocalStorage
  setInLocalStorage(object);
  //Esto es para que se vuelva a llamar una vez que nostrosos ingresemos al nuevo elemento
  handleGetProductsToStore();
  closeModal();
};

//Funcion para eliminar elemento
export const handleDeleteProduct = () => {
  Swal.fire({
    title: "Deseas eliminar el elemento?",
    text: "Si lo eliminas sera permanentemente",
    icon: "warning",
    showCancelButton: true,
    confirmButtonColor: "#3085d6",
    cancelButtonColor: "#d33",
    confirmButtonText: "Si, eliminar!",
  }).then((result) => {
    if (result.isConfirmed) {
      const products = handleGetProductLocalStorage();

      const result = products.filter((el) => el.id !== productoActivo.id);

      //Seteamos un nuevo array
      localStorage.setItem("products", JSON.stringify(result));

      const newProducts = handleGetProductLocalStorage();
      handleRenderList(newProducts);
      closeModal();
    } else {
      closeModal();
    }
  });
};