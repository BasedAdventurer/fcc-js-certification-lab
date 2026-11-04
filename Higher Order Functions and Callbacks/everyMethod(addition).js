// .every() method
// 1. Konsep Utama .every()
//    Jika .some() mencari "minimal ada satu" (OR), maka .every() mencari "apakah SEMUA" (AND).
//    Fungsi Utama: Memeriksa apakah SELURUH elemen di dalam array memenuhi kondisi tertentu.
//    3 Aturan Emas .every():
//    1. Mengembalikan Boolean: Hasil akhirnya selalu true atau false.
//    2. Prinsip Early Exit: Begitu menemukan 1 elemen saja yang bernilai false, .every() akan langsung berhenti
//       dan mengembalikan false tanpa memeriksa elemen sisanya.
//    3. Mengembalikan true HANYA jika semua elemen tanpa terkecuali memenuhi kondisi.
//    Perumpamaan Sederhana
//    Bayangkan seorang pemeriksa kualitas (Quality Control) di pabrik:
//    • "Apakah semua barang di dalam kardus ini lolos standar kualifikasi?"
//    • Jika barang ke-1 lolos, barang ke-2 lolos, tetapi barang ke-3 cacat, pemeriksa akan langsung berteriak "Gagal
//      (false)" dan tidak perlu memeriksa sisa barang lainnya.

// Modul Latihan .every()
// Tantangan 1 (Pengecekan Angka Positif):
// Diberikan array angka:
const nums = [2, 4, 6, 8, 10];
// Gunakan .every() untuk mengecek apakah semua angka di dalam array bernilai positif (>0).
// Hasil akhir yang diharapkan: true.
const isPositives = nums.every(num => num > 0);
console.log(isPositives);

// Tantangan 2 (Pengecekan Kelulusan Siswa / Array of Objects):
// Diberikan data nilai ujian siswa dalam satu kelompok:
const students = [
    { name: 'Rifki', score: 85 },
    { name: 'Budi', score: 75 },
    { name: 'Siti', score: 60 },
    { name: 'Ahmad', score: 90 }
];
// Gunakan .every() untuk mengecek apakah semua siswa di kelompok tersebut lulus (syarat lulus: score >= 70).
// Hasil akhir yang diharapkan: false (karena Siti mendapat nilai 60).
const isPassed = students.every(student => student.score >= 70);
console.log(isPassed);

// Perbandingan Cepat: .some() vs .every()
// Method       Kondisi Lolos              Analogi Logika     Perilaku Early Exit
// .some()      Minimal 1 elemen true      OR                 Berhenti di elemen true pertama
// .every()     Semua elemen harus true    AND                Berhenti di elemen false pertama
