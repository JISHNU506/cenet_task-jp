import React from 'react'
import "./Adds.css";
import { Add } from '../data';
export default function Adds() {
  return (
    <div>
        <div className="addwrapper">
            <h2>Latest</h2>

{Add && Add?.map((itm)=>(
    <>
    <div className="carditem">
                <div className="txt-area">
                   <h2>
                    {itm?.hdr}
                   </h2>
                   <h5>{itm?.cnt}</h5>
                   <p>{itm?.maker}</p>
                </div>
                <div className="img-area">
                   <img src={itm?.img}className='add-img' />
                </div>
            </div>


    </>
))}
            

        </div>
      
    </div>
  )
}
