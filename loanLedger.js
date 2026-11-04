const equipmentLedger = {
    "1": { type: "PC", status: "CheckedOut", borrower: { name: "John Smith", email: "john@acme.org" }, dueDate: "11/30/2025" },
    "2": { type: "Laptop", status: "CheckedIn", borrower: { name: "", email: "" }, dueDate: "" },
    "3": { type: "Laptop", status: "CheckedOut", borrower: { name: "Jane Doe", email: "jane@acme.org" }, dueDate: "10/31/2025" },
    "4": { type: "iPad", status: "CheckedIn", borrower: { name: "", email: "" }, dueDate: "" },
    "5": { type: "iPhone 17 Pro Max", status: "CheckedIn", borrower: { name: "", email: "" }, dueDate: "" },
    "6": { type: "iPhone 13", status: "CheckedOut", borrower: { name: "Michael Donaldson", email: "donaldson@acme.org" }, dueDate: "7/30/2025" },
    "7": { type: "Samsung S26 Ultra", status: "CheckedOut", borrower: { name: "Cindy Meghan", email: "cindy@acme.org" }, dueDate: "8/15/2025" },
    "8": { type: "Mirrorless Camera", status: "CheckedIn", borrower: { name: "", email: "" }, dueDate: "" },
    "9": { type: "PC", status: "CheckedOut", borrower: { name: "Beckham Richardson", email: "beckham@acme.org" }, dueDate: "8/20/2025" },
    "10": { type: "iPhone 17", status: "CheckedIn", borrower: { name: "", email: "" }, dueDate: "" }
};


const cloneLedger = ledger => JSON.parse(JSON.stringify(ledger));

const checkoutDevice = (ledger, assetTag, borrower) => {

    if (!(assetTag in ledger)) {
        return { ledger: ledger, message: `Device ${assetTag} was not found.`};
    }

    if (ledger[assetTag].status === "CheckedOut") {
        return { ledger: ledger, message: `Device ${assetTag} is already checked out.`}
    }

    const updatedLedger = cloneLedger(ledger);

    updatedLedger[assetTag].status = "CheckedOut";
    updatedLedger[assetTag].borrower = borrower;

    return { ledger: updatedLedger, message: `Device number ${assetTag} checked out to ${borrower.name}`};
}

// checkoutDevice Function Call
const checkout = checkoutDevice(equipmentLedger, "8", { name: "Rifki Aufa", email: "rifki@example.com" });
console.log(JSON.stringify(checkout, null, 5));


const checkinDevice = (ledger, assetTag) => {
    if (!(assetTag in ledger)) {
        return { ledger: ledger, message: `Device ${assetTag} was not found.`};
    }

    const updatedLedger = cloneLedger(ledger);

    updatedLedger[assetTag].borrower.name = "";
    updatedLedger[assetTag].borrower.email = "";
    updatedLedger[assetTag].dueDate = "";
    updatedLedger[assetTag].status = "CheckedIn";

    return { ledger: updatedLedger, message: `Device ${assetTag} checked in.` };
}

// checkinDevice Function Call
const checkin = checkinDevice(equipmentLedger, 1);
console.log(JSON.stringify(checkin, null, 5))

// Date Comparisons Helper Function (Descending)
const compareDate = (dueDate, today) => {
    const [mDue, dDue, yDue] = dueDate.split("/").map(Number);
    const [mToday, dToday, yToday] = today.split("/").map(Number);

    if (yDue !== yToday) return yDue < yToday;
    if (mDue !== mToday) return mDue < mToday;
    return dDue < dToday;
}

//  Date Comparisons Helper Function (Ascending)
const isAfter = (dateA, dateB) => {
    const [mA, dA, yA] = dateA.split("/").map(Number);
    const [mB, dB, yB] = dateB.split("/").map(Number);

    if (yA !== yB) return yA > yB;
    if (mA !== mB) return mA > mB;
    return dA > dB;
}

const sortDevicesByDueDate = (devices) => {
    const len = devices.length;

    for (let i = 0; i < len; i++) {
        for (let j = 0; j < (len - 1 - i); j++) {
            const currentDate = devices[j].dueDate;
            const nextDate = devices[j + 1].dueDate;

            if (isAfter(currentDate, nextDate)) {
                const temp = devices[j];
                devices[j] = devices[j + 1];
                devices[j + 1] = temp;
            }
        }
    }

    return devices;
}

const listOverdueDevices = (ledger, today) => {
    const overdueDevices = [];

    const devices = Object.values(ledger);

    for (const device of devices) {
        if (device.status === "CheckedOut" && device.dueDate !== "") {
            if (compareDate(device.dueDate, today)) {
                overdueDevices.push(device);
            }
        }
    }

    const sortedList = sortDevicesByDueDate(overdueDevices);
    return sortedList;
}

// console.log(listOverdueDevices(equipmentLedger, "06/29/2026"));

const serializeLedger = ledger => JSON.stringify(ledger);
const loadLedger = json => JSON.parse(json);