import './App.css';
import ListadoPeliculas from './ListadoPeliculas';
import Bloc from './Bloc';
import { BrowserRouter,  Routes ,Route , Switch } from 'react-router-dom';


function App() {

  return (
    <BrowserRouter>
      <Switch>
        <Route path="/">
          <ListadoPeliculas />
        </Route>
        <Route path="/bloc">
          <Bloc />
        </Route>
      </Switch>
    </BrowserRouter>
  );
}

export default App;