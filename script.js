var createButton = document.getElementById("createButton");

function createTask() {

    /*
Structure of todo list:

    menuElements = div that contains purposes
    porpose = div that contain element of todolist
        p - text of purpose
        done - checkbox of done/undone
        deleteButton - button for deleting purpose
    ol/li = list of purposes
    */

    var ol = document.getElementById('tasks');
    var li = document.createElement('li');
    ol.appendChild(li);

    var purpose = document.createElement('div'); 
    var menuElements = document.getElementById("menuElements");
    menuElements.appendChild(purpose);
    purpose.classList.add('purpose');

    ol.lastChild.appendChild(purpose);

    var input = document.getElementById("textValue");

    var p = document.createElement('p');
    p.id = "p";
    p.classList.add('taskText');
    p.innerHTML = input.value; 

    purpose.appendChild(p);

    var deleteButton = document.createElement('button');
    deleteButton.classList.add('deleteButton');
    purpose.appendChild(deleteButton);
    deleteButton.innerHTML = "X";

    var done = document.createElement('input');
    done.type = 'checkbox';
    purpose.appendChild(done);
    var status = document.createElement('p');
    purpose.appendChild(status);
    status.classList.add('status');

    done.onclick = function() {
    if (done.checked) 
    { 
        status.innerHTML = 'DONE';
    }
        else {

            status.innerHTML = "";
        }
    }

    deleteButton.onclick = function() {
        li.remove();
    }
}



createButton.onclick = function() {
    createTask();
}

var init = function() {

}

window.onload = init;

