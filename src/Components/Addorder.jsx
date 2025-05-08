import axios from 'axios';
import React, { useEffect, useState } from 'react';
import { useLocation, useNavigate } from 'react-router-dom';
import Navbar from './Navbar';
import Footer from './Footer';

const Addorder = () => {
  const {product} = useLocation().state || {};
  
  const [customer_name, setCustomerName] = useState("");
  const [quantity, setQuantity]=useState("1");
  
  // Function to get the current date in 'year-month-day' format
  const orderdate = () => {
    const today = new Date();

    const year = today.getFullYear();
    const month = String(today.getMonth() + 1).padStart(2, '0'); // Add leading zero
    const day = String(today.getDate()).padStart(2, '0'); // Add leading zero

    return `${year}-${month}-${day}`;
  }

  const totalprice = () =>{
    const price = product.food_price;
    const total = price * quantity;
    return total;
  }
  

  // create three additional hooks to manage the state of your application when a person clicks the add product button

  const [loading, setLoading] = useState("");
  const [message, setMessage] =useState("");
  const [error, setError] =useState("");
  const navigate = useNavigate("");
  

  // create a function that will handle the submit event
  const submit = async(e)=>{
    // prevent the site from reloading
    e.preventDefault();

    // Update the loading hook with a message
    setLoading("<<<<Please wait as we add your product>>>>")
    // create a form data variable that will hold all the details from the hooks
    const data= new FormData();
    // append the info from the hooks
    data.append("food name",product.food_name)
    data.append("order date",orderdate())
    data.append("food price", product.food_price)
    data.append("customer name", customer_name)
    data.append("quantity", quantity)
    data.append("total price", totalprice())

    
    try{
      const response = await axios.post("https://mrmkay.pythonanywhere.com/api/add order", data);
      // set loading to empty
      setLoading("");

      // update your message hook with a message if the deatails have been saved successfully into the database
      setMessage("Order placed successfully")
      // set the timeout of the message
      setTimeout(() => {
        setMessage("");
      }, 8000)
      navigate("/mpesapayment",{state : {product}})

    }
    catch(error){
      setError("Failed to place the order. please try again")
    }
  }
  useEffect(() => {
    const storedUser = localStorage.getItem("user");
    if (storedUser) {
        const parsedUser = JSON.parse(storedUser);
        setCustomerName(parsedUser.customer_name);
    }
}, []);
  

  return (
    <div className='row justify-content-center mt-4'>
      <Navbar/>
      <div className="col-md-6 card shadow p-4">
        <form onSubmit={submit}>
          <h2>Confirm your order</h2>
          {loading}
          <p className="message">{message}</p>
          <p className="error">{error}</p>
          <p className="text-start">
          <p><span className="key">Food Name:</span> {product.food_name}</p> 
          <p><span className="key">Food Price:</span> {product.food_price}</p> 
          <p><span className="key">Food Info:</span> {product.food_info}</p>
          <p><span className="key">Order Date:</span> {orderdate()}</p>
          <p><span className='key'>Total Price:</span> {totalprice()}</p>
          </p>
          <p>Please fill your name and quantity to complete the order!</p>
          
          <input 
          type="text"
          placeholder='Enter your username' 
          className='form-control'
          value={customer_name}
          onChange={(e) => setCustomerName(e.target.value)}
          required/> <br />
          <input
          type='number'
          className='form-control'
          value={quantity}
          onChange={(e)=> setQuantity(e.target.value)}
          placeholder='Enter quantity'
          required/> <br/>

          
          <button type='submit' className='btn btn-warning'>order now</button>

        </form>
      </div>
      <Footer/>
    </div>
  )
}

export default Addorder
