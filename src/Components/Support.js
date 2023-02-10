import React from "react";
import img from "./image/support.png";
export default function Support() {
  return (
    <div>
      <div className="about flexColum">
        <div className="flex">
          <div>
            <img src={img} alt="" />
          </div>
          <div className="info">
            <p>
              We provide branded product with reasonable price, quality check and fast delivery.
              Our customer care services is available if you have any issues related to our products, please contact us.
              And please give your feedback which will help us…
            </p>
          </div>
        </div>

        <div className="aboutinfo flex">
          <div>
            <h3>Product</h3>
            <ul>
              <li>Men's cloting</li>
              <li>women's cloting</li>
              <li>Jewelery</li>
              <li>Electronic</li>
            </ul>
          </div>
          <div>
            <h3>Brand</h3>
            <ul>
              <li>PUMA</li>
              <li>LILY</li>
              <li>SONY</li>
              <li>LG</li>
            </ul>
          </div>
          <div>
            <div className="social">
              <h3>Social</h3>
              <ul>
                <li>
                  <a href="#">
                    <i className="fa-brands fa-square-facebook"></i>
                  </a>
                  <span>FaceBook</span>
                </li>
                <li>
                  <a href="#">
                    <i className="fa-brands fa-square-twitter"></i>
                  </a>
                  <span>Twitter</span>
                </li>
                <li>
                  <a href="#">
                    <i className="fa-brands fa-square-instagram"></i>
                  </a>
                  <span>Instargram</span>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
