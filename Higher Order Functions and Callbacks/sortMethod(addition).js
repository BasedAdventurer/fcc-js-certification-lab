// .sort() method
// 1. Konsep Utama .sort()
//    Fungsi Utama: Mengurutkan elemen - elemen di dalam array berdasarkan aturan tertentu.
//    3 Aturan Emas & Jebakan .sort():
//    1. MUTATING (Mengubah Array Asli):
//       Berbeda dari .map(), .filter(), .some(), .every(), dan .find() yang bersifat immutable, .sort() MENGUBAH array
//       aslinya langsung di tempat (in-place).
//    2. Jebakan Default Sorting (String Conversion):
//       Jika kamu memanggil .sort() tanpa fungsi pembanding (compare function), JS akan mengubah semua elemen menjadi
//       string lalu mengurutkannya secara alfabetis.
//       const numbers = [10, 5, 20, 1];
//       numbers.sort();
//       console.log(numbers); // [1, 10, 20, 5] ❌ SALAH! (karena "10" diawali '1', jadi dianggap lebih dulu dari "5")
//    3. Fungsi Pembanding (Compare Function): (a, b)
//       Untuk mengurutkan angka atau objek secara benar, kita harus memberikan callback pembanding (a, b):
//       • Mengurutkan Angka Naik (Ascending/Kecil ke Besar): (a, b) => a - b
//       • Mengurutkan Angka Turun (Descending/Besar ke Kecil): (a, b) => b - a
//       Cara kerja rumus a - b & b - a:
//       • Jika a - b bernilai negatif (<= 0): a diletakkan sebelum b.
//       • Jika a - b bernilai positif (< 0): b diletakkan sebelum a.

// Modul Latihan .sort()
// Tantangan 1 (Mengurutkan Angka):
// Diberikan array angka acak:
const nums = [40, 100, 1, 5, 25, 10];
// Gunakan .sort() untuk mengurutkan angka-angka tersebut dari yang terkecil hingga terbesar (Ascending) secara aman
// tanpa merusak array asli (gunakan spread operator [...nums]).
// Hasil akhir yang diharapkan: [1, 5, 10, 25, 40, 100].
const ascendingSort = [...nums].sort((a, b) => a - b);
console.log(ascendingSort);

// Tantangan 2 (Mengurutkan Array of Objects berdasarkan properti):
// Diberikan data daftar produk toko:
const products = [
    { name: 'Laptop', price: 12000000 },
    { name: 'Mouse', price: 150000 },
    { name: 'Keyboard', price: 500000 }
];
// Gunakan .sort() untuk mengurutkan produk dari harga tertinggi ke terendah (Descending).
// Hasil akhir yang diharapkan: Laptop -> Keyboard -> Mouse
const sortedByPrice = [...products].sort((a, b) => b.price - a.price);
console.log(sortedByPrice);
