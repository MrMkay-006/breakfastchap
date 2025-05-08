import { useEffect, useState } from "react";
import axios from "axios";
import Navbar from "./Navbar";
import Footer from "./Footer";

const Myorders = () => {
    const [orders, setOrders] = useState([]);
    const [filteredOrders, setFilteredOrders] = useState([]);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState("");
    const [username, setUsername] =useState("")

    useEffect(() => {
        const fetchOrders = async () => {
            try {
                // Fetch all orders from the database
                const response = await axios.get("https://mrmkay.pythonanywhere.com/api/get_orders");
                setOrders(response.data);
                setLoading(false);
            } catch (err) {
                setError("Failed to fetch orders.");
                setLoading(false);
            }
        };

        fetchOrders();
    }, []);

    useEffect(() => {
        // Retrieve logged-in user's name from localStorage
        const storedUser = localStorage.getItem("user");
        if (storedUser) {
            const user = JSON.parse(storedUser);
            const customerName = user.customer_name;

            // Filter orders for this user
            const userOrders = orders.filter(order => order.customer_name === customerName);
            setFilteredOrders(userOrders);
            setUsername(customerName)
        }
    }, [orders]); // Run when orders are fetched

    return (
        <div className='row'>
              <Navbar/>
              <h3 className="text-start">Hello {username && <span style={{color: "cyan"}}>{username}</span>}, this are the successful orders you placed</h3>
              {loading && <p>Loading orders please wait...</p>}
              {error && <p style={{ color: "red" }}>{error}</p>}
              
              {filteredOrders.map((order)=>(
               <div className="col-md-3 justify-content-center mb-4">
                {/* below div will cary the card that contain a single product */}
                <div className="card shadow">
        
                  {/* below is the card body */}
                  <div className="card-body">
                    <h5 className="mt-2">Food Name: {order.food_name}</h5>
                    <p className="text-muted"> Order date: {order.order_date}</p> <br />
                    <b className="text-warning "> Total Cost: {order.total_price}</b> <br />
                    <b className="text-warning">To: {order.customer_name}</b><br />
                  </div>
                </div>
               </div>
                 
              ))};
              <Footer/>
              
            
            </div>
        
    );
};

export default Myorders;
