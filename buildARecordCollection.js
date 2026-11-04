const recordCollection = {
    2548: {
        albumTitle: 'Slippery When Wet',
        artist: 'Bon Jovi',
        tracks: ['Let It Rock', 'You Give Love a Bad Name']
    },
    2468: {
        albumTitle: '1999',
        artist: 'Prince',
        tracks: ['1999', 'Little Red Corvette']
    },
    1245: {
        artist: 'Robert Palmer',
        tracks: []
    },
    5439: {
        albumTitle: 'ABBA Gold'
    }
};

function updateRecords(records, id, prop, value) {
    // 1. Jika value berupa string kosong, hapus properti tersebut
    if (value === "") {
        delete records[id][prop];
    } 
    // 2. Jika prop bukan "tracks" dan value tidak kosong, set nilainya
    else if (prop !== "tracks") {
        records[id][prop] = value;
    } 
    // 3. Jika prop adalah "tracks" dan value tidak kosong
    else if (prop === "tracks") {
        // Jika properti tracks belum ada / undefined, buatkan array kosong
        if (!records[id].tracks) {
        records[id].tracks = [];
        }
        // Tambahkan value ke dalam array tracks
        records[id].tracks.push(value);
    }

    return records;
}

updateRecords(recordCollection, 5439, "artist", "ABBA");
updateRecords(recordCollection, 5439, "tracks", "Take a Chance on Me");
updateRecords(recordCollection, 2548, "artist", "");
updateRecords(recordCollection, 1245, "tracks", "Addicted to Love");
updateRecords(recordCollection, 2468, "tracks", "Free");
updateRecords(recordCollection, 2548, "tracks", "");
console.log(updateRecords(recordCollection, 1245, "albumTitle", "Riptide"));

