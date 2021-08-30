import { React, useEffect, useState } from 'react';

function App() {
  /* API: */
  const url = 'https://jsonplaceholder.typicode.com/todos/';

  /* HOOK: */
  const [datos, setDatos] = useState();

  /* FETCH */
  const ApiFetch = async (url) => {
    /* obtener datos: */
    const respuesta = await fetch(url);
    /* convetit datos a Json */
    const tareas = await respuesta.json();
    /* guardar datos: */
    setDatos(tareas);
    console.log(tareas);
  };
  /* HOOK: */
  useEffect(() => {
    ApiFetch(url);
  }, []);

  return (
    <div className="App">
      <h1>Practica api en React</h1>

      {!datos
        ? 'cargando...'
        : datos.map((item, index) => {
            return (
              <li style={{ listStyleType: 'none ' }} key={index}>
                <p>
                  Tarea N°: {item.id} Descripcion: {item.title}
                </p>
              </li>
            );
          })}
    </div>
  );
}

export default App;
