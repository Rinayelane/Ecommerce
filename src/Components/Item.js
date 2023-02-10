import React,{useEffect, useState} from 'react';

export default function Item({value,data}) {
    const[count,setCount] = useState(value[0].qty);
    useEffect(()=>{
      value[0].qty = count;
      if(count<=0){
        data[0].splice(value[1],1);
        
      }
      data[1](data[0]);
    })
    
  return (
    <div>
       {
        (count>0)?
        <div className="productDetails">
              <div>
                <img className="img" src={value[0].image} alt="" />
              </div>
              <div className="info">
                <h3>{value[0].title}</h3>
                <p>
                  <b>Catagory: </b>
                  {value[0].category}
                </p>
                <p>{value[0].description}</p>
                <p>
                  <b>Rating: </b>
                  {value[0].rating.rate}
                </p>
                <p>
                  <b>Price:</b> ${value[0].price}
                </p>
                <p>
                {count} * ${value[0].price} = ${count*value[0].price}
                </p>
                <div className="btnG">
                  <button className="btn" onClick={()=>setCount(parseInt(count)+1)}>+</button>
                  <button className="btn" onClick={()=>setCount(parseInt(count)-1)}>-</button>
                </div>
                
              </div>
            </div>:""
       }
    </div>
  )
}
