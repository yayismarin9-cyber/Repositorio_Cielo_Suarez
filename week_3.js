const CROP_PRICE = 30000;
const MAXIMUM_NUMBER_OF_CROPS_PER_UNIT_OF_LAND = 10;

console.log("=== Operaciones básicas ===");

const cropsPlanted = 9;
const totalCost = CROP_PRICE * cropsPlanted;
console.log("Costo total del cultivo:", totalCost);

const remainingCapacity = MAXIMUM_NUMBER_OF_CROPS_PER_UNIT_OF_LAND - cropsPlanted;
console.log("Capacidad restante:", remainingCapacity);

const costPerCrop = totalCost / cropsPlanted;
console.log("Costo por cultivo:", costPerCrop);

console.log("");

console.log("=== Asignación compuesta ===");

let accumulatedCost = 0;
console.log("Costo inicial:", accumulatedCost);

accumulatedCost += 50000;
console.log("Después de insumos:", accumulatedCost);

accumulatedCost += 30000;
console.log("Después de fertilizantes:", accumulatedCost);

accumulatedCost *= 0.9;
console.log("Con descuento:", accumulatedCost);

console.log("");

console.log("=== Validaciones con === ===");

const isFullCapacity = cropsPlanted === MAXIMUM_NUMBER_OF_CROPS_PER_UNIT_OF_LAND;
console.log("¿Capacidad completa?", isFullCapacity);

const hasSpace = cropsPlanted < MAXIMUM_NUMBER_OF_CROPS_PER_UNIT_OF_LAND;
console.log("¿Hay espacio disponible?", hasSpace);

console.log("");

console.log("=== Condiciones lógicas ===");

const hasWater = true;
const hasFertilizer = true;

const canGrow = hasWater && hasFertilizer;
console.log("¿Puede crecer el cultivo?", canGrow);

const needsAttention = !hasWater || !hasFertilizer;
console.log("¿Necesita atención?", needsAttention);

console.log("");

console.log("=== Resumen ===");

console.log("Cultivos sembrados:", cropsPlanted);
console.log("Costo total:", totalCost);
console.log("Capacidad restante:", remainingCapacity);
console.log("Estado del cultivo:", canGrow ? "Óptimo" : "Revisar");

console.log("");