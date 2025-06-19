const title = document.querySelector('input[name="title"]');
const description = document.querySelector('textarea');
const submitBtn = document.querySelector('#submit');
const notesList = document.querySelector('#displayNotes');

submitBtn.addEventListener('click', (event) => {
    event.preventDefault();

    const currentTitle = title.value.trim();
    const currentDescription = description.value.trim();

    if (!currentTitle || !currentDescription) {
        alert("Both title and description are required.");
        return;
    }

    const newNote = document.createElement('div');
    newNote.className = "notes";

    const newTitle = document.createElement('h3');
    newTitle.className = 'title';
    newTitle.innerText = currentTitle;

    const newDescr = document.createElement('p');
    newDescr.className = 'description';
    newDescr.innerText = currentDescription;

    const deleteBtn = document.createElement('button');
    deleteBtn.innerText = "Delete";
    deleteBtn.className = "delete-btn";

    const updateBtn = document.createElement('button');
    updateBtn.innerText = 'Update';
    updateBtn.className = 'update-btn';

    const updTitle = document.createElement('input');
    updTitle.type = 'text';
    updTitle.style.display = 'none';

    const updDescr = document.createElement('textarea');
    updDescr.style.display = 'none';

    const okBtn = document.createElement('button');
    okBtn.innerText = 'OK';
    okBtn.className = 'ok-btn';
    okBtn.style.display = 'none';

    // Append everything
    newNote.appendChild(newTitle);
    newNote.appendChild(newDescr);
    newNote.appendChild(deleteBtn);
    newNote.appendChild(updateBtn);
    newNote.appendChild(updTitle);
    newNote.appendChild(updDescr);
    newNote.appendChild(okBtn);

    notesList.appendChild(newNote);

    // Delete logic
    deleteBtn.addEventListener('click', () => {
        newNote.remove();
    });

    // Update logic
    updateBtn.addEventListener('click', () => {
        updTitle.value = newTitle.innerText;
        updDescr.value = newDescr.innerText;

        newTitle.style.display = 'none';
        newDescr.style.display = 'none';
        updateBtn.style.display = 'none';

        updTitle.style.display = 'block';
        updDescr.style.display = 'block';
        okBtn.style.display = 'inline-block';
    });

    // OK button logic
    okBtn.addEventListener('click', () => {
        const updatedTitle = updTitle.value.trim();
        const updatedDescr = updDescr.value.trim();

        if (!updatedTitle || !updatedDescr) {
            alert("Fields cannot be empty.");
            return;
        }

        newTitle.innerText = updatedTitle;
        newDescr.innerText = updatedDescr;

        updTitle.style.display = 'none';
        updDescr.style.display = 'none';
        okBtn.style.display = 'none';

        newTitle.style.display = 'block';
        newDescr.style.display = 'block';
        updateBtn.style.display = 'inline-block';
    });

    // Clear form fields after adding
    title.value = '';
    description.value = '';
});
