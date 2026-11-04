// .find() Method.
// 1. Konsep Utama .find()
//    Jika .filter() mengembalikan array baru yang berisi semua elemen yang cocok, maka .find() hanya mengembalikan
//    SATU elemen pertama yang cocok.
//    Fungsi Utama: Mencari dan mengembalikan nilai dari elemen pertama di dalam array yang memenuhi kondisi pengujian.
//    3 Aturan Emas .find():
//    1. Mengembalikan Elemen (Objek/Nilai): Hasil akhirnya adalah elemen itu sendiri (bukan array, dan bukan boolean).
//    2. Prinsip Early Exit: Begitu menemukan elemen pertama yang cocok, .find() akan langsung berhenti dan
//       mengembalikannya.
//    3. Mengembalikan undefined: Jika tidak ada satu pun elemen yang cocok dengan kondisi, ia mengembalikan undefined.
//    Perumpamaan Sederhana
//    Bayangkan kamu mencari tumpukan berkas di lemari:
//    .filter() --> "Ambilkan semua berkas yang berlabel 'Laporan 2026'" (Hasil: Map berisi banyak berkas).
//    .find() --> "Tolong ambilkan satu berkas pertama milik 'Rifki'" (Hasil: Satu lembar berkas Rifki, lalu selesai).

// Modul latihan .find()
// Tantangan 1 (Mencari Angka Pertama):
// Diberikan array angka:
const nums = [5, 9, 12, 15, 18, 20];
// Gunakan .find() untuk mencari angka genap pertama di dalam array tersebut.
// Hasil akhir yang diharapkan: 12 (meskipun 18 dan 20 juga genap, .find() hanya mengambil yang pertama).
const findEvenNums = nums.find(num => num % 2 === 0);
console.log(findEvenNums);

// Tantangan 2 (Pencarian User berdasarkan ID / Array of Objects):
// Diberikan data pengguna dari database:
const users = [
  { id: 101, name: 'Rifki', role: 'Admin' },
  { id: 102, name: 'Budi', role: 'User' },
  { id: 103, name: 'Siti', role: 'User' }
];
// Gunakan .find() untuk mencari data pengguna yang memiliki id === 102.
// Hasil akhir yang diharapkan: { id: 102, name: 'Budi', role: 'User' }.
const findUser = users.find(user => user.id === 102);
console.log(findUser);

// Perbedaan Penting: .filter() vs .find()
// Fitur          .filter()                          .find()
// Hasil Akhir    Array (berisi semua yang cocok)    Satu nilai/Objek (atau undefined)
// Kuantitas      0 sampai N elemen                  Maksimal 1 elemen
// Kinerja        Memeriksa seluruh isi array        Berhenti di pencocokan pertama
