function agregarTarea() {
   const entradaTarea = document.getElementById('entrada-tarea').value;
   
  


   // Crear un nuevo elemento de lista (li)
   const tarea = document.createElement('li');
   const parrafo = document.createElement('p')
   parrafo.textContent = entradaTarea;
    // console.log("logea tarea: ", tarea);
    

   let checkbox = document.createElement('input')
   checkbox.type = "checkbox"
   tarea.append(parrafo,checkbox)

   checkbox.onchange = function() {
     if (checkbox.checked){
        parrafo.style.textDecoration = 'line-through';
    }
   };


   // Agregar la nueva tarea a la lista
   document.getElementById('lista-tareas').appendChild(tarea);

   /*
   checkbox.addEventListener('change', function(){
    if (checkbox.checked){
        tarea.remove()
    }

   })

*/   }