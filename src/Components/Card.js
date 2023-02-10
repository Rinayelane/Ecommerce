import React from "react";
import Item from "./Item";
export default function Card(props) {

  return (
    <div>
      {props.data[0].length>0?
        <div>
          {props.data[0].map((value, index) => {
            return (
              <div key={index}>
                <Item value={[value, index]} data={props.data}/>
              </div>
            );
          })}
        </div>:<h4>No item add in card</h4>
      }
    </div>
  );
}
