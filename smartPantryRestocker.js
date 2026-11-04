const pantry = [
  { sku: "A10", name: "Tomatoes", qty: 4, expires: "2027-01-01", zone: "fridge" },
  { sku: "D43", name: "Pineapples", qty: 2, expires: "2020-01-01", zone: "general" }
];

const rawData = [
  "A10|Tomatoes|5|2027-01-01",
  "B21|Bananas|10|2027-01-01",
  "C32|Eggs|3|2027-01-01|fridge",
  "C32|Eggs|3|2027-01-01",
  "D43|Pineapples|0|2027-01-01",
  "E54|Peppers|-1|2027-01-01|fridge"
];

function parseShipment(rawData) {
  const result = []
  const seenSkus = [];

  for (let i = 0; i < rawData.length; i++) {
    const rawString = rawData[i];
    const parts = rawString.split("|");

    const sku = parts[0].trim();
    const name = parts[1].trim();
    const qty = Number(parts[2].trim());
    const expires = parts[3].trim();
    const zone = parts[4] ? parts[4].trim() : "general";

    if (!seenSkus.includes(sku)) {
        seenSkus.push(sku);
        result.push({ sku, name, qty, expires, zone });
        } 
    }

    return result;
}

function planRestock(pantry, shipment) {
    const actions = [];

    const pantrySkus = [];
    for (let p = 0; p < pantry.length; p++) {
        pantrySkus.push(pantry[p].sku);
    }

    for (let i = 0; i < shipment.length; i++) {
        const item = shipment[i];
        let actionType = "";

        if (item.qty <= 0) {
            actionType = "discard";
        } else if (pantrySkus.includes(item.sku)) {
        actionType = "restock";
        } else {
        actionType = "donate";
        }

        actions.push({ type: actionType, item: item })
    }

    return actions;
}

function groupByZone(actions) {
    const grouped = {};

    for (let i = 0; i < actions.length; i++) {
        const zone = actions[i].item.zone;
        
        if (!grouped[zone]) {
        grouped[zone] = [];
        }

        grouped[zone].push(actions[i]);
    }

    return grouped;
}

const clonePantry = pantry => JSON.parse(JSON.stringify(pantry));

const clonedPantry = clonePantry(pantry);
const parsedShipment = parseShipment(rawData);
const restockPlan = planRestock(clonedPantry, parsedShipment);
const groupedActions = groupByZone(restockPlan);

console.log(JSON.stringify(groupedActions, null, 2));