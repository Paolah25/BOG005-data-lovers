import { orderdataAZ, orderdataZA, FilterDataWater } from './data.js'
import data from './data/pokemon/pokemon.js';

// Mostrar pantalla de inicio

const buttonNavigation = document.getElementById("pantalla1")

buttonNavigation.addEventListener("click", () => {
    const pag1 = document.getElementById("Pag1")
    const pag2 = document.getElementById("Pag2")
    pag1.style.display = "none";
    pag2.style.display = "block";

})

//funcion visualizar data en navegador//
let pokemon = Object.values(data.pokemon);


function visualizardata(pokemon) {

    for (let i = 0; i < pokemon.length; i++) {
        let namepokemon = pokemon[i].name;
        let imagenpokemon = pokemon[i].img;
        let contenedor = document.querySelector(".contenedor")
        let infopokemon = document.createElement("div");
        contenedor.appendChild(infopokemon)
        infopokemon.className = "contenedorpokemon"
        infopokemon.innerHTML =
            `
        <div class= "contenedorimagen"> 
        <img class="imagen" src = "${imagenpokemon}">
        </div>
        <div class= "names"
        <"${namepokemon}">
        <p> ${namepokemon}</p>
        </div>
        `
    }

}
//Funcion Ordenar data AZ-ZA//
function OrderNamesPokemon() {
    let OrderNames = document.getElementById("orderPokemon");
    OrderNames.addEventListener("change", () => {
        console.log(OrderNames.value);
        let dataorganizada
        let OrderValue = OrderNames.value
        if (OrderValue == "NamesAZ") {
            dataorganizada = orderdataAZ(data.pokemon);
        } else if (OrderValue == "NamesZA") {
            dataorganizada = orderdataZA(data.pokemon);
        } else {
            dataorganizada = data.pokemon
        }
        // console.log(dataorganizada)
        let contenedor = document.querySelector(".contenedor");
        contenedor.innerHTML = ""
        visualizardata(dataorganizada);
    });
}
OrderNamesPokemon()
//funcion filtrarData//
function FilterPokemon() {
    let selectW = document.getElementById("typesPokemon");
    selectW.addEventListener("change", (event) => {
        let selectvalue = event.target.value;
        if (selectvalue == "Tipos de pokemon") {
            visualizardata(data.pokemon);
        } else {
            let arrayfilter = FilterDataWater(selectvalue, data.pokemon);
            let contenedor = document.querySelector(".contenedor");
            contenedor.innerHTML = ""
            visualizardata(arrayfilter);
        }
    });
    //visualizardata(data.pokemon)

}
FilterPokemon()
window.addEventListener("load", visualizardata(pokemon));