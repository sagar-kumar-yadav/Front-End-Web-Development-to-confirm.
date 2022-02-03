var btnAdd = document.getElementById('add-item');
var inputBox = document.getElementById('todo-input');
var list = document.getElementById('todo-list');
var btnUpdate = document.getElementById('update-item');
var btnRemove = document.getElementById('remove-item');

var currntInputValue = '';
inputBox.addEventListener('input', function(e) {
    currntInputValue = e.target.value;
});

inputBox.addEventListener('keyup', function(e) {
    if (e.keyCode === 13) {
        addListItem();
    } 
});

function createNewNode() {
    var newListElement = document.createElement('li');
    var textNode = document.createTextNode(currntInputValue);
    newListElement.appendChild(textNode);
    newListElement.id = "item " + (list.childElementCount + 1);

    return newListElement;
}
function addListItem() {
    if (currntInputValue !== undefined && currntInputValue !== null && currntInputValue !== '') {
        var newListElement = createNewNode();    
        list.appendChild(newListElement); 
        console.log(list.childElementCount);

        inputBox.value = ''
        currntInputValue= ''
    }
    else {
        alert('please enter a valid TODO item')
    }
}

btnAdd.addEventListener('click', addListItem);

btnUpdate.addEventListener('click', function() {
    var firstElement = list.firstElementChild;
    var newListElement = createNewNode();

    list.replaceChild(newListElement, firstElement);
});

btnRemove.addEventListener('click', function() {
    var firstElement = list.firstElementChild;

    list.removeChild(firstElement);
});