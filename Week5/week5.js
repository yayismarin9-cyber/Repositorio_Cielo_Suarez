
// ============================================
// SECCIÓN 1: Datos del elemento
// ============================================

const elementName = "Cultivo de materia prima";
const elementStatus = "active";
const elementValue = 400000; // valor del cultivo (producción o inversión)
const elementType = "industrial";
const elementInfo = {
  detail: "Cultivo en granjas de varias hectáreas",
  location: "Zona rural", 
  climate: "Templado"
};
// ============================================
// SECCIÓN 2: Clasificación con if / else if / else
// ============================================

let classification;

if (elementValue >= 500000) {
  classification = "Alto rendimiento";
} else if (elementValue >= 200000) {
  classification = "Rendimiento medio";
} else {
  classification = "Bajo rendimiento";
}

// ============================================
// SECCIÓN 3: Estado binario con operador ternario
// ============================================

const statusLabel = elementStatus === "active" ? "Activo" : "Inactivo";

// ============================================
// SECCIÓN 4: Tipo con switch
// ============================================

let typeLabel;

switch (elementType) {
  case "industrial":
    typeLabel = "Cultivo industrial";
    break;
  case "organico":
    typeLabel = "Cultivo orgánico";
    break;
  case "experimental":
    typeLabel = "Cultivo experimental";
    break;
  default:
    typeLabel = "Tipo desconocido";
}

// ============================================
// SECCIÓN 5: Valor por defecto con ??
// ============================================

const displayName = elementName ?? "Sin nombre";
const infoDetail = elementInfo?.detail ?? "Sin información adicional";

// ============================================
// SECCIÓN 6: Acceso seguro con ?.
// ============================================

const safeProperty = elementInfo?.climate ?? "Clima no especificado";

// ============================================
// SECCIÓN 7: Ficha de salida
// ============================================

console.log("=".repeat(40));
console.log("AGRICULTURA Y AGROTECH — FICHA");
console.log("=".repeat(40));

console.log(`Nombre: ${displayName}`);
console.log(`Estado: ${statusLabel}`);
console.log(`Clasificación: ${classification}`);
console.log(`Tipo: ${typeLabel}`);
console.log(`Detalle: ${infoDetail}`);
console.log(`Clima: ${safeProperty}`);

console.log("=".repeat(40));

