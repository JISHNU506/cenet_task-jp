import React from "react";
import "./Wel_top.css";

export default function Wel_Top() {
  return (
    <div>
      <div className="Wel-header_Wrapper">
        <div className="header_main">
          <p>Get the tech that takes you places</p>
        </div>
        <p className="header_sub">
          Our experts share the newest products and technologies that get you
          the most out of your world.
        </p>

        <div className="Tech-opt">
          <a>Tech</a>
          <a>Home</a>
          <a>Mobile</a>
          <a>Computing</a>
          <a>Services&Software</a>
          <a>Gaming</a>
        </div>
      </div>

      <div className="NewsOneContainer">
        <div className="NewsOneLeft">
            
          <img id="ImgMain" src="images/mobile.png"></img>
          <div className="LetfTextContainer">
          <h1 className="news_header1">
              <strong>
              Epic Galaxy S23 Deal at Samsung Makes the New Phones Free for a Limited Time

              </strong>
    </h1>
    <h3 className="news_hdr">
    To take full advantage of this offer, you'll need a recent model phone to trade in.
 
    </h3>

            <p className="maker">
            BY <span>JARED DIPANE</span>

            </p>
          </div>
        </div>
        <div className="NewsContent">
          <div className="RightAlign">
            <div className="oneright-left">
            <h3 className="news_header">
                {" "}
            
                  Looking for Great Deals? Use CNET Shopping to Save Time and
                Money
              
            </h3>

              <p>
              Here's how to use our browser extension to get the best deals (and some bonus resources, too) when shopping on many of the web's most popular retailer sites.

              </p>
              <p className="maker">
       BY <span>JHON FALCONE</span>

            </p>
            </div>
            <div className="oneright-right">
              <img id="ImgMain2" src="images/shoping.png"></img>
            </div>
          </div>
          <hr />
          <div className="RightAlign">
            <div className="oneright-left">
            <h3 className="news_header">
               
            Why We're All Obsessed With the Mind-Blowing ChatGPT AI Chatbot

            
             </h3>
              <p>
              This artificial intelligence bot can answer questions, write essays, summarize documents and program computers. But deep down, it doesn't know what's true.

              </p>
              <p className="maker">
              BY <span>STEPHEN SHANKLAND</span> 

            </p>
            </div>
            <div className="oneright-right">
              <img
                id="ImgMain3"
                src="images/bot.png"
              ></img>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
