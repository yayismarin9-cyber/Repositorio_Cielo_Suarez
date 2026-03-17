const DOMAIN_NAME = "Agricultura y Agrotech";

const rawEntityName = "  Cultivo de materia prima ";
const entityCategory = "Cultivos";
const entityCode = "AGRC-023";
const entityDescription = "Proyecto de cultivos para granjas de varias hectareas.";
const mainValue = 400000;
const isActive = true;

const entityName = rawEntityName.trim();
const entityNameUpper = entityName.toUpperCase();
const entityNameLower = entityName.toLowerCase();
const codePrefix = entityCode.slice(0, 4);

const hasValidPrefix = entityCode.startsWith(codePrefix);
const descriptionIsRelevant = entityDescription.toLowerCase().includes("cultivos");
const hasValidSuffix = entityCode.endsWith("023");

const separator = "=".repeat(45);
const subSeparator = "-".repeat(45);

const mainCard = `
${separator}
  ${DOMAIN_NAME.toUpperCase()} — FICHA DE ENTIDAD
${separator}
Nombre:      ${entityNameUpper}
Categoría:   ${entityCategory}
Código:      ${entityCode}
Prefijo:     ${codePrefix}
Valor:       ${mainValue}
Estado:      ${isActive ? "Activo" : "Inactivo"}

${subSeparator}
Descripción:
${entityDescription}
${separator}
`;

console.log(mainCard);

console.log("--- Validaciones ---");
console.log(`¿Código empieza con '${codePrefix}'?: ${hasValidPrefix}`);
console.log(`¿Descripción contiene 'cultivos'?: ${descriptionIsRelevant}`);
console.log(`¿Código termina con '023'?: ${hasValidSuffix}`);
console.log("");

console.log("--- Notificación ---");

const notification = `📢 Nuevo cultivo disponible: ${entityName} (${entityCode})`;
console.log(notification);
console.log("");