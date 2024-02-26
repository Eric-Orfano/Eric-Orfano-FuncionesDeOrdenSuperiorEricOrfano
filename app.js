console.log(beers);

// // 1. Convierta la siguiente función con nombre en una función de flecha :

// const printMessage = ( message ) => { console.log( message ) }

// // 2. Convierta la siguiente función con nombre en una función de flecha :

// const createMultplication = (number1, number2) => {  
    
//     let result = number1 * number2 
    
//     return result

// }

// // 3. Partiendo de una matriz: const array = [ 1,2,3,4,5,6,7,8,9 ], 
// // aplique un mapa a esa matriz y pase como argumento la función nombrada que se muestra en el ejercicio anterior.
// // Mostrar por consola el nuevo array obtenido.

// const array = [ 1,2,3,4,5,6,7,8,9 ]

// const newArray = array.map(createMultplication)

// console.log(newArray);

// // 4. Generar una función que reciba como parámetro un array de cervezas y 
// // devuelva un nuevo array con las 10 cervezas con mayor alcohol.

// function Top10CervezasConMasAlcochol(beers) {
//     const cervezasOrdenadas = beers.sort((a, b) => b.abv - a.abv);
//     const top10Cervezas = cervezasOrdenadas.slice(0, 10);
//     return top10Cervezas;
// }

// const top10Cervezas = Top10CervezasConMasAlcochol(beers);

// console.log(top10Cervezas);

// // 5. Generar una función que reciba como parámetro un array de cervezas y 
// // devuelva un nuevo array con las 10 cervezas menos amargas.

// function CervezasMenosAmargas(beers) {
//     const cervezasOrdenadas = beers.sort((a, b) => a.ibu - b.ibu);
//     const top10Cervezas = cervezasOrdenadas.slice(0, 10);
//     return top10Cervezas;
// }

// const top10CervezasMenosAmargas = CervezasMenosAmargas(beers);

// console.log(top10CervezasMenosAmargas);

// // 6. Generar una función que reciba como parámetros un array de cervezas y un nombre de cerveza. 
// // La función debe devolver el objeto completo que coincida con el nombre ingresado.

// function encontrarCervezaPorNombre(beers, nombreBuscado) {

//     for (let i = 0; i < beers.length; i++) {
//         const cerveza = beers[i];

//        if (cerveza.name === nombreBuscado) {
//         return cerveza;
//        }
//     }
//     return null;
// }

// const nombreEncontrado = encontrarCervezaPorNombre(beers, 'Electric India')

// console.log(nombreEncontrado);

// // 7. Generar una función que reciba como parámetro un array de cervezas, 
// // un valor y que devuelva el primer objeto cuya propiedad ibu sea igual al valor ingresado, 
// // en caso de no haber cerveza con ese ibu que muestre un mensaje en la consola que dice 
// // "No hay cerveza con un ibu de (valor ingresado)"


// function obtenerValor(beers, valor) {

//     for (let i = 0; i < beers.length; i++) {
//         const cantidad = beers[i];

//         if (cantidad.ibu == valor) {
//             return cantidad
//         }
//     } 
//     return `No hay cerveza con un ibu de ${valor}`
// }

// const cantidadEncontrada = obtenerValor(beers, 55)

// console.log(cantidadEncontrada);

// 8. Generar una función que reciba como parámetro el nombre de una cerveza y devuelva la posición en el array de esa cerveza. 
// Si no se encuentra la cerveza, se debe imprimir un mensaje a través de la consola que diga 
// “(Nombre de la cerveza ingresada) no existe”.

// function encontrarPocision(beers, nombreDeCerveza) {
//    const posicion = beers.findIndex (cerveza => cerveza.name === nombreDeCerveza)

//    if (posicion !== -1) {
//     return posicion
//    } else {
//     console.log( `${nombreDeCerveza} no existe` );
//     return -1;
//     }
// }

// const posicionCerveza = encontrarPocision(beers, 'Electric India')

// console.log(posicionCerveza);

// 9. Generar una función que reciba como parámetro el array de cervezas y un valor de alcohol. 
// La función debe devolver un nuevo array con las cervezas que no superan el nivel de alcohol. 
// Cada elemento del nuevo array debe ser un objeto que tenga las propiedades nombre, alcohol (abv) y "amargura" (ibu)

// function cervezasConMenorAlcohol(beers, nivelDeAlcohol) {
//     const cervezasFiltradas = beers.filter(cerveza => cerveza.abv <= nivelDeAlcohol);
 
//     const nuevoArray = cervezasFiltradas.map(cerveza => {
//        return {
//           nombre: cerveza.name,
//           alcohol: cerveza.abv,
//           amargura: cerveza.ibu
//        };
//     });
//     return nuevoArray;
//  }

// const cervazasFiltradas = cervezasConMenorAlcohol(beers, 5)

// console.log(cervazasFiltradas);

// 10. Generar una función que reciba como parámetros un array de cervezas, un nombre de propiedad y un valor booleano. 
// Debería devolver una nueva matriz con 10 cervezas ordenadas por la propiedad ingresada como segundo argumento,
// ascendente si el tercero es verdadero o descendente si es falso.

// function ordenarCervezas(beers, propiedad, ascendente) {
//     beers.sort((a, b) => {
//        const valorA = a[propiedad];
//        const valorB = b[propiedad];
 
//        return ascendente ? valorA - valorB : valorB - valorA;
//     });
 
//     return beers.slice(0, 10);
//  }
  
//  const cervezasOrdenadasAscendente = ordenarCervezas(beers, 'abv', true);
//  console.log(cervezasOrdenadasAscendente);
 
//  const cervezasOrdenadasDescendente = ordenarCervezas(beers, 'ibu', false);
//  console.log(cervezasOrdenadasDescendente);
 
// 11. Generar una función que reciba como parámetro un array de cervezas y un id de un elemento HTML donde se imprimirá la tabla. 
// La función debe renderizar (renderizar, dibujar, pintar, rellenar, etc.) en un archivo html una tabla que contenga las columnas "Nombre", "ABV", "IBU" y una fila por cada elemento del array. 
// Cada fila debe tener los datos solicitados para cada una de las cervezas.

// function renderizarTablaCervezas(cervezas, idElementoHTML) {
//     const tabla = document.createElement('table');
//     const encabezado = tabla.createTHead();
//     const filaEncabezado = encabezado.insertRow();

//     // Encabezados de columnas
//     const columnas = ['Nombre', 'ABV', 'IBU'];
//     columnas.forEach(columna => {
//       const th = document.createElement('th');
//       th.textContent = columna;
//       filaEncabezado.appendChild(th);
//     });

//     // Filas con datos de cervezas
//     const cuerpoTabla = tabla.createTBody();
//     cervezas.forEach(cerveza => {
//       const fila = cuerpoTabla.insertRow();
//       const celdaNombre = fila.insertCell();
//       const celdaABV = fila.insertCell();
//       const celdaIBU = fila.insertCell();

//       celdaNombre.textContent = cerveza.name;
//       celdaABV.textContent = cerveza.abv;
//       celdaIBU.textContent = cerveza.ibu;
//     });

//     // Agrega la tabla al div
//     const contenedorTabla = document.getElementById(idElementoHTML);
//     contenedorTabla.innerHTML = '';
//     contenedorTabla.appendChild(tabla);
//   }

//   renderizarTablaCervezas(beers, 'tablaCervezas');