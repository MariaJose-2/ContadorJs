// EventListener para la tecla "+" y "-" en el documento
window.addEventListener('keydown', (e)=>{
    if (e.key=="+"){
        incremento();
    }
    else if(e.key=="-"){
        decremento();
    }
});

//inicializacion del contador; let variable que no se puede modificar su valor
let contador=0; 
// elemento HTML donde se muestra el valor del contador; const es una constante que su valor va a cambiar
const valor=document.getElementById("valor");

// funcion para incrementar el contador
function incremento(){
    // incrementa el contador
    contador+=1;
    // actualiza el contenido del elemento HTML con el nuevo valor del contador
    valor.innerHTML=contador;
}

// funcion para decrementar el contador
function decremento(){
    // si el contador es mayor que 0, decrementa el contador
    if(contador>0){
        contador-=1;
        // actualiza el contenido del elemento HTML con el nuevo valor del contador
        valor.innerHTML=contador;
    } else {
        // si el contador es 0, no se puede decrementar mas
        contador=0;
        // actualiza el contenido del elemento HTML con el valor 0
        valor.innerHTML=contador;
    }
}

// funcion para resetear el contador
function resetear(){
    // reinicia el contador a 0
    contador=0;
    // actualiza el contenido del elemento HTML con el valor 0
    valor.innerHTML=contador;
}