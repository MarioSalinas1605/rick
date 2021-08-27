import './App.css';
import { BrowserRouter, Switch, Route } from 'react-router-dom';
import ListOfCreatures from './components/ListOfCreatures.jsx'
import CreatureDetail from './components/CreatureDetail.jsx'

function App() {
  return (
    <BrowserRouter>
      <Switch>
        <Route exact path="/" component={ListOfCreatures}></Route>
        <Route exact path="/creatures/:creatureId" component={CreatureDetail}></Route>
        {/* <Route component={NotFound}></Route> */}
      </Switch>
    </BrowserRouter>
  );
}

export default App;
