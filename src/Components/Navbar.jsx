import { Link } from "react-router-dom";


const Navbar = () => {

  return (
    <>
      {/* Navbar */}
      <nav className="navbar fixed-top navbar-expand-md navbar-info bg-light shadow-sm mt-5 pt-5 mb-5 ">
        <Link to="/" className="navbar-brand fw-bold">
          <span className="break">  Breakfast</span><span className="chap">Chap</span>
        </Link>

        <button
          className="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarcontents"
        >
          <span className="navbar-toggler-icon"></span>
        </button>

        <div className="collapse navbar-collapse" id="navbarcontents">
          <ul className="navbar-nav me-auto">
            <li className="nav-item">
              <Link to="/" className="nav-link fw-bold">Get products</Link>
            </li>
            <li className="nav-item">
              <Link to="/myorders" className="nav-link fw-bold">My Orders</Link>
            </li>
            <li className="nav-item">
              <Link to="/addproduct" className="nav-link fw-bold">Add product</Link>
            </li>
            <li className="nav-item">
              <Link to="/getorders" className="nav-link fw-bold">Get orders</Link>
            </li>
          </ul>

          <ul className="navbar-nav ms-auto">
            <li className="nav-item">
              <Link to="/aboutus" className="nav-link fw-bold">About Us</Link>
            </li>
            <li className="nav-item">
              <Link to="/chat us" className="nav-link fw-bold"><img src="images/chat2.png" className="chat1" alt="" /></Link>
            </li>
            <li className="nav-item">
              <Link to="/signin" className="btn btn-outline-primary me-2">Sign IN</Link>
            </li>
            <li className="nav-item">
              <Link to="/signup" className="btn btn-primary">Sign UP</Link>
            </li>
          </ul>
        </div>
      </nav>
    </>
  );
};

export default Navbar;
