// Synchronous adalah cara menjalankan program dengan cara yang "berurutan". Tugas atau perintah-perintah yang diberikan pada program akan dijalankan secara berurutan, satu per satu, tanpa memperhatikan waktu yang dibutuhkan untuk menjalankan setiap tugas. Artinya, program harus menunggu tugas saat ini selesai dijalankan sebelum memulai tugas berikutnya. Hal ini membuat program berjalan secara linear dan membutuhkan waktu yang lama untuk mengeksekusi beberapa tugas yang memakan waktu yang lama.
// Contoh penggunaan Synchronous:
// function salam(name) {
//     console.log('Hello, ' + name);
// }
//     console.log('Start');
//     salam('Daus');
//     console.log('End');


// Sebaliknya, Asynchronous adalah cara program melakukan tugas tanpa harus menunggu tugas sebelumnya selesai dijalankan. Dalam pendekatan ini, program dapat menjalankan tugas secara paralel tanpa harus menunggu tugas sebelumnya selesai terlebih dahulu. Oleh karena itu, program dapat memproses beberapa tugas secara bersamaan, meningkatkan kecepatan dan efisiensi program. Dalam pendekatan Asynchronous, program mengembalikan kendali ke lingkungan eksekusi untuk melanjutkan tugas lain sebelum tugas Asynchronous yang sedang berjalan selesai.
// Contoh penggunaan Asynchronous:
function salam(name) {
    setTimeout(function() {
        console.log('Hello, ' + name);
    }, 2000);
}
    console.log('Start');
    salam('Daus');
    console.log('End');