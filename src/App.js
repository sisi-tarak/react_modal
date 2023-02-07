import './App.css';
import {BrowserRouter, Route, Switch} from "react-router-dom";
import Navbar from './Components/Navbar';
import Footer from './Components/Footer';
import NotFound from './Components/NotFound';
import { Provider } from './Components/Context';
import ScrollToTop from './Components/ScrollToTop';
import RecommendationSection from './Components/RecommendationSection';
import AddRecommendation from './Components/AddRecommendaion';

function App() {
  return (
    <Provider>
        <BrowserRouter>
        <ScrollToTop/>
          <Navbar/>
            <Switch>
              <Route exact path='/'>
                <RecommendationSection/>
              </Route>
              <Route exact path='/recommendation/add'>
                <AddRecommendation/>  
              </Route>  
              <Route component={NotFound} />
            </Switch>
          <Footer />
        </BrowserRouter>
    </Provider>
  );
}

export default App;
