import { useState,useEffect } from "react";
import "./App.css";
import Card from "./Components/Card/Card";
import Cart from "./Components/Cart/Cart";
const { getData } = require("./db/db");
const flowers = getData();

const tele = window.Telegram.WebApp

function App() { 
  const [cartItems, setCartItems] = useState ([]);

  useEffect(()=>{
    tele.ready();
  });

  const onAdd = (flowers) => {
    const exist = cartItems.find((x) => x.id === flowers.id);
    if (exist) {
      setCartItems(
        cartItems.map((x) =>
          x.id === flowers.id ? { ...exist, quantity: exist.quantity + 1 } : x
        )
      );
    } else {
      setCartItems([...cartItems, { ...flowers, quantity: 1 }]);
    }
  };

  const onRemove = (flowers) => {
    const exist = cartItems.find((x) => x.id === flowers.id);
    if (exist.quantity === 1) {
      setCartItems(cartItems.filter((x) => x.id !== flowers.id));
    } else {
      setCartItems(
        cartItems.map((x) =>
          x.id === flowers.id ? { ...exist, quantity: exist.quantity - 1 } : x
        )
      );
    }
  };

  const onCheckout = ()=>{
    tele.MainButton.text = "Pay";
    tele.MainButton.show();
  };


  return (
    <>
    <h1 className="heading">Moscow service, California quality</h1>
    <Cart cartItems={cartItems} onCheckout={onCheckout}/>
    <div className="cards__container">
      {flowers.map((flowers) => {
        return (<Card flowers={flowers} key={flowers.id} onAdd={onAdd} onRemove={onRemove}/>);
      })}
    </div>    
    </>
  );
}

export default App; 
