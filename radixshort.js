// Fungsi utama untuk Radix Sort
function radixSort(arr) {
  // Fungsi untuk mendapatkan digit pada posisi tertentu
  function getDigit(num, place) {
      return Math.floor(Math.abs(num) / Math.pow(10, place)) % 10;
  }

  // Fungsi untuk menghitung jumlah digit pada sebuah angka
  function digitCount(num) {
      return Math.floor(Math.log10(Math.abs(num))) + 1;
  }

  // Fungsi untuk mendapatkan jumlah digit maksimum dalam array
  function mostDigits(nums) {
      let maxDigits = 0;
      for (let num of nums) {
          maxDigits = Math.max(maxDigits, digitCount(num));
      }
      return maxDigits;
  }

  // Mulai algoritma Radix Sort
  const maxDigitCount = mostDigits(arr);

  for (let k = 0; k < maxDigitCount; k++) {
      // Membuat "bucket" untuk setiap digit (0 hingga 9)
      const buckets = Array.from({ length: 10 }, () => []);

      // Menempatkan angka ke bucket sesuai digit saat ini
      for (let i = 0; i < arr.length; i++) {
          const digit = getDigit(arr[i], k);
          buckets[digit].push(arr[i]);
      }

      // Menggabungkan angka dari bucket kembali ke array
      arr = [].concat(...buckets);
  }

  return arr;
}

// Contoh penggunaan
const unsortedArray = [170, 45, 75, 90, 802, 24, 2, 66];
const sortedArray = radixSort(unsortedArray);
console.log('Hasil Radix Sort:', sortedArray);
