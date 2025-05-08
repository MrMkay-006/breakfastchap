import axios from 'axios';
import React from 'react'
import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import Navbar from './Navbar';
import Footer from './Footer';


const Signin = () => {
  // create different hooks that will help you manage different states
  const[customer_name, setCustomername] = useState("");
  const [password, setPassword] = useState("");
  // set the state of your application can be in
  const [loading, setLoading] = useState("");
  const [error, setError] = useState("");

  // after a successful login and verification of details, we need to redirect a user to a certain page
  // below is a hook for the same
  const navigate = useNavigate();

  // A function to help us submit details to the backend API
  const submit = async (e) =>{
    // below line of code will make sure our app does not reload when the user click yhe sign up button

    e.preventDefault();
    // Update the loading hook with some information
    setLoading("Please wait as we log you in...")

    // create a try and catch block that will add the details to the api
    try {
      // create an object that will be used to hold our data
      const data= new FormData();

      // Add the two details gotten from the input(hooks) onto the object
      data.append("customer name",customer_name)
      data.append("password", password)

      // Access the post method from the axios library
      // Add the details to the backend API
      const response = await axios.post("https://mrmkay.pythonanywhere.com/api/sign_in", data)

      // Set the loading hook back to empty
      setLoading("");
      if (response.data.user){
        // save the details of the user into the local storage
        localStorage.setItem("user",JSON.stringify(response.data.user));
        // console.log(response.data.user)
        // redirect the user to another page
        // use the navigate hook to do this
        navigate("/")
      }
      else{
        // the user was not found,show a message
        setError(response.data.Message)
      }

      // 
    } 
    catch (error) {
      setLoading("");
      setError(error.response.data.Message)
      
    }
  };

  return (
    <div className='row justify-content-center mt-5'>
      <Navbar/>

      <div className="card shadow col-md-6 p-4">
        <h2>Sign In</h2>
        {error}
        {loading}
        

        <form onSubmit={submit}>
        <input 
        type="text"
        placeholder='Enter your username here'
        value={customer_name}
        onChange={(e) => setCustomername(e.target.value)}
        className='form-control'
        required/> <br />
        {/* {customer_name} */}

        <input 
        type="password"
        placeholder='Enter the password'
        value={password}
        onChange={(e) => setPassword(e.target.value)}
        className='form-control' 
        required/> <br /><br />
        {/* {password} */}

        <button type='submit' className='btn btn-outline-success'>Sign in</button>
        </form>

      </div>
      <Footer/>
    </div>
    
  )
}

export default Signin
