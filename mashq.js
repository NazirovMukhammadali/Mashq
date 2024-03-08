// function Weather(obhavo) {
//     if (obhavo < 0) {
//         console.log("-");
//     } else if (obhavo > 0) {
//         console.log("+");
//     } else {
//         console.log("0");
//     }
// }

// Weather(2);
// Weather(100);
// Weather(10);

// function Students(baholar) {

//     switch (baholar) {
//         case 5:
//             console.log("Alo");
//             break;
//         case 4:
//             console.log("Yaxshi");
//             break;
//         case 3:
//             console.log("Yomon");
//             break;
//         default:
//             console.log("Qoniqarsiz");
//     }
// }

// Students(2)
// Students(3)
// Students(4)
// Students(5)

// Boshlang'ich o'yinchilar ro'yxati
let oyinchilar = ["Ali", "Vali", "Hasan"];

// Yangi o'yinchilarni qo'shish
oyinchilar.push("Husan");
oyinchilar.push("Sara");

console.log("O'yinchilar ro'yxati (yangi o'yinchilarni qo'shishdan keyin):", oyinchilar);

// O'yinchilar ro'yxatidan birinchi o'yinchini o'chirish
let birinchiOyinchi = oyinchilar.shift();
console.log("O'yinchi o'chirilgan:", birinchiOyinchi);
console.log("O'yinchilar ro'yxati (birinchi o'yinchi o'chirilganidan keyin):", oyinchilar);

// O'yinchilar ro'yxatidan oxirgi o'yinchini o'chirish
let oxirgiOyinchi = oyinchilar.pop();
console.log("Oxirgi o'yinchi o'chirilgan:", oxirgiOyinchi);
console.log("O'yinchilar ro'yxati (oxirgi o'yinchi o'chirilganidan keyin):", oyinchilar);

// O'yinchilar ro'yxatini alfabiy tartibda saralash
oyinchilar.sort();
console.log("O'yinchilar ro'yxati (saralgan):", oyinchilar);

// O'yinchilar ro'yxatini vergullar bilan ajratib chiqarish
let royxatString = oyinchilar.join(", ");
console.log("O'yinchilar ro'yxati (vergullar bilan ajratilgan):", royxatString);
