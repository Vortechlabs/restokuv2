import logo from './logo.svg';
import './App.css';
import { getRestaurantList } from './api'
import { useEffect } from 'react';
import {  Route, Routes } from 'react-router-dom';
import RestaurantList from './pages/RestaurantList'

function App() {
  useEffect(() => {
    getRestaurantList()
  },[])

  return (
    <div className="App">
       <Routes>
        <Route path="/restaurant-list" element={<RestaurantList />}/>
       </Routes>
    </div>
  );
}

export default App;
