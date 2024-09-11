import axios from "axios";
import { useEffect, useState } from "react";
import { Card } from "react-bootstrap";
import { useParams } from "react-router-dom";

function MoviDetals() {

    const { id } = useParams();
    //console.log(id);

    const [movie, setMovie] = useState({})
    async function getMoviById() {
        try {
            const res = await axios.get("https://api.themoviedb.org/3/movie/945961?api_key=6fe928fe9cefd10553636eccd0b90a03");
            console.log(res.data);
            setMovie(res.data.results);
            


        } catch (err) {
            console.log(err);
        }
    }

    useEffect(() => {
        getMoviById();
    });
    return <div>Movie id is {id}
        <br />
        <Card>
            <Card.Img variant="top" src={movie.image} style={{ width: "400px", height: "400px" }} />
            <Card.Body>
                <Card.Title>{movie.title}</Card.Title>
                <Card.Text>
                    {movie.description}
                </Card.Text>
            </Card.Body>
        </Card>
    </div>;
}

export default MoviDetals
