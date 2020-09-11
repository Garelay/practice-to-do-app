document.addEventListener('DOMContentLoaded', () => {
    const ul = document.querySelector('#to_do_list')
    const toDoDB = ['Do something']
    const btn = document.querySelector('#btn')
    const userInput = document.querySelector('#user_Input')
    function renderList() {
        ul.innerText = ''
        toDoDB.forEach((item) => {
            const li = document.createElement('li')
            li.classList.add('list_item')
            li.innerHTML = `${item}
                <div class="delete"></div>`
            ul.append(li)
        })
    }
    function addItem() {
        btn.addEventListener('click', () => {
            if (userInput.value) {
                toDoDB.push(userInput.value)
                renderList()
                userInput.value = ''
            }
        })
    }
    function deleteItem() {
        ul.addEventListener('click', (e) => {
            const btnDelete = ul.querySelectorAll('.delete')
            btnDelete.forEach((item, i) => {
                if (e.target === item) {
                    toDoDB.splice(i, 1)
                    renderList()
                }
            })
        })
    }
    renderList()
    deleteItem()
    addItem()
})
