const PromoBanner = () => {
  return (
    <section className="section__container banner__container">
      <div className="banner_card">
        <span>
          <i className="ri-truck-line"></i>
          <h4>Free Delivery</h4>
          <p>
            Offer convenience an the ability to shop from everywhere , anytime .
          </p>
        </span>
      </div>
      <div className="banner_card">
        <span>
          <i className="ri-money-dollar-circle-line"></i>
          <h4>100% Money Back Guaranty</h4>
          <p>
            E-commerce have a review system where customers can share feedback.
          </p>
        </span>
      </div>
      <div className="banner_card">
        <span>
          <i className="ri-user-voice-fill"></i>
          <h4>Strong Support</h4>
          <p>
            Offer customer support services to assist customers with queries and
            issues.
          </p>
        </span>
      </div>
    </section>
  );
};

export default PromoBanner;