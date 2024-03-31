// filename: utility.js

// Esta función envuelve la función querySelector de JavaScript, permitiendo seleccionar un elemento del DOM por su selector CSS.
export function qs(selector) {
    // Devuelve el primer elemento del documento que coincide con el selector especificado.
    return document.querySelector(selector);
  }
  
  // Esta función crea una alerta en la parte superior de la página durante 3 segundos.
  // Requiere el mensaje que se mostrará y la duración en milisegundos.
  export function alertMessage(message, duration = 3000) {
    // Crea un nuevo elemento de párrafo en el documento.
    const alert = document.createElement("p");
    // Establece el contenido del párrafo como el mensaje especificado.
    alert.innerHTML = message;
    // Establece el estilo CSS para la alerta.
    alert.setAttribute(
      "style",
      "background-color:lightpink; border: 1px solid red; position:absolute; top:0; left:0; right:0; padding: 1em;"
    );
    // Agrega la alerta al principio del cuerpo del documento.
    document.body.prepend(alert);
    // Después de la duración especificada, elimina la alerta del documento.
    setTimeout(function () {
      document.body.removeChild(alert);
    }, duration);
  }


  // main.js...this is the file that you added to the html through a script tag
import { qs, alertMessage } from "./utilities.js";
// now you can use those functions just like if they were declared locally.
alertMessage("I'm from the module!");