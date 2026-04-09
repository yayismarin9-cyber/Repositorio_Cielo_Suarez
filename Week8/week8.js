// ============================================
// SEMANA 08 — Gestión de Inventario
// Dominio: Agricultura y Agrotech
// ============================================

const DOMAIN_NAME = "Agricultura y Agrotech";
const VALUE_LABEL = "cultivos";

// ============================================
// 1. ARRAY INICIAL
// ============================================

const items = [
  { id: 1, name: "Maíz", category: "industrial", production: 500000, active: true, region: "Norte", climate: "Cálido" },
  { id: 2, name: "Trigo", category: "industrial", production: 300000, active: true, region: "Centro", climate: "Templado" },
  { id: 3, name: "Tomate", category: "organico", production: 150000, active: false, region: "Sur", climate: "Húmedo" },
  { id: 4, name: "Café", category: "industrial", production: 600000, active: true, region: "Montaña", climate: "Frío" },
  { id: 5, name: "Quinoa", category: "experimental", production: 100000, active: false, region: "Altiplano", climate: "Seco" }
];

// ============================================
// 2. FUNCIONES DE GESTIÓN
// ============================================

const addItem = (newItem) => {
  items.push(newItem);
  console.log(`Agregado: ${newItem.name}`);
};

const removeLastItem = () => {
  const removed = items.pop();
  console.log(`Eliminado: ${removed?.name}`);
  return removed;
};

const addPriorityItem = (priorityItem) => {
  items.unshift(priorityItem);
  console.log(`Prioritario agregado: ${priorityItem.name}`);
};

const removeByIndex = (index) => {
  const removed = items.splice(index, 1);
  console.log(`Eliminado por índice: ${removed[0]?.name}`);
};

const getActiveItems = () => {
  return items.filter(item => item.active === true);
};

const findByName = (name) => {
  return items.find(item => item.name.toLowerCase() === name.toLowerCase());
};

const formatItem = (item) => {
  return `[${item.id}] ${item.name} — ${item.category} — Producción: ${item.production} — ${item.active ? "Activo" : "Inactivo"}`;
};

// ============================================
// 3. REPORTE
// ============================================

console.log(`\n${"=".repeat(50)}`);
console.log(`📦 GESTIÓN DE ${DOMAIN_NAME.toUpperCase()}`);
console.log(`${"=".repeat(50)}\n`);

console.log(`📋 Inventario inicial (${items.length} ${VALUE_LABEL}):`);
items.forEach(item => {
  console.log(`  ${formatItem(item)}`);
});

console.log("\n--- Operaciones de mutación ---\n");

// Agregar nuevo cultivo
addItem({ id: 6, name: "Lechuga", category: "organico", production: 120000, active: true, region: "Valle", climate: "Templado" });

// Agregar prioritario
addPriorityItem({ id: 0, name: "Papa", category: "industrial", production: 400000, active: true, region: "Altura", climate: "Frío" });

// Eliminar uno del medio
removeByIndex(2);

// Eliminar último
removeLastItem();

console.log("\n--- Inventario después de mutaciones ---\n");

items.forEach(item => {
  console.log(`  ${formatItem(item)}`);
});

console.log("\n--- Búsqueda y filtrado ---\n");

// Buscar cultivo
const found = findByName("Maíz");
console.log("🔍 Búsqueda:", found ? formatItem(found) : "No encontrado");

// Activos
const activeItems = getActiveItems();
console.log(`✅ Activos: ${activeItems.length}`);

// Snapshot (inmutable)
const snapshot = [...items, { id: 99, name: "Prueba", category: "test", production: 0, active: false }];
console.log(`📸 Snapshot creado con ${snapshot.length} elementos`);

console.log("\n--- Transformación con map ---\n");

// Solo nombres
const names = items.map(item => item.name);
console.log("Nombres:", names);

// Producción reducida (ejemplo 10% menos)
const reducedProduction = items.map(item => item.production * 0.9);
console.log("Producción ajustada:", reducedProduction);

console.log("\n--- Resumen final ---\n");

console.log(`Total en inventario: ${items.length} ${VALUE_LABEL}`);

const activeCount = getActiveItems().length;
console.log(`Activos: ${activeCount} | Inactivos: ${items.length - activeCount}`);

console.log(`\n${"=".repeat(50)}`);
console.log("✅ Reporte completado");
console.log(`${"=".repeat(50)}\n`);