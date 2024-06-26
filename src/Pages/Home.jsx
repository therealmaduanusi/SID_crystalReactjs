import borderLine from "../assets/images/borderLine.png";
import aboutImg from "../assets/images/about.png";
import Card from "../Components/Card.jsx";
import WhyUs from "../Components/WhyUs.jsx";
function Home() {
  return (
    <>
      <div className="container-fluid home-container text-white text-center">
        <div className="container pt-5 lh-lg" data-aos="fade-up">
          <h1>Easy & Quick Cargo Shipping Services</h1>
          <p>
            Book low cost sea freight shipping services. Get an instant quote.
          </p>
          <button className="btn bg-danger text-white">Track Goods Here</button>
        </div>
      </div>

      <div className="container pt-4">
        <div className="text-center" data-aos="fade-up">
          <h2>Welcome to Crystal Shipment</h2>
          <img src={borderLine} alt="border line" />
          <p>
            Crystal Shipment is more than logistics. We can also optimize your
            packaging,
            <br /> manage your materials sourcing, and so much more.
          </p>
        </div>
        <div className="d-lg-flex p-2 gap-4" data-aos="fade-up">
          <img
            src={aboutImg}
            style={{ width: "100%" }}
            alt="About Image"
            className="rounded"
          />
          <div className="content" style={{ width: "100%" }}>
            <h5 className="text-danger">TRANSPORTATION COMPANY</h5>
            <h2>
              We Provide Full Range <br /> Logistics Solution
            </h2>
            <p>
              We strongly believe that pursuing all of these goals is in our
              interest and in the interest of all of our stakeholders are us
              customers, employees, investors and the planet as a whole. We add
              value to cargo people’s interaction with us, with excellent
              services or products. Engaging our employees and nurture
              investment on the stock holds market we show concern , by engaging
              our employees and nurture investment on the stock holds market we
              show concern.
            </p>
            <button className="btn bg-danger text-white">Learn More</button>
          </div>
        </div>
      </div>

      <div className="container" data-aos="fade-up">
        <div className="content text-center pt-4">
          <h4 className="text-danger">TYPES OF LOGISTICS</h4>
          <h3>Covering All Logistics Fields</h3>
        </div>
      </div>
      <div className="container" data-aos="fade-up">
        <Card />
      </div>
      <div className="container-fluid bg-warning p-5" data-aos="zoom-in">
        <div className="container d-md-flex justify-content-between">
          <div className="wrapper">
            <h2>Delivering your world one package at a time</h2>
            <p>Crystal Shipment is more than logistics.</p>
          </div>
          <div className="wrapper">
            <button className="btn btn-danger">Request Quote</button>
          </div>
        </div>
      </div>
      <div className="container">
        <WhyUs />
      </div>
    </>
  );
}

export default Home;
