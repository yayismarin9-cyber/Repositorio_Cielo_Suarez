"use strict";

// ============================================
// PROYECTO SEMANA 07 — Librería de Funciones
// Dominio: Agricultura y Agrotech
// ============================================

// ============================================
// SECCIÓN 1: Constantes y datos del dominio
// ============================================

const DOMAIN_NAME = "Agricultura y Agrotech";
const VALUE_LABEL = "producción";
const CURRENCY = "$";

const items = [
  { id: 1, name: "Cultivo de maíz", category: "industrial", value: 500000, active: true },
  { id: 2, name: "Cultivo de trigo", category: "industrial", value: 300000, active: true },
  { id: 3, name: "Tomate orgánico", category: "organico", value: 150000, active: false },
  { id: 4, name: "Cultivo de café", category: "industrial", value: 600000, active: true },
  { id: 5, name: "Quinoa experimental", category: "experimental", value: 100000, active: false }
];

// ============================================
// SECCIÓN 2: Función de formato
// ============================================

const formatItem = (item) => {
  return `🌱 ${item.name} [${item.category}] — ${CURRENCY}${item.value}`;
};

// ============================================
// SECCIÓN 3: Función de cálculo (pura)
// ============================================

// Ej: calcular producción ajustada (factor de eficiencia)
const calculateValue = (baseValue, factor = 1) => {
  return baseValue * factor;
};

// ============================================
// SECCIÓN 4: Función de validación
// ============================================

// Un cultivo es válido si está activo
const isValid = (item) => {
  return item.active === true;
};

// ============================================
// SECCIÓN 5: Función con parámetros por defecto
// ============================================

const formatWithDefault = (value, label = VALUE_LABEL, currency = CURRENCY) => {
  return `${label}: ${currency}${value}`;
};

// ============================================
// SECCIÓN 6: Reporte usando las funciones
// ============================================

console.log(`\n${"═".repeat(45)}`);
console.log(`   REPORTE — ${DOMAIN_NAME}`);
console.log(`${"═".repeat(45)}`);

if (items.length === 0) {
  console.log("\n⚠️  No hay elementos.");
} else {
  // --- Listado ---
  console.log("\n📋 Listado:");
  let lineNumber = 1;

  for (const item of items) {
    console.log(`  ${lineNumber}. ${formatItem(item)}`);
    lineNumber++;
  }

  // --- Validación ---
  let validCount = 0;

  for (const item of items) {
    if (isValid(item)) {
      validCount++;
    }
  }

  console.log(`\n✅ Cultivos activos: ${validCount} / ${items.length}`);

  // --- Cálculo ---
  let totalValue = 0;

  for (const item of items) {
    totalValue += calculateValue(item.value ?? 0);
  }

  console.log(formatWithDefault(totalValue, `Total ${VALUE_LABEL}`));
}

console.log(`\n${"═".repeat(45)}\n`);