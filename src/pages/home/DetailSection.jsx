import dealsImg from "../../assets/deals.png";
const DetailSection = () => {
  return (
    <section className="section__container deals__container">
      <div className="deals__image">
        <img src={dealsImg} alt="" />
      </div>
      <div className="deals__content">
        <h5>Get Up to 25% Discount</h5>
        <h4>Deal Of This Month</h4>
        <p>
          Looking for amazing deals on stylish clothing? Clothing discounts are
          a fantastic way to refresh your wardrobe without breaking the bank.
          Many stores offer seasonal sales, holiday discounts, and flash deals,
          allowing you to purchase high-quality clothing at a fraction of the
          original price.
        </p>
        <div className="deals__countdown flex-wrap">
          <div className="deals__countdown__card">
            <h4>14</h4>
            <p>Days</p>
          </div>
          <div className="deals__countdown__card">
            <h4>6</h4>
            <p>Hours</p>
          </div>
          <div className="deals__countdown__card">
            <h4>25</h4>
            <p>Minutes</p>
          </div>
          <div className="deals__countdown__card">
            <h4>17</h4>
            <p>Seconds</p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default DetailSection;
