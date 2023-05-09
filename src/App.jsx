import React from 'react'
import { useState } from 'react';
import { Route, Routes, useLocation } from 'react-router-dom';
import Base from './Components/Base';
import Header from './Components/Header';
import Home from './Components/Home';
import Order from './components/Order';
import Toppings from './Components/Toppings';
import { AnimatePresence } from 'framer-motion';

export default function App() {

  const location=useLocation()
  const [pizza, setPizza] = useState({ base: "", toppings: [] });

  const addBase = (base) => {
    setPizza({ ...pizza, base })
  }
  
  const addTopping = (topping) => {
    let newToppings;
    if(!pizza.toppings.includes(topping)){
      newToppings = [...pizza.toppings, topping];
    } else {
      newToppings = pizza.toppings.filter(item => item !== topping);
    }
    setPizza({ ...pizza, toppings: newToppings });
  }
  
  return (
    <>
      <Header/>
      <AnimatePresence  mode="wait">
        <Routes  location={location} key={location.key}>
         <Route path="/base" element ={<Base  addBase={addBase} pizza={pizza} />}/>
         <Route path="/toppings" element ={<Toppings addTopping={addTopping} pizza={pizza} />}/>
         <Route path="/order" element={<Order pizza={pizza} />}/>
         <Route path="/"   element={<Home/>  }/>
        </Routes>
      </AnimatePresence>
    </>
  )
}
