import './App.css';
import { BrowserRouter, Switch, Route } from 'react-router-dom';
import ListOfCreatures from './components/ListOfCreatures.jsx'

function App() {
  return (
    <BrowserRouter>
      <Switch>
        <Route exact path="/" component={ListOfCreatures}></Route>
      </Switch>
    </BrowserRouter>
  );
}

export default App;
