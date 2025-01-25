
import {  Route, Routes } from 'react-router-dom';
import RestaurantList from './pages/RestaurantList'
import Card from './components/Card'
import 'bootstrap/dist/css/bootstrap.min.css';

function App() {

  return (
    <div className="App">
       <Routes>
        <Route path="/" element={<Card />}/>      
        <Route path="/restaurant-list" element={<RestaurantList />}/>
       </Routes>
    </div>
  );
}

export default App;
