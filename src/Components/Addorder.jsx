import axios from 'axios';
import React, { useState } from 'react';
import { useLocation } from 'react-router-dom';

const Addorder = () => {
  const {product} = useLocation().state || {};
  
  const [customer_name, setCustomername] = useState("");
  
  // Function to get the current date in 'year-month-day' format
  const orderdate = () => {
    const today = new Date();

    const year = today.getFullYear();
    const month = String(today.getMonth() + 1).padStart(2, '0'); // Add leading zero
    const day = String(today.getDate()).padStart(2, '0'); // Add leading zero

    return `${year}-${month}-${day}`;
  }
  

  // create three additional hooks to manage the state of your application when a person clicks the add product button

  const [loading, setLoading] = useState("");
  const [message, setMessage] =useState("");
  const [error, setError] =useState("");

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

    
    try{
      const response = await axios.post("https://mrmkay.pythonanywhere.com/api/add_order", data);
      // set loading to empty
      setLoading("");

      // update your message hook with a message if the deatails have been saved successfully into the database
      setMessage("Product added successfully")
      // set the timeout of the message
      setTimeout(() => {
        setMessage("");
      }, 8000)

    }
    catch(error){
      setError("Failed to place the order. please try again")
    }
  }
  

  return (
    <div className='row justify-content-center mt-4'>
      <div className="col-md-6 card shadow p-4">
        <form onSubmit={submit}>
          <h2>Confirm your order</h2>
          {product.food_name} <br />
          {product.food_price} <br />
          {customer_name} 
          {orderdate()} <br />
          {loading}
          <p className="message">{message}</p>
          <p className="error">{error}</p>
          <input 
          type="text"
          placeholder='Enter your username' 
          className='form-control'
          value={customer_name}
          onChange={(e) => setCustomername(e.target.value)}
          required/> <br />
          {/* {customer_name} */}

          
          <button type='submit' className='btn btn-warning'>order now</button>

        </form>
      </div>
      
    </div>
  )
}

export default Addorder
