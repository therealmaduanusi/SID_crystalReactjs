import pic1 from '../assets/images/carouselImg1.png'
import pic2 from '../assets/images/carouselImg2.png'
import pic3 from '../assets/images/carouselImg3.png'
// Slick library
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
function Card() {
    const cardData = [
        {image: pic1, title: 'Air Freight', content: 'As a leader in global air freight forwarding, OIA Global excels in providing tailored transportation...'},
        {image: pic2, title: 'Sea Freight', content: 'Sea Freight plays perhaps the most vital role in most transportation and supply chain a solutions...'},
        {image: pic3, title: 'Land Freight', content: 'Cargo are transported at some stage of their journey along the world’s roads where we give...'},
    ];

    const settings = {
        dots: false,
        infinite: true,
        speed: 500,
        slidesToShow: 3,
        slidesToScroll: 1,
        autoplay: true,
        autoplaySpeed: 3000,
        arrows: false,
        responsive: [
          {
            breakpoint: 1024, // breakpoint for desktop
            settings: {
              slidesToShow: 3,
              slidesToScroll: 1,
            },
          },
          {
            breakpoint: 768, // breakpoint for tablet/mobile
            settings: {
              slidesToShow: 1,
              slidesToScroll: 1,
            },
          },
        ],
    };
    // const array =[1,2,3,4]
  return (
    <>
        <div className="row mt-5">
            <Slider {...settings}>
                {cardData.map((card, index) => (
                    <div className="col-md-4 mb-5" key={index}>
                        <div className="card mx-2">
                            <img src={card.image} className="card-img-top" alt="..."/>
                            <div className="card-body">
                                <h5 className="card-title">{card.title}</h5>
                                <p className="card-text">
                                    {card.content}
                                    <a href="#" className="text-decoration-none text-danger">Read More</a>
                                </p>
                            </div>
                        </div>
                    </div>
                ))}
            </Slider>
        </div>
    </>
  )
}

export default Card