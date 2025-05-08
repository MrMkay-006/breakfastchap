import axios from "axios";
import { useState } from "react"
import { Link } from "react-router-dom"
import Navbar from "./Navbar";
import Footer from "./Footer";

const Signup = () => {
  const [customername, setCustomername] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [phone_number, setPhonenumber] = useState("");
  //  Create three hooks that will capture the state of our application whenthe sign up button is clicked
  const [loading, setLoading] = useState("");
  const [error, setError] = useState("");
  const [success, setSuccess] =useState("");

  const submit = async(e) =>{
    // below we shall prevent our site from reload whenever the details are submited
    e.preventDefault();

    // Update the loading hook with a message that will be displayed when the user clicks on the sin up batton
    setLoading("Please wait as we upload your details...")

    try{
      // we create an object that will hold all the data on the hooks(username, email, password,phone)
      const data= new FormData();

      // Below we append the dofferent details onto mout object
      data.append("customer name",customername);
      data.append("email",email);
      data.append("password",password);
      data.append("phone number",phone_number);

      // Use the axios library that will help us interact with the HTTP request
      // The particular method we shall use is post method
      const response = await axios.post("https://mrmkay.pythonanywhere.com/api/sign_up",data)

      // After the data has been inserted successfully,set the loading hook to empty
      setLoading("");

      // set the success hook with the message you from a success registration
      setSuccess(response.data.Message);

      // clear all the input fields on the html form
      // return the form to default
      setCustomername("");
      setEmail("");
      setPassword("");
      setPhonenumber("");
    }
    catch(error){
      // update the loading hook to empty
      setLoading("");

      // update the error hook with the
      setError("Unfotunately something went wrong");
      // setError(error.message)
    }
  };
  
  return (
    <div className='row justify-content-center mt-4'>
      <Navbar/>
      <div className="col-md-6 card shadow">
        <h2>Sign Up</h2>
        <form onSubmit={submit}>

          {loading}
          {success}
          {error}
            <input 
            type="text" 
            placeholder='Enter the Username' className='form-control' 
            value={customername}
            onChange={(e) => setCustomername(e.target.value)}
            required/><br />
             {/* {customername}  */}

            <input 
            type="email" 
            placeholder='Enter Email Address'
            className='form-control' 
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            required /><br />
              {/* {email} */}
            <input 
            type="password" 
            placeholder='Enter the password' className='form-control' 
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            required /><br />
              {/* {password} */}

            <input type="text" 
            placeholder='Enter the phone number' className='form-control' 
            value={phone_number}
            onChange={(e) => setPhonenumber(e.target.value)}
            required /><br /><br />
            {/* {phone_number} */}

            <button type='submit' className='btn btn-success'>Sign up</button>
        </form>
        <p>Already have an account? <Link to={'/signin'}>Signin</Link></p> 
        
      </div>
      <Footer/>
    </div>
  )
}

export default Signup
