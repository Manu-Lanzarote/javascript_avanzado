// 1.	Crea un objeto coche con las siguientes propiedades:
// a.	Color: rojo
// b.	Marca: Ford
// c.	Modelo: Focus
// d.	Motor:  cilindros: 4, capacidad: 2.2

// const coche = {
//   color: "rojo",
//   marca: "ford",
//   modelo: "focus",
//   motor: {
//     cilindros: 4,
//     capacidad: 2.2,
//   },
// };

//
// 2.	Crea un objeto con tu nombre y tu edad y muéstralo por consola. Después añade tu altura y muestra de nuevo el objeto.

// const manu = {
//   nombre: "manu",
//   edad: 49,
// };
// console.log(manu);

// manu.altura = 187;

// document.getElementById(
//   "div1"
// ).innerHTML = `<p>${manu.nombre}</p><p>${manu.edad}</p><p>${manu.altura}</p>`;

//
// 3.	Crea una página con un párrafo vacío. Al entrar en la página se le preguntará al usuario que introduzca una frase. Inserta la frase en el párrafo vacío.

// const pagina = {
//   parrafo: "",
// };
// pagina.parrafo =
//   "Crea una página con un párrafo vacío. Al entrar en la página se le preguntará al usuario que introduzca una frase. Inserta la frase en el párrafo vacío.";

// document.getElementById("div1").innerHTML = `<p>${pagina.parrafo}</p>`;

//
// 4.	Crea una página con un párrafo vacío. Al entrar en la página se le preguntará al usuario que introduzca un número. Inserta ese número en el párrafo vacío. Si el número es menor que 100, el número tendrá color verde, si el número es entre 100 y 200 tendrá color amarillo. Si el número es mayor que 200, tendrá color rojo.

// const pagina = {
//   parrafo: "",
// };

// let numUser = parseInt(prompt("Introduce un número"));
// pagina.parrafo = numUser;

// document.getElementById("div1").innerHTML = numUser;

// if (numUser < 100) {
//   document.getElementById("div1").style.color = "green";
// } else if (numUser >= 100 && numUser <= 200) {
//   document.getElementById("div1").style.color = "yellow";
// } else {
//   document.getElementById("div1").style.color = "red";
// }

//
// 5.	El objeto “randomObject” tiene objetos anidados dentro. Muestra por consola la clave “board” con valor “broken”. Después, añade un atributo debajo de él con la clave “name” y de valor un nombre que hayas pedido al usuario.

// let randomObject = {
//   halfway: -597578084,
//   oldest: "limited",
//   them: {
//     swimming: "ancient",
//     stick: "battle",
//     vast: true,
//     pain: "cent",
//     changing: -1097468956.0542688,
//     dear: -1768732428,
//     good: "front",
//     youth: true,
//     meant: "settlers",
//     speed: {
//       strip: "creature",
//       blanket: -1892428548.752131,
//       previous: false,
//       later: true,
//       past: {
//         program: {
//           writer: 1653937677.0210853,
//           pot: true,
//           noon: -365598494,
//           cotton: -941609260,
//           grade: {
//             right: "aloud",
//             addition: {
//               said: false,
//               meat: -1370461956.452456,
//               whose: {
//                 tail: false,
//                 phrase: false,
//                 national: {
//                   stairs: 913907191.8412454,
//                   fat: 576639131.2840135,
//                   younger: "best",
//                   cannot: {
//                     with: "fireplace",
//                     prepare: false,
//                     spin: -1979219779.0387182,
//                     hair: 1100726724,
//                     within: true,
//                     metal: 461166658,
//                     bent: false,
//                     cheese: -176132480,
//                     speech: 1035936928.1533735,
//                     motor: "breath",
//                     composed: true,
//                     board: "broken",
//                   },
//                   space: "average",
//                   top: 1563102285.049974,
//                   problem: -102484870,
//                   circle: true,
//                   dust: true,
//                   organized: -939311229,
//                   production: 1047760167.1780465,
//                   shop: false,
//                 },
//                 taught: false,
//                 disease: false,
//                 volume: "mixture",
//                 laugh: "capital",
//                 design: 1190722490,
//                 proud: -212718583.10419846,
//                 shoulder: -239291513,
//                 height: true,
//                 blank: false,
//               },
//               sitting: false,
//               silk: true,
//               buffalo: "whom",
//               silly: 499953376.84782386,
//               globe: -1930898253,
//               soldier: -589507257.4907248,
//               of: -1805357958,
//               rising: true,
//               except: false,
//             },
//             mouse: "our",
//             cookies: "made",
//             common: false,
//             low: false,
//             answer: false,
//             visitor: "wherever",
//             space: 988316177,
//             coast: 191721382,
//             angry: "gravity",
//             raise: "owner",
//           },
//           keep: "similar",
//           become: 729169929.9094012,
//           tropical: "mighty",
//           chief: true,
//           same: "ride",
//           stove: -847784517,
//           noise: "fresh",
//         },
//         medicine: false,
//         hungry: true,
//         weight: 290720785,
//         almost: "monkey",
//         join: "slave",
//         hold: "street",
//         plastic: false,
//         sat: -1498494707,
//         nervous: false,
//         ordinary: 2119960819.7494817,
//         lamp: 1994320371,
//       },
//       stuck: true,
//       broad: "manufacturing",
//       eight: 78027487.2616241,
//       won: true,
//       master: 1844006759,
//       would: false,
//       brought: -297330857,
//     },
//     hundred: false,
//     edge: 1399498305.5665278,
//   },
//   aloud: true,
//   bend: "these",
//   enjoy: -951714012,
//   brass: -938753103,
//   cheese: 1488077759,
//   visit: "act",
//   information: true,
//   chosen: true,
//   improve: true,
// };

// randomObject.them.speed.broad = "broken";

// document.getElementById("div1").innerHTML = `${randomObject.them.speed.broad}`;

// let nombre = prompt("Introduce un nombre");

// randomObject.them.speed.name = nombre;

//
//
