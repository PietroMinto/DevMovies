import { useEffect, useState } from "react";
import Slider from "../../components/Slider";
import {
  Background,
  Container,
  ContainerButtons,
  Info,
  Poster,
} from "./styles";
import Modal from "../../components/Modal";
import Button from "../../components/Button";
import {
  getMovieNewPlaying,
  getMovies,
  getTopMovies,
  getUpcomingMovies,
} from "../../services/getData";
import { getImages } from "../../utils/getImages";
import { useNavigate } from "react-router-dom";

function Filmes() {
  const navigate = useNavigate();

  const [showModal, setShowModal] = useState(false);
  const [movie, setMovie] = useState();
  const [topMovies, setTopMovies] = useState();
  const [movieUpcoming, setMovieUpcoming] = useState();
  const [movieNewPlaying, setMovieNewPlaying] = useState();

  useEffect(() => {
    async function getAllData() {
      Promise.all([
        getMovies(),
        getTopMovies(),
        getUpcomingMovies(),
        getMovieNewPlaying(),
      ]).then(([movie, movieUpcoming, topMovie, movieNewPlaying]) => {
        setMovie(movie);
        setTopMovies(topMovie);
        setMovieUpcoming(movieUpcoming);
        setMovieNewPlaying(movieNewPlaying);
      });
    }
    getAllData();
  }, []);
  return (
    <>
      {movie && (
        <Background img={getImages(movie.backdrop_path)}>
          {showModal && (
            <Modal movieId={movie.id} setShowModal={setShowModal} />
          )}
          <Container>
            <h2> Filme Do Momento </h2>
            <Info>
              <h1>{movie.title}</h1>
              <p>{movie.overview}</p>
              <ContainerButtons>
                <Button
                  onClick={() => navigate(`/detalhe/${movie.id}`)}
                  red={true}
                >
                  Assista Agora
                </Button>
                <Button onClick={() => setShowModal(true)} red={false}>
                  Assista o Trailer
                </Button>
              </ContainerButtons>
            </Info>
            <Poster>
              <img alt="capa-do-filme" src={getImages(movie.poster_path)} />
            </Poster>
          </Container>
        </Background>
      )}

      {movieNewPlaying && (
        <Slider info={movieNewPlaying} title="Filmes em Produção" />
      )}
      {topMovies && <Slider info={topMovies} title="Filmes em lançamento" />}
      {movieUpcoming && <Slider info={movieUpcoming} title="Top Filmes" />}
    </>
  );
}

export default Filmes;
