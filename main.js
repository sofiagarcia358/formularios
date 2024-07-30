//llamado a un node del Dom
let root = document.querySelector("#root");

//Elemento de tipo div con un atributo class
let div_formulario = document.createElement("div");
div_formulario.className = "div_formularios";

//lista de datos (string)
//para crear un objeto se necesitan llaves
let formularios = [
    {nombre:"Login", link:"componentes/Login/Login.html"},
    {nombre:"Formulario De Contacto", link:"componentes/formularioDeContacto/formularioDeContacto.html"},
    {nombre:"Formulario De Registro", link:"componentes/formularioDeRegistro/formularioDeRegistro.html"},
    {nombre:"Formulario De Búsqueda", link:"componentes/formularioDeBusqueda/formularioDeBusqueda.html"},
    {nombre:"Formulario De Pedido Compras", link:"componentes/formularioDePedidoCompras/formularioDePedidoCompras.html"},
    {nombre:"formulario De Comentarios Reseñas", link:"componentes/formularioDeComentariosReseñas/formularioDeComentariosReseñas.html"},
     
];


//forEach (for)
formularios.forEach(itemLista =>{

    let div_new = document.createElement("a");
    div_new.className = "item";
    div_new.href =itemLista.link; //itemLista=es el objeto, .link, es algo especifico, en este caso el link
    div_new.innerText = itemLista.nombre;//.nombre, es porque solo deseo ver el nombre, y itemLista, solo muestra el objeto y el .nombre

    div_formulario.appendChild(div_new)
});


//agrego al nodo root, el elemento div_formulario
root.appendChild(div_formulario);
