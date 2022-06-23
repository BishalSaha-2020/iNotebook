
import './App.css';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link,
 
} from "react-router-dom";
import Navbar from './components/Navbar';
import Home from './components/Home';
import About from './components/About';
import NoteState from './context/notes/NoteState';
import Alert from './components/Alert';




function App() {
  return (
    <>
    <NoteState>
  <Router>
  <Navbar/>
  <Alert message="This is amazing"/>
  <Switch>
  
          <Route exact path="/Home"><Home></Home></Route>
          <Route exact path="/About"><About></About></Route>
         
            
          
        
        </Switch>
        

  </Router>
 
 </NoteState>
      
    </>
  
 


  );
}

export default App;
