import { useState, useEffect } from "react";
import FilmCard from "./components/FilmCard";
import NavBar from "./components/NavBar";
import WelcomeModal from "./components/WelcomeModal";
import { getFilmList, updateAndSaveFilmList } from "./services/filmServices";
import styled from "styled-components";

const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  // grid-template-columns: 1
  // grid-template-columns: repeat(auto-fill, 450px);
  // grid-gap: 60px;
  margin-bottom: 30px;
  margin-top:80px;
`;

const App = () => {
  const [filmList, setFilmList] = useState([]);

  // when film array returns empty need to show 'Welcome to Star Wars World!'
  // divide into header and container

  useEffect(() => {
    getFilmList(setFilmList);
  }, []);

  const favoriteToggle = (e) => {
    updateAndSaveFilmList(e, filmList, setFilmList);
  };

  return (
    <div>
      <WelcomeModal />
      <NavBar />
      <Container>
        {filmList.length &&
          filmList.map((film) => {
            return (
              <FilmCard
                key={film.episode_id}
                favoriteToggle={favoriteToggle}
                film={film}
              />
            );
          })}
      </Container>
    </div>
  );
};

export default App;
