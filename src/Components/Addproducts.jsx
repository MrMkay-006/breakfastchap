import axios from 'axios';
import React, { useState } from 'react'


const Addproducts = () => {
  const [food_name, setFoodname] = useState("");
  const [food_info, setFoodinfo] = useState("");
  const [food_price, setFoodprice] = useState("");
  const [food_photo, setFoodphoto] = useState("");

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
    data.append("food name",food_name)
    data.append("food info",food_info)
    data.append("food price", food_price)
    data.append("food photo", food_photo)
    
    try{
      const response = await axios.post("https://mrmkay.pythonanywhere.com/api/addproducts", data);
      // set loading to empty
      setLoading("");

      // update your message hook with a message if the deatails have been saved successfully into the database
      setMessage("Product added successfully")
      // set the timeout of the message
      setTimeout(() => {
        setMessage("");
      }, 8000)
      // clear the data on the other four hooks
      setFoodname("");
      setFoodinfo("");
      setFoodprice("");
      setFoodphoto("");

    }
    catch(error){
      setError("Failed to add the product. please try again")
    }
  }

  return (
    <div className='row justify-content-center mt-4'>
      <div className="col-md-6 card shadow p-4">
        <form onSubmit={submit}>
          <h2>Add Product</h2>
          {loading}
          <p className="message">{message}</p>
          <p className="error">{error}</p>
          <input 
          type="text"
          placeholder='Enter the food name' 
          className='form-control'
          value={food_name}
          onChange={(e) => setFoodname(e.target.value)}
          required/> <br />
          {/* {food_name} */}

          <textarea placeholder='Enter the Description'
          className='form-control'
          value={food_info}
          onChange={(e)=> setFoodinfo(e.target.value)}
          required></textarea> <br />
          {/* {food_info} */}

          <input 
          type="number" 
          placeholder='Enter the price'
          className='form-control'
          value={food_price}
          onChange={(e)=> setFoodprice(e.target.value)}
          required/> <br />
          {/* {food_price} */}

          <label>food Photo</label> <br />
          <input type="file"
          // it will accept only images files of all type
          accept='image/*'
          onChange={(e)=> setFoodphoto(e.target.files[0])}
          required 
          className='form-control'/> <br /> <br />

          <button type='submit' className='btn btn-warning'>Add Product</button>

        </form>
      </div>
      
    </div>
  )
}

export default Addproducts
