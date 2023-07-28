const inp = document.getElementById(`inp`);
const inp2 = document.getElementById(`inp2`);
const btn = document.getElementById(`btn`);
const id = new Date().getSeconds().toString();


// btn.addEventListener (`click`, () =>{
//     AddToLocalStorage( id, inp.value);
// })
btn.addEventListener('click', (() => {
    AddToLocalStorage(id, inp.value);
    console.log(AddToLocalStorage);
}))

function getLocalStore(list){
    return JSON.parse(localStorage.getItem(`list`)) ? localStorage.getItem(`list`) : [ ]
}

function AddToLocalStorage(id, value) {
    const todo = { id , value };
    let items = getLocalStore();
    items.push(todo);
    localStorage.setItem("list", JSON.stringify(items));
}

btn.addEventListener(`click`, () =>{
        // AddToLocalStoraga( id, inp2.value);
        AddToLocalStoraga( id, inp2.value);
        console.log(AddToLocalStoraga);
    })
    

function getLocalStora(lists) {
    return JSON.parse(localStorage.getItem(`lists`)) ? localStorage.getItem(`lists`) : [ ]
    
}

function AddToLocalStoraga(id, value) {
    const todolist ={ id, value};
    let items = getLocalStora();
    items.push(todolist);
    localStorage.setItem("list", JSON.stringify(items))
    
}

