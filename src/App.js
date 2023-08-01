import './App.css';
import { GlobalStyle } from './GlobalStyle';
import Header from './component/header';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import Home from './component/pages/home';
import Movie from './component/pages/movie';
import NotFound from './component/pages/notfound';




function App() {
  return (
    <>
      <Header />
      <Router>
        <Switch>
            <Route exact path='/' component={Home}/>
            <Route exact path='/:movieId' component={Movie}/>
            <Route exact component={NotFound}/>
        </Switch>
      </Router>
      

      <GlobalStyle />
    </>
  );
}

export default App;
