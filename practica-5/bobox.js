let trabajo = document.getElementById("trabajo");

let imagen = document.createElement("div");

trabajo.appendChild(imagen);

imagen.setAttribute("id", "imagen");

let poneimagen = document.createElement("img");

poneimagen.setAttribute("src", "/imagen clipart.jpg");

imagen.appendChild(poneimagen);

let titulo = document.createElement("div");

trabajo.appendChild(titulo);

titulo.setAttribute("id", "titulo");

let ponetitulo = document.createElement("p");

titulo.appendChild(ponetitulo);

ponetitulo.innerHTML = "<h1>Como añadir un efecto a una imagen</h1>"

let cuerpo = document.createElement("div");

trabajo.appendChild(cuerpo);

cuerpo.setAttribute("id", "cuerpo");

let ponecuerpo = document.createElement("p");

cuerpo.appendChild(ponecuerpo);
ponecuerpo.innerHTML = "Existen muchos plugins para insertar efectos especiales a las imágenes cuando se les pasa el cursor por encima. Todos esos plugins añaden un montón de código a la pagina, que termina afectando a la velocidad de la web en si. Si quieres utilizar muy poco código para así optimizar la carga de tu web, nuestro script para generar un efecto de zoom es perfecto para ti."

let boton = document.createElement("div");

trabajo.appendChild(boton);

boton.setAttribute("id", "boton");

let textoboton = document.createElement("p");

boton.appendChild(textoboton);

textoboton.innerHTML = "Leer mas";