function normalizeUnits(manifest) {
    const dupManifest = {...manifest}
    
    if (dupManifest.unit === "lb") {
        dupManifest.weight *= 0.45;
        dupManifest.unit = "kg";
    }

    return dupManifest;
}

// console.log(normalizeUnits({
//   containerId: 1,
//   destination: "Monterey, California, USA",
//   weight: 831,
//   unit: "lb",
//   hazmat: false
// }));

function validateManifest(manifest) {
    let errors = {}

    // Cek Validasi ContainerId
    if (manifest.containerId === undefined) {
        errors.containerId = "Missing";
    } else if (manifest.containerId === null || typeof manifest.containerId !== "number" || manifest.containerId <= 0 || !Number.isInteger(manifest.containerId)) {
        errors.containerId = "Invalid";
    }

    // Cek Validasi destination
    if (manifest.destination === undefined) {
        errors.destination = "Missing";
    } else if (manifest.destination === null || typeof manifest.destination !== "string" || manifest.destination.trim() === "") {
        errors.destination = "Invalid";
    }

    // Cek Validasi weight
    if (manifest.weight === undefined) {
        errors.weight = "Missing";
    } else if (manifest.weight === null || typeof manifest.weight !== "number" || manifest.weight <= 0 || Number.isNaN(manifest.weight)) {
        errors.weight = "Invalid";
    }

    // Cek Validasi Unit
    if (manifest.unit === undefined) {
        errors.unit = "Missing";
    } else if (manifest.unit === null || (manifest.unit !== "kg" && manifest.unit !== "lb")) {
        errors.unit = "Invalid";
    }

    // Cek Validasi Hazmat
    if (manifest.hazmat === undefined) {
        errors.hazmat = "Missing";
    } else if (manifest.hazmat === null || typeof manifest.hazmat !== "boolean") {
        errors.hazmat = "Invalid";
    }

    return errors;
}

// console.log(validateManifest({
//   containerId: 1,
//   destination: "Monterey, California, USA",
//   weight: 831,
//   unit: "lb",
//   hazmat: false
// }));

function processManifest(manifest) {
    let errors = validateManifest(manifest);

    if (Object.keys(errors).length === 0) {
        let normalized = normalizeUnits(manifest);

        console.log(`Validation success: ${manifest.containerId}`);
        console.log(`Total weight: ${normalized.weight} kg`);
    } else {
        console.log(`Validation error: ${manifest.containerId}`);
        console.log(errors);
    }
    }
    
processManifest({
    containerId: 55,
    destination: "Carmel",
    weight: 400,
    unit: "lb",
    hazmat: false
    });