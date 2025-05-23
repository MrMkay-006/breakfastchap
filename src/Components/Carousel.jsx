//carousel
import { Link } from "react-router-dom";

const ImageCarousel = () => {
return (
<section className="row mt-5">
    <div className="col-md-1"></div>
    <div className="col-md-10">
        <div className="carousel slide" data-bs-ride="carousel" id="mycarousel">
            <div className="carousel-inner">
                <div className="carousel-item active">
                <img src="images/coffee1.webp" alt="" className="d-block w-100" height="300px"/>
                </div>

                <div className="carousel-item">
                <img src="images/pancake1.webp" alt="" className="d-block w-100" height="300px"/>
                </div>

                <div className="carousel-item">
                <img src="images/cappuccino.jpg" alt="" className="d-block w-100" height="300px"/>
                </div>

                <div className="carousel-item">
                <img src="images/egg1.webp" alt="" className="d-block w-100" height="300px"/>
                </div>
            </div>

        <Link to="#mycarousel" className="carousel-control-prev" data-bs-slide="prev">
        <span className="carousel-control-prev-icon"></span>
        </Link >


        <Link to="#mycarousel" className="carousel-control-next" data-bs-slide="next">
        <span className="carousel-control-next-icon"></span>
        </Link >

       
        </div>
    </div>
    <div className="col-md-1"></div>
</section>
);
}
 

export default ImageCarousel;