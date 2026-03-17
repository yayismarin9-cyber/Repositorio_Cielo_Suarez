const DOMAIN_NAME = "Agricultura y Agrotech";

const itemName = "Cultivos";
const itemCategory = "Obtención de alimentos";
const itemQuantity = 360;
const isCultivated = false;
const currentFarmer = null;

console.log("===========================");
console.log(`FICHA DE DATOS: ${DOMAIN_NAME}`);
console.log("===========================");
console.log("");

console.log(`Nombre:     ${itemName}`);
console.log(`Categoría:  ${itemCategory}`);
console.log(`Cantidad:   ${itemQuantity} kilos`);
console.log(`Disponible: ${isCultivated}`);
console.log("");

console.log("--- Tipos de datos ---");
console.log("typeof itemName:     ", typeof itemName);
console.log("typeof itemQuantity:", typeof itemQuantity);
console.log("typeof itemCategory:", typeof itemCategory);

console.log("--- Conversiones ---");
const priceAsText = String(itemQuantity);
console.log("Precio como texto:", priceAsText);
console.log("typeof convertido:", typeof priceAsText);

console.log("--- Valor nulo ---");
console.log("Agricultor asignado:", currentFarmer);
console.log("typeof null:", typeof currentFarmer);
console.log("Es null?", currentFarmer === null);

console.log("===========================");
console.log("FIN DE FICHA");
console.log("===========================");