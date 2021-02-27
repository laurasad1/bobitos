let nume1; 
let nume2;
let nume3;

alert("miop, escribe tres numero al favor");

nume1 = prompt("coloque el primer numero");
nume2 = prompt("coloque el segundo");
nume3 = prompt("y ahora el tercero");

if (nume1 == nume2 && nume2 == nume3) {

    document.write("Los tres numeritos son iguales");
    
}

else if (nume1 > nume2 && nume1 > nume3){

    document.write("El numero mas grande es: "+nume1);
}


else if (nume3 > nume1 && nume3 > nume2){

    document.write("El numero mas grande es: "+nume3);
}

else if (nume2 > nume1 && nume2 > nume3){

    document.write("<h2>El numero mas grande es: "+nume2);
}
