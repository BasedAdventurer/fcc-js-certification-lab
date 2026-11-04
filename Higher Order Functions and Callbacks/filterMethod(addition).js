// .filter() method
// Jika .map() berfungsi untuk mengubah bentuk setiap data, maka .filter() berfungsi untuk menyaring (menseleksi)
// data berdasarkan kondisi tertentu.

// 1. Konsep Utama .filter()
//    Fungsi Utama: Membuat array baru yang HANYA berisi elemen-elemen dari array asli yang lolos
//    kualifikasi (mengembalikan nilai true pada fungsi pengujian).

// 3 Aturan Emas .filter():
// 1. Tidak mengubah array asli (Immutable).
// 2. Panjang array hasil bisa berkurang atau sama (0 <= panjang baru <= N). Tidak mungkin
//    menambah jumlah data.
// 3. Fungsi callback HARUS mengembalikan nilai Boolean (true / false) atau nilai truthy/falsy.
//    • Jika true --> elemen dimasukkan ke array baru.
//    • Jika false --> elemen dibuang/dilewati.

// 2. Anatomi Sintaks
// const arrayHasil = arrayAsli.filter((element, index, array) => {
//     // Return kondisi boolean (true/false)
//     return element > 10;
// });

// Modul Latihan Bertingkat .filter()
// Level 1
// Tantangan 1 (Filter Angka Sederhana):
// Diberikan array angka: [12, 5, 8, 130, 44, 3].
// Gunakan .filter() untuk mengambil angka-angka yang lebih besar dari atau sama dengan 10 (>= 10).
// Hasil akhir yang diharapkan: [12, 130, 44].

const nums = [12, 5, 8, 130, 44, 3];
const biggerThanOrEqual10 = nums.filter((num) => num >= 10);
console.log(biggerThanOrEqual10);

// Tantangan 2 (Pencarian Data / Array of Objects):
// Diberikan data inventaris toko:
const inventory = [
    { name: 'Kopi', category: 'Minuman', stock: 15 },
    { name: 'Roti', category: 'Makanan', stock: 0 },
    { name: 'Teh', category: 'Minuman', stock: 8 },
    { name: 'Biskuit', category: 'Makanan', stock: 5 }
];
// Gunakan .filter() untuk mencari semua produk yang kategorinya 'Minuman' DAN stock-nya lebih besar dari 0.
// Hasil akhir yang diharapkan:
// [
//   { name: 'Kopi', category: 'Minuman', stock: 15 },
//   { name: 'Teh', category: 'Minuman', stock: 8 }
// ]

const newInventory = inventory.filter((data) => data.category === 'Minuman' && data.stock > 0);
console.log(newInventory);

// Level 2
// Tantangan 3 (Menghapus Data Falsy / Cleaning Data):
// Di dunia nyata, terkadang kita menerima array dari server/API yang kotor dan berisi nilai-nilai tak valid (falsy).
// Diberikan array data campuran:
const datas = ['Rifki', '', null, 'Kopi', undefined, 0, 'Teh', false];
// Gunakan .filter() untuk membersihkan array tersebut sehingga hanya tersisa nilai-nilai truthy
const filteredData = datas.filter((data) => data)
// More simple way
const filteredData2 = datas.filter(Boolean);
console.log(filteredData2);

// Tantangan 4 (Pencarian Berdasarkan Kata Kunci / Search Bar):
// Diberikan array daftar nama pengguna:
const users = ['Rifki Aufa', 'Budi Santoso', 'Rifki Ahmad', 'Siti Rahma'];
// Diberikan kata kunci pencarian (keyword): 'rifki'.
// Gunakan .filter() untuk mencari nama yang mengandung kata kunci tersebut, tanpa memedulikan huruf besar/kecil (case
// insensitive).
// Hasil akhir yang diharapkan: ['Rifki Aufa', 'Rifki Ahmad'].
// Hint: Gunakan method .tolowerCase() dan .includes().

function searchUser(array, keyword) {
    return array.filter((user) => user.toLowerCase().includes(keyword.toLowerCase()));
};
console.log(searchUser(users, 'rifki'));

// Perbedaan Penting: .filter() vs .find()
// Fitur          .filter()                          .find()
// Hasil Akhir    Array (berisi semua yang cocok)    Satu nilai/Objek (atau undefined)
// Kuantitas      0 sampai N elemen                  Maksimal 1 elemen
// Kinerja        Memeriksa seluruh isi array        Berhenti di pencocokan pertama
