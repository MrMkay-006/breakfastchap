import React, { useEffect, useState } from 'react'
import axios from 'axios';

const Getorders = () => {
  const [orders, setOrders] =useState([]); //this useState hook contains an empty array
  const [loading, setLoading] = useState("");
  const [error, setError] = useState('');
  // create a function that will handle the get operation/method
  const getorders= async () => {
    //update the loading hook with a meassage
    setLoading("<<<<Please wait as we retrieve the orders>>>>")
    try {
      // handle the response given from pythonanywhere
      const response = await axios.get("https://mrmkay.pythonanywhere.com/api/get_orders")

      // update the products hook with the recieved from the api
      setOrders(response.data);
      // set the loading hook back to default
      setLoading("");      
      
    } 
    catch (error) {
      // set the loading hook back to default
      setLoading(""); 
      // project an error message
      setError("There was an error encountered")      
    }
  }// end getproducts function
  // below we shall use the useEffect hook to call our get products functions
  // useEffect is a hook that applies new effects/changes to the user interface after an action has happened.
  useEffect(
    ()=> {getorders()},
    []) //dependency(empty square brackets). this hook contains an empty array dependency to ensure that it only run once when the component (Getproducts component) renders.

  return (
    <div className='row'>
      <h3 className='text-info mt-3'>Available Products</h3>
      {/* bind the loading andthe error */}
      {loading}
      <p className="error">{error}</p>
      
      {orders.map((order)=>(
       <div className="col-md-3 justify-content-center mb-4">
        {/* below div will cary the card that contain a single product */}
        <div className="card shadow">

          {/* below is the card body */}
          <div className="card-body">
            <h5 className="mt-2">Breakfast Name: {order.food_name}</h5>
            <p className="text-muted"> Order date: {order.order_date}</p> <br />
            <b className="text-warning"> Cost: {order.food_price}</b> <br />
            <b className="text-warning">To: {order.customer_name}</b><br />
          </div>
        </div>
       </div>
         
      ))};

      
    
    </div>
  )
}

export default Getorders
