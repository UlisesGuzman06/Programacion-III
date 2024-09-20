/*=======LOCALSTORAGE=======*/

//Funcion para obtener los elementos
export const handleGetProductLocalStorage = () => {
  const products = JSON.parse(localStorage.getItem("products"));

  if (products) {
    return products;
  } else {
    return [];
  }
};

//Funcion para guardar en LocalStorage
//Recibir un producto
export const setInLocalStorage = (productIn) => {
  //Traer los elementos
  let productsInLocal = handleGetProductLocalStorage();

  //Este metodo nos da -1 si no existe
  const existingIndex = productsInLocal.findIndex(
    (productsLocal) => productsLocal.id === productIn.id
  );

  //Verificar si el elemento existe
  if (existingIndex !== -1) {
    //Si existe debe reemplazarse
    productsInLocal[existingIndex] = productIn;
  } else {
    //Si no hay que agregarse
    productsInLocal.push(productIn);
  }

  //Setear el nuevo array con los productos modificados o con un nuevo elemento
  localStorage.setItem("products", JSON.stringify(productsInLocal));
};