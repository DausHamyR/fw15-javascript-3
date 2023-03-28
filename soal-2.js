// const cekHariKerja = (day) => {
//     return new Promise((resolve,reject) => {
//         setTimeout(() => {
//             const dataDay = ['senin', 'selasa', 'rabu', 'kamis', 'jumat'];
//             let cek = dataDay.find((dataDay) => {
//                 return dataDay === day
//             })
//             if(cek){
//                 resolve(cek)
//             }else {
//                 reject(new Error('Hari ini bukan hari kerja'))
//             }
//         },3000)
//     })
// };

// // Menggunakan .then .catch
// cekHariKerja('sabtu')
// .then((result) => {
//     console.log(`Hari ${result} hari kerja`);
// })
// .catch((error) => {
//     console.log(error.message);
// });

// then dan catch adalah method yang tersedia pada Promise di JavaScript. Method then digunakan untuk menangani hasil dari sebuah promise ketika promise tersebut berhasil dijalankan atau terpenuhi (fulfilled), sementara method catch digunakan untuk menangani error atau kesalahan ketika promise gagal atau tidak terpenuhi (rejected).



// Menggunakan try catch
const cekHariKerja = async (day) => {
    try {
        const result = await new Promise((resolve, reject) => {
            setTimeout(() => {
                const dataDay = ['senin', 'selasa', 'rabu', 'kamis', 'jumat'];
                let cek = dataDay.find((item) => {
                    return item === day
                })
                if (cek) {
                    resolve(cek)
                } else {
                    reject(new Error('Hari ini bukan hari kerja'))
                }
            }, 3000)
        });
        console.log(`Hari ${result} hari kerja`);
    } catch (error) {
        console.log(error.message);
    }
}
cekHariKerja("senin");

// try catch adalah blok penanganan error pada JavaScript yang digunakan untuk menangkap error yang terjadi saat menjalankan sebuah program. Ketika kode dalam try menghasilkan error, eksekusi akan langsung beralih ke blok catch, yang akan menangkap dan menangani error tersebut.