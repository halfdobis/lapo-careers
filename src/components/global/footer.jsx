import '../../fonts/style.css';
import './footer.css'





function Footer() {
  return (
    <div className="footer" data-aos="fade-up">
      <section role="navigation" aria-label="Related Page Links at Pre-footer" className="pre-footer container-fluid">
        <div className="container-fluid">
          <div className="row row-cols-1 row-cols-sm-2 row-cols-md-5">



            <div className="col">
              <h3 className="footer-text">About LAPO</h3>
              <ul>
                <li><a target="_blank" rel="noreferrer" href="https://www.lapo-nigeria.org/about-us">Our Story</a></li>
                <li><a target="_blank" rel="noreferrer" href="https://www.lapo-nigeria.org/about-us">Security Centre</a></li>
                <li><a target="_blank" rel="noreferrer" href="https://www.lapo-nigeria.org/about-us">About Us</a></li>
                <li><a target="_blank" rel="noreferrer" href="https://www.lapo-nigeria.org/about-us">Find a Branch</a></li>
                <li><a rel="noreferrer" href="/">Careers</a></li>
              </ul>
            </div>


            <div className="col">
              <h3 className="footer-text">Digital Services</h3>
              <ul>
                <li><a target="_blank" rel="noreferrer" href="https://ibank.lapo-nigeria.org/index.html?module=login">Internet Banking</a></li>
                <li><a target="_blank" rel="noreferrer" href="https://play.google.com/store/apps/details?id=com.ofss.lapobank">Mobile Banking</a></li>
                <li><a target="_blank" rel="noreferrer" href="https://sme.lapo-nigeria.org">SME Online</a></li>
                <li><a target="_blank" rel="noreferrer" href="https://ps.lapo-nigeria.org">Public Sector Online</a></li>
                <li><a target="_blank" rel="noreferrer" href="https://play.google.com/store/apps/details?id=com.ofss.pcash">pCash</a></li>
              </ul>
            </div>


            <div className="col">
              <h3 className="footer-text">Products</h3>
              <ul>
                <li><a target="_blank" rel="noreferrer" href="https://www.lapo-nigeria.org/loans/regular" >Regular Loan</a></li>
                <li><a target="_blank" rel="noreferrer" href="https://www.lapo-nigeria.org/loans/sme" >SME Loan</a></li>
                <li><a target="_blank" rel="noreferrer" href="https://www.lapo-nigeria.org/loans/education" >Educational Loan</a></li>
                <li><a target="_blank" rel="noreferrer" href="https://www.lapo-nigeria.org/loans/agric" >Agric Loan</a></li>
                <li><a target="_blank" rel="noreferrer" href="https://www.lapo-nigeria.org/savings/regular" >Regular Savings</a></li>
                <li><a target="_blank" rel="noreferrer" href="https://www.lapo-nigeria.org/savings/my-pikin" >My Pikin Savings</a></li>
              </ul>
            </div>


            <div className="col">
              <h3 className="footer-text">Quick Links</h3>
              <ul>
                <li><a target="_blank" rel="noreferrer" href="https://www.lapo-nigeria.org/customer-services">Customer Service</a></li>
                <li><a target="_blank" rel="noreferrer" href="/#">News</a></li>
                <li><a target="_blank" rel="noreferrer" href="/#">Reports</a></li>
                <li><a target="_blank" rel="noreferrer" href="/#">Gallery</a></li>
                <li><a target="_blank" rel="noreferrer" href="/#">Whistleblower</a></li>
                <li><a target="_blank" rel="noreferrer" href="/#">Privacy Policy</a></li>
              </ul>
            </div>

            <div className="col footer-text">
              <h3>Connect</h3>
              {/* <div className="flex social-btns">
                  <a className="app-btn blu flex vert" target="_blank" href="javascript:void(0);" rel="noopener">
                    <i className="icon-apple"></i>
                    <p>Download on<br> <span className="big-txt">App Store</span></p>
              </a>

                    <a className="app-btn blu flex vert" target="_blank"
                      href="https://play.google.com/store/apps/details?id=com.ofss.lapobank" rel="noopener">
                      <i className="icon-googleplay"></i>
                      <p>Get it on <br> <span className="big-txt">Google Play</span></p>
              </a>
            </div> */}

              <div className="social-media-links">
                <a className="social-media-link social-media-link--facebook" target="_blank" rel="noreferrer"
                  href="https://web.facebook.com/LAPOmicrofinancebanklimited/?_rdc=1&_rdr"> <i
                    className="icon-facebook"></i></a>
                <a className="social-media-link social-media-link--twitter" target="_blank" rel="noreferrer"
                  href="https://twitter.com/lapo_mfb?lang=en"><i className="icon-twitter"></i></a>
                <a className="social-media-link social-media-link--instagram" target="_blank" rel="noreferrer"
                  href="https://www.instagram.com/lapo_mfb/?hl=en"><i className="icon-instagram"></i></a>
                <a className="social-media-link social-media-link--linkedin" target="_blank" rel="noreferrer"
                  href="https://www.linkedin.com/company/lapo-microfinance"><i className="icon-linkedin"></i></a>
                <a className="social-media-link social-media-link--youtube" target="_blank" rel="noreferrer"
                  href="https://www.youtube.com/user/LAPOMicrofinance/videos"><i className="icon-youtube"></i></a>
              </div>
            </div>





          </div>
          <hr />
          <p className="disclosure">© 2021 LAPO Microfinance Bank, Nigeria.</p>
        </div>
      </section>
    </div>
  );
}

export default Footer;