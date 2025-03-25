import axios from 'axios';
import React, { useState } from 'react'
import { useLocation, useNavigate } from 'react-router-dom';
const Mpesapayment = () => {
     // we passed the state of our card from the component(getproduct)
    // we shall use the useLocation hook to extract the different details passed from the Getproducts component
    const {product} = useLocation().state || {};
    const navigate = useNavigate();

    // create use state hooks: phone number, message
    const [phone, setPhone] = useState("");
    const[message, setMessage] = useState("");
    const [orderss, setOrderss] = useState({product});

    // create a function that will handle the payment process
    const submit = async(e) => {
        e.preventDefault();
        // update the message hook with this message
        setMessage("Please wait as we process your payment...")

        // create a form data object and add the phone
        const data = new FormData();
        data.append("phone",phone);
        // append the cost of the product
        // the cost of the product you get from the details passed from the useLocation hook
        data.append("amount",product.food_price);

        // use axios to access the http method 
        const response = await axios.post("https://mrmkay.pythonanywhere.com/api/mpesa_payment", data)

        // update the message hook with a new message
        setMessage(response.data.message)
        navigate("/addorder",{state : {product}})
    }

    // console.log(product.food_name)
    // console.log(orderss)
    // console.log(product.food_price)
  return (
    <div className='row justify-content-center mt-3'>
        <h1 className='mpesa mt-4'>Lipa na Mpesa</h1>
        <p className='message'>{message}</p>
        <div className="col-md-6 card shadow p-3">
        <h4 > Product name<span className='text-primary'>{product.food_name}</span></h4>
        <form onSubmit={submit}>
            <h4>Price of the Product: <span className='text-primary'>{product.food_price}</span></h4>
            <input 
            type="number" 
            placeholder='Enter your Mpesa number'
            value={phone}
            onChange={(e)=> setPhone(e.target.value)}
            className='form-control'
            required/> <br /><br />
            {/* {phone} */}
            {product.food_price}

            <button className='btn btn-success'>Make Payment</button>
        </form>
        </div>
        
        
    </div>
  )
}
export default Mpesapayment;