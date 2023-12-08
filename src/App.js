import logo from './logo.svg';
import './App.css';
import Forms from './Form';
import React,{useState}from 'react';
import { productContext } from './Productcontext';
import Profile from './Profile';

function App() {
  const[productName,setProductname]=useState('')
  const[productPrice,setProductprice]=useState('')
  const[productQuantity,setProductquantity]=useState('')
  const[productDes,setProductDes]=useState('')
  const[showProduct,setShowproduct]=useState(false)
  return (
    <div className="App">
      <productContext.Provider value={{productName,setProductname,productPrice,setProductprice,productQuantity,setProductquantity,productDes,setProductDes,setShowproduct}}>
        {
          showProduct? <Profile/>:<Forms />
        }

      </productContext.Provider>
     
    </div>
  );
}

export default App;
