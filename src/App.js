import { useState, useEffect } from "react";
import FilmCard from "./components/FilmCard";
import Header from "./Header";
import getFilmList from "./utils/utils";
import styled from "styled-components";
import img from "./assets/images/background.jpg"                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                        

const AppWrapper = styled.div`
  text-align: center;
  background-image: url(${img});
`;

const AppHeader = styled.div`
  background-color: #222;
  height: 150px;
  padding: 20px;
  color: white;
`;
const AppTitle = styled.h1`
  font-size: 1.3em;
`;

const App = () => {
  const [filmList, setFilmList] = useState([]);

  // when film array returns empty need to show 'Page Under Maintenance' - how to do it
  // divide into header and container

  useEffect(() => {
    const filmsArray = window.localStorage.getItem("filmsArray");
    filmsArray
      ? setFilmList(JSON.parse(filmsArray))
      : setFilmList(getFilmList());
  }, []);

  return (
    <AppWrapper>
      <AppHeader>
        <Header />
      </AppHeader>
      {filmList.length &&
        filmList.map((film) => {
          return <FilmCard key={film.episode_id} film={film} />;
        })}
    </AppWrapper>
  );
};

export default App;
