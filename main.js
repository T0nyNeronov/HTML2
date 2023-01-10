// let a = parseInt(promt("Введите температуру в градусах Цельсия"));
// alert(`по Фарингейту получается ${a} равен ${a=(9/5) * градусы Цельсия + 32 }`);
// function a=(9/5)*a+32{
//     return
// }

// const CelsiusT = +prompt(`Темп градусов в Цельсия`);
// const FarenheitT = (9 / 5) * CelsiusT + 32;
// alert("В цельсий: " + CelsiusT + ", В фаренгейт: " + FarenheitT);

const username = +prompt(`Введите имя`);
function greeting() {
    console.log("Welcome, " + username + "!");
    greeting(username);
}
// alert("Welcome, " + username + "!");