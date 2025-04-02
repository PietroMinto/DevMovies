import { useNavigate } from "react-router-dom";
import { useState, useEffect } from "react";
import {
  Background,
  Container,
  ContainerButtons,
  Info,
  Poster,
} from "./styles";
import Button from "../../components/Button";
import Slider from "../../components/Slider";
import { getImages } from "../../utils/getImages";
import Modal from "../../components/Modal";
import {
  getMovies,
  getPopularSeries,
  getTopMovies,
  getTopPeople,
  getTopSeries,
  getUpcomingMovies,
} from "../../services/getData";

function Home() {
  const [showModal, setShowModal] = useState(false);
  const [movie, setMovie] = useState();
  const [topMovies, setTopMovies] = useState();
  const [topSeries, setTopSeries] = useState();
  const [popularSeries, setPopularSeries] = useState();
  const [topPeople, setTopPeople] = useState();
  const [movieUpcoming, setMovieUpcoming] = useState();
  const navigate = useNavigate();

  useEffect(() => {
    async function getAllData() {
      setMovie(await getMovies());
      setTopMovies(await getTopMovies());
      setTopSeries(await getTopSeries());
      setPopularSeries(await getPopularSeries());
      setTopPeople(await getTopPeople());
      setMovieUpcoming(await getUpcomingMovies());
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

      {topMovies && <Slider info={topMovies} title="Top Filmes" />}
      {movieUpcoming && (
        <Slider info={movieUpcoming} title="Filmes em lançamento" />
      )}
      {topSeries && <Slider info={topSeries} title="Top Séries" />}
      {popularSeries && (
        <Slider info={popularSeries} title="Séries Populares" />
      )}
      {topPeople && <Slider info={topPeople} title="Artistas mais Famosos" />}
    </>
  );
}

export default Home;
