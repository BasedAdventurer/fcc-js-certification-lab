// .flatMap() Method
// Konsep Utama
// • Fungsi Utama: Melakukan pemetaan (.map()) pada setiap elemen, lalu secara otomatis meratakan (flattening)
//   struktur array bertingkat satu level.
// Bayangkan kamu punya array berisi daftar kategori, dan setiap kategori memiliki sub-array berupa produk:
const categories = [
    { name: 'Buah', items: ['Apel', 'Pisang'] },
    { name: 'Sayur', items: ['Wortel', 'Bayam'] }
];
// Jika pakai .map() biasa:
const result = categories.map((cat) => cat.items);
console.log(result);
// Hasil: [['Apel', 'Pisang'], ['Wortel', 'Bayam']] ❌ (Array bertingkat/nested)
// Jika pakai .flatMap()
const results = categories.flatMap((cat) => cat.items);
console.log(results);
// Hasil: ['Apel', 'Pisang', 'Wortel', 'Bayam'] ✅ (Otomatis diratakan satu level!)

// Modul Latihan .flatMap():
// Tantangan 1
// Diberikan data pesanan dari beberapa pelanggan:
const orders = [
    { user: 'Rifki', items: ['Kopi', 'Roti'] },
    { user: 'Budi', items: ['Teh'] },
    { user: 'Siti', items: ['Biskuit', 'Susu'] }
];
// Gunakan .flatMap() untuk mengambil seluruh daftar barang yang dibeli dari semua pelanggan menjadi satu array tunggal
// yang rata (flat).
// Hasil akhir yang diharapkan: ['Kopi', 'Roti', 'Teh', 'Biskuit', 'Susu']
const itemLists = orders.flatMap((item) => item.items);
console.log(itemLists);
