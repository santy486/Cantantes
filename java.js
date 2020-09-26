let inicio = prompt("Ingresa tu nombre!");
let iniciar = document.getElementById("iniciar")
iniciar.innerHTML = "Bienvenid@ " + inicio + " selecciona una imagen"+ "<br>" + " y llena los datos."

function nanpa() {
    let name = prompt("1. ¿Nombre de el artista de la imagen?");
    let pais = prompt("2. ¿País del artista de la imagen?");
    let genero = prompt("3. ¿Genero de musica del artista?");
    let cancion = prompt("4. ¿Una cancion del artista?");
    let nombre = document.getElementById("nombre")
    nombre.innerHTML = "El nombre es: " + name  + "<br>" + "Su país es: " + pais + "<br>"  + "Su genero es: " + genero + "<br>"  + "Una canción es: " + cancion
}
function nicky() {
    let name2 = prompt("1. ¿Nombre de el artista de la imagen?");
    let pais2 = prompt("2. ¿País del artista de la imagen?");
    let genero2 = prompt("3. ¿Genero de musica del artista?");
    let cancion2 = prompt("4. ¿Una cancion del artista?");
    let nombre1 = document.getElementById("nombre1")
    nombre1.innerHTML = "El nombre es: " + name2  + "<br>" + "Su país es: " + pais2 + "<br>"  + "Su genero es: " + genero2 + "<br>"  + "Una canción es: " + cancion2
}
function paulo() {
    let name1 = prompt("1. ¿Nombre de el artista de la imagen?");
    let pais1 = prompt("2. ¿País del artista de la imagen?");
    let genero1 = prompt("3. ¿Genero de musica del artista?");
    let cancion1 = prompt("4. ¿Una cancion del artista?");
    let nombre2 = document.getElementById("nombre2")
    nombre2.innerHTML = "El nombre es: " + name1  + "<br>" + "Su país es: " + pais1 + "<br>"  + "Su genero es: " + genero1 + "<br>"  + "Una canción es: " + cancion1
}