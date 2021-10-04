const contenedor= document.querySelector(".contenedor");
function  crearLllave(nombre, model, precio){
img= `<img class='llave-imd' src='llave.jpg'>`;
nombre= `<h2>${nombre}</h2>`;
model= `<h3>${model}</h3>`;
precio= `<p>Precio: ${precio}</p>`;
return [nombre, model, precio];
}

// const llave = crearLllave("llave1", "Model x", "22");
// contenedor.innerHTML= llave[0]+llave[1]+llave[2];
//#region  cilo para crear muchas elementos
var documentFragment= document.createDocumentFragment;
for(var i= 1; i<=20; i++){
let modelReferncia= Math.random(Math.random)*1000;
let precio= Math.random(Math.random)*10+30;
let llave= crearLllave(`llave ${i}`, `modelo ${modelReferncia}`,`Presio ${precio}`);
let div= document.createElement("div");
div.classList.add(`item-${i}`, `flex-item`);
div.innerHTML= llave[0]+llave[1]+llave[2]+llave[3];
contenedor.appendChild(div);
}
//#endregion