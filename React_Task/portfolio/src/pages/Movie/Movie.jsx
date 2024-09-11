import axios from "axios";
import { useEffect, useState } from "react"
import { Card, Col, Row } from "react-bootstrap";
import { useNavigate } from "react-router-dom";

function Movie() {
    const navigate=  useNavigate()

    const [movies, setMovie] = useState([]);
    
    useEffect(() => {
        axios
            .get("https://api.themoviedb.org/3/trending/all/day?api_key=6fe928fe9cefd10553636eccd0b90a03")
            .then((res) => {
                console.log(res.data.results);
                setMovie(res.data.results);
            })
            .catch((err) => {
                console.log(err);
            });
    }, []);


    return <>
        <Row xs={1} md={4} className="g-4">
            {movies.map((movi) => (
                <Col key={movi.id}>
                    <Card>
                        <Card.Img variant="top" src={`https://image.tmdb.org/t/p/original/${movi.backdrop_path}`} style={{height:"400px"}} />
                        <Card.Body>
                            <Card.Title>title :{movi.title}</Card.Title>
                            <Card.Text>
                            original_title:  {movi.original_title}
                            </Card.Text>
                            <Card.Text>
                            popularity: {movi.popularity}
                            </Card.Text>
                            <Card.Text>
                            release_date:  {movi.release_date}
                            </Card.Text>
                        </Card.Body>

                        <button className="btn btn-primary" onClick={() => {
                            navigate(`/movieDetails/${movi.id}`)
                        }}> details</button>
                    </Card>
                </Col>
            ))}
        </Row>





    </>;

}

export default Movie
