// Contoh program 1: Menghitung luas persegi

const hitungLuasPersegi = (panjang, lebar) => {
    return new Promise((resolve, reject) => {
        if (panjang <= 0 || lebar <= 0) {
            reject(new Error('Panjang dan lebar harus lebih besar dari 0'));
        } else {
            const luas = panjang * lebar;
            resolve(luas);
        }
    });
};
hitungLuasPersegi(10, 5)
    .then((luas) => console.log(`Luas persegi: ${luas}`))
    .catch((error) => console.log(error.message));



// Contoh program 2: Mencari data dari database

// const database = [
//     { id: 1, name: 'John Doe', age: 25 },
//     { id: 2, name: 'Jane Doe', age: 30 },
//     { id: 3, name: 'Bob Smith', age: 40 },
// ];
// const getDataById = (id) => {
//     return new Promise((resolve, reject) => {
//         const data = database.find((item) => item.id === id);
//         if (!data) {
//             reject(new Error(`Data dengan ID ${id} tidak ditemukan`));
//         } else {
//         resolve(data);
//         }
//     });
// };
// getDataById(3)
//     .then((Data) => console.log(`Data: ${JSON.stringify(Data)}`))
//     .catch((error) => console.log(error.message));