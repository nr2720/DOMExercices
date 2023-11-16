const list = document.querySelector('ul');
const button = document.querySelector('#button1')


function addList() {
    let n = document.querySelector('#item').value;
    const item = document.createElement('li');
    item.textContent = n;
    list.appendChild(item);
}

