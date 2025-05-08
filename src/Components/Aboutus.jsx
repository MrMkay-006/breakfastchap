import React from "react";
import Footer from "./Footer";
import Navbar from "./Navbar";


const members = [
  { name: "John Smith", role: "Founder", image: `${process.env.PUBLIC_URL}/images/ceo.jpeg` },
  { name: "Japheth Sumare", role: "Marketing Head", image: `${process.env.PUBLIC_URL}/images/member.jpg` },
  { name: "Emily Cate", role: "Customer Support", image: `${process.env.PUBLIC_URL}/images/member2.webp` },
  { name: "Mark Johnson", role: "Product Manager", image: `${process.env.PUBLIC_URL}/images/pass1.jpg` },
];

const AboutUs = () => {
  return (
    <div className="about-container py-5">
      <Navbar/>
      <h2 className="text-center mb-5 section-title">Meet Our Team</h2>

      <div className="row justify-content-center">
        {members.map((member, index) => (
          <div key={index} className="col-md-3 col-sm-6 mb-4">
            <div className="card team-card shadow-lg">
              <img src={member.image} className="card-img-top" alt={`Photo of ${member.name}`} />
              <div className="card-body text-center">
                <h5 className="card-title">{member.name}</h5>
                <p className="card-text text-muted">{member.role}</p>
              </div>
            </div>
          </div>
        ))}
      </div>
      <div className="row">
        <div className="services text-center mt-5 col-md-4">
          <h3 className="section-subtitle">Our Services</h3>
          <p className="lead">Fresh breakfast meals, lightning-fast delivery, and personalized customer support.</p>
        </div>

        <div className="location text-center mt-4 col-md-4">
          <h4 className="section-subtitle">Where to Find Us</h4>
          <p>📍 Kimana, Loitoktok</p>
        </div>
        <div className="col-md-4 ">
          <h3 className="section-subtitle">Our Mission</h3>
          <p>To provide a delightful breakfast experience that nourishes the body and soul, fostering connections and joy in every meal.</p>
          <p>At Breakfast Chap, we are dedicated to crafting delightful, wholesome, and energizing breakfast experiences that bring people together. Our passion is to serve nutritious meals that fuel the day, combining quality ingredients with a touch of creativity to make every morning memorable.</p>
        </div>
      </div>

      
      <Footer/>
    </div>
  );
};

export default AboutUs;
