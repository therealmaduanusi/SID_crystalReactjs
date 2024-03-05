import React from 'react'
import pic1 from '../assets/images/carouselImg1.png'
import pic2 from '../assets/images/carouselImg2.png'
import pic3 from '../assets/images/carouselImg3.png'

function Card() {
    const cardData = [
        {image: pic1, title: 'Air Freight', content: 'As a leader in global air freight forwarding, OIA Global excels in providing tailored transportation...'},
        {image: pic2, title: 'Sea Freight', content: 'Sea Freight plays perhaps the most vital role in most transportation and supply chain a solutions...'},
        {image: pic3, title: 'Land Freight', content: 'Cargo are transported at some stage of their journey along the world’s roads where we give...'},
    ]
    // const array =[1,2,3,4]
  return (
    <>
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
    </>
  )
}

export default Card