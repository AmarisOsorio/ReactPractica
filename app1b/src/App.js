import logo from './logo.svg';
import './App.css';
import Accordion from './components/Accordion';
import Buttons from './components/Buttons';
import Alerts from './components/Alerts';
import Card from './components/Card';
import ListCard from './components/ListGroupsCard';
import Carousel from './components/Carousel';
import CarouselSlide from './components/CarouselSlide';

function App() {
  return (
    <>
   
     <h1>Practica</h1>
     <br></br>
     <br></br>
     
     <Accordion /> 
     <br></br>
     <br></br>
     <Buttons />
     <br></br>
     <br></br>
     <Alerts />
     <br></br>
     <br></br>
     <Card />
     <br></br>
     <br></br>
     <ListCard/>
     <br></br>
     <br></br>
     <Carousel />
     <br></br>
     <br></br>
     <CarouselSlide />
    </>
  );
}

export default App;
