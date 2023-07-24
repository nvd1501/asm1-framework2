
import { useState } from 'react';
import './App.css';

import { ICar } from './interface/Cars';
import ProductList from './components/ProductList';



const carsData = [
  { id: 1, name: "Car A", price: 100 },
  { id: 2, name: "Car B", price: 200 },
  { id: 3, name: "Car B", price: 300 },
];

function App() {
  
  const addCar = (car: ICar) => {
    setCars([...cars, car]);
  };
  const removeCar = (id: number) =>{
    
  };
  const [cars, setCars] = useState<ICar[]>(carsData);


  return (
    <div>
      <ProductList />
    </div>
  )
}

export default App
