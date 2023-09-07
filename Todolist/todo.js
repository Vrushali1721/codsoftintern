

document.querySelector('#add').onclick = function(){
     if(document.querySelector('input').value.length == 0){
         alert("Please Enter a Task")
     }
     else{
         document.querySelector('#list-item').innerHTML += `
             <ul class="task">
                 <li id="taskname">
                     ${document.querySelector('input').value}
                 </li>
                 <button class="delete">
                  X
                 </button>
             </ul>
                      `;
 
         var current_tasks = document.querySelectorAll(".delete");
         for(var i=0; i<current_tasks.length; i++){
             current_tasks[i].onclick = function(){
                 this.parentNode.remove();
             }
                      }
 
         var tasks = document.querySelectorAll(".task");
         for(var i=0; i<tasks.length; i++){
             tasks[i].onclick = function(){
                 this.classList.toggle('completed');
             }
                      }
 
         document.querySelector("input").value = "";
     }
 }
