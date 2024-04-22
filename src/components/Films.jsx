import { useState } from 'react';

import { Container } from 'react-bootstrap';

export default function Films() {


    const films = [
        "Friday the 13th", 'Spiderman: Into the Spiderverse ', 'Little Mermaid', 'Mario Movie', 'Barbie', 'Castle in the Sky'
    ];

    const [ filmSelected, setFilmSelected ] = useState('?');
    console.log(filmSelected);

    function getRandomFilm() {
        return films[Math.floor(Math.random() * films.length)]
    }

    return (
        <Container>
            <div>
                <p>Film Choice: {filmSelected}</p>
                <button onClick={()=>{
                    setFilmSelected( getRandomFilm() );
                }}>Random Film!</button>
            </div>
        </Container>
    )
}