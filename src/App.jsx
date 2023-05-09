import React from 'react'
import { useState } from 'react';
import { Route, Routes, useLocation } from 'react-router-dom';
import Base from './Components/Base';
import Header from './Components/Header';
import Home from './Components/Home';
import Order from './components/Order';
import Toppings from './Components/Toppings';
import { AnimatePresence } from 'framer-motion';
import Modal from './Components/Modal';

export default function App() {

  const location=useLocation()
  const [pizza, setPizza] = useState({ base: "", toppings: [] });
  const [showModal, setShowModal]=useState(false)

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
      <Modal     showModal={showModal}  setShowModal={setShowModal}  />
      <AnimatePresence  mode="wait"    onExitComplete={()=>{setShowModal(false)}}>
        <Routes  location={location} key={location.key}>
         <Route path="/base" element ={<Base  addBase={addBase} pizza={pizza} />}/>
         <Route path="/toppings" element ={<Toppings addTopping={addTopping} pizza={pizza} />}/>
         <Route path="/order" element={<Order pizza={pizza}   setShowModal={setShowModal}/>}/>
         <Route path="/"   element={<Home/>  }/>
        </Routes>
      </AnimatePresence>
    </>
  )
}
