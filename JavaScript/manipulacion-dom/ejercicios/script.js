function agregarTarea() {
   const entradaTarea = document.getElementById('entrada-tarea');
   
  


   // Crear un nuevo elemento de lista (li)
   const tarea = document.createElement('li');
   tarea.textContent = textoTarea;


   let checkbox = document.createElement('input')
   checkbox.type = "checkbox"
   tarea.append(checkbox)

   tarea.onclick = function() {
       tareaElemento.style.textDecoration = 'line-through';
   };


   // Agregar la nueva tarea a la lista
   document.getElementById('lista-tareas').appendChild(tarea);

   checkbox.addEventListener('change', function(){
    if (checkbox.checked){
        terea.remove()
    }

   })
}