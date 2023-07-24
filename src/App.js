import './App.css';
import { GlobalStyle } from './GlobalStyle';
import Thumb from './component/thumb';
import Grid from './component/grid';
import Banner from './component/banner';
import Header from './component/header';

function App() {
  return (
    <>
      <Header />

      <Banner image={"https://i.ytimg.com/vi/ZtuFgnxQMrA/maxresdefault.jpg"}
        tittle={"Transformers: Rise Of the Beasts"}
        text={"lorem, The final Journey is set"} />

      <Grid header={"popular movies"}>
        <Thumb image={"https://i.ytimg.com/vi/ZtuFgnxQMrA/maxresdefault.jpg"}
          movieId={"1"}
          clickable={true} />

        <Thumb image={"https://i.ytimg.com/vi/ZtuFgnxQMrA/maxresdefault.jpg"}
          movieId={"1"}
          clickable={true} />

        <Thumb image={"https://i.ytimg.com/vi/ZtuFgnxQMrA/maxresdefault.jpg"}
          movieId={"1"}
          clickable={true} />

        <Thumb image={"https://i.ytimg.com/vi/ZtuFgnxQMrA/maxresdefault.jpg"}
          movieId={"1"}
          clickable={true} />


        <Thumb image={"https://i.ytimg.com/vi/ZtuFgnxQMrA/maxresdefault.jpg"}
          movieId={"1"}
          clickable={true} />

        <Thumb image={"https://i.ytimg.com/vi/ZtuFgnxQMrA/maxresdefault.jpg"}
          movieId={"1"}
          clickable={true} />



      </Grid>





      <GlobalStyle />
    </>
  );
}

export default App;
