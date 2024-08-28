//Funcion al apretar boton "iniciar sesion" cambia a "cerrar sesion"//

var boton = document.getElementById("boton");

boton.addEventListener("click", function(){
    this.innerText = "Cerrar sesion";
});

//Funcion al apretar boton "agregar definicion", el boton desaparece//

    var def = document.getElementById("def");
    def.addEventListener("click", function(){
        this.remove();
    });


//Funcion boton me gusta dispara alarma indicador titulo del animal y aumentar el contador de likes//

mggato.addEventListener("click", function(){
    alert("Has dado me gusta a Gato Atigrado");
    likesGato++
    document.getElementById("mggato").innerText = likesGato + " Me Gusta";
});

mgperro.addEventListener("click", function(){
    alert("Has dado me gusta a Golden Retriever");
    likesPerro++
    document.getElementById("mgperro").innerText = likesPerro + " Me Gusta";
});