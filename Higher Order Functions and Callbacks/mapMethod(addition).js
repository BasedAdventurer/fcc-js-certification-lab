// .map() method
// Konsep Utama .map()
// Fungsi Utama: Mengubah (mentransformasi) setiap elemen di dalam array menjadi bentuk baru, lalu mengembalikan array baru dengan panjang yang sama persis seperti array aslinya.

// 3 Aturan emas .map()
// 1. Tidak mengubah array asli (immutable).
// 2. Panjang array hasil selalu sama dengan panjang array asal (N -> N).
// 3. Selalu me-return nilai baru di dalam callback-nya untuk mengisi posisi elemen tersebut di array baru.

// Anatomi Sintaks
// const arrayBaru = arrayAsli.map((element, index, array) => {
//     // Return nilai baru yang sudah di transformasi
//     return element * 2;
// });
// • Element (Wajib): Elemen yang sedang diproses saat ini.
// • index (Opsional): Posisi/indeks elemen (0, 1, 2, dst).
// • array (Opsional): Array asal tempat .map() dipanggil.

// Perbandingan Cepat .map() vs .reduce() vs .forEach()
// Method        Output Akhir                 Panjang Hasil
// .map()        Array baru                   Sama persis (N)
// .reduce()     Bebas (Objek/Angka/Array)    Bebas (bisa 1, N, atau kurang)
// .forEach()    undefined (Tidak mereturn)   -

// Modul Latihan Bertingkat .map()
// Level 1
// Tantangan 1 (Transformasi Angka Sederhana)
// Diberikan array harga dalam rupiah
const arrHarga = [10000, 25000, 50000];
// Gunakan .map() untuk memberikan diskon 10% pada setiap barang (dikali 0.9).
// Hasil akhir yang diharapkan [9000, 22500, 45000]

const hargaDiskon = arrHarga.map((harga) => harga * 0.9);
console.log(hargaDiskon);

// Tantangan 2 (Olah Array of Objects untuk UI)
// Diberikan data pengguna dari database:
const users = [
    { id: 1, firstName: 'Rifki', lastName: 'Aufa' },
    { id: 2, firstName: 'Budi', lastName: 'Santoso' }
];
// Gunakan .map() untuk mengekstrak dan menggabungkan nama menjadi array string nama lengkap:
// Hasil akhir yang diharapkan: ['Rifki Aufa', 'Budi Santoso']

const extractUsers = users.map((user) => `${user.firstName} ${user.lastName}`);
console.log(extractUsers);

// Level 2: Kondisional & Transformasi Objek

// Tantangan 3 (Transformasi Kondisional):
// Diberikan array nilai ujian: [45, 80, 60, 95, 30].
// Gunakan .map() untuk mengubah nilai menjadi status lulus:
// • Jika nilai >= 60, ubah menjadi string 'Lulus'.
// • Jika nilai < 60, ubah menjadi string 'Gagal'.
//   Hasil akhir yang diharapkan: ['Gagal', 'Lulus', 'Lulus', 'Lulus', 'Gagal']
// Kode:
const nilaiUjian = [45, 80, 60, 95, 30];
const kelulusan = nilaiUjian.map((nilai) => nilai >= 60 ? 'Lulus' : 'Gagal');
console.log(kelulusan);

// Tantangan 4 (Menambah/Mengubah Properti Objek):
// Diberikan data inventaris produk:
const products = [
    { name: 'Kopi', price: 15000 },
    { name: 'Teh', price: 5000 }
];
// Gunakan .map() untuk menghasilkan array objek baru di mana setiap objek memiliki
// properti tambahan isExpensive (bernilai true jika harga >= 10000, dan false jika
// dibawah 10000).
// Hasil akhir yang diharapkan:
// [
//   { name: 'Kopi', price: 15000, isExpensive: true },
//   { name: 'Teh', price: 5000, isExpensive: false }
// ]

// Kode:
const newProducts = products.map((product) => ({
    ...product,
    isExpensive: product.price >= 10000
}));

console.log(newProducts);

// Kapan Harus Memakai .map() di Proyek Nyata?
// Gunakan Rule of Thumb ini saat nanti membangun aplikasi (misalnya dengan React):
// • Pakai .map() saat: Kamu ingin mengubah bentuk/format data tanpa mengubah jumlah datanya
//   (misal: merender list item UI dari array data API).
// • Pakai .filter() saat: Kamu ingin mengurangi/menyaring jumlah data berdasarkan kriteria tertentu.
// • Pakai .reduce() saat: Kamu ingin menggabungkan/mengakumulasi data menjadi satu nilai tunggal atau struktur
//   baru yang sama sekali berbeda (seperti objek).
