// .includes() & .findIndex() Method (Pencarian & Indeks)
// A. .includes()
//    • Fungsi: Memeriksa apakah suatu nilai ada di dalam array.
//    • Return: true atau false.
//    • Sintaks: array.includes(nilaiYangDicari)
const roles = ['admin', 'editor', 'subscriber'];

// Pengecekan hak akses sederhana
const isAdmin = roles.includes('admin'); // true
const isSuperAdmin = roles.includes('superadmin'); // false
console.log(isAdmin, isSuperAdmin);

// B. .findIndex()
//    • Fungsi: Mencari posisi indeks(0, 1, 2, dst) dari elemen pertama yang memenuhi kondisi.
//    • Return: Angka indeks elemen (atau -1 jika tidak ditemukan).
//    • Sintaks: array.findIndex((item) => kondisi)
const users = [
    { id: 101, name: 'Rifki' },
    { id: 102, name: 'Budi' },
    { id: 103, name: 'Siti' }
];

// Mencari indeks posisi Budi
const indexBudi = users.findIndex((user) => user.id === 102);
console.log(indexBudi); // 1 (karena Budi ada di indeks ke-1)

// Modul Latihan .includes() and .findIndex()
// Tantangan 1 (.includes()):
// Diberikan daftar format file yang diizinkan:
const allowedFormat = ['jpg', 'jpeg', 'png', 'webp'];
// Diberikan file yang diunggah user: 'pdf'.
// Gunakan .includes() untuk mengecek apakah format file user diizinkan atau tidak.
// Hasil akhir: false.
const isAllowed = allowedFormat.includes('pdf');
console.log(isAllowed);

// Tantangan 2 (.findIndex()):
// Diberikan keranjang belanja:
const cart = [
    { productId: 'A1', name: 'Kopi', qty: 2 },
    { productId: 'B2', name: 'Teh', qty: 1 }
];
// Gunakan .findIndex() untuk mencari posisi indeks barang dengan productId === 'B2'
// Hasil akhir: 1.
const findProductIndex = cart.findIndex((item) => item.productId === 'B2');
console.log(findProductIndex);
