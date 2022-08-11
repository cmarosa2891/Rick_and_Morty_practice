const URL = 'https://rickandmortyapi.com/api/character'

window.addEventListener( 'load', () => {
    const character = document.getElementById( 'character' )
    const ul = document.createElement( 'ul' )
    const data = JSON.parse( localStorage.getItem( 'characters' ) )

    const getData = () => {
        return fetch( URL )
            .then( response => response.json() ) //convierte array en objeto 
            .then( characters => localStorage.setItem( 'characters', JSON.stringify( characters.results.flatMap( item => ( { id: item.id, image: item.image } ) ) ) ) )
    }

    getData()

// MINUTO 48

    if ( data.length ) {
        data.map( item => {
            console.log( item )
            const li = document.createElement( 'li' )
            const img = document.createElement( 'img' )
            li.appendChild( document.createTextNode( item.image ) )
            ul.appendChild( li )
            character.appendChild( li )
        } )

    }


} )