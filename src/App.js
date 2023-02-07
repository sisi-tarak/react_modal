import './App.css';
import {BrowserRouter, Route, Switch} from "react-router-dom";
import { Provider } from './Components/Context';
import CardSection from './Components/CardSection';

function App() {
  return (
    <Provider>
        <BrowserRouter>
              <Route exact path='/'>
                <CardSection/>
              </Route>
        </BrowserRouter>
    </Provider>
  );
}

export default App;
