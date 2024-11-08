import insImg1 from "../assets/instagram-1.jpg";
import insImg2 from "../assets/instagram-2.jpg";
import insImg3 from "../assets/instagram-3.jpg";
import insImg4 from "../assets/instagram-4.jpg";
import insImg5 from "../assets/instagram-5.jpg";
const Footer = () => {
  return (
    <>
      <footer className="section__container footer__container">
        <div className="footer__col">
          <h4>Contact Info</h4>
          <p>
            <span>
              <i className="ri-map-pin-2-fill"></i>
            </span>
            Do Luong , Nghe An
          </p>
          <p>
            <span>
              <i className="ri-mail-fill"></i>
            </span>
            conglevan21072001@gmail.com
          </p>
          <p>
            <span>
              <i className="ri-phone-fill"></i>
            </span>
            0337782934
          </p>
        </div>
        <div className="footer__col">
          <h4>Company</h4>
          <a href="">Home</a>
          <a href="">About</a>
          <a href="">Work with Us</a>
          <a href="">Ours Blogs</a>
          <a href="">Trems & Condition</a>
        </div>
        <div className="footer__col">
          <h4>Usefullline</h4>
          <a href="">Help</a>
          <a href="">Track</a>
          <a href="">Men</a>
          <a href="">Women</a>
          <a href="">Dress</a>
        </div>
        <div className="footer__col">
          <h4>INSTAGRAM</h4>
          <div className="instagram__grid">
            <img src={insImg1} alt="" />
            <img src={insImg2} alt="" />
            <img src={insImg3} alt="" />
            <img src={insImg4} alt="" />
            <img src={insImg5} alt="" />
          </div>
        </div>
      </footer>
    </>
  );
};

export default Footer;
