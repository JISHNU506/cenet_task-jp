import React, { useEffect, useState } from "react";
import "./Navbar.css";
function Navbar() {
  const [navItem, setnavItem] = useState(false);
  const [sticky, setsticky] = useState(false);





  // *****************************Nav Bar Sticky ****************************
  useEffect(() => {

    window.addEventListener("scroll",()=>{
      if(window.pageYOffset>100){
        setsticky(true)

      }else{
        setsticky(false)
      }
    })
  
  }, [])
  


  
  return (
    <>
      <div className="space"></div>
      <nav className={sticky?"sticky":""}>
        <div className="logo">
          <img src="images/Logo_CENET.png" />
          <div className="logo-content">
            <p>Your guide to a better future</p>
          </div>
        </div>
        <div className="nav-content">
          <div className="nav-hdr">
            <a href="" className="hide-item1">
              Tech
            </a>
            <a href="" className="hide-item1">
              Money
            </a>
            <a href="" className="hide-item1">
              Home
            </a>
            <a href="" className="hide-item1">
              Wellness
            </a>
            <a href="" className="hide-item">
              News & Culture
            </a>
            <a href="" className="hide-item">
              Science
            </a>
            <a href="" className="hide-item">
              Deals & Reviews
            </a>
            <a href="" className="price">
              <p> .New!</p>
              Price Finder
            </a>
            <a href="#">
              {/* *********************dropdown click******************* */}
              <span
                onClick={() => {
                  setnavItem(!navItem);
                }}
              >
                {navItem == false ? (
                  <>
                    More&nbsp;<i class="fa-solid fa-chevron-down"></i>
                  </>
                ) : (
                  <>
                    <span className="close">
                      Close&nbsp;<i class="fa-solid fa-chevron-up"></i>
                    </span>
                  </>
                )}
              </span>
            </a>
          </div>
        </div>
      </nav>
{/* dropdowm items********************* */}
      <div className={navItem === true ? "nav-popup" : "display-none"}>
        <div className="navpop-con">
          <div className="navpop-content" id="navpop-content-one">
            <div className="nav_header">
              <h2>Tech</h2>
              <p>Home Entertainment</p>
              <p>Mobile</p>
              <p>Computing</p>
              <p>Services & Software</p>
              <p>Gaming</p>
            
            </div>
            <div className="nav_header">
              <h2>Money</h2>
              <p>Credit Cards</p>
              <p>Insurance</p>
              <p>Loans</p>
              <p>Banking</p>
          
              <p>nvesting</p>
             
            </div>
            <div className="nav_header">
              <h2>Home</h2>
              <p>Home Internet</p>
              <p>Home Security</p>
              <p>Kitchen & Household</p>
              <p>Smart Home</p>
              <p>Energy & Utilities</p>
              <p>Yard & Outdoors</p>
            </div>
            <div className="nav_header">
              <h2>Wellness</h2>
              <p>Sleep</p>
              <p>Nutrition</p>
              <p>Fitness</p>
              <p>Personal Care</p>
              <p>Parenting</p>
              <p>Medical</p>
            </div>
          </div>
          <div className="navpop-content" id="navpop-content-two">
            <div className="nav_header">
              <h2>News & Culture</h2>
              <p>Politics</p>
              <p>Social Media</p>
              <p>Sports</p>
              <p>Misinformation</p>
              <p>Culture</p>
              <p>Entertainment</p>
            </div>
            <div className="nav_header">
              <h2>Science</h2>
              <p>Climate</p>
              <p>Space</p>
              <p>Biology</p>
             
            </div>
            <div className="nav_header">
              <h2>Deals & Reviews</h2>
              <p>Reviews</p>
              <p>Best Products</p>
              <p>Versus</p>
              <p>Gift Guide</p>
              <p>Shopping Extension</p>
      
            </div>
            <div className="nav_header">
              <h2>Cars</h2>
              <p>Best Cars</p>
              <p>Car Accessories</p>
              <p>Car Reviews</p>
              <p>Car News</p>
              <p>Car Prices</p>
          
            </div>
          </div>
        </div>

        <div className="Coupons">
          <h2>Coupons</h2>

          <div className="coupons-p">

          <span className="coupons-cont">
          <p>Vistaprint Coupons</p>
              <p>StubHub Discount Codes</p>
              <p>H&M Coupons
</p>
              <p>ExpressVPN Coupons</p>
           
            </span>
            
       
         
          <span className="coupons-cont">
          <p>
Home Depot Coupons</p>
              <p>Office Depot Coupons</p>
              <p>Ashley Furniture Coupons</p>
              <p>Samsung Promo Codes</p>
            </span>
          </div>
        </div>
      </div>
    </>
  );
}

export default Navbar;
