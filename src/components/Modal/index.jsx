import { useEffect, useState } from "react";
import { Background, Container } from "./styles";
import api from "../../services/api";

function Modal({ movieId, setShowModal }) {
  const [movieTrailer, setMovieTrailer] = useState();

  useEffect(() => {
    async function getMovies() {
      const {
        data: { results },
      } = await api.get(`/movie/${movieId}/videos`);

      setMovieTrailer(results[0]);
    }

    getMovies();
  }, []);

  return (
    <Background onClick={() => setShowModal(false)}>
      {movieTrailer && (
        <Container>
          <button onClick={() => setShowModal(false)}>X</button>
          <iframe
            src={`https://www.youtube.com/embed/${movieTrailer.key}`}
            title="YouTube video player"
            height="500px"
            width="100%"
          ></iframe>
        </Container>
      )}
    </Background>
  );
}

export default Modal;
