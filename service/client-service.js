const listaCliente = ()=> {
    return fetch("http://localhost:3000/perfil").then(respuesta => respuesta.json())
}
export const clientServices = {
  listaCliente,
};