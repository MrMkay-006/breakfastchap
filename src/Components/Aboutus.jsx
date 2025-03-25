import React from 'react'
import Navbar from './Navbar'
import Footer from './Footer'

const Aboutus = () => {
  return (
    <div className='row justify-content-center'>
        <Navbar/>
        <h1 className='display-4'>About us</h1>
        <div className="col-md-6">
            <div className="card shadow p-4 m-3">
                <img src="images/team.jpeg" alt="" />
            </div>
        </div>
        <div className="col-md-6">
            <h2>Members</h2>
            <ul>
                <li><img src="images/ceo.jpeg" alt="" className='image' /> Evans: CEO</li>
                <li>Marucha: COO</li>
                <li>Regan: Member</li>
                <li>Rechal: Member</li>
            </ul>
            <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Neque dicta atque, voluptatum minima iste nulla animi excepturi laboriosam? Cum impedit exercitationem minus dolor velit itaque?</p>
 

            <h3 className='text-primary'>Over 30+ services, over 1200+ customers served...</h3>
 
        </div>
        <Footer/>
    </div>
  )
}

export default Aboutus
