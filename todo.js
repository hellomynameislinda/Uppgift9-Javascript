const form = document.querySelector('#add-new-form');
form.addEventListener('submit', function (event) {
    event.preventDefault(); // To make sure we don't submit

    const output = document.querySelector('#todo-list');

    const newItem = form.elements['add-new-item'].value;
    event.target.reset();

    document.querySelector('#new-list-message').className = "invisible";

    let li = document.createElement('li');
    li.className = 'list-group-item d-flex bd-highlight';

    let div = document.createElement('div');
    div.className = "flex-grow-1";
    div.id ="list-item-1"
    div.innerHTML = newItem;
    div.addEventListener('click', (e) => {
        e.target.classList.toggle('text-decoration-line-through')
    })
    li.appendChild(div);

    let button = document.createElement('button');
    button.className = "btn";
    button.id ="list-button-1"
    button.innerHTML = '<i class="bi bi-trash3"></i>';
    button.addEventListener('click', (e) => {
        e.currentTarget.parentNode.remove();
    })
    li.appendChild(button);

    output.appendChild(li);
});
