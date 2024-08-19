// En este archivo no utilizamos el evento "DOMContentLoaded", ya que se colocó el atributo "defer" en la importación del script,
// que nos soluciona el problema de los elementos no cargados del DOM. Más info => https://www.w3schools.com/tags/att_script_defer.asp

const DATA_URL = "json/data.json"; // URL que contiene los datos que queremos mostrar

const container = document.getElementById("container"); // "Traemos" utilizando el DOM el div de id "container" para colocar la información en él

/**
 * Función que recibe por parámetro un array con los datos que se mostrarán en el DOM
 * Los datos se mostrarán dentro del div de id "container" y por cada ítem se está creando un nuevo párrafo donde se
 * imprime el campo "name" y el campo "lastname" separados por un espacio
 */
function showData(dataArray) {
  // El for itera sobre los elementos del array
  for (const item of dataArray) {
    // En la siguiente línea se utilizan "backticks" para armar el String. Más info => https://developer.mozilla.org/es/docs/Web/JavaScript/Reference/Template_literals
    container.innerHTML += `<p> ${item.name} ${item.lastname} </p>`; // Se concatena cada párrafo de la manera que queremos mostrarlo al innerHTML del contenedor
  }
}

// Escribe el código necesario para realizar el fetch al archivo con los datos y mostrar los estudiantes con la función showData
async function fetchAndShowData() {
  try {
      // Hacemos un fetch al archivo JSON
      const response = await fetch("json/data.json");
      
      // Verificamos que la respuesta sea exitosa
      if (!response.ok) {
          throw new Error('Error al cargar los datos');
      }
      
      // Convertimos la respuesta en un objeto JSON
      const data = await response.json();
      
      // Mostramos los datos usando la función showData
      showData(data.students);
      
  } catch (error) {
      console.error('Hubo un problema con el fetch:', error);
  }
}

// Llamada a la función para obtener y mostrar los datos
fetchAndShowData();