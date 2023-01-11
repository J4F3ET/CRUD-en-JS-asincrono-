```js
json-server --watch db.json
```

Browser sync: browser-sync start --server --file . --host --port 5000 --startPath screens/lista_cliente.html
# CRUD-en-JS-asincrono-
<ol>
<li>NPM es --> manejador de paquetedes de node pero en inglish</li>
<li>para instalar un NPM se debe abrir una terminal del Visual y pegar el codigo como este "npm install -g json-server" y listo </li>
<li>error no encuentras json-server global se uso --> "npx json-server --watch db.json --port 3000" para solucioanrlo</li>
</ol>
Abrir http recibe (metodo,url)
CRUD - Método HTTP
Create - POST
Read   - GET
Update - PUT/PATCH
Delete - DELETE


"async" permite definir una funcion como asincrona y permite omitir el then, ya que lo maneja DETRO de la funcion ASYNC
se dene usar junto a "await" y permite especificar que funcion va a esperar la funcion asincrona. Tambien para usar el "casht" se usa try casht.