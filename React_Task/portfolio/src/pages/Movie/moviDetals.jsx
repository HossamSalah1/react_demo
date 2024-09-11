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
            const res = await axios.get(`https://api.themoviedb.org/3/movie/${id}?api_key=6fe928fe9cefd10553636eccd0b90a03`);
            console.log(res.data);
            setMovie(res.data);



        } catch (err) {
            console.log(err);
        }
    }

    useEffect(() => {
        getMoviById();
    },[]);
    return <div>
        

        <div className="d-flex justify-content-center align-items-center" >
    <Card style={{ width: "400px", textAlign: "center" }}>
        <Card.Img 
            variant="top" 
            src={`https://image.tmdb.org/t/p/original/${movie.backdrop_path}`} 
            style={{ width: "100%", height: "400px" }} 
        />
        <Card.Body>
            <Card.Title>Title: {movie.title}</Card.Title>
            <Card.Text>
                Original Title: {movie.original_title}
            </Card.Text>
            <Card.Text>
                Popularity: {movie.popularity}
            </Card.Text>
            <Card.Text>
                Release Date: {movie.release_date}
            </Card.Text>
            <Card.Text>
                Overview: {movie.overview}
            </Card.Text>
        </Card.Body>
    </Card>
</div>

    </div>;
}

export default MoviDetals
