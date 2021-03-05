

var number1 = parseInt(prompt("pon el first number"));
var number2 = parseInt(prompt("pon el second number"));
var number3 = parseInt(prompt("pon el third number"));


function quienemayor (bobo1, bobo2, bobo3)
{

if (bobo1 == bobo2 && bobo2 == bobo3)
{
    document.write("miop, aquí no somo' bruto :v los números son iguales");
}

else if (bobo1 > bobo2 && bobo1 > bobo3)
{
    document.write("El mayor number es: "+bobo1);
}

else if (bobo2 > bobo1 && bobo2 > bobo3)
{
    document.write("El mayor number es: "+bobo2);
}

else if (bobo3 > bobo1 && bobo3 > bobo2)
{
    document.write("El mayor number es: "+bobo3);
}

}

quienemayor(number1,number2,number3);











