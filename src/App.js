import './App.css';
import { GlobalStyle } from './GlobalStyle';
import Header from './component/header';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import Home from './component/pages/home';
import Movie from './component/pages/movie';
import NotFound from './component/pages/notfound';
import Longin from './component/pages/longin';
import { MoviesProvider } from './context/moviesProvider';




function App() {
  return (
    <>
      <Header />
      <Router>
        <Switch>
        <Route exact path='/:movieId' component={Movie}/>
        <MoviesProvider>  <Route exact path='/' component={Home}/> </MoviesProvider> 
            <Route exact path='/auth/login' component={Longin}/>
            <Route exact component={NotFound}/>
        </Switch>
      </Router>
      

      <GlobalStyle />
    </>
  );
}

export default App;
