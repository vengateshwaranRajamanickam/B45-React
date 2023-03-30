import React from 'react';

export default function Test({ title,name,id,description,incpara,decpara,price,pricecallback}) {
  return (
     <div className='card '>
          <div className='cardtitle'><h2>{title}</h2></div>
          <div >{name}</div>
          <div>id:{id}</div> 
          <input type="text" id={id} class="text" value="0"></input>
           <button  id="Price" className="Price" onClick={()=>pricecallback(price,id)}>Check Offer Price</button>
           <div>{description}</div>
          <button className='Addcard' onClick={()=>incpara(price)} >Add to card</button>
          <button className='Removecard'onClick={decpara}>Remove from card</button>
          {/* <button>Add to card</button> */}
      </div>
  );
}

