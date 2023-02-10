import React from 'react'

export default function ProductDetails(props) {

    const add = () =>{
        alert("Added to card");
        addCard(props.data[0]);
    }
    const close=()=>{
        props.data[1](true);
    }
    const addCard=(val)=>{
        if(props.fun[1].indexOf(val)===-1){
            let obj = val;
            obj.qty=1;
            props.fun[0]([...props.fun[1],obj])
        }
    }
  return (
    <div className='productDetails' >
        <div>
            <img className='img' src={props.data[0].image} alt="" />
        </div>
        <div className='info'>
            <h3>{props.data[0].title}</h3>
            <p><b>Catagory: </b>{props.data[0].category}</p>
            <p>{props.data[0].description}</p>
            <p><b>Rating: </b>{props.data[0].rating.rate}</p>
            <p><b>Price:</b> ${props.data[0].price}</p>
            <div className='btnG'>
                <button className='buybtn' onClick={add}>Add Card</button>
                <button className='closebtn' onClick={close}>Close</button>
            </div>
        </div>

    </div>
  )
}
