const mostrarSpinner =(mostrar) => {
  const spinner = document.getElementById('spinner');
  spinner.style.display = mostrar ? 'block' : 'none'; 
}
const obtenerUsuarios = async (pagina) =>{
  mostrarSpinner(true);
    try {
      const response = await fetch(`https://reqres.in/api/users?delay=3&page=${pagina}`);
      const datos = await response.json();
      mostrarUsuariosEnTabla(datos.data); //La propiedad Data contiene los datos requeridos
      mostrarSpinner(false);
    } catch (error) {
      console.error(error);
      document.getElementById('tabla-usuarios').innerHTML = `<p>Error al cargar los usuarios.</p>`;
    }
  }
  
const mostrarUsuariosEnTabla =(usuarios) => {
    const tabla = `
      <table>
          <tr>
            <th>ID</th>
            <th>First <br> Name</th>
            <th>Last <br> Name</th>
            <th>Email</th>
            <th>Image</th>
          </tr>

          ${usuarios.map(usuario => `
            <tr>
              <td>${usuario.id}</td>
              <td>${usuario.first_name}</td>
              <td>${usuario.last_name}</td>
              <td>${usuario.email}</td>
              <td><img src="${usuario.avatar}" alt="imagen del avatar"></td>
            </tr>
          `).join('')}

      </table>
    `;
  
    document.getElementById('tabla-usuarios').innerHTML = tabla;
  }  

 obtenerUsuarios(1)

const cambiarPagina =(pagina)=> {
  obtenerUsuarios(pagina);
}


