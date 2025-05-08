import React, { useEffect, useState } from 'react'
import axios from 'axios';
import { useNavigate } from 'react-router-dom';
import Footer from './Footer';
import ImageCarousel from './Carousel';
import Navbar from './Navbar';
import Topvideo from './Topvideo';


const Getproducts = () => {
  const [products, setProducts] =useState([]); //this useState hook contains an empty array
  const [loading, setLoading] = useState("");
  const [error, setError] = useState('');
  

  // create the navigate hook.
  // This hook will help navigate to the mpesa payment page when the purchase now button is clicked
  const navigate = useNavigate();

  // specify the location of the image
  const img_url ="https://mrmkay.pythonanywhere.com/static/images/"
  // create a function that will handle the get operation/method
  const getproducts= async () => {
    //update the loading hook with a meassage
    setLoading("<<<<Please wait as we retrieve the products>>>>")
    try {
      // handle the response given from pythonanywhere
      const response = await axios.get("https://mrmkay.pythonanywhere.com/api/get_products")

      // update the products hook with the recieved from the api
      setProducts(response.data)
      // set the loading hook back to default
      setLoading("");
      
      
    } 
    catch (error) {
      // set the loading hook back to default
      setLoading(""); 
      // project an error message
      setError("Sorry! There was an error encountered")     
     


    }
  }// end getproducts function
  // below we shall use the useEffect hook to call our get products functions
  // useEffect is a hook that applies new effects/changes to the user interface after an action has happened.
  useEffect(
    ()=> {getproducts()},
    []) //dependency(empty square brackets). this hook contains an empty array dependency to ensure that it only run once when the component (Getproducts component) renders.
     // Filtered products based on search
     const [search, setSearch] = useState("");
     const filtered_products = products.filter((item) =>
       item.food_name.toLowerCase().includes(search.toLowerCase())||
       item.food_info.toLowerCase().includes(search.toLowerCase())
      );
      const [customerName, setCustomerName] = useState("");

    useEffect(() => {
        const storedUser = localStorage.getItem("user");
        if (storedUser) {
            const parsedUser = JSON.parse(storedUser);
            setCustomerName(parsedUser.customer_name);
        }
    }, []);



  return (
    <div className='row'>
      
      <Navbar/>
      <Topvideo/>
      {/* <Nav/> */}
      <ImageCarousel/>
      <div><h2>Welcome, {customerName}!</h2></div>
      <h3 className='text-info mt-3 text-start'>Available Products</h3>
      <div className="row justify-content-center mt-3 mb-3">
        <input
          className="form-control w-50"
          type="search"
          placeholder="Search Products..."
          value={search}
          onChange={(e) => setSearch(e.target.value)}
        />

        {/* {search} */}
    </div>
    <h3>Search by category</h3>
    <div className="col-md-3 mt-1">
    <input type="button"
        className='btn btn-info'
        value="coffee"
        onClick={(e)=> setSearch(e.target.value)} />

    </div>
    <div className="col-md-3 mt-1">
    <input type="button"
        className='btn btn-info'
        value="pancake"
        onClick={(e)=> setSearch(e.target.value)} />

    </div>
    <div className="col-md-3 mt-1">
    <input type="button"
        className='btn btn-info'
        value="Juice"
        onClick={(e)=> setSearch(e.target.value)} />

    </div>

    <div className="col-md-3 mt-1">
    <input type="button"
        className='btn btn-info'
        value="Eggs"
        onClick={(e)=> setSearch(e.target.value)} />

    </div>
      {/* bind the loading andthe error */}
      {loading}
      <p className="error">{error}</p>
      
      {filtered_products.map((product)=>(
       <div className="col-md-3 justify-content-center mb-4">
        {/* below div will carry the card that contain a single product */}
        <div className="card shadow">
          <img src={img_url + product.food_photo} className='product_img mt-4' alt="" />

          {/* below is the card body */}
          <div className="card-body">
            <h5 className="mt-2">{product.food_name}</h5>
            <p className="text-muted">{product.food_info.slice(0,50)}...</p>
            <b className="text-warning">Kes {product.food_price}</b><br />
            <button className='btn btn-info' onClick={() =>navigate("/addorder",{state : {product}})}>Order Now</button>
          </div>
        </div>
       </div>
         
      ))};

      
      <Footer/>
    </div>
  )
}

export default Getproducts
