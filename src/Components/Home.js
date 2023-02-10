import React from "react";
import Product from "./Product";
import Support from "./Support";

export default function Home(props) {
  return (
    <div>
      <div className="slider">
        <div
          id="carouselExampleAutoplaying"
          className="carousel slide"
          data-bs-ride="carousel"
        >
          <div className="carousel-inner">
            <div className="carousel-item active">
              <div className="slide slide1 flex">
                <h2 className="try">
                  GET START
                  <br />
                  YOUR FAVOURTE SHOPING
                </h2>
              </div>
            </div>
            <div className="carousel-item">
              <div className="slide slide2 flex">
                <h2 className="try">
                  GET START
                  <br />
                  YOUR FAVOURTE SHOPING
                </h2>
              </div>
            </div>
            <div className="carousel-item">
              <div className="slide slide3 flex">
                <h2 className="try">
                  GET START
                  <br />
                  YOUR FAVOURTE SHOPING
                </h2>
              </div>
            </div>
          </div>
          <button
            className="carousel-control-prev"
            type="button"
            data-bs-target="#carouselExampleAutoplaying"
            data-bs-slide="prev"
          >
            <span className="carousel-control-prev-icon" aria-hidden="true" />
            <span className="visually-hidden">Previous</span>
          </button>
          <button
            className="carousel-control-next"
            type="button"
            data-bs-target="#carouselExampleAutoplaying"
            data-bs-slide="next"
          >
            <span className="carousel-control-next-icon" aria-hidden="true" />
            <span className="visually-hidden">Next</span>
          </button>
        </div>
      </div>
      <Product data={props.data} cardFun={props.cardFun}/>
      <Support />
    </div>
  );
}
