let tasklist=[]
displayTask()


function displayTask(){
  let ul=document.getElementById("mytasks");
  ul.innerHTML=""

  if(tasklist.length==0){
    ul.innerHTML=`<p class="anytask">No any task!</p>`
  } else{
  for (let task of tasklist){

    let li=`
    <li>
    <div id="${task.id}" class="task-list">
      <input onclick="checkTask(this)" type="checkbox" class="checkbox"  id="${task.id}">
      <label for="${task.id}">${task.taskname}</label>
      <button onclick="deleteTask()" id="${task.id}" class="deletebutton">X</button>
    </div>
  </li>`

  ul.insertAdjacentHTML("beforeend",li)
  }}
}
document.querySelector("#addbutton").addEventListener("click",newTask);

const taskInput=document.querySelector("#input");
function newTask(){
  if(taskInput.value==""){
    alert ("Please write any task")
  } else {
    tasklist.push({"id":tasklist.length, "taskname":taskInput.value});
    taskInput.value="";
    displayTask()
  }
}
function deleteTask(id){
  let deletedid;
  for(let index in tasklist){
    if(tasklist[index].id==id){
      deletedid=index
    }
  }
  tasklist.splice(deletedid,1);
  displayTask()
}
let clearbutton=document.getElementById("clear")
clearbutton.addEventListener("click",()=>{
  tasklist.splice(0,tasklist.length);
  displayTask()
})
function checkTask(selectedTask){
  let label=selectedTask.nextElementSibling

  if(selectedTask.checked){
    label.classList.add("checked")
  }else {
    label.classList.remove("checked")
  }
}