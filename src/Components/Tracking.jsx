import React from 'react'

function Tracking() {

  return (
    <>
    <div className="container-fluid service-bg-img text-center text-white pt-5">
      <h3>Tracking</h3>
      <p>Service <i className="fas fa-arrow-right"></i> Tracking</p>
    </div>
    <div className="container py-5">
        <div className="row">
            <div className="tracking-content col-md-6">
                <h2>TRACK YOUR SHIPMENT</h2>
                <div className="bg-danger placeholder col-3 placeholder-xs rounded"></div>
                <p>If you require maximum visibility to your Freight transactions, contact our logistic customer team or you can track your cargo by using below tracking system.</p>
            </div>
            <form action=""  className="col-md-6">
                <input type="text" name='trackingid' placeholder='Enter Your Tracking ID Here' className=' py-2 px-2 rounded' style={{width: '55%'}} required/>
                <br />
                <input type="submit" value="Track" className='bg-danger btn text-white mt-4 px-5'/>
            </form>
        </div>

    </div>
    
    </>
  )
}

export default Tracking;
