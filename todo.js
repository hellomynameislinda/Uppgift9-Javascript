const form = document.getElementById('add-new-form');
form.addEventListener('submit', function (event) {
    event.preventDefault(); // To make sure we don't submit

    const output = document.getElementById('todo-list');

    const newItem = form.elements['add-new-item'].value;
    form.elements['add-new-item'].value = "";
    let li = document.createElement('li');
    li.innerHTML = `<input class="form-check-input me-1" type="checkbox" value="" id="thirdCheckboxStretched"><label class="form-check-label stretched-link" for="thirdCheckboxStretched">${newItem}</label>`;
    li.className = 'list-group-item';




    /*    for (let index = fromNum; index <= toNum; index++) {
            if ((index % bishNum == 0) && (index % boshNum == 0))
                outputString += 'Bish-Bosh';
            else if (index % bishNum == 0)
                outputString += 'Bish';
            else if (index % boshNum == 0)
                outputString += 'Bosh';
            else
                outputString += index;
    
            if (index < toNum)
                outputString += ', '
        }
        */
    output.appendChild(li);
});