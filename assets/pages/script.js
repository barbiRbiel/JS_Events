//Frases aleatorias de bienvenida, DOM
    //Declaro la variable con array
    const frasesAleatorias=new Array()

    //1° frase
    frasesAleatorias[0] = "¡ Hola astronauta, bienvenid@ !";
    //2° frase
    frasesAleatorias[1] = "TIP: Haz tu propia estrategia ;)";
    //3° frase
    frasesAleatorias[2] = "¿ Listo para la proxima aventura ?";
    //4° frase
    frasesAleatorias[3] = "¡ Suerte ! La vas a necesitar!";
    //5° frase
    frasesAleatorias[4] = "¡ Demuestra tu destreza en la galaxia !";

    //longitud de las frases aleatorias
    var frasesLongitud = frasesAleatorias.length;

    function mostrarFrases() {
    const numAleatorio=Math.round(Math.random()*(frasesLongitud-1));

    //aparezcan las frases aleatorias de bienvenida en:
    document.getElementById("home__frases").innerHTML=frasesAleatorias[numAleatorio];
    }

//--------------------------------------------------------------------------------------

//Usuario - Input
let ingresaNombre = document.getElementById("home__form"); //seccion del form
ingresaNombre.addEventListener("submit", nombreIngresado); //input donde el usuario ingresa el nombre

function nombreIngresado(e){ 
    e.preventDefault();

    let nombreUsuario = document.getElementById("usuarioInput").value;

    document.getElementById("inputIngresado").innerHTML = nombreUsuario;
}
