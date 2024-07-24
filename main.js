//llamado a un node del Dom
let root = document.querySelector("#root");

//Elemento de tipo div con un atributo class
let div_formulario = document.createElement("div");
div_formulario.className = "div_formularios";

//lista de datos (string)
//para crear un objeto se necesitan llaves
let formularios = [
    {nombre:"Login", link:"https:"},
    {nombre:"Login", link:"https:"},
    {nombre:"Login", link:"https:"},
    {nombre:"Login", link:"https:"}, 
];


//forEach (for)
formularios.forEach(itemLista =>{

    let div_new = document.createElement("a");
    div_new.className = "item";
    div_new.href =itemLista.link; //del objeto, muesta el .link, solo el link
    div_new.innerText = itemLista.nombre;//.nombre, es porque solo deseo ver el nombre, y itemLista, solo muestra el objeto y el .nombre

    div_formulario.appendChild(div_new)
});


//agrego al nodo root, el elemento div_formulario
root.appendChild(div_formulario);
