// Frequency Counter Pattern / Frequency Map / Hash Map Counting (with reduce() method).
// Algoritma ini memetakan nilai-nilai unik dari sebuah collection (array atau list) ke dalam bentuk pasangan Key-Value (Hash Table atau Objek di JS) di mana:
// • Key = Elemen unik yang ditemukan (misal: nama buah, ID produk, status HTTP).
// • Value = Frekuensi/jumlah kemunculan elemen tersebut.
// scalable dan sering dipakai dalam produksi karena performanya sangat cepat.

// Kode:
const fruits = ['apel', 'pisang', 'apel', 'jeruk', 'pisang', 'apel'];

const fruitCount = fruits.reduce((acc, curr) => {
    acc[curr] = (acc[curr] || 0) + 1;
    return acc;
}, {});

console.log(fruitCount);

// Keunggulan Utama: Kompleksitas Waktu O(n)
// Alasan utama pola ini sangat populer di industri adalah efisiensinya:
// • Pendekatan Loop Bersarang (Nested Loop):
//   Jika mencari frekuensi dengan perulangan di dalam perulangan (misal: .forEach() lalu didalamnya
//   .filter() lagi), kompleksitas waktunya menjadi O(n^2) (lambat saat data berjumlah jutaan).
//   Kode dengan Nested Loop dan .filter():
const fruitCount2 = {};
fruits.forEach((fruit) => {
    const matches = fruits.filter((item) => item === fruit);

    fruitCount2[fruit] = matches.length;
});

console.log(fruitCount2);
// • Pendekatan Frequency Counter (dengan .reduce() atau Objek):
//   Data hanya dibaca satu kali putaran (single pass), sehingga kompleksitas waktunya O(n) (Linear Time) dan jauh
//   lebih cepat.

// Kunci utama dari kode ini adalah
// 1. Target hasil akhir adalah Objek {} (maka initialValue-nya berupa {}).
// 2. Kombinasi bracket notation (acc[curr]) dan operator || (OR).

// Dua Konsep Penting yang Dipakai
// A. Bracket Notation (acc[curr])
// Di JavaScript, jika nama kunci/properti tersimpan di dalam variable, kita mengaksesnya dengan tanda kurung siku [].
//    • Jika curr = 'apel', maka acc[curr] sama saja dengan acc.apel

// B. Trik Default Value (acc[curr] || 0)
//    • Saat kunci beelum ada di dalam objek acc (misal acc['apel'] masih undefined), ekspresi undefined || 0 akan
//      mengambil angka 0.
//    • Saat kunci sudah pernah dibuat sebelumnya (misal acc['apel'] sudah bernilai 1), ekspresi 1 || 0 akan
//      mengambil angka 1.
// Jadi, baris (acc[curr] || 0) + 1 artinya:
// "Ambil jumlah yang sudah ada di objek. Jika belum ada, anggap 0. Lalu tambahkan 1."

// Simulasi Langkah demi Langkah
// Data kita: ['apel', 'pisang', 'apel', 'jeruk', 'pisang', 'apel']
// initialValue/acc awal: {} (objek kosong).

// Putaran 1: Memeriksa 'apel' (Elemen Pertama)
// • acc saat ini: {}
// • curr: 'apel'
// • Logika: acc['apel'] = (acc['apel] || 0) + 1
//   • acc['apel'] belum ada, jadi bernilai undefined.
//   • (undefined || 0) + 1 -> 0 + 1 -> 1
//   • Objek acc sekarang menjadi { apel: 1 }
// • return acc -> Menyerahkan { apel: 1 } ke putaran berikutnya.

// Putaran 2: Memeriksa 'pisang'
// • acc saat ini: { apel: 1 }
// • curr: 'pisang'
// • Logika: acc['pisang'] = (acc['pisang'] || 0) + 1
//   • acc['pisang'] belum ada -> 0 + 1 = 1
//   • Objek acc sekarang menjadi { apel: 1, pisang: 1 }
// • return acc -> Menyerahkan { apel: 1, pisang: 1 } ke putaran berikutnya.

// Putaran 3: Memeriksa 'apel' (kedua kalinya)
// • acc saat ini: { apel: 1, pisang: 1 }
// • curr: 'apel'
// • Logika: acc['apel'] = (acc['apel'] || 0) + 1
//   • acc['apel'] sudah ada bernilai 1!
//   • (1 || 0) + 1 -> 1 + 1 -> 2
//   • Objek acc sekarang menjadi: { apel: 2, pisang: 1 }
// • return acc -> Menyerahkan { apel: 2, pisang: 1 } ke putaran berikutnya.

// Putaran 4: Memeriksa 'jeruk'
// • acc saat ini: { apel: 2, pisang: 1 }
// • curr: 'jeruk'
// • Logika: acc['jeruk'] = (acc['jeruk'] || 0) + 1
//   • acc['jeruk'] belum ada -> 0 + 1 = 1
//   • Objek acc sekarang menjadi: { apel: 2, pisang: 1, jeruk: 1 }
// • return acc

// Putaran 5: Memeriksa 'pisang' (kedua kalinya)
// • acc saat ini: { apel: 2, pisang: 1, jeruk: 1 }
// • curr: 'pisang'
// • Logika: acc['pisang'] = (acc['pisang'] || 0) + 1
//   • acc['pisang'] sudah ada bernilai 1!
//   • (1 || 0) + 1 -> 1 + 1 -> 2
//   • Objek acc sekarang menjadi: { apel: 2, pisang: 2, jeruk: 1 }
// • return acc

// Putaran 6: Memeriksa 'apel' (ketiga kalinya)
// • acc saat ini: { apel: 2, pisang: 2, jeruk: 1 }
// • curr: 'apel'
// • Logika: acc['apel'] = (acc['apel'] || 0) + 1
//   • acc['apel'] sudah ada bernilai 2!
//   • (2 || 0) + 1 -> 2 + 1 -> 3
//   • Objek acc sekarang menjadi: { apel: 3, pisang: 2, jeruk: 1 }
// • return acc

// Hasil Akhir
// Setelah iterasi selesai di elemen ke-6, nilai acc yang dikembalikan adalah:

// {
//     apel: 3,
//     pisang: 2,
//     jeruk: 1
// }

// Contoh Kasus Penggunaan Nyata (Real-World Use Cases)
// 1. Analisis Log Server / Monitoring
//    Menghitung jumlah kemunculan kode status HTTP dari log server untuk melihat seberapa sering error terjadi:
//    Output: { 200: 4500, 404: 120, 500: 15 }
// 2. Aplikasi E-Commerce/Keranjang Belanja:
//    Menggabungkan item belanja yang sama yang dipilih user agar tersusun rapi per SKU produk beserta total
//    kuantitasnya.
// 3. Fitur Search / Word Cloud:
//    Menghitung seberapa sering sebuah kata kunci muncul dalam artikel untuk analisis SEO atau Tag Cloud.
// 4. Algoritma Wawancara Kerja (Coding Interview / LeetCode):
//    Sering menjadi kunci jawaban efisien untuk soal-soal klasik seperti Anagram Checking (mengecek apakah dua kata
//    memiliki jumlah huruf yang sama) atau Two Sum.
