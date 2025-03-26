const Footer = () => {
    return (
    <div>
        <section className="row  mt-4 footer-background-color">
            <div className="col-md-4 text-left text-light">
                <h5 className="p-2 text-center text-info">About Us</h5>
                <p>Breakfast: The Perfect Start to Your Day

                Breakfast is more than just a meal—it’s the fuel that kickstarts your day! Whether it’s a hearty plate of eggs, bacon, and toast, a warm bowl of oatmeal topped with fresh fruit, or a simple cup of coffee with a buttery croissant, breakfast provides the energy and nutrients your body needs. It’s a time to recharge, savor delicious flavors, and set a positive tone for the day ahead.

                No matter how you like your mornings, a good breakfast is always the key to a great day!</p>
                <br/>
            </div>
            <div className="col-md-4 text-light">
                <h5 className="p-2 text-center text-info">Reach Us Out</h5>
                <input className="form-control" type="email" placeholder="Enter your email"/>
                <br/>
                <textarea className="form-control" rows="7" placeholder="Leave a comment"></textarea>
                <br/>
                <input type="submit" value="Send Message" className="btn btn-primary"/>
            </div>
            <div className="col-md-4 ">
                <h4 className="text-center text-info">Connect With Us</h4>
                <br/>
                <a href="https://facebook.com">
                <img src="images/facebook.png" alt="" className="socialspictures"/>
                </a>
                <a href="https://instagram.com">
                <img src="images/instagram.jpeg" alt="" className="socialspictures"/>
                </a>
                <p className="text-dark">Start your day right at BreakfastChap, where we serve fresh, homemade breakfast made with love. From fluffy pancakes and crispy bacon to gourmet omelets and freshly brewed coffee, our menu is crafted to satisfy every craving. Whether you're in a rush and need a quick grab-and-go meal or want to relax in our cozy café with a hearty brunch, we've got you covered.

                Join us for a warm, welcoming atmosphere, friendly service, and the best breakfast in town!
                </p>
            </div>
        </section>
        <footer className="text-white text-center p-2 mt-2 bootom-footer">
                <h5>Developed by Evans Musembi &copy; 2025.All rights reserved</h5>
        </footer>
    </div>
    );
    }
     
   
    export default Footer;