// .slice() and Spread Operator ([...])
// A. .slice(start, end)
//    • Fungsi: Mengambil sebagian elemen dari array tanpa mengubah array aslinya.
//    • Parameter:
//      • start: Indeks mulai (inklusif).
//      • end: Indeks akhir (ekslusif / tidak termasuk).
//    • Sintaks: array.slice(start, end)
const numbers = [10, 20, 30, 40, 50];

// Mengambil indeks 1 sampai sebelum indeks 4 (yaitu indeks 1, 2, 3)
const subArray = numbers.slice(1, 4);
console.log(subArray); // [20, 30, 40]
console.log(numbers);  // [10, 20, 30, 40, 50] (Array asli tetap utuh)

// B. Spread Operator ([...])
//    • Fungsi: Menggabungkan array atau membuat salinan baru (shallow copy) dengan cepat.
//    • Immutable: Spread operator bersifat immutable atau tidak mengubah array asli, dengan catatan,
//      ia membuat shallow copy (salinan dangkal) atau salinan tingkat atas saja. Jika array berisi objek di dalamnya
//      (Array of Objects):
//      • Array luarnya saja bersifat immutable (array baru).
//      • Namun, objek di dalam array tersebut masih mereferensikan memori yang sama. Jika kamu mengedit properti objek
//        di dalamnya langsung, objek aslinya ikut berubah.
const buahAwal = ['Apel', 'Jeruk'];
const buahTambahan = ['Mangga', 'Pisang'];

// Menggabungkan dua array
const semuaBuah = [...buahAwal, ...buahTambahan];
console.log(semuaBuah); // ['Apel', 'Jeruk', 'Mangga', 'Pisang']

// Tantangan 1 (.slice() - Pagination):
// Diberikan daftar artikel blog:
const articles = ['Artikel 1', 'Artikel 2', 'Artikel 3', 'Artikel 4', 'Artikel 5'];
// Gunakan .slice() untuk mengambil artikel halaman pertama (item indeks 0 sampai sebelum indeks 3).
// Hasil akhir: ['Artikel 1', 'Artikel 2', 'Artikel 3'].
const subArticles = articles.slice(0, 3);
console.log(subArticles);

// Tantangan 2 (Spread Operator - Immutable Push):
// Diberikan array todo list:
const todoList = ['Belajar JS', 'Olahraga'];
// Gunakan Spread Operator untuk membuat array todo list baru yang menyertakan tugas baru tersebut di bagian akhir tanpa menggunakan .push().
// Hasil Akhir: ['Belajar JS', 'Olahraga', 'Membaca Buku'].
const todoListBaru = [...todoList, 'Membaca Buku'];
console.log(todoListBaru);
