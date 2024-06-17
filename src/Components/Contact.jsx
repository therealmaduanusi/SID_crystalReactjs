
function Contact() {
  return (
    <>
    <div className="container-fluid service-bg-img text-center text-white pt-5">
      <h3>Contacts</h3>
      <p>Tracking <i className="fas fa-arrow-right"></i> Contacts</p>
    </div>

    <div className="container py-5">
      <div className="row">
        <div className="contact-info col-md-6">
          <p>Kindly call us or join our support group on WhatsApp.</p>
          <p><i className="fas fa-phone-volume"></i> +234 9072211222</p>
          <p><i className="fab fa-whatsapp"></i> +234 8167000077</p>
          <p><i className="fas fa-envelope"></i> info@crystalshipment.com</p>
        </div>

        <form action=""  className="inputvalue col-md-6">
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

export default Contact