import React from "react";
import img from "./image/feedbackbc.png";

export default function Feedback() {
  return (
    // <div className="feedback flex">

    //  </div>
    <div className="flex feedback">
      <div>
        <img src={img} alt="" />
      </div>
      <div>
        <div className="form">
          <h1>
            <i>
              <u>Feedback Form</u>
            </i>
          </h1>
          <div className="flexCol">
            <label htmlFor="">Name *</label>
            <input type="text" placeholder="name" required />
          </div>
          <br />
          <div className="flexCol">
            <label htmlFor="">Email *</label>
            <input type="email" placeholder="email" required />
          </div>
          <br />
          <div className="flexCol">
            <label htmlFor="">Feedback *</label>
            <textarea
              name=""
              id=""
              cols="52"
              rows="5"
              placeholder="write here feedback..."
            ></textarea>
          </div>
          <br />
          <button className="btn">Submit</button>
        </div>
      </div>
    </div>
  );
}
