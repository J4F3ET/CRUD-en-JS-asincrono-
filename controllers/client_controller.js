import {clientServices} from '../service/client-service.js';
const crearNuevaLinea = (nombre,email,id) =>{
    const linea = document.createElement("tr");
    const contenido = `
    <td class="td" data-td>${nombre}</td>
    <td>${email}</td>   
    <td>
      <ul class="table__button-control">
        <li>    
          <a
            href="../screens/editar_cliente.html?id=${id}"
            class="simple-button simple-button--edit"
            >Editar</a
          >
        </li>
        <li>
          <button class="simple-button simple-button--delete" type="button" id="${id}">
            Eliminar
          </button>
        </li>
      </ul>
    </td>`
    linea.innerHTML = contenido;
    const btn = linea.querySelector("button");
    btn.addEventListener('click', () =>{
      const id  = btn.id;
       clientServices.eliminarCliente(id).then((respuesta) => {console.log(respuesta)}).catch((err) => {alert(err)});
    });
    return linea;
};
const table = document.querySelector("[data-table]");
// Abrir http recibe (metodo,url)
// CRUD - Método HTTP
// Create - POST
// Read   - GET
// Update - PUT/PATCH
// Delete - DELETE


// ESTO ES CAMBIADO POR
// const promise = new Promise((resolve, reject) =>{
//     const http = new XMLHttpRequest;
//     http.open("GET", "http://localhost:3000/perfil");
//     http.send();//Enviar datos
//     http.onload = () =>{
//         const response= JSON.parse(http.response);
//         if(http.status>=400){
//             reject(response);
//         }else{
//             resolve(response);
//         }
//     }
// });
// return promise;

// FECHT API
clientServices.listaCliente().then((data) => {
    data.forEach(({nombre,email,id}) => {
        const nuevaLinea = crearNuevaLinea(nombre,email,id);
        table.appendChild(nuevaLinea);
    });
}).catch((error)=> {
    alert("Error");
})
