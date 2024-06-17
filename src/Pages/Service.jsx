import pic1 from '../assets/images/carouselImg1.png'
import pic2 from '../assets/images/carouselImg2.png'
import pic3 from '../assets/images/carouselImg3.png'
import pic4 from '../assets/images/carouselImg4.png'
import pic5 from '../assets/images/carouselImg5.png'
import pic6 from '../assets/images/carouselImg6.png'
import aboutservice from '../assets/images/aboutservice.png'
// import serviceImgBg from '../assets/images/serviceImg-bg.png'
// import { FontAwesomeIcon } from '@fontawesome/react-fontawesome';
function Service() {
  const cardData = [
    {image: pic1, title: 'Air Freight', content: 'As a leader in global air freight forwarding, OIA Global excels in providing tailored transportation...'},
    {image: pic2, title: 'Sea Freight', content: 'Sea Freight plays perhaps the most vital role in most transportation and supply chain a solutions...'},
    {image: pic3, title: 'Land Freight', content: 'Cargo are transported at some stage of their journey along the world’s roads where we give...'},
    {image: pic4, title: 'Warehousing', content: 'Package and store your things effectively and securely to make sure them in storage, have certif...'},
    {image: pic5, title: 'Door to Door Delivery', content: 'Our expertise in transport management and planning allows us to design a solution. hand...'},
    {image: pic6, title: 'Packaging & Storage', content: 'Package and store your things effectively and securely to make sure them in storage, We... '},

  ]
  return (
    <>
    <div className="container-fluid service-bg-img text-center text-white pt-5">
      <h3>Services</h3>
      <p>Home <i className="fas fa-arrow-right"></i> Service</p>
    </div>

    <div className="container">
      <div className="row mt-5">
        {cardData.map((card, index) => (
            <div className="col-md-4 mb-5" key={index}>
                <div className="card">
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
      </div>
    </div>

    <div className="container">
      <div className="row">
        <div className='col-md-6'>
          <img src={aboutservice} alt="" className='img-fluid'/>
        </div>
        <div className="servicecontent col-md-6">
          <h3>THE COMPLETE SOLUTION</h3>
          <div className="redborder placeholder col-3 placeholder-xs rounded"></div>
          <p>
          Our warehousing services are known nationwide to be one of the most reliable, safe and affordable, because we take pride in delivering the best of warehousing services, at the most reasonable prices. Pleasure and praising pain was born and I will give you a complete account of system, and expound actual teachings occasionally circumstances.
          </p>
        </div>
      </div>
    
    </div>

    </>
  )
}

export default Service