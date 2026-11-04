function normalizeBaggage(passenger) {
    copiedPassenger = {...passenger};

    if (copiedPassenger.baggageUnit === "lbs") {
        copiedPassenger.baggageWeight *= 0.45;
        copiedPassenger.baggageUnit = "kg";
    }

    return copiedPassenger;
}

// console.log(normalizeBaggage({
//   passengerId: 23,
//   fullName: "Rifki Aufa",
//   baggageWeight: 20,
//   baggageUnit: "lbs",
//   isVIP: true
// }));

function validatePassenger(passenger) {
    let errors = {};

    if (passenger.passengerId === undefined) {
        errors.passengerId = "Missing";
    } else if (passenger.passengerId === null || typeof passenger.passengerId !== "number" || passenger.passengerId <= 0 || !Number.isInteger(passenger.passengerId)) {
        errors.passengerId = "Invalid";
    }

    if (passenger.fullName === undefined) {
        errors.fullName = "Missing";
    } else if (passenger.fullName === null || typeof passenger.fullName !== "string" || passenger.fullName.trim().length < 2) {
        errors.fullName = "Invalid";
    }

    if (passenger.baggageWeight === undefined) {
        errors.baggageWeight = "Missing";
    } else if (passenger.baggageWeight === null || typeof passenger.baggageWeight !== "number" || passenger.baggageWeight < 0 || Number.isNaN(passenger.baggageWeight)) {
        errors.baggageWeight = "Invalid";
    }

    if (passenger.baggageUnit === undefined) {
        errors.baggageUnit = "Missing";
    } else if (passenger.baggageUnit === null || (passenger.baggageUnit !== "kg" && passenger.baggageUnit !== "lbs")) {
        errors.baggageUnit = "Invalid";
    }

    if (passenger.isVIP === undefined) {
        errors.isVIP = "Missing";
    } else if (passenger.isVIP === null || typeof passenger.isVIP !== "boolean") {
        errors.isVIP = "Invalid";
    }

    return errors;
}

function processPassenger(passenger) {
    let errors = validatePassenger(passenger);

    if (Object.keys(errors).length === 0) {
        let normalized = normalizeBaggage(passenger);

        console.log(`Boarding approved: ${passenger.fullName}.`);
        console.log(`Baggage: ${passenger.baggageWeight} ${passenger.baggageUnit}.`);
    } else {
        console.log(`Boarding denied: ${passenger.passengerId}.`);
        console.log(errors);
    }
    }

    processPassenger({
    passengerId: 23,
    fullName: 43,
    baggageWeight: 20,
    baggageUnit: "kg",
    isVIP: true
});