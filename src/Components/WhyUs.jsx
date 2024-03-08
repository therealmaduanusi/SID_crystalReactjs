import React from 'react'
import group1 from '../assets/images/group1.png'
import group2 from '../assets/images/group2.png'
import group3 from '../assets/images/group3.png'

function WhyUs() {
  return (
    <>
    <div className="row pt-5" data-aos="zoom-in-up">
        <div className="choose col-md-6">
            <h2 className='pb-2'>WHY CHOOSE US?</h2>
            <div className="select d-flex column-gap-3">
                <div className="wrap-img">
                    <img src={group1} alt="group1" className='img-fluid' />
                </div>
                <div className="shipcontent">
                    <h4>Global supply Chain Solutions</h4>
                    <p>Efficiently unleash cross-media information without cross-media value.</p>
                </div>
            </div>
            <div className="select d-flex column-gap-3">
                <div className="wrap-img">
                    <img src={group2} alt="group2" className='img-fluid' />
                </div>
                <div className="shipcontent">
                    <h4>Mobile Shipment Tracking</h4>
                    <p>We Offers intelligent concepts for road and tail and well as complex special transport services</p>
                </div>
            </div>
            <div className="select d-flex column-gap-3">
                <div className="wrap-img flex-item-center">
                    <img src={group3} alt="group3" className='img-fluid' />
                </div>
                <div className="shipcontent">
                    <h4>Careful Handling of Valuable Goods</h4>
                    <p>Cargo HUB are transported at some stage of their journey along the world’s roads</p>
                </div>
            </div>
        </div>
        <div className="inputvalue col-md-6" data-aos="zoom-in-up">
            <form action="">
                <h2 className='pb-2'>REQUEST A QUOTE</h2>
                <div className="inputvalues pb-3">
                    <div className="inputs">
                        <input type="text" placeholder='Name'/>
                    </div>
                    <div className="inputs">
                        <input type="email" placeholder='Email' required/>
                    </div>
                </div>
                <div className="inputvalues pb-3">
                    <div className="inputs">
                        <input type="tel" placeholder='Phone(optional)'/>
                    </div>
                    <div className="inputs">
                        <input type="text" placeholder='Subject'/>
                    </div>
                </div>
                <textarea name="" id=""  rows="6" placeholder='Message'></textarea>
                <br />
                <input type='submit' value='Submit' className="btn btn-danger styleborder" style={{maxWidth: '7rem'}}/>
            </form>

        </div>
    </div>
    </>
  )
}

export default WhyUs