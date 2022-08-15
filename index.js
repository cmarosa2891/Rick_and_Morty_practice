const URL = 'https://rickandmortyapi.com/api/character'

window.addEventListener('load', () => {
    const character = document.getElementById('characters')
    const ul = document.createElement('ul')
    const data = JSON.parse(localStorage.getItem('characters'))

    const getData = () => {
        return fetch(URL)
            .then(response => response.json()) //convierte array en objeto 
            .then(characters => localStorage.setItem('characters', JSON.stringify(characters.results.flatMap(item => ({
                id: item.id,
                image: item.image,
                name: item.name,
                species: item.species,
                status: item.status
            })))))
    }

    getData()

    data && data.map(item => {
        console.log(item)
        const li = document.createElement('li')
        const img = document.createElement('img')
        const span = document.createElement('span')
        span.appendChild(document.createTextNode(item.name))
        span.appendChild(document.createTextNode(' - '))
        span.appendChild(document.createTextNode(item.species))
        span.appendChild(document.createTextNode(' - '))
        span.appendChild(document.createTextNode(item.status))
        img.src = item.image
        //li.appendChild(document.createTextNode(item.image))
        li.appendChild(img)
        li.appendChild(span)
        ul.appendChild(li)
        character.appendChild(ul)

    })
})