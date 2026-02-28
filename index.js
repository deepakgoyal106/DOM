// Retrieve HTML element thru DOM
const textArea = document.querySelector(".textarea");
const button = document.querySelector(".buttoninput");
const toDoList = document.querySelector(".todolist");

// add event listener
button.addEventListener("click", addToDoListItem);

//function 
function addToDoListItem(){
    //create elements
   const toDoDiv = document.createElement("div");
   const item = document.createElement("p");
   const deleteButton = document.createElement("button");
   //add css properties
   toDoDiv.classList.add("itemall")
   item.classList.add("item");
   deleteButton.classList.add("trash-button");
   // get and set value
   const value = textArea.value;
   deleteButton.innerHTML = `<i class="fa-solid fa-trash-can-arrow-up"></i>`

   if(value == "")return 
   item.innerHTML = value;
   //append 
   toDoDiv.appendChild(item);
   toDoDiv.appendChild(deleteButton);
   toDoList.appendChild(toDoDiv);
    // add event listener
   toDoList.addEventListener("click", deleteItem);
}

function deleteItem(e){
    const dItem = e.target;
    if(dItem.classList[0] === "trash-button"){
        const parentItem = dItem.parentNode;
        parentItem.remove();
    }else{
         const parentItem = dItem.parentNode.parentNode;
        parentItem.remove();
    }
    
}

