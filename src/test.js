import React from 'react';

export default function Test({ title,name,id,description,incpara,decpara,price,pricecallback,tool}) {
  return (
     <div className='card '>
          <div className='cardtitle'><h2>{title}</h2></div>
          <div >{name}</div>
          <div>id:{id}</div> 
          <input type="Pricedisplay" id={id} class="Pricedisplay" value="0"></input>
           <button  id="Price" className="Price " onClick={()=>pricecallback(price,id)}>Check Offer Price</button>
           <div>{description}</div>
           <button className={tool===true?'Addcard':'Removecard'} onClick={tool===true?()=>incpara(price,id):()=>decpara(price,id)}>{
            tool===true?"Add to card":"Remove from card"}</button>
            {/* <button className='Removecard'onClick={decpara}>Remove from card</button> */}
      </div>
  );
}

