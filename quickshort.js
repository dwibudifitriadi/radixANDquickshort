// Fungsi utama Quick Sort
function quickSort(arr) {
    // Basis: Jika array memiliki 0 atau 1 elemen, tidak perlu disortir
    if (arr.length <= 1) {
        return arr;
    }

    // Memilih elemen pivot (biasanya elemen pertama)
    const pivot = arr[0];

    // Membagi array menjadi dua bagian: elemen lebih kecil dan lebih besar dari pivot
    const left = [];  // Untuk elemen lebih kecil dari pivot
    const right = []; // Untuk elemen lebih besar dari pivot

    // Looping melalui elemen array, mulai dari indeks 1 (melewati pivot)
    for (let i = 1; i < arr.length; i++) {
        if (arr[i] < pivot) {
            // Elemen lebih kecil dari pivot masuk ke array 'left'
            left.push(arr[i]);
        } else {
            // Elemen lebih besar atau sama dengan pivot masuk ke array 'right'
            right.push(arr[i]);
        }
    }

    // Rekursif: Menyortir bagian kiri dan kanan, lalu menggabungkannya dengan pivot
    return [...quickSort(left), pivot, ...quickSort(right)];
}

// Contoh penggunaan
const unsortedArray = [34, 7, 23, 32, 5, 62];
const sortedArray = quickSort(unsortedArray);
console.log('Hasil Quick Sort:', sortedArray);
