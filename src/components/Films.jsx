import { useEffect, useState } from 'react';

import { Container } from 'react-bootstrap';

export default function Films() {

    const [films, setFilms] = useState([]);
    console.log(films);
    useEffect(() => {
        (async () => {
            await getFilms();
        })()
    }, [])

    async function getFilms() {
        const res = await fetch ('http://127.0.0.1:5000/film')
        if (res.ok) { 
            const data = await res.json();
            console.log(data);
            setFilms(data);
        } else console.error("Failed to load posts")
    }
    // const films = [
    //     "Friday the 13th", 'Spiderman: Into the Spiderverse ', 'Little Mermaid', 'Mario Movie', 'Barbie', 'Castle in the Sky'
    // ];

    // const [ filmSelected, setFilmSelected ] = useState('?');
    // console.log(filmSelected);

    // function getRandomFilm() {
    //     return films[Math.floor(Math.random() * films.length)]
    // }

    return (
        <Container>
            <div>
                <h2>Films</h2>

                {/* <p>Film Choice: {filmSelected}</p>
                <button onClick={()=>{
                    setFilmSelected( getRandomFilm() );
                }}>Random Film!</button> */}
            </div>
        </Container>
    )
}