import React from 'react'
import footer1 from '../assets/images/footer1.png'
import footer2 from '../assets/images/footer2.png'
import footer3 from '../assets/images/footer3.png'
import footer4 from '../assets/images/footer4.png'
function Footer() {
  return (
    <>
    <div className="container-fluid bg-black text-white mt-3">
      <div className="container pt-4 pb-2">
        <div className="row">
          <div className="col-md-6 col-lg-3">
            <h3>CRYSTAL SHIPMENT</h3>
            <p>
            Crystal Shipment Services is a global supplier of transport and logistics solutions. We have offices in more than 20 countries and an international network of partners and agents.
            </p>
          </div>
          <div className="col-md-3">
            <h3>QUICK LINKS</h3>
            <ul>
              <li><a href="#" className="text-decoration-none text-white">All Service</a></li>
              <li><a href="#" className="text-decoration-none text-white">Land Frieght</a></li>
              <li><a href="#" className="text-decoration-none text-white">Sea Frieght</a></li>
              <li><a href="#" className="text-decoration-none text-white">Air Frieght</a></li>
            </ul> 
          </div>
          <div className="col-md-6 col-lg-3">
            <h3>PHOTO GALLERY</h3>
            <div className="img-wrapper row">
              <div className="col-6">
                <div className="img mb-2">
                  <img src={footer1} alt="footer1" className='img-fluid'/>
                </div>
                <div className="img">
                  <img src={footer2} alt="footer2" className='img-fluid'/>
                </div>
              </div>

              <div className="col-6">
                <div className="img mb-2">
                  <img src={footer3} alt="footer3" className='img-fluid'/>
                </div>
                <div className="img">
                  <img src={footer4} alt="footer3" className='img-fluid'/>
                </div>
              </div>
              
            </div>
          </div>
          <div className="col-md-6 col-lg-3">
            <h3>OUR NEWSLETTER</h3>
            <p>Sign up today for tips and latest news and exclusive special offers.</p>
            <form action="">
              <input type="email" placeholder='Enter Email'className='rounded px-3 py-1 bg-black border border-light-subtle text-white' required/>
              <br />
              <input type='submit' value='Submit' name='email' className='btn btn-danger mt-2'/>
            </form>

          </div>
        </div>

        <p className='text-center pt-3'>&copy; Copyright 2024 All Rights Reserved.</p>
      </div>
    </div>
    </>
  )
}

export default Footer