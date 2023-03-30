//selector
const movielistEl = document.querySelector('.movie-list')
const list = document.querySelector('.list')
const listEl = document.querySelector('.submit_form')
// const newEl = document.createElement('div')


{/* 
    <div class="movie_name">
        <li style="justify-self: center;">Movie Name</li>
        <button class='trash_button'><i class="fa-solid fa-trash" style="font-size: 1.6rem;"></i></button>
    </div>
*/}

listEl.addEventListener('submit', function (event) {
    event.preventDefault()
    const newEl = document.createElement('div')
    newEl.classList.add('movie_name')
    movielistEl.appendChild(newEl)

    const listEl = document.createElement('li')
    newEl.appendChild(listEl)
    listEl.textContent = list.value

    const btnEl = document.createElement('button')
    btnEl.classList.add('trash_button')
    newEl.appendChild(btnEl)

    btnEl.innerHTML = '<i class="fa-solid fa-trash" style="font-size: 1.6rem;"></i>'
})
