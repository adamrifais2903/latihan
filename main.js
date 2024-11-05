// // alert("HEYHO!");

// // prompt("masukkan usia anda");

// // var usia = 30;
// // comst x = 1
// // let y = 2

// // let usia = 30;
// // usia = 35;
// // console.log("heyhoo usia kamu adalah " + usia);
// // alert(' ' + usia)

// // let usia = prompt("berapa usia kamu?");
// // alert("usia anda adalah " + usia);

// let nama = "adam rifais"; //tipe string
// let usia = 25; // tipe intrger number
// let tinggiBadan = 173; // tipe double(float)
// let beratBadan;
// let pacar = 2;

// beratBadan = 60;

// if (pacar == null) {
//   pacar = "belum punya";
// } else {
//   pacar = "udah punya";
// }

// let saldoAwal = 50000;
// let saldoTambahan = 80000;
// const hutang = 30000;

// const saldoAkhir = saldoAwal + saldoTambahan - hutang;

// const x = 3;
// const y = 5;
// const z = x / y;
// alert(`nilai x = ${x} / nilai y = ${y} maka hasilnya adalah ${z}`);
// alert(
//   `nama saya ${nama} usia saya itu ${usia} tinggi badan saya adalah ${tinggiBadan}
// berat badan saya ${beratBadan} dan pacar saya ${pacar}`
// );
// alert(`saldo awal saya sebesar Rp.${saldoAwal} & saldo tambahan yang akan saya miliki sebesar Rp.${saldoTambahan} jadi total saldo yang saya miliki adalah sebanyak Rp.${saldoAkhir}`);

// // switch (pacar) {
// //   case 1:
// //     pacar = "punya 1 aja";
// //     break;
// //   case 2:
// //     pacar = "punya pacar 2, cukup playboy";
// //     break;
// //   default:
// //     pacar = " belum punya pacar";
// //     break;
// // }
// let namaGuru = ["jodi", "bunga", "rahman"];
// namaGuru.push("dea", "fikri");
// namaGuru.shift()
// nama namaGuru.pop()
// alert(namaGuru[2]);

//forloop

// console.log("nama saya fais");
// console.log("nama saya fais");
// console.log("nama saya fais");

//3 statement

// const namaGuru = ["jodi", "bunga", "rahman"];

// for (let i = 0; i <= namaGuru.length; i++) {
//   //i1 = 0
//   // i2 =1
//   //i3=2
//   console.log(namaGuru[i]);
// }

// let i =( i<10){
//     i++
//     console.log('adam rifais')
// }
// do{
//     console.log('')
// }

// tugas
//promp untuk mengetahui saldo akhir dari apa yang diinputkan oleh user
//menetukan hari dari tanggal yang ada saat ini di pc kalian

let jumlah = new Date().getDay();

const hari = ["senin", "selasa", "rabu", "kamis", "jumat", "sabtu", "minggu"];

alert(`hari ini adalah hari ${hari[jumlah - 1]}`);
