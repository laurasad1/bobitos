let dekus;
let meliodas;

alert("klk, escribe do numero a ve");

dekus = prompt("el primero")
meliodas = prompt("el segundo");

if (dekus > 0 && meliodas > 0 ) {

    document.write("Mira ahi dos numeros positivos, el: "+dekus+" positivo y el "+meliodas+" positivo tambien");   
}

else if(dekus < 0 && meliodas < 0){

    document.write("Mira ahi dos numeros negativos, el: "+dekus+" negativo y el "+meliodas+" negativo tambien");
}

else{

    if (dekus < 0 && meliodas > 0) {

        document.write("Ahi hay un numero positivo y otro negativo que es "+dekus+" negativo y el "+meliodas+" positivo");
    } 
    
    else {

        document.write("Ahi hay un numero positivo y otro negativo que es "+dekus+" positivo y el "+meliodas+" negativo");
    }
    
}

