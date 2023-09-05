let $ = document;
let addItem = $.getElementById("add");
let inputElem = $.getElementById("input");
let uiElem = $.getElementById("list");
let newIconElem;
let newUiElem;
addItem.addEventListener("click" , function () {
    if(inputElem.value){
        createRemove();
        inputElem.value = null;
    }
});
function createRemove () {
    //create li
    newUiElem = $.createElement("li");
    newUiElem.innerHTML = inputElem.value;
    uiElem.appendChild(newUiElem);

    //create "trash-icon" and delete "li" Element 
    newIconElem = $.createElement("i");
    newIconElem.setAttribute("class" , "fa fa-trash trash-icon");
    newIconElem.style.marginRight = "1rem";
    newIconElem.addEventListener("click" , rmLi)
    newUiElem.append(newIconElem);
}
function rmLi () {
    this.parentElement.remove();
}
