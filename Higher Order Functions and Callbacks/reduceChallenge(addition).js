// Level 1
// Challenge 1 (Perkalian Total): Diberikan array angka [2, 3, 4, 5], gunakan .reduce() untuk mengalikan semua angka tersebut. Hasil akhir harus 120

const numbers = [2, 3, 4, 5];

const perkalianTotal = numbers.reduce((acc, curr) => {
    return acc * curr;
}, 1);

console.log(perkalianTotal);

// Challenge 2 (Gabung String): Diberikan array kata ['JavaScript', 'is', 'awesome'], gabungkan menjadi satu kalimat string lengkap dengan spasi: "Javascript is awesome".

const word = ['JavaScript', 'is', 'awesome'];

const words = word.reduce((acc, curr) => {
    return `${acc} ${curr}`;
});

// Dengan initialValue = "": (agar aman dari bug array kosong)
const words2 = word.reduce((acc, curr) => {
    return acc === "" ? curr : `${acc} ${curr}`;
}, "");

console.log(words);

// Solusi paling efektif untuk challenge ini
// Untuk menggabungkan array string dengan spasi, sebenarnya JS sudah menyediakan method khusus yg lebih efisien dari
// .reduce(), yaitu .join(' '):
const words3 = word.join(' '); // Output: "JavaScript is awesome"

// Level 2: Olah Data Terstruktur (Array of Objects)
// Tantangan 3 (Hitung Belanjaan): Diberikan array berisi objek belanjaan:
const cart = [
    {item: 'Kopi', price: 15000, qty: 2 },
    {item: 'Roti', price: 10000, qty: 1 },
    {item: 'Susu', price: 20000, qty: 2 }
];
// Hitung total biaya belanjaan dengan memperhitungkan harga dikali kuantitas (price * qty). Hasil akhir harus 80000.

const totalPrice = cart.reduce((acc, curr) => {
    return acc + (curr.price * curr.qty);
}, 0);

console.log(totalPrice);

// Level 3: Pengelompokan & Reorganisasi Data (Frequency & Grouping)
// Tantangan 4 (Group by Category): Diberikan data produk:
const products = [
    { name: 'Laptop', category: 'Elektronik' },
    { name: 'Kaos', category: 'Pakaian' },
    { name: 'HP', category: 'Elektronik' },
    { name: 'Celana', category: 'Pakaian' }
];
// Kelompokkan produk berdasarkan kategorinya menggunakan .reduce() agar menjadi bentuk objek seperti ini:
// {
//     Elektronik: ['Laptop', 'HP'],
//     Pakaian: ['Kaos', 'Celana']
// }

// Opsi 1: Dengan Inisialisasi Default (Trik Populer di Industri)
const groupByCategory = products.reduce((acc, curr) => {
    acc[curr.category] = acc[curr.category] || [];
    acc[curr.category].push(curr.name);
    return acc;
}, {});

console.log(groupByCategory);

// Opsi 2 (Alternatif): Dengan if-else biasa (paling jelas dan intuitif)
// Paling cocok kalau mau alur pikirnya terbaca sangat eksplisit:
const groupByCategory2 = products.reduce((acc, curr) => {
    if (!acc[curr.category]) {
        acc[curr.category] = [curr.name];
    } else {
        acc[curr.category].push(curr.name);
    }

    return acc;
}, {});

console.log(groupByCategory2);

// Opsi 3 (Alternatif): Menggunakan Ternary Operator
// Sama dengan if-else, tapi ditulis dalam satu baris:
const groupByCategory3 = products.reduce((acc, curr) => {
    acc[curr.category] = acc[curr.category] ? [...acc[curr.category], curr.name] : [curr.name];
    return acc;
}, {});

console.log(groupByCategory3);

// Perbandingan Singkat 3 Gaya Penulisan
// Gaya Penulisan                Kelebihan                          Catatan
// --------------------------------------------------------------------------------------------
// acc[cat] = acc[cat] || [];    Sangat populer di industri,        Mengubah (mutate) array
// acc[cat].push(name);          cepat & ringkas.                   di tempat dengan .push().
// --------------------------------------------------------------------------------------------
// if-else + [name] vs .push()   Paling mudah dibaca oleh pemula.   Lebih panjang secara baris kode.
// --------------------------------------------------------------------------------------------
// Ternary + Spread [...]        Bersih, menganut functional        Membuat array baru di setiap
//                               programming (immutable).           iterasi.

// Level 4: Simulasi Method Lain Menggunakan .reduce()
// Untuk benar-benar menguji pemahaman mendalam, coba buat ulang fungsi dari method bawaan JS lain hanya dengan menggunakan .reduce():
// Tantangan 5 (Bikin .map() manual): Buat fungsi yang perilakunya persis .map() menggunakan .reduce().
function myMap(arr, callback) {
    return arr.reduce((acc, curr, index, array) => {
        acc.push(callback(curr, index, array));
        return acc;
    }, []);
}

const nums = [1, 4, 9, 16];

// Contoh 1: Perkalian 2
const doubled = myMap(nums, (x) => x * 2);
console.log(doubled); // Output: [2, 8, 18, 32]

// Contoh 2: Akar kuadrat
const roots = myMap(nums, (x) => Math.sqrt(x));
console.log(roots); // Output: [1, 2, 3, 4]

// Contoh 3: Menggunakan indeks
const indexed = myMap(nums, (x, i) => `Elemen ke-${i}: ${x}`);
console.log(indexed); // Output: ['Elemen ke-0: 1', 'Elemen ke-1: 4', 'Elemen ke-2: 9', 'Elemen ke-3: 16']


// Tantangan 6 (Bikin .filter() manual): Buat fungsi yang perilakunya persis .filter() menggunakan .reduce().
function myFilter(arr, callback) {
    return arr.reduce((acc, curr, index, array) => {
        if(callback(curr, index, array)) {
            acc.push(curr);
        }
        return acc;
    }, []);
}

// Contoh 1: Menyaring angka > 3
const result = myFilter(nums, (num) => num > 3);
console.log(result);
