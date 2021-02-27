let jalta;
let jalta2;
let resol;

alert("Oye menol, escribe 2 numeros para dividir");

jalta = prompt("El primero");

jalta2 = prompt("El segundo");

if (jalta2 == 0) {
    document.write("No se puede dividir entre cero.")
    
}
else{
resol = jalta/jalta2;
document.write("el flow de division da "+resol);
}