// ============================================
// PROYECTO SEMANA 06: Reporte con Bucles
// Dominio: Agricultura y Agrotech
// ============================================

// ============================================
// SECCIÓN 1: Datos del dominio
// ============================================

const items = [
  { name: "Cultivo de maíz", category: "industrial", value: 500000 },
  { name: "Cultivo de trigo", category: "industrial", value: 300000 },
  { name: "Cultivo orgánico de tomate", category: "organico", value: 150000 },
  { name: "Cultivo de café", category: "industrial", value: 600000 },
  { name: "Cultivo experimental de quinoa", category: "experimental", value: 100000 },
  { name: "Cultivo orgánico de lechuga", category: "organico", value: 120000 }
];

const categories = ["industrial", "organico", "experimental"];

const valueLabel = "producción";

// ============================================
// SECCIÓN 2: Listado completo con for...of
// ============================================

console.log("=== LISTADO COMPLETO ===");

let lineNumber = 0;

for (const item of items) {
  lineNumber++;
  console.log(`${lineNumber}. ${item.name} — ${item.category} — ${valueLabel}: ${item.value}`);
}

console.log("");

// ============================================
// SECCIÓN 3: Contadores por categoría
// ============================================

console.log("=== CONTEO POR CATEGORÍA ===");

for (const category of categories) {
  let count = 0;

  for (const item of items) {
    if (item.category === category) count++;
  }

  console.log(`${category}: ${count} elemento(s)`);
}

console.log("");

// ============================================
// SECCIÓN 4: Totales y promedio
// ============================================

console.log("=== ESTADÍSTICAS ===");

let totalValue = 0;

for (const item of items) {
  totalValue += item.value;
}

const averageValue = items.length > 0 ? totalValue / items.length : 0;

console.log(`Total ${valueLabel}: ${totalValue}`);
console.log(`Promedio ${valueLabel}: ${averageValue.toFixed(1)}`);

console.log("");

// ============================================
// SECCIÓN 5: Máximo y mínimo
// ============================================

console.log("=== MÁXIMO Y MÍNIMO ===");

let maxItem = items[0] ?? null;
let minItem = items[0] ?? null;

if (items.length > 0) {
  for (const item of items) {
    if (item.value > maxItem.value) {
      maxItem = item;
    }
    if (item.value < minItem.value) {
      minItem = item;
    }
  }

  console.log(`Mayor ${valueLabel}: ${maxItem.name} (${maxItem.value})`);
  console.log(`Menor ${valueLabel}: ${minItem.name} (${minItem.value})`);
}

console.log("");

// ============================================
// SECCIÓN 6: Reporte detallado
// ============================================

console.log("=== REPORTE DETALLADO ===");

for (let i = 0; i < items.length; i++) {
  const item = items[i];

  const comparison =
    item.value >= averageValue
      ? "sobre el promedio"
      : "bajo el promedio";

  console.log(`${i + 1}. ${item.name} — ${comparison}`);
}

console.log("");
console.log("=== FIN DEL REPORTE ===");