// .some() Method
// 1. Konsep Utama .some()
//    Fungsi Utama: Memeriksa apakah seminimalnya ada SATU elemen di dalam array yang memenuhi kondisi tertentu.
//    3 Aturan Emas .some():
//      1. Mengembalikan Boolean: Hasil akhirnya selalu berupa true atau false (bukan array atau elemen baru).
//      2. Prinsip Early Exit (Short-circuiting): Begitu menemukan 1 elemen saja yang bernilai true, .some() akan
//         langsung berhenti dan tidak akan memeriksa elemen-elemen sisanya. Ini membuatnya sangat efisien.
//      3. Mengembalikan false hanya jika semua elemen tidak ada yang memenuhi kondisi.
// 2. Anatomi Sintaks
// const adaYangLolos = Array.some((element, index, array) => {
//     // Return kondisi boolean (true/false)
//     return element > 50;
// });
// 3. Perumpamaan Sederhana
//    Bayangkan kamu sedang memeriksa daftar tamu undangan:
//    • "Apakah di daftar ini ada minimal satu orang yang bernama 'Rifki'?"
//    • Begitu kamu melihat nama 'Rifki' di urutan ke-2, kamu langsung berteriak "Ada!(true)" dan tidak perlu
//      repot-repot membaca sisa 100 nama dibawahnya.

// Modul Latihan .some()
// Tantangan 1 (Pengecekan Angka Genap)
// Diberikan array angka;
const nums = [1, 3, 5, 7, 8, 9];
// Gunakan .some() untuk mengecek apakah di dalam array tersebut ada minimal satu angka genap.
// Hasil akhir yang diharapkan: true (karena ada angka 8).
const hasEvenNumbers = nums.some((num) => num % 2 === 0);
console.log(hasEvenNumbers);
// Tantangan 2 (Pengecekan Stok Toko / Array of Objects):
// Diberikan data status inventaris barang:
const items = [
    { name: 'Sepatu', inStock: false },
    { name: 'Baju', inStock: false },
    { name: 'Topi', inStock: true },
    { name: 'Celana', inStock: false }
];
// Gunakan .some() untuk mengecek apakah toko masih memiliki barang yang bisa dibeli (inStock === true)
// Hasil akhir yang diharapkan: true.
const hasStock = items.some((item) => item.inStock);
console.log(hasStock);

// Perbandingan Cepat: .some() vs .every()
// Method       Kondisi Lolos              Analogi Logika     Perilaku Early Exit
// .some()      Minimal 1 elemen true      OR                 Berhenti di elemen true pertama
// .every()     Semua elemen harus true    AND                Berhenti di elemen false pertama
