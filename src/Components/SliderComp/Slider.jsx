import React from "react";
import "./Slider.css";

import { Sliders } from "../data";

export default function Slider() {
  return (
    <div>
      <div className="CardContainer">
        <div className="CardContainerHead">
          <p className="cont" >Our Favourite Pics  <span>All best</span></p>
        </div>
        <div className="cards">
          {Sliders &&
            Sliders.map((item) => (
              <>
                <div className="cardStyle">
                  <img src={item?.image} id="imageM2" />
                  <div className="CardText">
                    <p className="cont">{item?.content}</p>
                    <p className="CardText2">{item?.maker}</p>
                  </div>
                </div>
              </>
            ))}
        </div>
      </div>
    </div>
  );
}
