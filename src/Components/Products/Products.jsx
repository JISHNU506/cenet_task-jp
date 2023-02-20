import React from 'react'
import "./Product.css";
import { Product } from '../data';

export default function Products() {
  return (
    <div>
{Product && Product?.map((itm)=>(
    <>
    <div className="HeadContent">{itm?.header}<span>See All</span></div>
            <div className="TechContainer">
                <div className="TechContainer-left">
                    <div className="cardStyle1">
                        <img src={itm?.image1} id='prodt-img' />
                        <div className='CardTextcon'>
                        <h2 className='card-hed'>{itm?.img1hdr}</h2>
                        <h5>{itm?.img1cont} </h5>
                        <p  className='CardText-itm'>{itm?.img1maker}</p>
                    </div>
                    </div>
                    <div className="cardStyle1">
                        <img src={itm?.image2} id='prodt-img' />
                        <div className='CardTextcon'>
                        <h2 className='card-hed'>{itm?.img2hdr}</h2>
                        <h5>{itm?.img2cont} </h5>
                        <p  className='CardText-itm'>{itm?.img2maker}</p>
                    </div>
                    </div>

                </div>
                <div className="TechContainer-right">
                    <h2  className='card-hed' >
                      {itm?.cont1hdr}</h2>
                       <h5>{itm?.cont1exp}</h5> 
                    
                    <hr />
                    <h2  className='card-hed' >{itm?.cont2hdr}
                    </h2>
                    <h5>{itm?.cont2exp}</h5>
                        
                   
                    <hr />
                    <h2  className='card-hed' >{itm?.cont3hdr}   </h2>
                   <h5>{itm?.cont3exp}</h5>
                        
                 
                </div>
                
            </div>
    </>
))}

      
    </div>
  )
}
