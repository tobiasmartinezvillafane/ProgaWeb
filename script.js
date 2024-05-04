// //variable
// let nombre ="tobias";
// let edad;
// edad = 19


// //constante
// const pi = 3.14

// //print
// console.log("hola mundo")

// const ARRAY1 = (1, "tobias", true)
// ARRAY1.puch(2)
// console.log(ARRAY1)

// let estudiante1 = {
//     nombre:"Lucia",
//     edad:23,
//     adeuda:false,

//     //metodos
//     cumpliranios:function(){
//         dia="10"
//         estudiante1.edad=estudiante1.edad+1
//     }

// }
// console.log(estudiante1.nombre)
// estudiante1.cumpliraanios()

// console.log(1+1)       //suma
// console.log("estban"+"piazza")    //concatena
// console.log("1"+1)
// console.log("1"-1)
// console.log("esteban"-1)      //NaN

// //comparacion debil
// console.log("10"==10)      //True

// //comparacion estricta, valor y tipo de dato
// console.log("10"===10)     //False

// //funciones
// function saludar(){
//     console.log("hola mundo")

// }
// saludar()

// function duplicar(n){
//     let resultado = n*2
//     return n*2
// }
// console.log(duplicar(4))
// //

// pop up newsletter
    async function mostrarPopup() {
      const { value: email } = await Swal.fire({
        title: "Suscribirse a nuestro Newsletter",
        input: "email",
        inputLabel: "Ingrese su dirección de correo electrónico si quiere suscribirse a nuestro newsletter",
        inputPlaceholder: "Ingrese su correo electrónico",
        showCancelButton: true,
        customClass: {
          confirmButton: "btn-confirm",
          cancelButton: "btn-cancel",
          popup: "custom-popup"
        }
      });
      
      if (email) {
        enviarCorreo(email);
      }
    }
  
    async function enviarCorreo(email) {
      try {
        const response = await fetch("/enviar-correo", {
          method: "POST",
          headers: {
            "Content-Type": "application/json"
          },
          body: JSON.stringify({ email })
        });
  
        if (response.ok) {
          Swal.fire("¡Correo electrónico enviado!", "Ya estas suscripto a nuestro newsletter", "success");
        } else {
          Swal.fire("Error", "Hubo un problema al enviar el correo electrónico.", "error");
        }
      } catch (error) {
        console.error("Error:", error);
        Swal.fire("Error", "Hubo un problema al enviar el correo electrónico.", "error");
      }
    }
  
    window.addEventListener("load", function() {
      mostrarPopup();
    });



    // calculador de costos
    document.addEventListener("DOMContentLoaded", function() {
      const calcularBtn = document.getElementById("calcularBtn");
    
      calcularBtn.addEventListener("click", function() {
        // Crear la alerta modal
        const modal = document.createElement("div");
        modal.classList.add("modal");
    
        // Contenido de la alerta modal
        const contenidoModal = document.createElement("div");
        contenidoModal.classList.add("modal-content");
    
        // Opciones de servicios
        const servicios = [
          { nombre: "Optimizacion de cuenta", precio: 20000 },
          { nombre: "Manejo de contenido", precio: 110000 },
          { nombre: "Campaña de anuncios pagos (sin contar inversión)", precio: 80000 },
          {nombre: "Pagina web", precio: 150000},
          {nombre: "SEO y posicionamiento", precio: 300000}
        ];
    
        servicios.forEach(servicio => {
          // Crear un contenedor para cada servicio
          const servicioContainer = document.createElement("div");
          servicioContainer.classList.add("servicio-container");
    
          // Crear el casillero de selección
          const checkbox = document.createElement("input");
          checkbox.type = "checkbox";
          checkbox.value = servicio.precio;
          servicioContainer.appendChild(checkbox);
    
          // Crear el texto del servicio
          const label = document.createElement("label");
          label.appendChild(document.createTextNode(`${servicio.nombre} - $${servicio.precio}`));
          servicioContainer.appendChild(label);
    
          // Agregar el contenedor del servicio a la alerta modal
          contenidoModal.appendChild(servicioContainer);
    
          contenidoModal.appendChild(document.createElement("br")); // Salto de línea entre servicios
        });
    
        // Botón de cerrar la alerta modal (cruz)
        const cerrarBtn = document.createElement("button");
        cerrarBtn.innerHTML = "&times;"; // Utilizamos el símbolo de la equis
        cerrarBtn.classList.add("close");
        cerrarBtn.addEventListener("click", function() {
          modal.style.display = "none";
        });
        contenidoModal.appendChild(cerrarBtn);
    
        // Botón de calcular en la alerta modal
        const calcularBtnModal = document.createElement("button");
        calcularBtnModal.textContent = "Calcular";
        calcularBtnModal.addEventListener("click", function() {
          let total = 0;
          contenidoModal.querySelectorAll("input[type=checkbox]:checked").forEach(input => {
            total += parseFloat(input.value);
          });
    
          // Mostrar la suma total en la alerta modal
          const totalElement = document.createElement("p");
          totalElement.textContent = `Total del presupuesto: $${total.toFixed(2)}`;
          contenidoModal.appendChild(totalElement);
        });
        contenidoModal.appendChild(calcularBtnModal);
    
        // Agregar contenido de la alerta modal al modal
        modal.appendChild(contenidoModal);
    
        // Mostrar la alerta modal en el centro de la pantalla con un tamaño específico
        modal.style.display = "flex";
        modal.style.alignItems = "center";
        modal.style.justifyContent = "center";
        modal.style.position = "fixed";
        modal.style.top = "50%";
        modal.style.left = "50%";
        modal.style.transform = "translate(-50%, -50%)";
        modal.style.width = "400px"; // Ancho de la alerta modal
        modal.style.backgroundColor = "#ffffff"; // Cambia el color de fondo a blanco
        modal.style.borderRadius = "10px"; // Bordes redondeados
        modal.style.boxShadow = "0 0 10px rgba(0, 0, 0, 0.3)"; // Sombra ligera
        modal.style.zIndex = "1000";
    
        // Estilos para el botón de cerrar (cruz)
        cerrarBtn.style.position = "absolute";
        cerrarBtn.style.top = "10px";
        cerrarBtn.style.right = "10px";
        cerrarBtn.style.fontSize = "20px";
        cerrarBtn.style.background = "transparent";
        cerrarBtn.style.border = "none";
        cerrarBtn.style.color = "#000"; // Cambia el color de la cruz a negro
        cerrarBtn.style.cursor = "pointer";
    
        // Estilos para los botones dentro de la alerta modal
        const botonesModal = contenidoModal.querySelectorAll("button");
        botonesModal.forEach(boton => {
          boton.style.padding = "10px 20px";
          boton.style.fontSize = "16px";
          boton.style.borderRadius = "5px";
          boton.style.backgroundColor = "#9340FF";
          boton.style.color = "#fff";
          boton.style.border = "none";
          boton.style.cursor = "pointer";
          boton.style.marginTop = "10px";
        });
    
        // Estilos para los contenedores de servicio
        const contenedoresServicio = contenidoModal.querySelectorAll(".servicio-container");
        contenedoresServicio.forEach(contenedor => {
          contenedor.style.display = "flex";
          contenedor.style.alignItems = "center";
          contenedor.style.marginBottom = "10px";
        });
    
        // Estilos para los casilleros de selección
        const checkboxes = contenidoModal.querySelectorAll("input[type=checkbox]");
        checkboxes.forEach(checkbox => {
          checkbox.style.marginRight = "10px";
        });
    
        // Agregar la alerta modal al cuerpo del documento
        document.body.appendChild(modal);
      });
    });