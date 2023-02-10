import React, { useState } from "react";
import ProductDetails from "./ProductDetails";

export default function Product(props) {
  const [data, setData] = useState(props.data);
  const [val, setVal] = useState("All");
  const [info, setInfo] = useState({});
  const [flag, setFlag] = useState(true);

  const viewMore = (value) => {
    setInfo(value);
    setFlag(false);
  };
  return (
    <div>
      {flag ? (
        <div style={{backgroundColor: "rgba(244, 165, 96, 0.26)"}} className="Product">
        <h2>LATEST FASHION</h2>
        <hr />
          <div className=" flex">
          <div className="filter">
            <ul className="filterbtn">
              <li>
                <button
                  value="All"
                  onClick={(e) => {
                    setVal(e.target.value);
                  }}
                >
                  All
                </button>
              </li>
              <li>
                <button
                  value="men's clothing"
                  onClick={(e) => {
                    setVal(e.target.value);
                  }}
                >
                  Men's clothing
                </button>
              </li>
              <li>
                <button
                  value="jewelery"
                  onClick={(e) => {
                    setVal(e.target.value);
                  }}
                >
                  Jewelery
                </button>
              </li>
              <li>
                <button
                  value="women's clothing"
                  onClick={(e) => {
                    setVal(e.target.value);
                  }}
                >
                  Women's clothing
                </button>
              </li>
              <li>
                <button
                  value="electronics"
                  onClick={(e) => {
                    setVal(e.target.value);
                  }}
                >
                  Electronics
                </button>
              </li>
            </ul>
          </div>
          </div>
          <div className="flex">
            {data
              .filter((value) => {
                if (value.category === val) {
                  return value;
                }
                if (val === "All") {
                  return value;
                }
              })
              .map((value, index) => {
                return (
                  <div className="card" key={index}>
                    <div className="img">
                      <img src={value.image} alt="" />
                    </div>
                    <div className="flexC">
                      <div>
                        <p>{value.title.slice(0, 20)}...</p>
                        <p>Price : ${value.price}</p>
                      </div>
                      <div>
                        <button
                          onClick={() => {
                            viewMore(value);
                          }}
                        >
                          Buy Now
                        </button>
                      </div>
                    </div>
                  </div>
                );
              })}
          </div>
        </div>
      ) : (
        <ProductDetails data={[info, setFlag]} fun={props.cardFun} />
      )}
    </div>
  );
}
